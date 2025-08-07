
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import axios from 'axios';

// ✅ Cloudinary Upload Function
const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "buspass_upload"); // 🛠 Replace with your Cloudinary preset

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dxkpotnyb/upload", formData);
    return res.data.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return null;
  }
};

const StudentForm = () => {
  const navigate = useNavigate();
  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB limit

  const [files, setFiles] = useState({
    declaration: null,
    receipt: null,
    photo: null,
    aadhaar: null,
  });

  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState('');
  const [passType, setPassType] = useState('Student');
  const [empDuration, setEmpDuration] = useState('28-day');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [studentData, setStudentData] = useState({
    name: '',
    birthdate: '',
    schoolOrCollege: '',
    phone: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('studentData');
    if (stored) {
      const parsed = JSON.parse(stored);
      setStudentData({
        name: parsed.name || '',
        birthdate: parsed.birthdate || '',
        schoolOrCollege: parsed.schoolOrCollege || '',
        phone: parsed.phone || ''
      });
    }
  }, []);

  const handleFileChange = (key, file) => {
    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        setFiles((prev) => ({ ...prev, [key]: file }));
      } else {
        alert(`${key} file must be less than 1MB.`);
      }
    }
  };

  const handleSubmit = async () => {
    if (!studentData.phone || Object.values(files).some(file => !file)) {
      alert('Please complete all fields and upload all documents.');
      return;
    }

    try {
      const fileUrls = {};
      for (const key in files) {
        const url = await uploadToCloudinary(files[key]);
        if (url) {
          fileUrls[key] = url;
        } else {
          alert(`Failed to upload ${key}. Please try again.`);
          return;
        }
      }

      await addDoc(collection(db, 'applications'), {
        studentPhone: studentData.phone,
        name: studentData.name,
        birthdate: studentData.birthdate,
        schoolOrCollege: studentData.schoolOrCollege,
        from,
        to,
        distance,
        cost,
        passType,
        empDuration: passType === 'Employee' ? empDuration : null,
        documents: fileUrls,
        status: 'pending',
        submittedAt: new Date(),
      });

      alert('Form submitted successfully!');
      navigate('/UserHome');
    } catch (error) {
      console.error('Submit Error:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const calculatePassCost = (userType, distance, empPassType = '28-day') => {
    const studentPerDayCost = {
      1: 11, 1.5: 16, 2: 21, 2.5: 26, 3: 31, 3.5: 36, 4: 41,
      4.5: 46, 5: 51, 5.5: 56, 6: 61, 6.5: 66, 7: 71, 7.5: 76,
      8: 81, 8.5: 86, 9: 91, 9.5: 96, 10: 101, 10.5: 106, 11: 111,
      11.5: 116, 12: 121, 12.5: 126, 13: 131, 13.5: 136, 14: 142,
    };

    const empPerDayCost = {
      1: 15.7, 1.5: 22.8, 2: 30, 2.5: 37.1, 3: 44.2, 3.5: 51.3, 4: 58.4,
      4.5: 65.5, 5: 72.6, 5.5: 79.7, 6: 86.8, 6.5: 93.9, 7: 101, 7.5: 108.1,
      8: 115.2, 8.5: 122.3, 9: 129.4, 9.5: 136.5, 10: 143.6, 10.5: 150.7,
      11: 157.8, 11.5: 164.9, 12: 172, 12.5: 179.1, 13: 186.2, 13.5: 193.3, 14: 202.8,
    };

    const emp3MonthCost = {
      1: 39.2, 1.5: 57.1, 2: 75.0, 2.5: 92.9, 3: 110.8, 3.5: 128.7, 4: 146.6,
      4.5: 164.5, 5: 182.4, 5.5: 200.3, 6: 218.2, 6.5: 236.1, 7: 254.0, 7.5: 271.9,
      8: 289.8, 8.5: 307.7, 9: 325.6, 9.5: 343.5, 10: 361.4, 10.5: 379.3,
      11: 397.2, 11.5: 415.1, 12: 433.0, 12.5: 450.9, 13: 468.8, 13.5: 486.7, 14: 507.1,
    };

    let cost = 0;
    let stage = Math.ceil((distance / 6) * 2) / 2;
    if (stage > 14) stage = 14;

    if (userType === 'Student') {
      cost = studentPerDayCost[stage] * 28;
    } else if (userType === 'Employee') {
      if (empPassType === '28-day') {
        cost = empPerDayCost[stage] * 28;
      } else if (empPassType === '3-month') {
        cost = emp3MonthCost[stage];
      }
    }

    return cost ? `₹${cost.toFixed(2)}` : '';
  };

  const handleLocationChange = (fromLoc, toLoc) => {
    let dist = '';
    if ((fromLoc === 'Mahad' && toLoc === 'Lonere') || (fromLoc === 'Lonere' && toLoc === 'Mahad')) {
      dist = 21;
    } else if ((fromLoc === 'Birwadi' && toLoc === 'Lonere') || (fromLoc === 'Lonere' && toLoc === 'Birwadi')) {
      dist = 28;
    } else if ((fromLoc === 'Mahad' && toLoc === 'Mangaon') || (fromLoc === 'Mangaon' && toLoc === 'Mahad')) {
      dist = 36;
    }

    if (dist) {
      setDistance(dist);
      setCost(calculatePassCost(passType, dist, empDuration));
    } else {
      setDistance('');
      setCost('');
    }
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);
    handleLocationChange(value, to);
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    handleLocationChange(from, value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Application Form</h2>
      <div style={styles.section}>
        <h3 style={styles.header}>Basic Info</h3>
        <input placeholder="Name" style={styles.input} value={studentData.name} readOnly />
        <input placeholder="Date of Birth" type="date" style={styles.input} value={studentData.birthdate} readOnly />
        <input placeholder="School / College name" style={styles.input} value={studentData.schoolOrCollege} readOnly />
        <input placeholder="Phone no." type="tel" style={styles.input} value={studentData.phone} readOnly />
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Pass Info</h3>
        <select value={passType} onChange={(e) => {
          const newPassType = e.target.value;
          setPassType(newPassType);
          if (distance) setCost(calculatePassCost(newPassType, distance, empDuration));
        }} style={styles.input}>
          <option>Student</option>
          <option>Employee</option>
        </select>

        {passType === 'Employee' && (
          <select value={empDuration} onChange={(e) => {
            const newDuration = e.target.value;
            setEmpDuration(newDuration);
            if (distance) setCost(calculatePassCost(passType, distance, newDuration));
          }} style={styles.input}>
            <option value="28-day">28-day</option>
            <option value="3-month">3-month</option>
          </select>
        )}
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Route Details</h3>
        <select value={from} onChange={handleFromChange} style={styles.input}>
          <option value="">Select From</option>
          <option value="Mahad">Mahad</option>
          <option value="Birwadi">Birwadi</option>
          <option value="Lonere">Lonere</option>
        </select>

        <select value={to} onChange={handleToChange} style={styles.input}>
          <option value="">Select To</option>
          <option value="Lonere">Lonere</option>
          <option value="Mahad">Mahad</option>
          <option value="Birwadi">Birwadi</option>
        </select>

        <input placeholder="Distance in KM" value={distance} readOnly style={styles.input} />
        <input placeholder="Cost" value={cost} readOnly style={styles.input} />
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Upload Documents</h3>
        {['declaration', 'receipt', 'photo', 'aadhaar'].map((key) => (
          <label key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type="file"
              style={styles.inputFile}
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(key, e.target.files[0])}
            />
          </label>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Payment</h3>
        <input placeholder="Payment option (To be added later)" style={styles.input} readOnly />
      </div>

      <button onClick={handleSubmit} style={styles.submit}>Submit Application</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#f26725',
    textAlign: 'center',
    marginBottom: '30px',
  },
  section: {
    backgroundColor: '#f2f2f2',
    padding: '15px',
    marginBottom: '25px',
    borderRadius: '8px',
    boxShadow: '0 0 5px #ccc',
  },
  header: {
    backgroundColor: '#f26725',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  inputFile: {
    display: 'block',
    margin: '8px 0 16px',
  },
  submit: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block',
    margin: '20px auto 0',
  },
};

export default StudentForm;

