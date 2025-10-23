

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
  passEndDate,
  photoUrl,
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
        <div className="pass-card" id="idcard">
          {/* Header */}
          <div className="header">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/45/Maharashtra_State_Road_Transport_Corporation_logo.png"
              alt="MSRTC Logo"
              className="logo"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <div className="title">Maharashtra State Road Transport Corporation</div>
            <div className="subtitle">Student Monthly Concession Pass</div>
          </div>

          {/* Body */}
          <div className="body">
            {renderNumberColumn()}

            {/* Photo column */}
            <div className="photo-col">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Student"
                  className="photo"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const p = e.currentTarget.parentElement;
                    if (p) {
                      p.innerHTML =
                        '<div class="photo-placeholder">Photo</div>';
                    }
                  }}
                />
              ) : (
                <div className="photo-placeholder">Photo</div>
              )}
            </div>

            <div className="fields">
              {passId && <div className="line">ID No.: {passId}</div>}
              <div className="line">Student ID: {studentId}</div>
              <div className="line">Student Name: {name}</div>
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
        .page-container { display: flex; }
        .main-section { flex: 1; display: flex; justify-content: center; padding: 20px; }
        .pass-card {
          width: 380px;
          background-color: #AEEBE7;
          border: 1px solid black;
          padding: 16px;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }
        .header { text-align: center; margin-bottom: 12px; }
        .logo { width: 42px; height: 42px; margin-bottom: 6px; }
        .title { font-weight: bold; font-size: 16px; }
        .subtitle { font-size: 13px; font-weight: bold; }

        /* Grid: numbers | photo | fields | numbers */
        .body {
          display: grid;
          grid-template-columns: 20px 110px 1fr 20px;
          gap: 6px;
          align-items: start;
        }

        .number-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          font-size: 11px;
          line-height: 1.5;
          user-select: none;
        }

        .photo-col { width: 110px; }
        .photo {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border: 1px solid #333;
          border-radius: 6px;
          background: #f6f6f6;
          display: block;
        }
        .photo-placeholder {
          width: 100%;
          height: 140px;
          border: 1px solid #333;
          border-radius: 6px;
          background: #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-weight: 600;
        }

        .fields {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          padding: 0 4px;
          line-height: 1.6;
        }
        .line { margin-bottom: 6px; word-break: break-word; }

        .footer {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: bold;
          margin-top: 16px;
          padding: 0 4px;
        }

        @media print {
          #idcard { box-shadow: none; }
        }
      `}</style>
    </div>
  );
};

export default PassCard;
