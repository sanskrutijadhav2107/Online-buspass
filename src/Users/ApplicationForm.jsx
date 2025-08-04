// import React, { useState } from 'react';

// const StudentForm = () => {
//   const [distance, setDistance] = useState('');
//   const [cost, setCost] = useState('');
//   const [passType, setPassType] = useState('Student');

//   const calculateCost = (distance, type) => {
//     let pricePer6Km = type === 'Student' ? 11 : 15.7;
//     let km = parseFloat(distance);
//     if (!isNaN(km)) {
//       const units = (km / 6);
//       const finalCost = (units * pricePer6Km).toFixed(2) * 28;
//       setCost(`₹${finalCost}`);
//     } else {
//       setCost('');
//     }
//   };
  
//   const handleDistanceChange = (e) => {
//     const value = e.target.value;
//     setDistance(value);
//     calculateCost(value, passType);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Application Form</h2>

//       {/* Basic Info */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Basic Info</h3>
//         <input placeholder="Name" style={styles.input} />
//         <input placeholder="Date of Birth" type="date" style={styles.input} />
//         <input placeholder="School / College name" style={styles.input} />
//         <input placeholder="Phone no." type="tel" style={styles.input} />
//       </div>

//       {/* Pass Info */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Pass Info</h3>
//         <select value={passType} onChange={(e) => setPassType(e.target.value)} style={styles.input}>
//           <option>Student</option>
//           <option>Employee</option>
//         </select>
//       </div>

//       {/* Route Details */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Route Details</h3>
//         <input placeholder="From" style={styles.input} />
//         <input placeholder="To" style={styles.input} />
//         <input
//           placeholder="Distance in KM"
//           value={distance}
//           onChange={handleDistanceChange}
//           style={styles.input}
//         />
//         <input placeholder="Cost" value={cost} readOnly style={styles.input} />
//       </div>

//       {/* Upload Documents */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Upload Documents</h3>
//         <label>
//           Declaration Form:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Fee Receipt:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Photo:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Aadhaar Card:
//           <input type="file" style={styles.inputFile} />
//         </label>
//       </div>

//       {/* Payment */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Payment</h3>
//         <input placeholder="Payment option (To be added later)" style={styles.input} readOnly />
//         {/* You can integrate Razorpay, Stripe, or UPI API here in future */}
//       </div>

//       {/* Submit */}
//       <button style={styles.submit}>Submit</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '700px',
//     margin: 'auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     color: '#f26725',
//     textAlign: 'center',
//     marginBottom: '30px',
//   },
//   section: {
//     backgroundColor: '#f2f2f2',
//     padding: '15px',
//     marginBottom: '25px',
//     borderRadius: '8px',
//     boxShadow: '0 0 5px #ccc',
//   },
//   header: {
//     backgroundColor: '#f26725',
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '4px',
//     marginBottom: '15px',
//     fontSize: '16px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '12px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   inputFile: {
//     display: 'block',
//     margin: '8px 0 16px',
//   },
//   submit: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '12px 30px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     display: 'block',
//     margin: '20px auto 0',
//     transition: 'transform 0.2s ease',
//   },
// };

// export default StudentForm;


// import React, { useState } from 'react';

// const StudentForm = () => {
//   const [distance, setDistance] = useState('');
//   const [cost, setCost] = useState('');
//   const [passType, setPassType] = useState('Student');
//   const [empDuration, setEmpDuration] = useState('28-day');

//   // const calculatePassCost = (userType, distance, empPassType = "28-day") => {
//   //   const studentCostMap = {
//   //     1: 11, 1.5: 16, 2: 21, 2.5: 26, 3: 31, 3.5: 36, 4: 41,
//   //     4.5: 46, 5: 51, 5.5: 56, 6: 61, 6.5: 66, 7: 71, 7.5: 76,
//   //     8: 81, 8.5: 86, 9: 91, 9.5: 96, 10: 101, 10.5: 106, 11: 111,
//   //     11.5: 116, 12: 121, 12.5: 126, 13: 131, 13.5: 136, 14: 142
//   //   };

