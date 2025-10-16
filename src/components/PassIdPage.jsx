

// import React, { useState, useEffect } from "react";
// import IDCard from "./IDCard";            // Reusing your IDCard component
// import Sidebar from "./Sidebar";          // Sidebar component
// import { collection, query, where, onSnapshot, limit } from "firebase/firestore";
// import { db } from "../firebase";         // make sure this is your Firebase config

// const PassIDPage = () => {
//   const [studentId, setStudentId] = useState("");
//   const [idData, setIdData] = useState(null);

//   useEffect(() => {
//     // Get student ID from local storage (safe parse)
//     try {
//       const storedData = localStorage.getItem("studentData");
//       const parsed = storedData ? JSON.parse(storedData) : null;
//       if (parsed?.id) setStudentId(String(parsed.id));
//     } catch (e) {
//       console.error("localStorage parse error:", e);
//     }
//   }, []);

//   useEffect(() => {
//     if (!studentId) return;

//     const q = query(
//       collection(db, "passes"),
//       where("studentId", "==", studentId),
//       limit(1)
//     );

//     const unsub = onSnapshot(q, (snapshot) => {
//       if (!snapshot.empty) {
//         const docData = snapshot.docs[0].data();
//         setIdData({
//           idNo: docData.passId || studentId,
//           name: docData.name || "",
//           address: docData.address || "",
//           birthdate: docData.birthdate || "",
//           college: docData.college || "",
//           distance: [docData.from, docData.to].filter(Boolean).join(" to "),
//           photoUrl: docData.photoUrl || null,   // ← ★ add photo to props
//         });
//       } else {
//         console.log("No pass found for studentId:", studentId);
//         setIdData(null);
//       }
//     });

//     return () => unsub();
//   }, [studentId]);

//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="main-content">
//         <h2 className="title">Pass ID Card</h2>
//         {idData ? (
//           <IDCard idData={idData} />
//         ) : (
//           <p style={{ textAlign: "center" }}>Loading Pass ID...</p>
//         )}
//       </div>
//       <style>{`
//         .layout { display: flex; }
//         .main-content { flex: 1; padding: 40px; }
//         .title { text-align: center; margin-bottom: 30px; font-size: 24px; }
//       `}</style>
//     </div>
//   );
// };

// export default PassIDPage;



import React, { useState, useEffect, useRef } from "react";
import IDCard from "./IDCard";            // Reusing your IDCard component
import Sidebar from "./Sidebar";          // Sidebar component
import { collection, query, where, onSnapshot, limit } from "firebase/firestore";
import { db } from "../firebase";         // make sure this is your Firebase config
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PassIDPage = () => {
  const [studentId, setStudentId] = useState("");
  const [idData, setIdData] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Get student ID from local storage (safe parse)
    try {
      const storedData = localStorage.getItem("studentData");
      const parsed = storedData ? JSON.parse(storedData) : null;
      if (parsed?.id) setStudentId(String(parsed.id));
    } catch (e) {
      console.error("localStorage parse error:", e);
    }
  }, []);

  useEffect(() => {
    if (!studentId) return;

    const q = query(
      collection(db, "passes"),
      where("studentId", "==", studentId),
      limit(1)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        setIdData({
          idNo: docData.passId || studentId,
          name: docData.name || "",
          address: docData.address || "",
          birthdate: docData.birthdate || "",
          college: docData.college || "",
          distance: [docData.from, docData.to].filter(Boolean).join(" to "),
          photoUrl: docData.photoUrl || null,   // photo passed through
        });
      } else {
        console.log("No pass found for studentId:", studentId);
        setIdData(null);
      }
    });

    return () => unsub();
  }, [studentId]);

  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;

    const btn = document.getElementById("download-id-btn");
    if (btn) btn.style.visibility = "hidden";

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        windowWidth: cardRef.current.scrollWidth,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height], // 1:1 with what you see
        compress: true,
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height, undefined, "FAST");
      pdf.save(`${(idData?.name || "PassID").replace(/\s+/g, "_")}.pdf`);
    } finally {
      if (btn) btn.style.visibility = "visible";
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <h2 className="title">Pass ID Card</h2>

        {idData ? (
          <>
            {/* Wrap IDCard so we can export exactly what you see, without touching its styles */}
            <div ref={cardRef}>
              <IDCard idData={idData} />
            </div>

            <button
              id="download-id-btn"
              onClick={handleDownloadPDF}
              style={{
                marginTop: 16,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                background: "#0d9488",
                color: "#fff",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Download ID as PDF
            </button>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>Loading Pass ID...</p>
        )}
      </div>

      <style>{`
        .layout { display: flex; }
        .main-content { flex: 1; padding: 40px; }
        .title { text-align: center; margin-bottom: 30px; font-size: 24px; }
      `}</style>
    </div>
  );
};

export default PassIDPage;
