// import React from "react";
// import IDCard from './IDCard' // Import the IDCard component

// const PassIDPage = () => {
//   const dummyData = {
//     idNo: "23030403245009",
//     name: "Shravan Devrukhkar",
//     address: "Devrukh, Ratnagiri",
//     birthdate: "01/01/2003",
//     college: "XYZ Polytechnic College",
//     distance: "22 KM"
//   };

//   return (
//     <div style={{ marginTop: "50px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Pass ID Card</h2>
//       <IDCard idData={dummyData} />
//     </div>
//   );
// };

// export default PassIDPage;
import React from "react";
import IDCard from "./IDCard"; // Import the IDCard component
import Sidebar from "./Sidebar"; // Import your Sidebar component

const PassIDPage = () => {
  const dummyData = {
    idNo: "23030403245009",
    name: "Shravan Devrukhkar",
    address: "Devrukh, Ratnagiri",
    birthdate: "01/01/2003",
    college: "XYZ Polytechnic College",
    distance: "22 KM"
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <h2 className="title">Pass ID Card</h2>
        <IDCard idData={dummyData} />
      </div>

      <style>{`
        .layout {
          display: flex;
        }

        .main-content {
          flex: 1;
          padding: ;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default PassIDPage;
