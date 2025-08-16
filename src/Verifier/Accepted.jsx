
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

const Accepted = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcceptedApplications = async () => {
      setLoading(true);
      try {
        const storedData = JSON.parse(localStorage.getItem("studentData"));
        if (!storedData?.id) {
          setApplications([]);
          setLoading(false);
          return;
        }

        // accepted statuses to check
        const possibleStatuses = ["accepted", "verified", "approved"];
        let allResults = [];

        for (let status of possibleStatuses) {
          const q = query(
            collection(db, "applications"),
            where("studentId", "==", storedData.id),
            where("status", "==", status)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          allResults = [...allResults, ...data];
        }

        setApplications(allResults);
      } catch (error) {
        console.error("Error fetching accepted applications:", error);
        setApplications([]);
      }
      setLoading(false);
    };

    fetchAcceptedApplications();
  }, []);

  return (
    <>
      <style>{`
        .accepted-container {
          padding: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9fafb;
          min-height: 100vh;
        }

        .accepted-heading {
          font-weight: bold;
          font-size: 26px;
          margin-bottom: 20px;
          color: #2e7d32;
          text-align: center;
        }

        .accepted-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .accepted-table th, 
        .accepted-table td {
          border: 1px solid #e0e0e0;
          padding: 12px 15px;
          text-align: left;
        }

        .accepted-table th {
          background-color: #e8f5e9;
          color: #2e7d32;
          font-size: 15px;
        }

        .accepted-table td {
          font-size: 14px;
          color: #333;
        }

        .status {
          color: #2e7d32;
          font-weight: bold;
        }

        .loading, .no-data {
          font-size: 18px;
          text-align: center;
          margin-top: 40px;
          color: #777;
        }

        .no-data {
          font-style: italic;
        }
      `}</style>

      <div className="accepted-container">
        <h2 className="accepted-heading">✅ Accepted Applications</h2>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : applications.length === 0 ? (
          <p className="no-data">No accepted pass found.</p>
        ) : (
          <table className="accepted-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Pass Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.from}</td>
                  <td>{app.to}</td>
                  <td>{app.passType}</td>
                  <td className="status">{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Accepted;
