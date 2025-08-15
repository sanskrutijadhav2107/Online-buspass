
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

      // ✅ Handle passEndDate as string or Timestamp
      let currentEndDate;
      if (passData.passEndDate?.toDate) {
        currentEndDate = passData.passEndDate.toDate();
      } else if (typeof passData.passEndDate === "string") {
        const cleaned = passData.passEndDate.replace(/--/g, "-").trim();
        currentEndDate = new Date(cleaned);
      } else {
        setMessage("❌ Invalid date format in database.");
        return;
      }

      // ✅ Check if still valid
      if (currentEndDate >= today) {
        setMessage(`✅ Pass is still active until ${format(currentEndDate, "yyyy-MM-dd")}.`);
        return;
      }

      // 🔄 Renew: save as formatted string
      const newStart = format(today, "yyyy-MM-dd");
      const newEnd = format(new Date(today.setDate(today.getDate() + 30)), "yyyy-MM-dd");

      await updateDoc(docRef, {
        startDate: newStart,
        passEndDate: newEnd,
      });

      setMessage(`✅ Pass renewed! Valid until: ${newEnd}`);
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
            <p style={{ marginTop: "20px", fontWeight: "bold", color: "#333" }}>
              {message}
            </p>
          )}
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
          background-color: #d3541a;
          color: white;
          font-size: 16px;
          padding: 10px 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .renew-btn:hover {
          background-color: #b84310;
        }
      `}</style>
    </div>
  );
};

export default PassRenewalPage;