//   //   const emp28DayCostMap = {
//   //     1: 15.7, 1.5: 22.8, 2: 30, 2.5: 37.1, 3: 44.2, 3.5: 51.3, 4: 58.4,
//   //     4.5: 65.5, 5: 72.6, 5.5: 79.7, 6: 86.8, 6.5: 93.9, 7: 101, 7.5: 108.1,
//   //     8: 115.2, 8.5: 122.3, 9: 129.4, 9.5: 136.5, 10: 143.6, 10.5: 150.7,
//   //     11: 157.8, 11.5: 164.9, 12: 172, 12.5: 179.1, 13: 186.2, 13.5: 193.3, 14: 202.8
//   //   };

//   //   const emp3MonthCostMap = {
//   //     1: 39.2, 1.5: 57.1, 2: 75.0, 2.5: 92.9, 3: 110.8, 3.5: 128.7, 4: 146.6,
//   //     4.5: 164.5, 5: 182.4, 5.5: 200.3, 6: 218.2, 6.5: 236.1, 7: 254.0, 7.5: 271.9,
//   //     8: 289.8, 8.5: 307.7, 9: 325.6, 9.5: 343.5, 10: 361.4, 10.5: 379.3,
//   //     11: 397.2, 11.5: 415.1, 12: 433.0, 12.5: 450.9, 13: 468.8, 13.5: 486.7, 14: 507.1
//   //   };

//   //   let cost = 0;
//   //   let stage = Math.ceil((distance / 6) * 2) / 2;
//   //   if (stage > 14) stage = 14;

//   //   if (userType === "Student") {
//   //     cost = studentCostMap[stage];
//   //   } else if (userType === "Employee") {
//   //     cost = empPassType === "3-month" ? emp3MonthCostMap[stage] : emp28DayCostMap[stage];
//   //   }

//   //   return cost ? `₹${cost.toFixed(2)}` : '';
//   // };
// const calculatePassCost = (userType, distance, empPassType = "28-day") => {
//   const studentPerDayCost = {
//     1: 11, 1.5: 16, 2: 21, 2.5: 26, 3: 31, 3.5: 36, 4: 41,
//     4.5: 46, 5: 51, 5.5: 56, 6: 61, 6.5: 66, 7: 71, 7.5: 76,
//     8: 81, 8.5: 86, 9: 91, 9.5: 96, 10: 101, 10.5: 106, 11: 111,
//     11.5: 116, 12: 121, 12.5: 126, 13: 131, 13.5: 136, 14: 142,
//   };

//   const empPerDayCost = {
//     1: 15.7, 1.5: 22.8, 2: 30, 2.5: 37.1, 3: 44.2, 3.5: 51.3, 4: 58.4,
//     4.5: 65.5, 5: 72.6, 5.5: 79.7, 6: 86.8, 6.5: 93.9, 7: 101, 7.5: 108.1,
//     8: 115.2, 8.5: 122.3, 9: 129.4, 9.5: 136.5, 10: 143.6, 10.5: 150.7,
//     11: 157.8, 11.5: 164.9, 12: 172, 12.5: 179.1, 13: 186.2, 13.5: 193.3, 14: 202.8
//   };

//   const emp3MonthCost = {
//     1: 39.2, 1.5: 57.1, 2: 75.0, 2.5: 92.9, 3: 110.8, 3.5: 128.7, 4: 146.6,
//     4.5: 164.5, 5: 182.4, 5.5: 200.3, 6: 218.2, 6.5: 236.1, 7: 254.0, 7.5: 271.9,
//     8: 289.8, 8.5: 307.7, 9: 325.6, 9.5: 343.5, 10: 361.4, 10.5: 379.3,
//     11: 397.2, 11.5: 415.1, 12: 433.0, 12.5: 450.9, 13: 468.8, 13.5: 486.7, 14: 507.1
//   };

//   let cost = 0;
//   let stage = Math.ceil((distance / 6) * 2) / 2;
//   if (stage > 14) stage = 14;

