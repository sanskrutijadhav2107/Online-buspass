

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const AppliedPassPage = () => {
  const [activeTab, setActiveTab] = useState("underScrutiny");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch student's applied passes
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      const storedData = JSON.parse(localStorage.getItem("studentData"));
      if (!storedData?.id) {
        setApplications([]);
        setLoading(false);
        return;
      }

      try {
        // map "verified" tab to actual Firestore value "active"
        const statusToQuery =
          activeTab === "verified" ? "active" : activeTab;

        const q = query(
          collection(db, "passes"),
          where("studentId", "==", storedData.id),
          where("status", "==", statusToQuery)
        );

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setApplications([]);
      }
      setLoading(false);
    };

    fetchApplications();
  }, [activeTab]);

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

        <div className="tab-content">
          {loading ? (
            <p className="status-msg">Loading...</p>
          ) : applications.length === 0 ? (
            <p className="status-msg">No {activeTab} applications</p>
          ) : (
            <ul className="application-list">
              {applications.map((app) => (
                <li key={app.id} className="application-card">
                  <p><b>Name:</b> {app.name}</p>
                  <p><b>From:</b> {app.from}</p>
                  <p><b>To:</b> {app.to}</p>
                  <p><b>Pass Type:</b> {app.passType}</p>
                  <p>
                    <b>Status:</b>{" "}
                    {app.status === "active" ? "verified" : app.status}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
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

        .application-list {
          list-style: none;
          padding: 0;
        }

        .application-card {
          background: #fff;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default AppliedPassPage;
