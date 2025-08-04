// import React, { useEffect, useState } from 'react';

// const VerifierForm = () => {
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     // Simulate fetch from backend
//     // Replace with actual API call
//     const fetchData = async () => {
//       const data = {
//         name: 'John Doe',
//         dob: '2005-08-15',
//         school_college: 'XYZ High School',
//         phone_no: '9876543210',
//         pass_type: 'Monthly',
//         route_from: 'City A',
//         route_to: 'City B',
//         distance_km: 20,
//         cost: 300,
//         declaration_form_path: '/uploads/decl_form_123.pdf',
//         fee_receipt_path: '/uploads/receipt_123.pdf',
//         aadhar_card_path: '/uploads/aadhar_123.pdf',
//       };
//       setFormData(data);
//     };

//     fetchData();
//   }, []);

//   const handleApprove = () => {
//     alert('Application Approved');
//     // API call to mark approved
//   };

//   const handleReject = () => {
//     alert('Application Rejected');
//     // API call to mark rejected
//   };

//   if (!formData) return <div>Loading...</div>;

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <style>{`
//         .section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
//         .section h3 { margin-bottom: 10px; color: #333; }
//         .row { margin: 5px 0; }
//         .label { font-weight: bold; }
//         .button-container { margin-top: 20px; }
//         .btn { padding: 10px 20px; margin-right: 10px; border: none; cursor: pointer; }
//         .approve { background-color: green; color: white; }
//         .reject { background-color: red; color: white; }
//         a { color: blue; text-decoration: underline; }
//       `}</style>

//       <button onClick={() => window.history.back()}>Back</button>
//       <h2>Applicant Form Student</h2>

//       <div className="section">
//         <h3>Basic Information</h3>
//         <div className="row"><span className="label">Name:</span> {formData.name}</div>
//         <div className="row"><span className="label">Date Of Birth:</span> {formData.dob}</div>
//         <div className="row"><span className="label">School/College:</span> {formData.school_college}</div>
//         <div className="row"><span className="label">Phone No.:</span> {formData.phone_no}</div>
//       </div>

//       <div className="section">
//         <h3>Pass Information</h3>
//         <div className="row"><span className="label">Pass Type:</span> {formData.pass_type}</div>
//       </div>

//       <div className="section">
//         <h3>Route Information</h3>
//         <div className="row"><span className="label">From:</span> {formData.route_from}</div>
//         <div className="row"><span className="label">To:</span> {formData.route_to}</div>
//         <div className="row"><span className="label">Distance:</span> {formData.distance_km} km</div>
//         <div className="row"><span className="label">Cost:</span> ₹{formData.cost}</div>
//       </div>

//       <div className="section">
//         <h3>Uploaded Documents</h3>
//         <div className="row">
//           <span className="label">Declaration Form:</span>{' '}
//           <a href={formData.declaration_form_path} target="_blank" rel="noreferrer">View</a>
//         </div>
//         <div className="row">
//           <span className="label">School/College Fee Receipt:</span>{' '}
//           <a href={formData.fee_receipt_path} target="_blank" rel="noreferrer">View</a>
//         </div>
//         <div className="row">
//           <span className="label">Aadhar Card:</span>{' '}
//           <a href={formData.aadhar_card_path} target="_blank" rel="noreferrer">View</a>
//         </div>
//       </div>

//       <div className="button-container">
//         <button className="btn reject" onClick={handleReject}>Reject</button>
//         <button className="btn approve" onClick={handleApprove}>Approve</button>
//       </div>
//     </div>
//   );
// };

// export default VerifierForm;







// VerifierForm.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VerifierForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dummyDatabase = {
        '86061157509162': {
          name: 'Sanskruti Jadhav',
          dob: '2005-08-15',
          school_college: 'XYZ High School',
          phone_no: '9876543210',
          pass_type: 'Monthly',
          route_from: 'City A',
          route_to: 'City B',
          distance_km: 20,
          cost: 300,
          declaration_form_path: '/uploads/decl_form_123.pdf',
          fee_receipt_path: '/uploads/receipt_123.pdf',
          aadhar_card_path: '/uploads/aadhar_123.pdf',
        },
      };

      const data = dummyDatabase[id];
      if (data) setFormData(data);
      else alert('Applicant not found.');
    };

    fetchData();
  }, [id]);

  const handleApprove = () => {
    alert(`✅ Application ${id} Approved`);
    // API call can be placed here
  };

  const handleReject = () => {
    alert(`❌ Application ${id} Rejected`);
    // API call can be placed here
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: 'auto' }}>
      <style>{`
        .section { background: #f4f4f4; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 0 5px #ccc; }
        .row { margin-bottom: 10px; }
        .label { font-weight: bold; display: inline-block; width: 160px; }
        .button-container { text-align: center; margin-top: 30px; }
        .btn { padding: 10px 25px; border: none; border-radius: 5px; margin: 0 10px; font-size: 16px; cursor: pointer; }
        .approve { background-color: #4CAF50; color: white; }
        .reject { background-color: #f44336; color: white; }
        a { color: #0077cc; text-decoration: underline; }
        a:hover { color: #f26522; }
        .back-btn { margin-bottom: 20px; background: #ccc; padding: 8px 16px; border-radius: 5px; border: none; cursor: pointer; }
      `}</style>

      <button className="back-btn" onClick={() => window.history.back()}>← Back</button>
      <h2 style={{ textAlign: 'center', color: '#f26725' }}>Applicant Form</h2>

      <div className="section">
        <h3>Basic Information</h3>
        <div className="row"><span className="label">Name:</span> {formData.name}</div>
        <div className="row"><span className="label">Date of Birth:</span> {formData.dob}</div>
        <div className="row"><span className="label">School/College:</span> {formData.school_college}</div>
        <div className="row"><span className="label">Phone Number:</span> {formData.phone_no}</div>
      </div>

      <div className="section">
        <h3>Pass and Route Info</h3>
        <div className="row"><span className="label">Pass Type:</span> {formData.pass_type}</div>
        <div className="row"><span className="label">From:</span> {formData.route_from}</div>
        <div className="row"><span className="label">To:</span> {formData.route_to}</div>
        <div className="row"><span className="label">Distance:</span> {formData.distance_km} km</div>
        <div className="row"><span className="label">Cost:</span> ₹{formData.cost}</div>
      </div>

      <div className="section">
        <h3>Uploaded Documents</h3>
        <div className="row">
          <span className="label">Declaration Form:</span>
          <a href={formData.declaration_form_path} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <div className="row">
          <span className="label">Fee Receipt:</span>
          <a href={formData.fee_receipt_path} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <div className="row">
          <span className="label">Aadhaar Card:</span>
          <a href={formData.aadhar_card_path} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
      </div>

      <div className="button-container">
        <button className="btn reject" onClick={handleReject}>Reject</button>
        <button className="btn approve" onClick={handleApprove}>Approve</button>
      </div>
    </div>
  );
};

export default VerifierForm;
