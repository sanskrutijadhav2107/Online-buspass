import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MSRTHeader from './components/MSRTHeader';
import MSRTFooter from './components/MSRTFooter';
import Login from './Auth/Login';
import Register from './Auth/Register';
import UserHome from './Users/UserHome';
import ApplicationForm from './Users/ApplicationForm';
import VerifierHome from './Verifier/VerifierHome';
import Pending from './Verifier/Pending';
import Rejected from './Verifier/Rejected';
import Accepted from './Verifier/Accepted';
import ViewPage from './Verifier/ViewPage';
import AdminHome from './Administrator/AdminHome';
import ManageVerifier from './Administrator/ManageVerifier';
import AddVerifier from './Administrator/AddVerifier';
import StudentList from './Administrator/StudentList';
import EmployeeList from './Administrator/EmployeeList';
import DeclarationForm from './components/DeclarationForm';     
import PassIDPage from './components/PassIdPage'; // Import the PassIDPage component
import PassPage from './components/PassPage'; // Import the PassPage component  
import PassRenewalPage  from './Users/ PassRenewalPage';
import AppliedPassPage from './Users/AppliedPassPage';
function App() {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: Arial, sans-serif;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }
      `}</style>

      <div className="app-container">
        <Router>
          <MSRTHeader />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/UserHome" element={<UserHome />} />
              <Route path="/ApplicationForm" element={<ApplicationForm />} />
              <Route path="/VerifierHome" element={<VerifierHome />} />
              <Route path="/Pending" element={<Pending />} />
              <Route path="/Accepted" element={<Accepted />} />
              <Route path="/Rejected" element={<Rejected />} />
              <Route path="/ViewPage/:id" element={<ViewPage />} />
              <Route path="/AdminHome" element={<AdminHome />} />
              <Route path="/ManageVerifier" element={<ManageVerifier />} />
              <Route path="/AddVerifier" element={<AddVerifier />} />
              <Route path="/StudentList" element={<StudentList />} />
              <Route path="/EmployeeList" element={<EmployeeList />} />
              <Route path="/declaration-form" element={<DeclarationForm />} />
              <Route path="/pass-id" element={<PassIDPage />} /> {/* Add the PassIDPage route */}
              <Route path="/pass-page" element={<PassPage />} /> {/* Add the PassPage route */}
              <Route path="/renewal" element={<PassRenewalPage />} /> {/* Add the PassRenewalPage route */}
              <Route path="/applied-pass" element={<AppliedPassPage />} /> {/* Add the AppliedPassPage route */}
            </Routes>
          </div>
          <MSRTFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
