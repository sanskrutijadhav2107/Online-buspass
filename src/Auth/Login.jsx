// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// export default function LoginPage() {
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const handleLogin = () => {
//   // logic to check login
//   navigate("/UserHome");
// };

//   return (
//     <>
//       <style>{`
//         .login-container {
//           width: 300px;
//           margin: 40px auto;
//           padding: 30px;
//           border: 1px solid #f26522;
//           border-radius: 5px;
//           background-color: #f9f9f9;
//           font-family: Arial, sans-serif;
//         }

//         .login-container h2 {
//           text-align: center;
//           margin-bottom: 30px;
//         }

//         .input-group {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 20px;
//         }

//         .input-group label {
//           margin-bottom: 5px;
//           font-size: 14px;
//         }

//         .input-group input {
//           height: 30px;
//           padding: 5px 10px;
//           border: 1px solid #999;
//           border-radius: 3px;
//           background-color: #eaeaea;
//         }

//         .login-button {
//           width: 100%;
//           margin: 10px 0;
//           padding: 10px;
//           background-color: #f26522;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           font-weight: bold;
//           cursor: pointer;
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

//         <button className="login-button" onClick={() => navigate('/UserHome')}>Login as User</button>
//         <button className="login-button" onClick={() => navigate('/VerifierHome')}>Login as verifier</button>
//         <button className="login-button" onClick={() => navigate('/AdminHome')}>Login as administrator</button>
//         <button className="login-button" onClick={() => navigate('/Register')}> Register </button>
//       </div>
      
//     </>
    
//   );
// }













import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic
    navigate("/UserHome");
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

        <button className="login-button" onClick={() => navigate('/UserHome')}>Login as User</button>
        <button className="login-button" onClick={() => navigate('/VerifierHome')}>Login as Verifier</button>
        <button className="login-button" onClick={() => navigate('/AdminHome')}>Login as Administrator</button>
        <button className="login-button" onClick={() => navigate('/Register')}>Register</button>
      </div>
    </>
  );
}
