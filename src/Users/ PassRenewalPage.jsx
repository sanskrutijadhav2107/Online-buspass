import React, { useState } from "react";
import Sidebar from "../components/Sidebar" ;// Ensure Sidebar matches screenshot style

const PassRenewalPage = () => {
  const [passId, setPassId] = useState("");

  const handleRenew = () => {
    alert(`Pass ID ${passId} submitted for renewal.`);
    // You can handle your backend call here
  };

  return (
    <div className="renewal-layout">
      <Sidebar />

      <div className="renewal-content">
        <h2 className="page-title">Pass Renewal</h2>
        <hr className="divider" />

        <div className="form-box">
          <label htmlFor="passId" className="label">
            Enter Pass Id Number :
          </label>
          <input
            type="text"
            id="passId"
            value={passId}
            onChange={(e) => setPassId(e.target.value)}
            className="input-box"
            placeholder="Enter your pass ID"
          />
          <button className="renew-btn" onClick={handleRenew}>
            Renew
          </button>
        </div>
      </div>

      <style>{`
        .renewal-layout {
          display: flex;
        }

        .renewal-content {
          flex: 1;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .page-title {
          color: #e66125;
          font-size: 24px;
          margin-bottom: 10px;
        }

        .divider {
          border: 1px solid #ccc;
          margin-bottom: 30px;
        }

        .form-box {
          background-color: #f6f6f6;
          padding: 40px;
          max-width: 600px;
          margin: auto;
          text-align: center;
          border-radius: 8px;
        }

        .label {
          display: block;
          font-size: 18px;
          margin-bottom: 15px;
          color: #333;
        }

        .input-box {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          border: 1px solid #aaa;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .renew-btn {
          background-color: #4a90e2;
          color: white;
          font-size: 16px;
          padding: 10px 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .renew-btn:hover {
          background-color: #357ab8;
        }
      `}</style>
    </div>
  );
};

export default PassRenewalPage;
