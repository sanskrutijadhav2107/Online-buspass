import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase'; // adjust path to your firebase.js
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const VerifierForm = () => {
  const { id: studentId } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'passes', studentId); // doc ID = studentId
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          alert('Applicant not found.');
        }
      } catch (error) {
        console.error('Error fetching applicant:', error);
      }
    };

    if (studentId) fetchData();
  }, [studentId]);

  const handleApprove = async () => {
    try {
      await updateDoc(doc(db, 'passes', studentId), {
        status: 'approved',
        verifiedAt: new Date().toISOString(),
      });
      alert(`✅ Application ${studentId} Approved`);
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  const handleReject = async () => {
    try {
      await updateDoc(doc(db, 'passes', studentId), {
        status: 'rejected',
        verifiedAt: new Date().toISOString(),
      });
      alert(`❌ Application ${studentId} Rejected`);
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
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
        <div className="row"><span className="label">Date of Birth:</span> {formData.birthdate}</div>
        <div className="row"><span className="label">School/College:</span> {formData.college}</div>
        <div className="row"><span className="label">Phone Number:</span> {formData.phone_no || 'N/A'}</div>
      </div>

      <div className="section">
        <h3>Pass and Route Info</h3>
        <div className="row"><span className="label">Pass Type:</span> {formData.passType}</div>
        <div className="row"><span className="label">From:</span> {formData.from}</div>
        <div className="row"><span className="label">To:</span> {formData.to}</div>
        <div className="row"><span className="label">Distance:</span> {formData.distance_km || 'N/A'} km</div>
        <div className="row"><span className="label">Cost:</span> ₹{formData.cost || 'N/A'}</div>
      </div>

      <div className="section">
        <h3>Uploaded Documents</h3>
        <div className="row">
          <span className="label">Declaration Form:</span>
          {formData.declaration_form_path ? (
            <a href={formData.declaration_form_path} target="_blank" rel="noopener noreferrer">Download</a>
          ) : 'N/A'}
        </div>
        <div className="row">
          <span className="label">Fee Receipt:</span>
          {formData.fee_receipt_path ? (
            <a href={formData.fee_receipt_path} target="_blank" rel="noopener noreferrer">Download</a>
          ) : 'N/A'}
        </div>
        <div className="row">
          <span className="label">Aadhaar Card:</span>
          {formData.aadhar_card_path ? (
            <a href={formData.aadhar_card_path} target="_blank" rel="noopener noreferrer">Download</a>
          ) : 'N/A'}
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
