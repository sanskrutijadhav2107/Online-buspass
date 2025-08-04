import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const StudentList = () => {
  const students = [
    { name: "Sanskruti Jadhav", id: "127676778", status: "Verified" },
    { name: "Shravan Devrukhkar", id: "546787978", status: "Pending" },
    { name: "Shreya Kadam", id: "45678688", status: "Rejected" },
  ];

  return (
    <div className="admin-layout">
      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          background: #f8f9fa;
        }

        .main-content {
          flex: 1;
          padding: 40px 60px;
        }

        .main-content h2 {
          font-size: 28px;
          color: #f26725;
          margin-bottom: 30px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          box-shadow: 0 8px 16px rgba(0,0,0,0.05);
          border-radius: 12px;
          overflow: hidden;
        }

        th, td {
          padding: 16px 20px;
          text-align: left;
          font-size: 16px;
        }

        th {
          background-color: #f26725;
          color: white;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        tr:hover {
          background-color: #f1f1f1;
        }

        .status {
          font-weight: 600;
        }

        .status.Verified {
          color: #2e7d32;
        }

        .status.Pending {
          color: #fbc02d;
        }

        .status.Rejected {
          color: #d32f2f;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 20px;
          }

          table, th, td {
            font-size: 14px;
          }
        }
      `}</style>

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content">
        <h2>Students Beneficiary</h2>

        <table>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Applicant ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td className={`status ${student.status}`}>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
