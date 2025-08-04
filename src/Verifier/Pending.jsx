// import React from 'react';

// const ApplicantList = () => {
//   const applicants = [
//     {
//       name: 'Sanskruti Jadhav',
//       id: '86061157509162',
//     },
//     // You can add more applicants here
//   ];

//  const handleView = (id) => {
//   navigate(`/ViewPage/${id}`);
// };

//   return (
//     <>
//       <style>{`
//         .container {
//           padding: 20px;
//           font-family: Arial, sans-serif;
//         }

//         .heading {
//           font-weight: bold;
//           font-size: 24px;
//           margin-bottom: 20px;
//           text-shadow: 1px 1px 2px #ccc;
//         }

//         table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         th, td {
//           border: 1px solid #ccc;
//           padding: 10px;
//           text-align: left;
//         }

//         th {
//           background-color: #f2f2f2;
//         }

//         .view-button {
//           background-color: #ff5722;
//           color: white;
//           border: none;
//           padding: 6px 12px;
//           cursor: pointer;
//           border-radius: 4px;
//         }

//         .view-button:hover {
//           background-color: #e64a19;
//         }
//       `}</style>

//       <div className="container">
//         <h2 className="heading">Applicant List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Applicant Name</th>
//               <th>Applicant Id</th>
//               <th>Verify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map((applicant, index) => (
//               <tr key={index}>
//                 <td>{applicant.name}</td>
//                 <td>{applicant.id}</td>
//                 <td>
//                   <button
//                     className="view-button"
//                     onClick={() => handleView(applicant.id)}
                  
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ApplicantList;




// ApplicantList.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicantList = () => {
  const navigate = useNavigate();

  const applicants = [
    {
      name: 'Sanskruti Jadhav',
      id: '86061157509162',
    },
    // Add more if needed
  ];

  const handleView = (id) => {
    navigate(`/ViewPage/${id}`);
  };

  return (
    <>
      <style>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .heading {
          font-weight: bold;
          font-size: 24px;
          margin-bottom: 20px;
          text-shadow: 1px 1px 2px #ccc;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        .view-button {
          background-color: #ff5722;
          color: white;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 4px;
        }

        .view-button:hover {
          background-color: #e64a19;
        }
      `}</style>

      <div className="container">
        <h2 className="heading">Applicant List</h2>
        <table>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Applicant ID</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.id}</td>
                <td>
                  <button className="view-button" onClick={() => handleView(applicant.id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApplicantList;
