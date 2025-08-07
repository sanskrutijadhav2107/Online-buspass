import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Reuse your existing Sidebar

const AppliedPassPage = () => {
  const [activeTab, setActiveTab] = useState("underScrutiny");

  const renderContent = () => {
    switch (activeTab) {
      case "underScrutiny":
        return <p className="status-msg">No Scrutiny Applications</p>;
      case "verified":
        return <p className="status-msg">No Verified Applications</p>;
      case "rejected":
        return <p className="status-msg">No Rejected Applications</p>;
      default:
        return null;
    }
  };

  return (
    <div className="applied-pass-layout">
      <Sidebar />

      <div className="applied-pass-content">
        <h2 className="page-title">Applied Pass</h2>
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "underScrutiny" ? "active" : ""}`}
            onClick={() => setActiveTab("underScrutiny")}
          >
            Under Scrutiny
          </button>
          <button
            className={`tab-btn ${activeTab === "verified" ? "active" : ""}`}
            onClick={() => setActiveTab("verified")}
          >
            Verified
          </button>
          <button
            className={`tab-btn ${activeTab === "rejected" ? "active" : ""}`}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected
          </button>
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>

      <style>{`
        .applied-pass-layout {
          display: flex;
        }

        .applied-pass-content {
          flex: 1;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .page-title {
          color: #e66125;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .tab-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .tab-btn {
          padding: 10px 25px;
          border: 1px solid #f26725;
          background-color: #fff1e7;
          color: #333;
          cursor: pointer;
          font-weight: bold;
          border-radius: 4px;
        }

        .tab-btn.active {
          background-color: #f26725;
          color: white;
        }

        .tab-content {
          background-color: #f6f6f6;
          padding: 20px;
          border-radius: 8px;
        }

        .status-msg {
          font-size: 18px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default AppliedPassPage;
