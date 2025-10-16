
import React from "react";

const IDCard = ({ idData }) => {
  const { idNo, name, address, birthdate, college, distance, photoUrl } = idData || {};

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        background: "#a5eee2",
        border: "1px solid #0003",
        borderRadius: 8,
        padding: 16,
        fontFamily: "'Segoe UI', Arial, sans-serif",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2224",
          marginBottom: 10,
          fontSize: "1.05rem",
        }}
      >
        <span>Maharashtra State Road</span>
        <span>Transport Corporation</span>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {/* Photo box */}
        <div
          style={{
            width: 170,
            height: 150,
            background: "#fff",
            border: "1px solid #888",
            borderRadius: 6,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Student"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const p = e.currentTarget.parentElement;
                if (p) p.innerHTML = '<div style="color:#888;font-weight:700;">Photo</div>';
              }}
            />
          ) : (
            <div style={{ color: "#888", fontWeight: 700 }}>Photo</div>
          )}
        </div>

        {/* Fields */}
        <div style={{ lineHeight: 1.6 }}>
          <div><strong>ID No.:</strong> {idNo || "—"}</div>
          <div><strong>Student Name:</strong> {name || "—"}</div>
          <div><strong>Address:</strong> {address || "—"}</div>
          <div><strong>Birthdate:</strong> {birthdate || "—"}</div>
          <div><strong>College Name:</strong> {college || "—"}</div>
          <div><strong>Distance:</strong> {distance || "—"}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          marginTop: 14,
        }}
      >
        <span>Administrator</span>
        <span>Student Sign</span>
      </div>
    </div>
  );
};

export default IDCard;
