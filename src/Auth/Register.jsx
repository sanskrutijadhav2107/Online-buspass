import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    std: '',
    address: '',
    schoolOrCollege: '',
    phone: '',
    password: '',
    confpassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!/^\d{10}$/.test(formData.phone)) {
  alert("Phone number must be exactly 10 digits.");
  return;
}
    if (formData.password !== formData.confpassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await addDoc(collection(db, "students"), {
        name: formData.name,
        birthdate: formData.birthdate,
        std: formData.std,
        address: formData.address,
        schoolOrCollege: formData.schoolOrCollege,
        phone: formData.phone,
        password: formData.password, // ⚠️ Do NOT store raw password in production!
      });

      alert('Registration successful!');
      navigate('/'); // redirect after registration
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("Error while submitting. Try again.");
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("https://t4.ftcdn.net/jpg/13/06/43/63/360_F_1306436399_lKMO2qWsMuqjll9kqeklGdz6J5du3YQK.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
      padding: '30px',

          
    },
    formWrapper: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%',
    },
    heading: {
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#d1541d',
       
         
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: '600',
      marginBottom: '5px',
      color: '#444',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#d1541d',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '15px',
    },
    buttonHover: {
      backgroundColor: '#d1541d',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formWrapper}>
        <h2 style={styles.heading}>Student Registration</h2>

        <div style={styles.formGroup}>
  <label style={styles.label}>Name</label>
  <input
    type="text"
    name="name"
    style={styles.input}
    value={formData.name}
    onChange={(e) => {
      const value = e.target.value;
      // Allow only letters and spaces
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({ ...formData, name: value });
      }
    }}
    required
    placeholder="Enter full name"
  />
</div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Birthdate</label>
          <input type="date" name="birthdate" style={styles.input} value={formData.birthdate} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Standard (Class)</label>
          <input type="text" name="std" style={styles.input} value={formData.std} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <input type="text" name="address" style={styles.input} value={formData.address} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>School / College</label>
          <input type="text" name="schoolOrCollege" style={styles.input} value={formData.schoolOrCollege} onChange={handleChange} required />
        </div>

        {/* <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input type="tel" name="phone" style={styles.input} value={formData.phone} onChange={handleChange} required />
        </div> */}
        <div style={styles.formGroup}>
  <label style={styles.label}>Phone Number</label>
  <input
    type="tel"
    name="phone"
    style={styles.input}
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value;
      // Allow only digits and limit to 10 characters
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, phone: value });
      }
    }}
    required
    placeholder="Enter 10-digit phone number"
  />
</div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Create Password</label>
          <input type="password" name="password" style={styles.input} value={formData.password} onChange={handleChange} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input type="password" name="confpassword" style={styles.input} value={formData.confpassword} onChange={handleChange} required />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}
