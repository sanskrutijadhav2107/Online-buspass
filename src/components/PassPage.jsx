
import React, { useEffect, useState, useRef } from "react";
import PassCard from "./PassCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Sidebar from "./Sidebar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const PassPage = () => {
  const [passData, setPassData] = useState(null);
  const passRef = useRef();

  useEffect(() => {
    const studentData = JSON.parse(localStorage.getItem("studentData"));
    if (!studentData?.id) {
      alert("No student logged in");
      return;
    }

    const fetchPass = async () => {
      try {
        const passRef = doc(db, "passes", studentData.id);
        const passSnap = await getDoc(passRef);
        if (passSnap.exists()) {
          setPassData(passSnap.data());
        } else {
          console.error("Pass not found!");
        }
      } catch (err) {
        console.error("Error fetching pass:", err);
      }
    };

    fetchPass();
  }, []);

  const handleDownload = () => {
    html2canvas(passRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight);
      pdf.save("BusPass.pdf");
    });
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="page-container">
        <h2 className="heading">Monthly Bus Pass (31 Days)</h2>
        <div className="card-container" ref={passRef}>
          {passData ? <PassCard {...passData} /> : <p>Loading pass...</p>}
        </div>
        {passData && (
          <button className="download-btn" onClick={handleDownload}>
            Download Pass
          </button>
        )}
      </div>

      <style>{`
        .main-layout {
          display: flex;
        }
        .page-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }
        .heading {
          margin-bottom: 20px;
          font-size: 22px;
        }
        .card-container {
          margin-bottom: 25px;
        }
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
        .download-btn:hover {
          background-color: #d3541a;
        }
      `}</style>
    </div>
  );
};

export default PassPage;
