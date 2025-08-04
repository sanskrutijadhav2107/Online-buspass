import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    std: '',
    address: '',
    schoolOrCollege: '',
    phone: '',
    aadhaar: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  console.log(formData);
  navigate('/'); // navigate after successful submit
};


  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("https://images.unsplash.com/photo-1521790360288-120af5f2d57d")',
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
      color: '#333',
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
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Birthdate</label>
          <input
            type="date"
            name="birthdate"
            style={styles.input}
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Standard (Class)</label>
          <input
            type="text"
            name="std"
            style={styles.input}
            value={formData.std}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            style={styles.input}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>School / College</label>
          <input
            type="text"
            name="schoolOrCollege"
            style={styles.input}
            value={formData.schoolOrCollege}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Aadhaar Card Number</label>
          <input
            type="text"
            name="aadhaar"
            style={styles.input}
            value={formData.aadhaar}
            onChange={handleChange}
            required
          />
        </div>

        {/* //<button type="submit" style={styles.button}>Submit</button> */}
        <button type ="submit"   style={styles.button} >Submit</button>
      </form>
    </div>
  );
}