//   if (userType === "Student") {
//     cost = studentPerDayCost[stage] * 28;
//   } else if (userType === "Employee") {
//     if (empPassType === "28-day") {
//       cost = empPerDayCost[stage] * 28;
//     } else if (empPassType === "3-month") {
//       cost = emp3MonthCost[stage]; // already fixed for 3 months
//     }
//   }

//   return cost ? `₹${cost.toFixed(2)}` : '';
// };

//   const handleDistanceChange = (e) => {
//     const value = e.target.value;
//     setDistance(value);
//     const km = parseFloat(value);
//     if (!isNaN(km)) {
//       const calculatedCost = calculatePassCost(passType, km, empDuration);
//       setCost(calculatedCost);
//     } else {
//       setCost('');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Application Form</h2>

//       {/* Basic Info */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Basic Info</h3>
//         <input placeholder="Name" style={styles.input} />
//         <input placeholder="Date of Birth" type="date" style={styles.input} />
//         <input placeholder="School / College name" style={styles.input} />
//         <input placeholder="Phone no." type="tel" style={styles.input} />
//       </div>

//       {/* Pass Info */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Pass Info</h3>
//         <select
//           value={passType}
//           onChange={(e) => {
//             setPassType(e.target.value);
//             setCost(''); // reset cost when changing type
//           }}
//           style={styles.input}
//         >
//           <option>Student</option>
//           <option>Employee</option>
//         </select>

//         {passType === "Employee" && (
//           <select
//             value={empDuration}
//             onChange={(e) => {
//               setEmpDuration(e.target.value);
//               const km = parseFloat(distance);
//               if (!isNaN(km)) {
//                 const calculatedCost = calculatePassCost(passType, km, e.target.value);
//                 setCost(calculatedCost);
//               }
//             }}
//             style={styles.input}
//           >
//             <option value="28-day">28-day</option>
//             <option value="3-month">3-month</option>
//           </select>
//         )}
//       </div>

//       {/* Route Details */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Route Details</h3>
//         <input placeholder="From" style={styles.input} />
//         <input placeholder="To" style={styles.input} />
//         <input
//           placeholder="Distance in KM"
//           value={distance}
//           onChange={handleDistanceChange}
//           style={styles.input}
//         />
//         <input placeholder="Cost" value={cost} readOnly style={styles.input} />
//       </div>

//       {/* Upload Documents */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Upload Documents</h3>
//         <label>
//           Declaration Form:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Fee Receipt:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Photo:
//           <input type="file" style={styles.inputFile} />
//         </label>
//         <label>
//           Aadhaar Card:
//           <input type="file" style={styles.inputFile} />
//         </label>
//       </div>

//       {/* Payment */}
//       <div style={styles.section}>
//         <h3 style={styles.header}>Payment</h3>
//         <input placeholder="Payment option (To be added later)" style={styles.input} readOnly />
//       </div>

//       {/* Submit */}
//       <button style={styles.submit}>Submit</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '700px',
//     margin: 'auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     color: '#f26725',
//     textAlign: 'center',
//     marginBottom: '30px',
//   },
//   section: {
//     backgroundColor: '#f2f2f2',
//     padding: '15px',
//     marginBottom: '25px',
//     borderRadius: '8px',
//     boxShadow: '0 0 5px #ccc',
//   },
//   header: {
//     backgroundColor: '#f26725',
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '4px',
//     marginBottom: '15px',
//     fontSize: '16px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '12px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   inputFile: {
//     display: 'block',
//     margin: '8px 0 16px',
//   },
//   submit: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '12px 30px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     display: 'block',
//     margin: '20px auto 0',
//     transition: 'transform 0.2s ease',
//   },
// };

// export default StudentForm;














import React, { useState } from 'react';

