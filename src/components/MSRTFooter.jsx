// import React from 'react';

// export default function MSRTCFooter() {
//   return (
//     <>
//       <style>{`
//         .footer-top {
//           background-color: #f26522;
//           color: white;
//           text-align: center;
//           padding: 10px 5px;
//           font-size: 14px;
//         }

//         .footer-top a {
//           color: white;
//           text-decoration: none;
//           margin: 0 10px;
//           border-right: 1px solid white;
//           padding-right: 10px;
//         }

//         .footer-top a:last-child {
//           border-right: none;
//         }

//         .footer-bottom {
//           background-color: #001c3d;
//           color: white;
//           text-align: center;
//           padding: 10px 5px;
//           font-size: 14px;
//         }

//         .footer-bottom .credit {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 8px;
//           flex-wrap: wrap;
//         }

//         .footer-bottom a {
//           color: #00bfff;
//           text-decoration: none;
//           font-weight: bold;
//         }

//         .footer-bottom .social-icons i {
//           margin-left: 10px;
//           color: white;
//           cursor: pointer;
//         }

//         .footer-version {
//           color: #ffd700;
//           font-weight: bold;
//           font-size: 13px;
//           margin-top: 5px;
//         }
//       `}</style>

//       {/* Top Links */}
//       <div className="footer-top">
//         <a href="#">About Us</a>
//         <a href="#">Privacy Policy</a>
//         <a href="#">Terms & Conditions</a>
//         <a href="#">Refund / Cancellation Policy</a>
//         <a href="#">Product / Services</a>
//       </div>

//       {/* Bottom Info */}
//       <div className="footer-bottom">
//         <div className="credit">
//           <span>2022, MSRTC. All rights reserved. Project implemented by</span>
//           <a href="#">Ebixcash Limited.</a>
//           <div className="social-icons">
//             <i className="fab fa-facebook-f" />
//             <i className="fab fa-twitter" />
//             <i className="fab fa-instagram" />
//           </div>
//         </div>
//         <div className="footer-version">Version : 2.1.1.127</div>
//       </div>
//     </>
//   );
// }


export default function MSRTCFooter() {
  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .footer-container {
          margin-top: auto;
        }

        .footer-top {
          background-color: #f26522;
          color: white;
          text-align: center;
          padding: 10px 5px;
          font-size: 14px;
        }

        .footer-top a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          border-right: 1px solid white;
          padding-right: 10px;
        }

        .footer-top a:last-child {
          border-right: none;
        }

        .footer-bottom {
          background-color: #001c3d;
          color: white;
          text-align: center;
          padding: 10px 5px;
          font-size: 14px;
        }

        .footer-bottom .credit {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-bottom a {
          color: #00bfff;
          text-decoration: none;
          font-weight: bold;
        }

        .footer-bottom .social-icons i {
          margin-left: 10px;
          color: white;
          cursor: pointer;
        }

        .footer-version {
          color: #ffd700;
          font-weight: bold;
          font-size: 13px;
          margin-top: 5px;
        }
      `}</style>

      {/* Footer wrapped in a container to push to bottom */}
      <div className="footer-container">
        <div className="footer-top">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund / Cancellation Policy</a>
          <a href="#">Product / Services</a>
        </div>

        <div className="footer-bottom">
          <div className="credit">
            <span>2022, MSRTC. All rights reserved. Project implemented by</span>
            <a href="#">Ebixcash Limited.</a>
            <div className="social-icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
            </div>
          </div>
          <div className="footer-version">Version : 2.1.1.127</div>
        </div>
      </div>
    </>
  );
}
