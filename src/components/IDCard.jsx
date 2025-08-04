import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const IDCard = ({ idData }) => {
  const cardRef = useRef();

  const handleDownload = () => {
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.style.display = 'none';

    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${idData.name}_PassID.pdf`);
      downloadBtn.style.display = 'block';
    });
  };

  return (
    <>
      <div ref={cardRef} style={{
        width: "400px",
        background: "#a5eee2",
        padding: "18px 16px",
        borderRadius: "8px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        boxShadow: "0 2px 10px #0002",
        margin: "0 auto"
      }}>
        <div style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2224",
          marginBottom: "8px",
          fontSize: "1.05rem"
        }}>
          <span>Maharashtra State Road</span>
          <span>Transport Corporation</span>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div style={{
            width: "92px",
            height: "110px",
            background: "#fff",
            border: "1px solid #888",
            marginRight: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#888"
          }}>
            Photo
          </div>
          <div>
            <div>ID No.: {idData.idNo}</div>
            <div>Student Name: {idData.name}</div>
            <div>Address: {idData.address}</div>
            <div>Birthdate: {idData.birthdate}</div>
            <div>College Name: {idData.college}</div>
            <div>Distance: {idData.distance}</div>
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.98rem"
        }}>
          <span>Administrator</span>
          <span>Student Sign</span>
        </div>
      </div>

      <button id="download-btn" style={{
        marginTop: "20px",
        padding: "10px 25px",
        backgroundColor: "#f26725",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }} onClick={handleDownload}>
        Download Pass ID
      </button>
    </>
  );
};

export default IDCard;
