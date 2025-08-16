
// export default HomePage;
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const HomePage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [passInfo, setPassInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studentData"));
    if (storedData && storedData.id) {
      setStudentId(storedData.id);
    }
  }, []);

  useEffect(() => {
    const fetchPass = async () => {
      if (!studentId) return;

      try {
        const passesRef = collection(db, "passes");
        const q = query(passesRef, where("studentId", "==", studentId));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const passData = snapshot.docs[0].data();
          const today = new Date();

          let endDate = null;
          if (typeof passData.passEndDate === "string") {
            endDate = new Date(passData.passEndDate);
          } else if (passData.passEndDate?.toDate) {
            endDate = passData.passEndDate.toDate();
          }

          if (endDate) {
            const isExpired = today > endDate;
            setPassInfo({
              status: isExpired ? "expired" : "active",
              passEndDate: endDate.toISOString().split("T")[0],
            });
          }
        }
      } catch (err) {
        console.error("Error fetching pass:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPass();
  }, [studentId]);

  const handleApplyClick = () => {
    navigate("/renewal");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ marginTop: "150px", padding: "30px", width: "100%" }}>
        <h2 style={{ color: "#f26725", textAlign: "center" }}>
          Online Bus Pass
        </h2>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* ✅ If pass exists */}
          {passInfo ? (
            passInfo.status === "active" ? (
              <div style={activeCardStyle}>
                <h3 style={{ color: "green" }}>✅ Pass Already Generated</h3>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                  Your bus pass is currently <b>{passInfo.status}</b>.
                </p>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                  Expiry Date: <b>{passInfo.passEndDate}</b>
                </p>
              </div>
            ) : (
              <div style={expiredCardStyle}>
                <h3 style={{ color: "red" }}>❌ Pass Expired</h3>
                <p style={{ fontSize: "18px", marginTop: "10px" }}>
                  Your bus pass expired on <b>{passInfo.passEndDate}</b>.
                </p>
                <button style={renewButton} onClick={handleApplyClick}>
                  Renew Pass
                </button>
              </div>
            )
          ) : (
            // ❌ If no pass at all
            <div>
              <button style={buttonHeader}>Pass Type</button>
              {["Student", "Employee"].map((type, index) => (
                <div style={rowStyle} key={index}>
                  <div style={boxStyle}>{type}</div>
                  <button style={applyButton} onClick={handleApplyClick}>
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔹 Styles
const buttonHeader = {
  backgroundColor: "#f26725",
  color: "white",
  padding: "15px 30px",
  border: "none",
  marginBottom: "20px",
  fontWeight: "bold",
  fontSize: "18px",
  width: "100%",
};

const rowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "25px",
  backgroundColor: "#f2f2f2",
  padding: "15px 25px",
  borderRadius: "8px",
  width: "400px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const boxStyle = {
  fontWeight: "600",
  fontSize: "18px",
};

const applyButton = {
  backgroundColor: "#f26725",
  color: "white",
  border: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const activeCardStyle = {
  backgroundColor: "#f6fff6",
  border: "2px solid green",
  borderRadius: "12px",
  padding: "30px 50px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  width: "450px",
};

const expiredCardStyle = {
  backgroundColor: "#fff6f6",
  border: "2px solid red",
  borderRadius: "12px",
  padding: "30px 50px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  width: "450px",
};

const renewButton = {
  marginTop: "15px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default HomePage;
