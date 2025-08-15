


import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // make sure path is correct
import { useNavigate } from 'react-router-dom';

  
const PendingApplications = () => {
  const [applications, setApplications] = useState([]);
const navigate = useNavigate();

const handleView = (id) => {
  navigate(`/application/${id}`);
};

  useEffect(() => {
    const fetchPendingApplications = async () => {
      try {
        const q = query(
          collection(db, 'applications'),
          where('status', '==', 'pending')
        );
        const querySnapshot = await getDocs(q);
        const fetchedApplications = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched Applications:', fetchedApplications);
        setApplications(fetchedApplications);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchPendingApplications();
  }, []);

  return (
    <>
      <style>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .heading {
          font-weight: bold;
          font-size: 24px;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px #ccc;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        .view-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 4px;
        }

        .view-button:hover {
          background-color: #45a049;
        }

        .no-data {
          color: #888;
          font-style: italic;
          margin-top: 20px;
        }
      `}</style>

      <div className="container">
        <h2 className="heading">Pending Applications</h2>
        {applications.length === 0 ? (
          <p className="no-data">No pending applications found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Pass Type</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.from}</td>
                  <td>{app.to}</td>
                  <td>{app.passType}</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleView(app.id)}
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

export default PendingApplications;
