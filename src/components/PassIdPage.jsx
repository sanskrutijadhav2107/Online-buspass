

import React, { useState, useEffect } from "react";
import IDCard from "./IDCard"; // Reusing your IDCard component
import Sidebar from "./Sidebar"; // Sidebar component
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // make sure this is your Firebase config

const PassIDPage = () => {
  const [studentId, setStudentId] = useState("");
  const [idData, setIdData] = useState(null);

  useEffect(() => {
    // Get student ID from local storage
    const storedData = JSON.parse(localStorage.getItem("studentData"));
    if (storedData && storedData.id) {
      setStudentId(storedData.id);
    }
  }, []);

  useEffect(() => {
    if (!studentId) return;

    const q = query(
      collection(db, "passes"),
      where("studentId", "==", studentId)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        setIdData({
          idNo: docData.passId,
          name: docData.name,
          address: docData.address,
          birthdate: docData.birthdate,
          college: docData.college,
          distance: `${docData.from} to ${docData.to}`,
        });
      } else {
        console.log("No pass found for studentId:", studentId);
      }
    });

    return () => unsub();
  }, [studentId]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <h2 className="title">Pass ID Card</h2>
        {idData ? (
          <IDCard idData={idData} />
        ) : (
          <p style={{ textAlign: "center" }}>Loading Pass ID...</p>
        )}
      </div>

      <style>{`
        .layout {
          display: flex;
        }

        .main-content {
          flex: 1;
          padding: 40px;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default PassIDPage;
