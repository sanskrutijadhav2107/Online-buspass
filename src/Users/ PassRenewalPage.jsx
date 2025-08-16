

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { format } from "date-fns";

const PassRenewalPage = () => {
  const [studentId, setStudentId] = useState("");
  const [message, setMessage] = useState("");

  const handleRenew = async () => {
    if (!studentId.trim()) {
      setMessage("⚠️ Please enter a Student ID.");
      return;
    }

    try {
      const passesRef = collection(db, "passes");
      const q = query(passesRef, where("studentId", "==", studentId.trim()));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setMessage("❌ No pass found for this Student ID.");
        return;
      }

      const docRef = snapshot.docs[0].ref;
      const passData = snapshot.docs[0].data();

      const today = new Date();

      // ✅ Parse passEndDate
      let currentPassEnd;
      if (passData.passEndDate?.toDate) {
        currentPassEnd = passData.passEndDate.toDate();
      } else if (typeof passData.passEndDate === "string") {
        currentPassEnd = new Date(passData.passEndDate.replace(/--/g, "-").trim());
      }

      // ✅ Parse idEndDate
      let idEnd;
      if (passData.idEndDate?.toDate) {
        idEnd = passData.idEndDate.toDate();
      } else if (typeof passData.idEndDate === "string") {
        idEnd = new Date(passData.idEndDate.replace(/--/g, "-").trim());
      }

      // ❌ If ID expired → block renewal
      if (idEnd < today) {
        setMessage(
          `❌ Your ID expired on ${format(
            idEnd,
            "yyyy-MM-dd"
          )}. Please renew your ID card first.`
        );
        return;
      }

      // ✅ If pass still valid
      if (currentPassEnd >= today) {
        setMessage(
          `✅ Your pass is still active until ${format(
            currentPassEnd,
            "yyyy-MM-dd"
          )}.`
        );
        return;
      }

      // 🔄 Renew pass for 30 days
      const newStart = format(new Date(), "yyyy-MM-dd");
      const newEnd = format(
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        "yyyy-MM-dd"
      );

      await updateDoc(docRef, {
        startDate: newStart,
        passEndDate: newEnd,
        status: "active", // ✅ reset status
      });

      setMessage(`✅ Pass renewed successfully! New expiry: ${newEnd}`);
    } catch (error) {
      console.error("Error renewing pass:", error);
      setMessage("❌ Failed to renew pass. Try again later.");
    }
  };

  return (
    <div className="renewal-layout">
      <Sidebar />

      <div className="renewal-content">
        <h2 className="page-title">Pass Renewal</h2>
        <hr className="divider" />

        <div className="form-box">
          <label htmlFor="studentId" className="label">
            Enter Student ID:
          </label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="input-box"
            placeholder="Enter your Student ID"
          />
          <button className="renew-btn" onClick={handleRenew}>
            Renew
          </button>
          {message && (
            <p className="message-box">{message}</p>
          )}
        </div>
      </div>

      {/* ✅ Styling */}
      <style>{`
        .renewal-layout {
          display: flex;
          min-height: 100vh;
          background-color: #f9f9f9;
        }

        .renewal-content {
          flex: 1;
          padding: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .page-title {
          color: #e66125;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .divider {
          border: none;
          border-top: 2px solid #e66125;
          width: 100px;
          margin-bottom: 30px;
        }

        .form-box {
          background-color: #ffffff;
          padding: 40px;
          max-width: 600px;
          margin: auto;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
        }

        .label {
          display: block;
          font-size: 18px;
          margin-bottom: 15px;
          color: #444;
          font-weight: 500;
        }

        .input-box {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-bottom: 20px;
          outline: none;
          transition: border 0.3s;
        }

        .input-box:focus {
          border-color: #e66125;
          box-shadow: 0 0 5px rgba(230, 97, 37, 0.3);
        }

        .renew-btn {
          background-color: #e66125;
          color: white;
          font-size: 18px;
          padding: 12px 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .renew-btn:hover {
          background-color: #c74e1c;
          transform: scale(1.05);
        }

        .message-box {
          margin-top: 20px;
          font-weight: bold;
          font-size: 16px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default PassRenewalPage;
