
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust path
import { useNavigate } from "react-router-dom";

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/application/${id}`); // details page
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "applications"),
          where("status", "==", "pending") // 👈 same as backend query
        );
        const querySnapshot = await getDocs(q);
        const fetchedApplicants = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplicants(fetchedApplicants);
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setApplicants([]);
      }
      setLoading(false);
    };

    fetchApplicants();
  }, []);

  return (
    <>
      <style>{`
        .container {
          padding: 30px;
          font-family: Arial, sans-serif;
        }

        .heading {
          font-weight: bold;
          font-size: 26px;
          margin-bottom: 20px;
          color: #ff5722;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }

        th, td {
          border: 1px solid #e0e0e0;
          padding: 12px 15px;
          text-align: left;
        }

        th {
          background-color: #ffe0d6;
          color: #333;
          font-size: 15px;
        }

        td {
          font-size: 14px;
          color: #444;
        }

        .view-button {
          background-color: #ff5722;
          color: white;
          border: none;
          padding: 6px 14px;
          cursor: pointer;
          border-radius: 4px;
          font-weight: bold;
        }

        .view-button:hover {
          background-color: #e64a19;
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

      <div className="container">
        <h2 className="heading">Applicant List</h2>

        {loading ? (
          <p className="loading">Loading applicants...</p>
        ) : applicants.length === 0 ? (
          <p className="no-data">No pending applicants found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Pass Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.name}</td>
                  <td>{applicant.from}</td>
                  <td>{applicant.to}</td>
                  <td>{applicant.passType}</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleView(applicant.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ApplicantList;
