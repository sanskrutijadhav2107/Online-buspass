
import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // ✅ Make sure this is correctly configured
import { collection, addDoc } from "firebase/firestore"; // ✅ Import Firestore functions

const AddVerifier = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "verifiers"), {
        name: formData.name,
        phone: formData.phone,
        password: formData.password,
      });

      alert("Verifier added successfully!");
      navigate("/ManageVerifier"); // ✅ Redirect to Manage page after successful add
    } catch (error) {
      console.error("Error adding verifier: ", error);
      alert("Failed to add verifier. Please try again.");
    }
  };

  return (
    <div className="layout">
      <style>{`
        .layout {
          display: flex;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f7f9fc;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          padding: 40px 60px;
        }

        .form-container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.07);
          max-width: 600px;
          margin: auto;
        }

        h2 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #f26725;
          text-align: center;
        }

        label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 14px 16px;
          font-size: 16px;
          border: 1.5px solid #ccc;
          border-radius: 8px;
          margin-bottom: 25px;
          outline: none;
          transition: 0.2s;
          background-color: #fdfdfd;
        }

        input:focus {
          border-color: #f26725;
          box-shadow: 0 0 6px rgba(242, 103, 37, 0.3);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 17px;
          background-color: #f26725;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #d9541f;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 20px;
          }

          .form-container {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <h2>Add Verifier</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Verifier Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />

            <button type="submit" className="submit-btn">
              Add Verifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVerifier;




