import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const storedData = JSON.parse(localStorage.getItem("studentData"));
      if (storedData?.id) {
        const docRef = doc(db, "passes", storedData.id);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setStudent(snap.data());
        }
      }
    };
    fetchStudent();
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "30px" }}>
        <h2 style={{ color: "#f26725", marginBottom: "20px", textAlign: "center" }}>
          🎓 Student Profile
        </h2>

        {student ? (
          <div
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            <h3 style={{ marginBottom: "20px", color: "#f26725" }}>Personal Information</h3>
            <p><b>Name:</b> {student.name || "N/A"}</p>
            <p><b>Birthdate:</b> {student.birthdate || "N/A"}</p>
            <p><b>Age:</b> {student.age || "N/A"}</p>
            <p><b>College:</b> {student.college || "N/A"}</p>
            <p><b>Address:</b> {student.address || "N/A"}</p>

            <h3 style={{ margin: "20px 0 10px", color: "#f26725" }}>Pass Information</h3>
            <p><b>From:</b> {student.from || "N/A"}</p>
            <p><b>To:</b> {student.to || "N/A"}</p>
            <p><b>Pass Type:</b> {student.passType || "N/A"}</p>
            <p><b>Pass End Date:</b> {student.passEndDate || "N/A"}</p>
            <p><b>Status:</b> {student.status || "N/A"}</p>
          </div>
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
