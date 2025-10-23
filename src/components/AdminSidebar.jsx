import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaIdCard, FaFileAlt, FaClipboardCheck, FaSyncAlt, FaChevronDown } from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 450px;
  background-color: #ffffff;
  border-right: 5px solid #f26725;
  height: 100vh;
  padding-top: 20px;
  left: 0;
  font-family: Arial, sans-serif;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #f26725;
  transition: 0.3s;
  &:hover {
    background-color: #f26725;
    color: white;
  }
`;

const SubmenuLink = styled(Link)`
  display: block;
  padding: 12px 40px;
  color: #555;
  text-decoration: none;
  font-size: 15px;
  border-bottom: 1px solid #f26725;
  background-color: #f9f9f9;
  &:hover {
    background-color: #f26725;
    color: white;
  }
`;

const IconLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <SidebarContainer>
      
      <SidebarLink to="/AdminHome">
        <IconLeft><FaHome />HomePage</IconLeft>
      </SidebarLink>
      

      {/* <SidebarLink as="div" onClick={toggleSubmenu}>
              <IconLeft><FaClipboardCheck />Beneficary List</IconLeft>
              <FaChevronDown />
            </SidebarLink>
            {showSubmenu && (
              <>
                <SubmenuLink to="/StudentList">Student</SubmenuLink>
                <SubmenuLink to="/EmployeeList">Employee</SubmenuLink>
                
              </>
            )} */}
    </SidebarContainer>
  );
};

export default Sidebar;








































