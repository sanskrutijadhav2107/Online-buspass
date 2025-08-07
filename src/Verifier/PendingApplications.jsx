
// // ApplicantList.jsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ApplicantList = () => {
//   const navigate = useNavigate();

//   const applicants = [
//     {
//       name: 'Sanskruti Jadhav',
//       id: '86061157509162',
//     },
//     // Add more if needed
//   ];

//   const handleView = (id) => {
//     navigate(`/ViewPage/${id}`);
//   };

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
//               <th>Applicant ID</th>
//               <th>Verify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map((applicant, index) => (
//               <tr key={index}>
//                 <td>{applicant.name}</td>
//                 <td>{applicant.id}</td>
//                 <td>
//                   <button className="view-button" onClick={() => handleView(applicant.id)}>
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



// import React, { useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const PendingApplications = () => {
//   const [applicants, setApplicants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPending = async () => {
//       const q = query(collection(db, 'applications'), where('status', '==', 'pending'));
//       const querySnapshot = await getDocs(q);

//       const fetchedApplicants = [];
//       querySnapshot.forEach((doc) => {
//         fetchedApplicants.push({ id: doc.id, ...doc.data() });
//       });

//       setApplicants(fetchedApplicants);
//     };

//     fetchPending();
//   }, []);

//   const handleView = (id) => {
//     navigate(`/ViewPage/${id}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Pending Applications</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Applicant Name</th>
//             <th>Applicant ID</th>
//             <th>Verify</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applicants.map((applicant, index) => (
//             <tr key={index}>
//               <td>{applicant.name}</td>
//               <td>{applicant.id}</td>
//               <td>
//                 <button onClick={() => handleView(applicant.id)}>View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PendingApplications;


// import React, { useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const PendingApplications = () => {
//   const [applicants, setApplicants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPending = async () => {
//       const q = query(collection(db, 'applications'), where('status', '==', 'pending'));
//       const querySnapshot = await getDocs(q);

//       const fetchedApplicants = [];
//       querySnapshot.forEach((doc) => {
//         fetchedApplicants.push({ id: doc.id, ...doc.data() });
//       });

//       setApplicants(fetchedApplicants);
//     };

//     fetchPending();
//   }, []);

//   const handleView = (id) => {
//     navigate(`/ViewPage/${id}`);
//   };

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
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//         }

//         th, td {
//           border: 1px solid #ddd;
//           padding: 12px 15px;
//           text-align: left;
//         }

//         th {
//           background-color: #f9f9f9;
//           font-weight: bold;
//         }

//         tr:nth-child(even) {
//           background-color: #f2f2f2;
//         }

//         .view-button {
//           background-color: #ff5722;
//           color: white;
//           border: none;
//           padding: 8px 16px;
//           cursor: pointer;
//           border-radius: 4px;
//           transition: background-color 0.3s ease;
//         }

//         .view-button:hover {
//           background-color: #e64a19;
//         }

//         .no-data {
//           text-align: center;
//           margin-top: 20px;
//           font-size: 18px;
//           color: #777;
//         }

//         .nav-buttons {
//           margin-bottom: 20px;
//         }

//         .nav-button {
//           margin-right: 10px;
//           padding: 8px 16px;
//           background-color: #1976d2;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .nav-button:hover {
//           background-color: #0d47a1;
//         }
//       `}</style>

//       <div className="container">
//         <h2 className="heading">Pending Applications</h2>

//         <div className="nav-buttons">
//           <button className="nav-button" onClick={() => navigate('/approved')}>Approved</button>
//           <button className="nav-button" onClick={() => navigate('/rejected')}>Rejected</button>
//         </div>

//         {applicants.length === 0 ? (
//           <div className="no-data">No pending applications.</div>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Applicant Name</th>
//                 <th>Applicant ID</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map((applicant, index) => (
//                 <tr key={index}>
//                   <td>{applicant.name}</td>
//                   <td>{applicant.id}</td>
//                   <td>
//                     <button
//                       className="view-button"
//                       onClick={() => handleView(applicant.id)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

// export default PendingApplications;




// import React, { useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebase'; // Make sure path is correct
// import { useNavigate } from 'react-router-dom';

// const PendingApplications = () => {
//   const [applicants, setApplicants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const q = query(collection(db, 'applications'), where('status', '==', 'pending'));
//         const querySnapshot = await getDocs(q);
//         const fetchedApplicants = [];
//         querySnapshot.forEach((doc) => {
//           fetchedApplicants.push({ id: doc.id, ...doc.data() });
//         });
//         setApplicants(fetchedApplicants);
//         console.log('Fetched Applicants:', fetchedApplicants);
//       } catch (error) {
//         console.error('Error fetching applicants:', error);
//       }
//     };

//     fetchApplicants();
//   }, []);

//   const handleView = (id) => {
//     navigate(`/ViewPage/${id}`);
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">Pending Applications</h2>
//       {applicants.length === 0 ? (
//         <p>No pending applications found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Applicant Name</th>
//               <th>Applicant ID</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applicants.map((applicant) => (
//               <tr key={applicant.id}>
//                 <td>{applicant.name}</td>
//                 <td>{applicant.id}</td>
//                 <td>
//                   <button className="view-button" onClick={() => handleView(applicant.id)}>
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

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
//     </div>
//   );
// };

// export default PendingApplications;



// import React, { useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebase'; // make sure this path is correct

// const PendingApplications = () => {
//   const [applications, setApplications] = useState([]);

//   useEffect(() => {
//     const fetchPendingApplications = async () => {
//       try {
//         const q = query(
//           collection(db, 'applications'),
//           where('status', '==', 'pending')
//         );
//         const querySnapshot = await getDocs(q);
//         const fetchedApplications = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         console.log('Fetched Applications:', fetchedApplications); // Check console output
//         setApplications(fetchedApplications);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };

//     fetchPendingApplications();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="heading">Pending Applications</h2>
//       {applications.length === 0 ? (
//         <p>No pending applications found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Pass Type</th>
//               <th>View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((app) => (
//               <tr key={app.id}>
//                 <td>{app.name}</td>
//                 <td>{app.from}</td>
//                 <td>{app.to}</td>
//                 <td>{app.passType}</td>
//                 <td>
//                   <button
//                     className="view-button"
//                     onClick={() => alert(`Viewing ${app.name}`)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default PendingApplications;







import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // make sure path is correct
import { useNavigate } from 'react-router-dom';

  
const PendingApplications = () => {
  const [applications, setApplications] = useState([]);
const navigate = useNavigate();

const handleView = (id) => {
  navigate(`/application/${id}`);
};

  useEffect(() => {
    const fetchPendingApplications = async () => {
      try {
        const q = query(
          collection(db, 'applications'),
          where('status', '==', 'pending')
        );
        const querySnapshot = await getDocs(q);
        const fetchedApplications = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched Applications:', fetchedApplications);
        setApplications(fetchedApplications);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchPendingApplications();
  }, []);

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
          margin-top: 20px;
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
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 4px;
        }

        .view-button:hover {
          background-color: #45a049;
        }

        .no-data {
          color: #888;
          font-style: italic;
          margin-top: 20px;
        }
      `}</style>

      <div className="container">
        <h2 className="heading">Pending Applications</h2>
        {applications.length === 0 ? (
          <p className="no-data">No pending applications found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Pass Type</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.from}</td>
                  <td>{app.to}</td>
                  <td>{app.passType}</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleView(app.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default PendingApplications;
