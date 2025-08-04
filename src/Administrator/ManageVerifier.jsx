import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar"; // ✅ Your existing sidebar

const ManageVerifiers = () => {

  const navigate = useNavigate();
  const verifiers = [
    { name: "Siya Ketkar", phone: "9876543210", password: "abc@123" },
    { name: "Ajay Patil", phone: "9123456780", password: "xyz@456" },
    { name: "Ahilya Patil", phone: "9012345678", password: "pass@789" },
  ];

  const handleAdd = () => {
   navigate("/AddVerifier")
  };

  const handleRemove = (name) => {
    alert(`Remove verifier: ${name}`);
  };

  return (
    <div className="layout">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .layout {
          display: flex;
          background-color: #f4f6f9;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .main-content {
          flex: 1;
          padding: 40px 60px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .header h2 {
          font-size: 32px;
          color: #1f1f1f;
          font-weight: 600;
        }

        .add-btn {
          background: #f26725;
          color: #fff;
          border: none;
          padding: 12px 22px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .add-btn:hover {
          background: #d6521d;
          transform: translateY(-2px);
        }

        .table-wrapper {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        thead {
          background-color: #f26725;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        th, td {
          padding: 18px 22px;
          text-align: left;
        }

        th {
          font-size: 16px;
          font-weight: 600;
        }

        td {
          background-color: #fcfcfc;
          font-size: 15px;
          color: #333;
        }

        tr:nth-child(even) td {
          background-color: #f9f9f9;
        }

        tr:hover td {
          background-color: #f1f5fa;
        }

        .remove-btn {
          background-color: transparent;
          border: 2px solid #f26725;
          color: #f26725;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background-color: #f26725;
          color: white;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 20px;
          }

          .header h2 {
            font-size: 24px;
          }

          .add-btn {
            padding: 10px 16px;
            font-size: 14px;
          }

          th, td {
            padding: 14px;
          }
        }
      `}</style>

      {/* Sidebar (left) */}
      <AdminSidebar />

      {/* Main Section */}
      <div className="main-content">
        <div className="header">
          <h2>Manage Verifiers</h2>
          <button className="add-btn" onClick={handleAdd}>
            <FaPlus /> Add
          </button>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Verifier Name</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Remove Verifier</th>
              </tr>
            </thead>
            <tbody>
              {verifiers.map((verifier, index) => (
                <tr key={index}>
                  <td>{verifier.name}</td>
                  <td>{verifier.phone}</td>
                  <td>{verifier.password}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(verifier.name)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageVerifiers;
