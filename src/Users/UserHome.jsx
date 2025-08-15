
import React, { useState, useEffect } from "react";
import IDCard from "../components/IDCard";
import Sidebar from "../components/Sidebar";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [pressedButton, setPressedButton] = useState(null);
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studentData"));
    if (storedData && storedData.id) {
      setStudentId(storedData.id);
    }
  }, []);

  const handleApplyClick = () => {
    navigate('/ApplicationForm');
  };

  // ... rest of your existing layout code

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ marginTop:"150px", padding: "30px", width: "100%" }}>
        <h2 style={{ color: "#f26725", textAlign: "center" }}>Online Bus Pass</h2>

        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <div>
            <button style={buttonHeader}>Pass Type</button>
            {["Student", "Employee"].map((type, index) => (
              <div style={rowStyle} key={index}>
                <div style={boxStyle}>{type}</div>
                <button
                  style={{
                    ...applyButton,
                    transform: pressedButton === index ? "scale(0.95)" : "scale(1)",
                    transition: "transform 0.1s ease-in-out",
                  }}
                  onMouseDown={() => setPressedButton(index)}
                  onMouseUp={() => setPressedButton(null)}
                  onClick={handleApplyClick}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

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

export default HomePage;