const StudentForm = () => {
  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState('');
  const [passType, setPassType] = useState('Student');
  const [empDuration, setEmpDuration] = useState('28-day');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const calculatePassCost = (userType, distance, empPassType = "28-day") => {
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
      11: 157.8, 11.5: 164.9, 12: 172, 12.5: 179.1, 13: 186.2, 13.5: 193.3, 14: 202.8
    };

    const emp3MonthCost = {
      1: 39.2, 1.5: 57.1, 2: 75.0, 2.5: 92.9, 3: 110.8, 3.5: 128.7, 4: 146.6,
      4.5: 164.5, 5: 182.4, 5.5: 200.3, 6: 218.2, 6.5: 236.1, 7: 254.0, 7.5: 271.9,
      8: 289.8, 8.5: 307.7, 9: 325.6, 9.5: 343.5, 10: 361.4, 10.5: 379.3,
      11: 397.2, 11.5: 415.1, 12: 433.0, 12.5: 450.9, 13: 468.8, 13.5: 486.7, 14: 507.1
    };

    let cost = 0;
    let stage = Math.ceil((distance / 6) * 2) / 2;
    if (stage > 14) stage = 14;

    if (userType === "Student") {
      cost = studentPerDayCost[stage] * 28;
    } else if (userType === "Employee") {
      if (empPassType === "28-day") {
        cost = empPerDayCost[stage] * 28;
      } else if (empPassType === "3-month") {
        cost = emp3MonthCost[stage];
      }
    }

    return cost ? `₹${cost.toFixed(2)}` : '';
  };

  const handleLocationChange = (fromLoc, toLoc) => {
    let dist = '';
    if (
      (fromLoc === 'Mahad' && toLoc === 'Lonere') ||
      (fromLoc === 'Lonere' && toLoc === 'Mahad')
    ) {
      dist = 21;
    } else if (
      (fromLoc === 'Birwadi' && toLoc === 'Lonere') ||
      (fromLoc === 'Lonere' && toLoc === 'Birwadi')
    ) {
      dist = 28;
    }
    else if (
      (fromLoc === 'Mahad' && toLoc === 'Mangaon') ||
      (fromLoc === 'Mangaon' && toLoc === 'Mahad')
    ) {
      dist = 36;
    }

    if (dist) {
      setDistance(dist);
      const calculatedCost = calculatePassCost(passType, dist, empDuration);
      setCost(calculatedCost);
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

      {/* Basic Info */}
      <div style={styles.section}>
        <h3 style={styles.header}>Basic Info</h3>
        <input placeholder="Name" style={styles.input} />
        <input placeholder="Date of Birth" type="date" style={styles.input} />
        <input placeholder="School / College name" style={styles.input} />
        <input placeholder="Phone no." type="tel" style={styles.input} />
      </div>

      {/* Pass Info */}
      <div style={styles.section}>
        <h3 style={styles.header}>Pass Info</h3>
        <select
          value={passType}
          onChange={(e) => {
            setPassType(e.target.value);
            if (distance) {
              const calculatedCost = calculatePassCost(e.target.value, distance, empDuration);
              setCost(calculatedCost);
            }
          }}
          style={styles.input}
        >
          <option>Student</option>
          <option>Employee</option>
        </select>

        {passType === "Employee" && (
          <select
            value={empDuration}
            onChange={(e) => {
              setEmpDuration(e.target.value);
              if (distance) {
                const calculatedCost = calculatePassCost(passType, distance, e.target.value);
                setCost(calculatedCost);
              }
            }}
            style={styles.input}
          >
            <option value="28-day">28-day</option>
            <option value="3-month">3-month</option>
          </select>
        )}
      </div>

      {/* Route Details */}
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

      {/* Upload Documents */}
      <div style={styles.section}>
        <h3 style={styles.header}>Upload Documents</h3>
        <label>Declaration Form: <input type="file" style={styles.inputFile} /></label>
        <label>Fee Receipt: <input type="file" style={styles.inputFile} /></label>
        <label>Photo: <input type="file" style={styles.inputFile} /></label>
        <label>Aadhaar Card: <input type="file" style={styles.inputFile} /></label>
      </div>

      {/* Payment */}
      <div style={styles.section}>
        <h3 style={styles.header}>Payment</h3>
        <input placeholder="Payment option (To be added later)" style={styles.input} readOnly />
      </div>

      {/* Submit */}
      <button style={styles.submit}>Submit</button>
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



