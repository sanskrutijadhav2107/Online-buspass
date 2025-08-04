

// import React, { useState } from "react";
// import Sidebar from "../components/VerifierSidebar";
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [pressedButton, setPressedButton] = useState(null);

//     const handleApplyClick = () => {
//     navigate('/ApplicationForm'); // ✅ Navigate to Application Form page
//   };


//   const handleMouseDown = (index) => {
//     setPressedButton(index);
//   };

//   const handleMouseUp = () => {
//     setPressedButton(null);
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <Sidebar />
      
//       <div style={{ marginTop:"150px",marginLeft: "", padding: "30px", width: "100%" }}>
//         <h2 style={{ color: "#f26725", textAlign: "center" }}>Online Bus Pass</h2>

//         <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
//           <div>
      

//             {["Pending", "Verified" ,"Rejected"].map((type, index) => (
//               <div style={rowStyle} key={index}>
//                 <div style={boxStyle}>{type}</div>
//                 <button
//                   style={{
//                     ...applyButton,
//                     transform: pressedButton === index ? "scale(0.95)" : "scale(1)",
//                     transition: "transform 0.1s ease-in-out",
//                   }}
//                   onMouseDown={() => handleMouseDown(index)}
//                   onMouseUp={handleMouseUp}
//                   onClick={handleApplyClick}
//                 >
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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

// export default HomePage;


import React, { useState } from "react";
import Sidebar from "../components/VerifierSidebar";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [pressedButton, setPressedButton] = useState(null);

  const handlePendingClick = () => {
    navigate("/Pending");
  };

  const handleAcceptedClick = () => {
    navigate("/Accepted");
  };

  const handleRejectedClick = () => {
    navigate("/Rejected");
  };

  const handleMouseDown = (index) => {
    setPressedButton(index);
  };

  const handleMouseUp = () => {
    setPressedButton(null);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginTop: "150px", padding: "30px", width: "100%" }}>
        <h2 style={{ color: "#f26725", textAlign: "center" }}>Online Bus Pass</h2>

        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <div>

            {/* Pending */}
            <div style={rowStyle}>
              <div style={boxStyle}>Pending</div>
              <button
                style={{
                  ...applyButton,
                  transform: pressedButton === 0 ? "scale(0.95)" : "scale(1)",
                  transition: "transform 0.1s ease-in-out",
                }}
                onMouseDown={() => handleMouseDown(0)}
                onMouseUp={handleMouseUp}
                onClick={handlePendingClick}
              >
                View
              </button>
            </div>

            {/* Accepted */}
            <div style={rowStyle}>
              <div style={boxStyle}>Accepted</div>
              <button
                style={{
                  ...applyButton,
                  transform: pressedButton === 1 ? "scale(0.95)" : "scale(1)",
                  transition: "transform 0.1s ease-in-out",
                }}
                onMouseDown={() => handleMouseDown(1)}
                onMouseUp={handleMouseUp}
                onClick={handleAcceptedClick}
              >
                View
              </button>
            </div>

            {/* Rejected */}
            <div style={rowStyle}>
              <div style={boxStyle}>Rejected</div>
              <button
                style={{
                  ...applyButton,
                  transform: pressedButton === 2 ? "scale(0.95)" : "scale(1)",
                  transition: "transform 0.1s ease-in-out",
                }}
                onMouseDown={() => handleMouseDown(2)}
                onMouseUp={handleMouseUp}
                onClick={handleRejectedClick}
              >
                View
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
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
