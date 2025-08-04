
// import React from 'react';  
// export default function MSRTCHeader() {
//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         header {
//           font-family: Arial, sans-serif;
//         }

//         .top-bar {
//           background-color: #f26522;
//           color: white;
//           padding: 5px 15px;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex-wrap: wrap;
//           font-size: 14px;
//           justify-content: space-between;
//         }

//         .helpline {
//           font-weight: bold;
//         }

//         .top-icons i {
//           margin-left: 5px;
//           cursor: pointer;
//         }

//         .search-box {
//           padding: 4px 8px;
//           border-radius: 5px;
//           border: none;
//         }

//         .skip-btn {
//           background: #eee;
//           padding: 4px 8px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }

//         .font-buttons button {
//           margin: 0 2px;
//           padding: 4px 6px;
//           border: none;
//           border-radius: 3px;
//           cursor: pointer;
//         }

//         .lang-dropdown {
//           padding: 4px;
//         }

//         .login-btn {
//           background-color: maroon;
//           color: white;
//           padding: 4px 10px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }

//         .main-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 10px 15px;
//           background: white;
//         }

//         .logo {
//           height: 60px;
//         }

//         .titles {
//           text-align: center;
//           flex: 1;
//         }

//         .titles h2 {
//           font-size: 18px;
//           font-weight: bold;
//         }

//         .titles h3 {
//           font-size: 16px;
//           color: maroon;
//         }

//         .emblem {
//           height: 60px;
//         }

//         .main-nav {
//           background-color: white;
//           border-top: 1px solid #ccc;
//         }

//         .main-nav ul {
//           display: flex;
//           list-style: none;
//           padding: 10px 15px;
//           gap: 20px;
//           font-weight: bold;
//           flex-wrap: wrap;
//         }

//         .main-nav li {
//           cursor: pointer;
//         }

//         .highlight-bar {
//           background-color: #911f00;
//           color: white;
//           display: flex;
//           align-items: center;
//           padding: 8px 15px;
//           font-size: 14px;
//           gap: 10px;
//         }

//         .highlight-bar button {
//           background-color: green;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           padding: 5px 10px;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .highlight-bar .new {
//           color: #00eaff;
//           font-weight: bold;
//         }
//       `}</style>

//       <header>
//         {/* Top Orange Bar */}
//         <div className="top-bar">
//           <span>Welcome to MSRTC</span>
//           <span className="helpline">📞 Toll Free - Helpline No.: 1800 22 1250</span>
//           <div className="top-icons">
//             <i className="fab fa-facebook-f" />
//             <i className="fab fa-twitter" />
//             <i className="fab fa-telegram" />
//             <i className="fab fa-youtube" />
//             <i className="fab fa-instagram" />
//           </div>
//           <input type="text" placeholder="Search" className="search-box" />
          
         
          
//           <button className="login-btn">Login ▾</button>
//         </div>

//         {/* Logo and Title */}
//         <div className="main-header">
//           <img
//             src="/src/assets/image.png"
//             alt="MSRTC Logo"
//             className="logo"
//           />
//           <div className="titles">
//             <h2>Maharashtra State Road Transport Corporation</h2>
//             <h3>महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</h3>
//           </div>
//           <img
//             src="https://msrtc.maharashtra.gov.in/images/emblem.png"
//             alt="Gov Emblem"
//             className="emblem"
//           />
//         </div>

        

//         {/* Highlight Bar */}
//         <div className="highlight-bar">
//           <button>Highlight :</button>
//           <span>
//             <span className="new">NEW</span> To avail the 15% discount on ti...
//           </span>
//         </div>
//       </header>
//     </>
//   );
// }



import React from 'react';  

export default function MSRTCHeader() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        header {
          font-family: Arial, sans-serif;
        }

        .top-bar {
          background-color: #f26522;
          color: white;
          padding: 5px 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 14px;
          justify-content: space-between;
        }

        .helpline {
          font-weight: bold;
        }

        .top-icons i {
          margin-left: 5px;
          cursor: pointer;
        }

        .search-box {
          padding: 4px 8px;
          border-radius: 5px;
          border: none;
        }

        .skip-btn {
          background: #eee;
          padding: 4px 8px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .font-buttons button {
          margin: 0 2px;
          padding: 4px 6px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        .lang-dropdown {
          padding: 4px;
        }

        .login-btn {
          background-color: maroon;
          color: white;
          padding: 4px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .main-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          background: white;
        }

        .logo {
          height: 60px;
        }

        .titles {
          text-align: center;
          flex: 1;
        }

        .titles h2 {
          font-size: 18px;
          font-weight: bold;
        }

        .titles h3 {
          font-size: 16px;
          color: maroon;
        }

        .emblem {
          height: 60px;
        }

        .main-nav {
          background-color: white;
          border-top: 1px solid #ccc;
        }

        .main-nav ul {
          display: flex;
          list-style: none;
          padding: 10px 15px;
          gap: 20px;
          font-weight: bold;
          flex-wrap: wrap;
        }

        .main-nav li {
          cursor: pointer;
        }

        .highlight-bar {
          background-color: #911f00;
          color: white;
          display: flex;
          align-items: center;
          padding: 8px 15px;
          font-size: 14px;
          gap: 10px;
          flex-direction: column;
        }

        .highlight-bar button {
          background-color: green;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          font-weight: bold;
          cursor: pointer;
        }

        .highlight-bar .new {
          color: #00eaff;
          font-weight: bold;
        }

        .pass-marquee {
          width: 100%;
          color: yellow;
          font-weight: bold;
        }
      `}</style>

      <header>
        {/* Top Orange Bar */}
        <div className="top-bar">
          <span>Welcome to MSRTC</span>
          <span className="helpline">📞 Toll Free - Helpline No.: 1800 22 1250</span>
          <div className="top-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-telegram" />
            <i className="fab fa-youtube" />
            <i className="fab fa-instagram" />
          </div>
          <input type="text" placeholder="Search" className="search-box" />
          <button className="login-btn">Login ▾</button>
        </div>

        {/* Logo and Title */}
        <div className="main-header">
          <img
            src="/src/assets/image.png"
            alt="MSRTC Logo"
            className="logo"
          />
          <div className="titles">
            <h2>Maharashtra State Road Transport Corporation</h2>
            <h3>महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</h3>
          </div>
          <img
            src="https://msrtc.maharashtra.gov.in/images/emblem.png"
            alt="Gov Emblem"
            className="emblem"
          />
        </div>

        {/* Highlight Bar with Marquee */}
        <div className="highlight-bar">
          <button>Highlight :</button>
          

          <marquee behavior="scroll" direction="left" scrollamount="5" className="pass-marquee">
            🚍 Pass Renewal Deadline: 15th August | 🎓 Student ID mandatory | 📅 Next application window opens from 5th August | 🔔 Carry ID Card while travelling
          </marquee>
        </div>
      </header>
    </>
  );
}
