// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default function LoginPage() {
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // const handleLogin = async () => {
//   //   try {
//   //     const q = query(
//   //       collection(db, 'students'),
//   //       where('phone', '==', number),
//   //       where('password', '==', password)
//   //     );

//   //     const querySnapshot = await getDocs(q);

//   //     if (!querySnapshot.empty) {
//   //       alert('Login successful ');
//   //       navigate('/UserHome'); // You can change this based on role
//   //     } else {
//   //       alert('Invalid credentials ');
//   //     }
//   //   } catch (error) {
//   //     console.error('Login Error:', error);
//   //     alert('Something went wrong. Try again.');
//   //   }
//   // };
// // const handleLogin = async () => {
// //   try {
// //     const q = query(
// //       collection(db, 'students'),
// //       where('phone', '==', number),
// //       where('password', '==', password)
// //     );

// //     const querySnapshot = await getDocs(q);

// //     if (!querySnapshot.empty) {
// //       const userData = querySnapshot.docs[0].data();
// //       localStorage.setItem('studentData', JSON.stringify(userData)); // ✅ Add this line
// //       alert('Login successful');
// //       navigate('/UserHome');
// //     } else {
// //       alert('Invalid credentials');
// //     }
// //   } catch (error) {
// //     console.error('Login Error:', error);
// //     alert('Something went wrong. Try again.');
// //   }
// // };

// const handleLogin = async () => {
//   try {
//     // Try logging in as a Student
//     const studentQuery = query(
//       collection(db, 'students'),
//       where('phone', '==', number),
//       where('password', '==', password)
//     );
//     const studentSnapshot = await getDocs(studentQuery);

//     if (!studentSnapshot.empty) {
//       const studentData = studentSnapshot.docs[0].data();
//       localStorage.setItem('studentData', JSON.stringify(studentData));
//       alert('Student login successful');
//       navigate('/UserHome');
//       return;
//     }

//     // If not found in students, check Administrators
//     const adminQuery = query(
//       collection(db, 'administrators'),
//       where('phone', '==', number),
//       where('password', '==', password)
//     );
//     const adminSnapshot = await getDocs(adminQuery);

//     if (!adminSnapshot.empty) {
//       const adminData = adminSnapshot.docs[0].data();
//       localStorage.setItem('adminData', JSON.stringify(adminData));
//       alert('Administrator login successful');
//       navigate('/AdminHome');
//       return;
//     }

//     // If neither found
//     alert('Invalid credentials');
//   } catch (error) {
//     console.error('Login Error:', error);
//     alert('Something went wrong. Try again.');
//   }
// };


//   return (
//     <>
//       <style>{`
//         .login-container {
//           width: 450px;
//           margin: 60px auto;
//           padding: 40px;
//           border: 1px solid #f26522;
//           border-radius: 10px;
//           background-color: #f9f9f9;
//           font-family: 'Segoe UI', sans-serif;
//           box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
//         }

//         .login-container h2 {
//           text-align: center;
//           margin-bottom: 30px;
//           font-size: 28px;
//           color: #333;
//         }

//         .input-group {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 20px;
//         }

//         .input-group label {
//           margin-bottom: 5px;
//           font-size: 15px;
//           font-weight: 500;
//         }

//         .input-group input {
//           height: 40px;
//           padding: 8px 12px;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 15px;
//           background-color: #f4f4f4;
//         }

//         .login-button {
//           width: 100%;
//           margin: 10px 0;
//           padding: 12px;
//           background-color: #f26522;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           font-size: 16px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .login-button:hover {
//           background-color: #d1541d;
//         }
//       `}</style>

//       <div className="login-container">
//         <h2>Login</h2>

//         <div className="input-group">
//           <label>Enter number</label>
//           <input
//             type="text"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             placeholder="Mobile number"
//           />
//         </div>

//         <div className="input-group">
//           <label>Enter password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         </div>

//         <button className="login-button" onClick={handleLogin}>Login as User</button>
//         <button className="login-button" onClick={() => navigate('/VerifierHome')}>Login as Verifier</button>
//         <button className="login-button" onClick={() => navigate('/AdminHome')}>Login as Administrator</button>
//         <button className="login-button" onClick={() => navigate('/Register')}>Register</button>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function LoginPage() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // First check in Students collection
      const studentQuery = query(
        collection(db, 'students'),
        where('phone', '==', number),
        where('password', '==', password)
      );
      const studentSnapshot = await getDocs(studentQuery);

      if (!studentSnapshot.empty) {
        const studentData = studentSnapshot.docs[0].data();
        localStorage.setItem('studentData', JSON.stringify(studentData));
        alert('Student login successful');
        navigate('/UserHome');
        return;
      }

      // Then check in Administrators collection
      const adminQuery = query(
        collection(db, 'administrators'),
        where('phone', '==', number),
        where('password', '==', password)
      );
      const adminSnapshot = await getDocs(adminQuery);

      if (!adminSnapshot.empty) {
        const adminData = adminSnapshot.docs[0].data();
        localStorage.setItem('adminData', JSON.stringify(adminData));
        alert('Administrator login successful');
        navigate('/AdminHome');
        return;
      }
      // Finally check in Verifiers collection
      const verifierQuery = query(
        collection(db, 'verifiers'),
        where('phone', '==', number),
        where('password', '==', password)
      );
      const verifierSnapshot = await getDocs(verifierQuery);

      if (!verifierSnapshot.empty) {
        const verifierData = verifierSnapshot.docs[0].data();
        localStorage.setItem('verifierData', JSON.stringify(verifierData));
        alert('Verifier login successful');
        navigate('/VerifierHome');
        return;
      }

      // No match
      alert('Invalid credentials');
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong. Try again.');
    }
    
  };

  return (
    <>
      <style>{`
        .login-container {
          width: 450px;
          margin: 60px auto;
          padding: 40px;
          border: 1px solid #f26522;
          border-radius: 10px;
          background-color: #f9f9f9;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 28px;
          color: #333;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .input-group label {
          margin-bottom: 5px;
          font-size: 15px;
          font-weight: 500;
        }

        .input-group input {
          height: 40px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          background-color: #f4f4f4;
        }

        .login-button {
          width: 100%;
          margin: 10px 0;
          padding: 12px;
          background-color: #f26522;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .login-button:hover {
          background-color: #d1541d;
        }
      `}</style>

      <div className="login-container">
        <h2>Login</h2>

        <div className="input-group">
          <label>Enter number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Mobile number"
          />
        </div>

        <div className="input-group">
          <label>Enter password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>
        {/* <button className="login-button" onClick={() => navigate('/VerifierHome')}>Login as Verifier</button> */}
        <button className="login-button" onClick={() => navigate('/Register')}>Register as Student</button>
      </div>
    </>
  );
}
