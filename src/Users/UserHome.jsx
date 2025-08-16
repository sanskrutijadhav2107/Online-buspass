
// // export default HomePage;
// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { collection, query, where, getDocs } from "firebase/firestore";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [studentId, setStudentId] = useState("");
//   const [passInfo, setPassInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("studentData"));
//     if (storedData && storedData.id) {
//       setStudentId(storedData.id);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchPass = async () => {
//       if (!studentId) return;

//       try {
//         const passesRef = collection(db, "passes");
//         const q = query(passesRef, where("studentId", "==", studentId));
//         const snapshot = await getDocs(q);

//         if (!snapshot.empty) {
//           const passData = snapshot.docs[0].data();
//           const today = new Date();

//           let endDate = null;
//           if (typeof passData.passEndDate === "string") {
//             endDate = new Date(passData.passEndDate);
//           } else if (passData.passEndDate?.toDate) {
//             endDate = passData.passEndDate.toDate();
//           }

//           if (endDate) {
//             const isExpired = today > endDate;
//             setPassInfo({
//               status: isExpired ? "expired" : "active",
//               passEndDate: endDate.toISOString().split("T")[0],
//             });
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching pass:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPass();
//   }, [studentId]);

//   const handleApplyClick = () => {
//     navigate("/renewal");
//   };

//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "150px" }}>
//         <h3>Loading...</h3>
//       </div>
//     );
//   }

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <Sidebar />
//       <div style={{ marginTop: "150px", padding: "30px", width: "100%" }}>
//         <h2 style={{ color: "#f26725", textAlign: "center" }}>
//           Online Bus Pass
//         </h2>

//         <div
//           style={{
//             marginTop: "40px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           {/* ✅ If pass exists */}
//           {passInfo ? (
//             passInfo.status === "active" ? (
//               <div style={activeCardStyle}>
//                 <h3 style={{ color: "green" }}>✅ Pass Already Generated</h3>
//                 <p style={{ fontSize: "18px", marginTop: "10px" }}>
//                   Your bus pass is currently <b>{passInfo.status}</b>.
//                 </p>
//                 <p style={{ fontSize: "18px", marginTop: "10px" }}>
//                   Expiry Date: <b>{passInfo.passEndDate}</b>
//                 </p>
//               </div>
//             ) : (
//               <div style={expiredCardStyle}>
//                 <h3 style={{ color: "red" }}>❌ Pass Expired</h3>
//                 <p style={{ fontSize: "18px", marginTop: "10px" }}>
//                   Your bus pass expired on <b>{passInfo.passEndDate}</b>.
//                 </p>
//                 <button style={renewButton} onClick={handleApplyClick}>
//                   Renew Pass
//                 </button>
//               </div>
//             )
//           ) : (
//             // ❌ If no pass at all
//             <div>
//               <button style={buttonHeader}>Pass Type</button>
//               {["Student", "Employee"].map((type, index) => (
//                 <div style={rowStyle} key={index}>
//                   <div style={boxStyle}>{type}</div>
//                   <button style={applyButton} onClick={handleApplyClick}>
//                     Apply
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🔹 Styles
// const buttonHeader = {
//   backgroundColor: "#f26725",
//   color: "white",
//   padding: "15px 30px",
//   border: "none",
//   marginBottom: "20px",
//   fontWeight: "bold",
//   fontSize: "18px",
//   width: "100%",
// };

// const rowStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   marginBottom: "25px",
//   backgroundColor: "#f2f2f2",
//   padding: "15px 25px",
//   borderRadius: "8px",
//   width: "400px",
//   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
// };

// const boxStyle = {
//   fontWeight: "600",
//   fontSize: "18px",
// };

// const applyButton = {
//   backgroundColor: "#f26725",
//   color: "white",
//   border: "none",
//   padding: "12px 24px",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontSize: "16px",
//   fontWeight: "bold",
// };

// const activeCardStyle = {
//   backgroundColor: "#f6fff6",
//   border: "2px solid green",
//   borderRadius: "12px",
//   padding: "30px 50px",
//   textAlign: "center",
//   boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//   width: "450px",
// };

// const expiredCardStyle = {
//   backgroundColor: "#fff6f6",
//   border: "2px solid red",
//   borderRadius: "12px",
//   padding: "30px 50px",
//   textAlign: "center",
//   boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//   width: "450px",
// };

// const renewButton = {
//   marginTop: "15px",
//   backgroundColor: "red",
//   color: "white",
//   border: "none",
//   padding: "12px 24px",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontSize: "16px",
//   fontWeight: "bold",
// };

// export default HomePage;














import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaBus, FaCalendarAlt, FaClock } from "react-icons/fa";

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
              passStartDate: passData.passStartDate || today.toISOString().split("T")[0],
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

  const greetingMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(180deg, #fff8f0, #ffffff)" }}>
      <Sidebar />
      <div style={{ marginTop: "100px", padding: "30px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Greeting */}
        <h2 style={{ color: "#f26725", marginBottom: "30px" }}>
          {greetingMessage()}, Welcome to Online Bus Pass
        </h2>

        {/* Dashboard Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px", flexWrap: "wrap" }}>
          <div style={dashboardCard}>
            <FaBus size={30} color="#f26725" />
            <h4>Active Pass</h4>
            <p>{passInfo?.status === "active" ? "Yes ✅" : "No ❌"}</p>
          </div>
          <div style={dashboardCard}>
            <FaCalendarAlt size={30} color="#f26725" />
            <h4>Expiry Date</h4>
            <p>{passInfo?.passEndDate || "-"}</p>
          </div>
          <div style={dashboardCard}>
            <FaClock size={30} color="#f26725" />
            <h4>Days Left</h4>
            <p>
              {passInfo?.passEndDate
                ? Math.max(
                    0,
                    Math.floor((new Date(passInfo.passEndDate) - new Date()) / (1000 * 60 * 60 * 24))
                  )
                : "-"}
            </p>
          </div>
        </div>

        {/* Pass Section */}
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
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

                {/* Progress Bar */}
                <div style={{ marginTop: "20px", width: "100%" }}>
                  <h4>Pass Validity</h4>
                  <div style={{ background: "#f2f2f2", borderRadius: "10px", overflow: "hidden", height: "15px" }}>
                    <div
                      style={{
                        width: `${Math.max(
                          0,
                          ((new Date(passInfo.passEndDate) - new Date()) /
                            (new Date(passInfo.passEndDate) - new Date(passInfo.passStartDate))
                          ) * 100
                        )}%`,
                        background: "green",
                        height: "100%",
                        transition: "width 0.5s",
                      }}
                    ></div>
                  </div>
                </div>
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

          {/* Tips / Notifications */}
          <div style={{
            marginTop: "30px",
            background: "#fff9f0",
            padding: "15px 25px",
            borderRadius: "10px",
            width: "450px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.05)"
          }}>
            <h4 style={{ color: "#f26725" }}>Tips & Notifications</h4>
            <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
              <li>Carry your pass every day to avoid fines.</li>
              <li>Renew your pass at least 1 day before expiry.</li>
              <li>Check bus timings regularly for updates.</li>
            </ul>
          </div>
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
  transition: "0.3s",
};
applyButton[":hover"] = {
  transform: "scale(1.05)",
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

const dashboardCard = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  width: "150px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
  cursor: "pointer",
};

export default HomePage;
