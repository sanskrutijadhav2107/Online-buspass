
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default function LoginPage() {
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       // First check in Students collection
//       const studentQuery = query(
//         collection(db, 'students'),
//         where('phone', '==', number),
//         where('password', '==', password)
//       );
//       const studentSnapshot = await getDocs(studentQuery);

   
//      if (!studentSnapshot.empty) {
//   const doc = studentSnapshot.docs[0]; // ✅ Get the Firestore doc
//   const studentData = { id: doc.id, ...doc.data() }; // ✅ Include the document ID
//   localStorage.setItem('studentData', JSON.stringify(studentData));
//   localStorage.setItem('studentId', doc.id); // ✅ Explicitly store the studentId

//   alert('Student login successful');
//   navigate('/UserHome');
//   return;
// }
//       // Then check in Administrators collection
//       const adminQuery = query(
//         collection(db, 'administrators'),
//         where('phone', '==', number),
//         where('password', '==', password)
//       );
//       const adminSnapshot = await getDocs(adminQuery);

//       if (!adminSnapshot.empty) {
//         const adminData = adminSnapshot.docs[0].data();
//         localStorage.setItem('adminData', JSON.stringify(adminData));
//         alert('Administrator login successful');
//         navigate('/AdminHome');
//         return;
//       }
//       // Finally check in Verifiers collection
//       const verifierQuery = query(
//         collection(db, 'verifiers'),
//         where('phone', '==', number),
//         where('password', '==', password)
//       );
//       const verifierSnapshot = await getDocs(verifierQuery);

//       if (!verifierSnapshot.empty) {
//         const verifierData = verifierSnapshot.docs[0].data();
//         localStorage.setItem('verifierData', JSON.stringify(verifierData));
//         alert('Verifier login successful');
//         navigate('/VerifierHome');
//         return;
//       }

//       // No match
//       alert('Invalid credentials');
//     } catch (error) {
//       console.error('Login Error:', error);
//       alert('Something went wrong. Try again.');
//     }
    
//   };

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

//         <button className="login-button" onClick={handleLogin}>Login</button>
//         {/* <button className="login-button" onClick={() => navigate('/VerifierHome')}>Login as Verifier</button> */}
//         <button className="login-button" onClick={() => navigate('/Register')}>Register as Student</button>
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
        const doc = studentSnapshot.docs[0];
        const studentData = { id: doc.id, ...doc.data() };
        localStorage.setItem('studentData', JSON.stringify(studentData));
        localStorage.setItem('studentId', doc.id);

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
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: url('https://t4.ftcdn.net/jpg/13/06/43/63/360_F_1306436399_lKMO2qWsMuqjll9kqeklGdz6J5du3YQK.jpg') no-repeat center center fixed;
background-size: cover;

        }

        .login-container {
          width: 400px;
          height: 500px;
          margin: 100px auto;
          padding: 40px;
          border: 1px solid #f26522;
          border-radius: 10px;
          background-color: rgba(249, 249, 249, 0.95); /* semi-transparent so bg is visible */
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 35px;
          color: #f26522;
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
        <button className="login-button" onClick={() => navigate('/Register')}>Register as Student</button>
      </div>
    </>
  );
}

