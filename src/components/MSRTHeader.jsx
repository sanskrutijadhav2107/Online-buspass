import React from 'react';
import Marquee from "react-fast-marquee";
import msrtcLogo from "../assets/image.png";  
import govEmblem from "../assets/emblem.png"; 

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
          <span>Welcome to MSRTC Online Bus Pass Portal ! </span>
          
        </div>

        {/* Logo and Title */}
        <div className="main-header">

         <img src={msrtcLogo} alt="MSRTC Logo" className="logo" />

          
          <div className="titles">
            <h2>Maharashtra State Road Transport Corporation</h2>
            <h3>महाराष्ट्र राज्य मार्ग परिवहन महामंडळ</h3>
          </div>
        <img src={govEmblem} alt="Gov Emblem" className="emblem" />
        </div>

        {/* Highlight Bar with Marquee */}
        <div className="highlight-bar">
          <button>Highlight :</button>
          

          
           <Marquee gradient={false} speed={50}>
                🚌 No Need to Stand in Queues – Get Your Digital Pass Instantly   |   
                🌱 Save Time, Save Paper – Go Digital with Bus Pass   |   
                ⏰ Pass Renewal Deadline: 15th August   |   
                🎓 Student ID Mandatory for Application   |   
                📅 Next Application Window Opens: 5th August   |   
                🔔 Carry Valid ID Card While Travelling   |   
                💳 Easy Online Payment & Instant Approval   |   
                📱 Download Your E-Pass Anytime, Anywhere   
           </Marquee>


        </div>
      </header>
    </>
  );
}
