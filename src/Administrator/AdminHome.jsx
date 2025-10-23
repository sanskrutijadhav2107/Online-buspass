import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaUserCog } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"; // ✅ YOUR SIDEBAR

const AdminHomePage = () => {
  const navigate = useNavigate();

  const todayCounts = {
    pending: 0,
    approved: 0,
    rejected: 0,
  };

  return (
    <div className="admin-layout">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f4f6f9;
        }

        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          padding: 40px 50px;
          background: #f7f9fc;
        }

        .header h1 {
          font-size: 30px;
          color: #333;
          margin-bottom: 8px;
        }

        .header p {
          color: #777;
          margin-bottom: 40px;
        }

        .section {
          margin-bottom: 40px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07);
          padding: 30px;
        }

        .section h2 {
          font-size: 22px;
          color: #f26725;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fefefe;
          border: 1px solid #eee;
          padding: 20px 25px;
          border-radius: 12px;
          margin-bottom: 16px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-2px);
          background-color: #f26725;
          color: white;
        }

        .card .label {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 18px;
          font-weight: 500;
        }

        .card .label .icon {
          font-size: 22px;
          color: #f26725;
        }

        .card:hover .icon {
          color: white;
        }

        .badge {
          background: #f26725;
          color: white;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
        }

        .card:hover .badge {
          background: white;
          color: #f26725;
        }

        @media (max-width: 768px) {
          .admin-layout {
            flex-direction: column;
          }

          .main-content {
            padding: 20px;
          }
        }
      `}</style>

      {/* ✅ Your Sidebar Component */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="main-content">
        <div className="header">
          <h1>MSRTC Administrative Portal</h1>
         <p> </p>
        </div>

        {/* Control Panel */}
        <div className="section">
          <h2>Control Panel</h2>
          <div className="card" onClick={() => navigate("/ManageVerifier")}>
            <div className="label">
              <FaUserCog className="icon" />
              Manage Verifiers
            </div>
          </div>
        </div>

        {/* Application Stack */}
        <div className="section">
          <h2>Application Stack</h2>

          <div className="card" onClick={() => navigate("/Pending")}>
            <div className="label">
              <FaClipboardList className="icon" />
              Pending Applications
            </div>
            <div className="badge">{todayCounts.pending}</div>
          </div>

          <div className="card" onClick={() => navigate("/Accepted")}>
            <div className="label">
              <FaCheckCircle className="icon" />
              Approved Applications
            </div>
            <div className="badge">{todayCounts.approved}</div>
          </div>

          <div className="card" onClick={() => navigate("/Rejected")}>
            <div className="label">
              <FaTimesCircle className="icon" />
              Rejected Applications
            </div>
            <div className="badge">{todayCounts.rejected}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;















