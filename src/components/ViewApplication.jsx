

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase';

// const ViewApplication = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [application, setApplication] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplication = async () => {
//       try {
//         const docRef = doc(db, 'applications', id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setApplication(docSnap.data());
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching application:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplication();
//   }, [id]);

//   const handleApprove = async () => {
//     try {
//       const docRef = doc(db, 'applications', id);
//       await updateDoc(docRef, { status: 'approved' });
//       alert('Application Approved');
//       navigate('/approved');
//     } catch (error) {
//       console.error('Error approving application:', error);
//     }
//   };

//   const handleReject = async () => {
//     try {
//       const docRef = doc(db, 'applications', id);
//       await updateDoc(docRef, { status: 'rejected' });
//       alert('Application Rejected');
//       navigate('/rejected');
//     } catch (error) {
//       console.error('Error rejecting application:', error);
//     }
//   };

//   if (loading) {
//     return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;
//   }

//   if (!application) {
//     return <p style={{ textAlign: 'center', marginTop: '50px' }}>Application not found!</p>;
//   }

//   const { name, from, to, passType, schoolOrCollege, studentPhone, documents } = application;

//   return (
//     <div style={{
//       padding: '30px',
//       fontFamily: 'Arial, sans-serif',
//       maxWidth: '900px',
//       margin: '0 auto',
//       backgroundColor: '#ffffff',
//       borderRadius: '8px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Application Details</h2>

//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>From:</strong> {from}</p>
//       <p><strong>To:</strong> {to}</p>
//       <p><strong>Pass Type:</strong> {passType}</p>
//       <p><strong>School/College:</strong> {schoolOrCollege}</p>
//       <p><strong>Phone:</strong> {studentPhone}</p>

//       <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
//   <div>
//     <p><strong>Photo:</strong></p>
//     <img src={documents?.photo} alt="Photo" style={{ width: '100%', maxWidth: '300px', height: 'auto', border: '1px solid #ccc', borderRadius: '6px' }} />
//   </div>
//   <div>
//     <p><strong>Aadhaar:</strong></p>
//     <img src={documents?.aadhaar} alt="Aadhaar" style={{ width: '100%', maxWidth: '300px', height: 'auto', border: '1px solid #ccc', borderRadius: '6px' }} />
//   </div>
//   <div>
//     <p><strong>Declaration:</strong></p>
//     <img src={documents?.declaration} alt="Declaration" style={{ width: '100%', maxWidth: '300px', height: 'auto', border: '1px solid #ccc', borderRadius: '6px' }} />
//   </div>
//   <div>
//     <p><strong>Receipt:</strong></p>
//     <img src={documents?.receipt} alt="Receipt" style={{ width: '100%', maxWidth: '300px', height: 'auto', border: '1px solid #ccc', borderRadius: '6px' }} />
//   </div>
// </div>
//       <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
//         <button style={{
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           padding: '12px 24px',
//           cursor: 'pointer',
//           borderRadius: '6px',
//           fontSize: '16px'
//         }} onClick={handleApprove}>Approve</button>

//         <button style={{
//           backgroundColor: '#f44336',
//           color: 'white',
//           border: 'none',
//           padding: '12px 24px',
//           cursor: 'pointer',
//           borderRadius: '6px',
//           fontSize: '16px'
//         }} onClick={handleReject}>Reject</button>
//       </div>
//     </div>
//   );
// };

// export default ViewApplication;







import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ViewApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const docRef = doc(db, 'applications', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setApplication(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching application:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id]);

  const handleApprove = async () => {
    try {
      const docRef = doc(db, 'applications', id);
      await updateDoc(docRef, { status: 'approved' });
      alert('Application Approved');
      navigate('/approved');
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  const handleReject = async () => {
    try {
      const docRef = doc(db, 'applications', id);
      await updateDoc(docRef, { status: 'rejected' });
      alert('Application Rejected');
      navigate('/rejected');
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  const openInNewTab = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Document not available');
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;
  }

  if (!application) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Application not found!</p>;
  }

  const { name, from, to, passType, schoolOrCollege, studentPhone, documents } = application;

  return (
    <div style={{
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Application Details</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>From:</strong> {from}</p>
      <p><strong>To:</strong> {to}</p>
      <p><strong>Pass Type:</strong> {passType}</p>
      <p><strong>School/College:</strong> {schoolOrCollege}</p>
      <p><strong>Phone:</strong> {studentPhone}</p>

      <div style={{
  display: 'flex',
  gap: '30px',
  marginTop: '30px',
  flexWrap: 'wrap',
  justifyContent: 'center'
}}>
  {[
    { label: 'Photo', src: documents?.photo },
    { label: 'Aadhaar', src: documents?.aadhaar },
    { label: 'Declaration', src: documents?.declaration },
    { label: 'Receipt', src: documents?.receipt }
  ].map((doc, index) => (
    <div key={index} style={{ textAlign: 'center' }}>
      <p><strong>{doc.label}:</strong></p>
      <img
        src={doc.src}
        alt={doc.label}
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
      />
      <br />
      <a
        href={doc.src}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        View
      </a>
    </div>
  ))}
</div>



      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          cursor: 'pointer',
          borderRadius: '6px',
          fontSize: '16px'
        }} onClick={handleApprove}>Approve</button>

        <button style={{
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          cursor: 'pointer',
          borderRadius: '6px',
          fontSize: '16px'
        }} onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default ViewApplication;
