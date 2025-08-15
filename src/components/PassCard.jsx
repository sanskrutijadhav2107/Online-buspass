import React from "react";

const PassCard = ({
  passId,
  studentId,
  name,
  address,
  birthdate,
  age,
  college,
  from,
  to,
  startDate,
  passEndDate
}) => {
  const renderNumberColumn = () => (
    <div className="number-column">
      {Array.from({ length: 31 }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );

  return (
    <div className="page-container">
      <div className="main-section">
        <div className="pass-card">
          {/* Header */}
          <div className="header">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/45/Maharashtra_State_Road_Transport_Corporation_logo.png"
              alt="MSRTC Logo"
              className="logo"
            />
            <div className="title">Maharashtra State Road Transport Corporation</div>
            <div className="subtitle">Student Monthly Concession Pass</div>
          </div>

          {/* Body */}
          <div className="body">
            {renderNumberColumn()}

            <div className="fields">
              
              <div className="line">Student ID: {studentId}</div>
              <div className="line">Name: {name}</div>
              <div className="line">Address: {address}</div>
              <div className="line">Birthdate: {birthdate}</div>
              <div className="line">Age: {age}</div>
              <div className="line">College Name: {college}</div>
              <div className="line">From: {from}</div>
              <div className="line">To: {to}</div>
              <div className="line">Start date: {startDate}</div>
              <div className="line">End date: {passEndDate}</div>
            </div>

            {renderNumberColumn()}
          </div>

          {/* Footer */}
          <div className="footer">
            <span>Administrator</span>
            <span>Student Sign</span>
          </div>
        </div>
      </div>

      <style>{`
.page-container {
    display: flex;
  }
  .main-section {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .pass-card {
    width: 380px;
    background-color: #AEEBE7;
    border: 1px solid black;
    padding: 20px;
    font-family: Arial, sans-serif;
    font-size: 15px; /* bigger base font size */
  }
  .header {
    text-align: center;
    margin-bottom: 15px;
  }
  .logo {
    width: 45px;
    height: 45px;
    margin-bottom: 6px;
  }
  .title {
    font-weight: bold;
    font-size: 16px; /* bigger title */
  }
  .subtitle {
    font-size: 14px; /* bigger subtitle */
    font-weight: bold;
  }
  .body {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    gap: 5px;
  }
  .number-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.6;
  }
  .fields {
    display: flex;
    flex-direction: column;
    font-size: 15px; /* bigger field text */
    padding: 0 5px;
    line-height: 1.8; /* more vertical spacing */
  }
  .line {
    height: 50px; /* let line-height control spacing */
    margin-bottom: 6px; /* extra gap between lines */
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px; /* bigger footer text */
    font-weight: bold;
    margin-top: 25px;
    padding: 0 5px;
  }
      `}</style>
    </div>
  );
};

export default PassCard;
