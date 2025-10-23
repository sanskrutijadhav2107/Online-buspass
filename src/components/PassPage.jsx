
// import React, { useEffect, useState, useRef } from "react";
// import PassCard from "./PassCard";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import Sidebar from "./Sidebar";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";

// const PassPage = () => {
//   const [passData, setPassData] = useState(null);
//   const passRef = useRef();

//   useEffect(() => {
//     const studentData = JSON.parse(localStorage.getItem("studentData"));
//     if (!studentData?.id) {
//       alert("No student logged in");
//       return;
//     }

//     const fetchPass = async () => {
//       try {
//         const passRef = doc(db, "passes", studentData.id);
//         const passSnap = await getDoc(passRef);
//         if (passSnap.exists()) {
//           setPassData(passSnap.data());
//         } else {
//           console.error("Pass not found!");
//         }
//       } catch (err) {
//         console.error("Error fetching pass:", err);
//       }
//     };

//     fetchPass();
//   }, []);

//   const handleDownload = () => {
//     html2canvas(passRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight);
//       pdf.save("BusPass.pdf");
//     });
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar />
//       <div className="page-container">
//         <h2 className="heading">Monthly Bus Pass (31 Days)</h2>
//         <div className="card-container" ref={passRef}>
//           {passData ? <PassCard {...passData} /> : <p>Loading pass...</p>}
//         </div>
//         {passData && (
//           <button className="download-btn" onClick={handleDownload}>
//             Download Pass
//           </button>
//         )}
//       </div>

//       <style>{`
//         .main-layout {
//           display: flex;
//         }
//         .page-container {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 40px 20px;
//           font-family: Arial, sans-serif;
//         }
//         .heading {
//           margin-bottom: 20px;
//           font-size: 22px;
//         }
//         .card-container {
//           margin-bottom: 25px;
//         }
//         .download-btn {
//           padding: 12px 25px;
//           background-color: #f26725;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           font-size: 16px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .download-btn:hover {
//           background-color: #d3541a;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PassPage;




import React, { useEffect, useState, useRef } from "react";
import PassCard from "./PassCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Sidebar from "./Sidebar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

// Helper: fetch remote image as data URL (solves CORS in exports)
async function toDataURL(src) {
  if (!src) return null;
  try {
    const res = await fetch(src, { mode: "cors", credentials: "omit" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn("Photo preload failed:", e);
    return null; // we'll fall back to original URL if needed
  }
}

const PassPage = () => {
  const [passData, setPassData] = useState(null);
  const [photoSrc, setPhotoSrc] = useState(null); // data URL for PDF safety
  const passRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("studentData");
    const studentData = stored ? JSON.parse(stored) : null;
    if (!studentData?.id) {
      alert("No student logged in");
      return;
    }

    (async () => {
      try {
        const ref = doc(db, "passes", String(studentData.id));
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          console.error("Pass not found!");
          return;
        }
        const data = snap.data();
        setPassData(data);

        // Preload photo as data URL for export
        if (data.photoUrl) {
          const dataUrl = await toDataURL(data.photoUrl);
          setPhotoSrc(dataUrl || data.photoUrl); // fallback to raw URL if preload fails
        } else {
          setPhotoSrc(null);
        }
      } catch (err) {
        console.error("Error fetching pass:", err);
      }
    })();
  }, []);

  const handleDownload = async () => {
    if (!passRef.current) return;

    const btn = document.getElementById("download-pass-btn");
    if (btn) btn.style.visibility = "hidden";

    try {
      const canvas = await html2canvas(passRef.current, {
        scale: 3,               // crisp PDF
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        windowWidth: passRef.current.scrollWidth,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height], // export exactly what you see
        compress: true,
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height, undefined, "FAST");
      pdf.save(`${(passData?.name || "BusPass").replace(/\s+/g, "_")}.pdf`);
    } finally {
      if (btn) btn.style.visibility = "visible";
    }
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="page-container">
        <h2 className="heading">Monthly Bus Pass (31 Days)</h2>

        <div className="card-container" ref={passRef}>
          {passData ? (
            // 🔽 Pass your existing passData PLUS photoSrc to PassCard
            <PassCard {...passData} photoSrc={photoSrc} />
          ) : (
            <p>Loading pass...</p>
          )}
        </div>

        {passData && (
          <button id="download-pass-btn" className="download-btn" onClick={handleDownload}>
            Download Pass
          </button>
        )}
      </div>

      <style>{`
        .main-layout { display: flex; }
        .page-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }
        .heading { margin-bottom: 20px; font-size: 22px; }
        .card-container { margin-bottom: 25px; }
        .download-btn {
          padding: 12px 25px;
          background-color: #f26725;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .download-btn:hover { background-color: #d3541a; }
      `}</style>
    </div>
  );
};

export default PassPage;

