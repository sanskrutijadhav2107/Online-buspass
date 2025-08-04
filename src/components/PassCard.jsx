import React from "react";


const PassCard = () => {
  const renderNumberColumn = () => (
    <div className="number-column">
      {Array.from({ length: 31 }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );

  return (
    <>
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
                <div className="line">ID No. : ____________________________</div>
                <div className="line">Name : _____________________________</div>
                <div className="line">Address : ___________________________</div>
                <div className="line">Birthdate : _________________________</div>
                <div className="line">Age : ______________________________</div>
                <div className="line">College Name : ______________________</div>
                <div className="line">___________________________________</div>
                <div className="line">From : _____________________________</div>
                <div className="line">To : _______________________________</div>
                <div className="line">Start date : ________________________</div>
                <div className="line">End date : __________________________</div>
              </div>

              {renderNumberColumn()}
            </div>

            {/* Footer */}
            <div className="footer">
              <span>Administrator</span>
              <span>Student Sign</span>
            </div>
          </div>

          {/* Download Button */}
         
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .page-container {
          display: flex;
        }

        .main-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .heading {
          margin-bottom: 20px;
          text-align: center;
        }

        .pass-card {
          width: 380px;
          background-color: #AEEBE7;
          border: 1px solid black;
          padding: 20px;
          font-family: Arial, sans-serif;
          font-size: 13px;
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
          font-size: 14px;
        }

        .subtitle {
          font-size: 12px;
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
          font-size: 11px;
          line-height: 1.5;
        }

        .fields {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 13px;
          padding: 0 5px;
          line-height: 1.5;
        }

        .line {
          height: 20px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: bold;
          margin-top: 20px;
          padding: 0 5px;
        }

        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .download-button {
          padding: 8px 20px;
          font-size: 14px;
          background-color: #ff6600;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .download-button:hover {
          background-color: #e65c00;
        }
      `}</style>
    </>
  );
};

export default PassCard;
