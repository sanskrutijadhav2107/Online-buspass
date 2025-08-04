


import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaIdCard,
  FaFileAlt,
  FaClipboardCheck,
  FaSyncAlt,
  
} from "react-icons/fa";

// Styled Components
const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 5px solid #f26725;
  height: 100vh;
  padding-top: 20px;
  left: 0;
  font-family: Arial, sans-serif;
  position: ;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
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



const IconLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Sidebar = () => {
  
  return (
    <SidebarContainer>
      <SidebarLink to="/profile">
        <IconLeft>
          <FaUser /> Profile
        </IconLeft>
      </SidebarLink>

      <SidebarLink to="/UserHome">
        <IconLeft>
          <FaHome /> HomePage
        </IconLeft>
      </SidebarLink>

      {/* Collapsible Applied Pass Section */}
      <SidebarLink to="/applied-pass">
  <IconLeft>
    <FaClipboardCheck /> Applied Pass
  </IconLeft>
</SidebarLink>

      <SidebarLink to="/declaration-form">
        <IconLeft>
          <FaFileAlt /> Declaration Form
        </IconLeft>
      </SidebarLink>

      <SidebarLink to="/pass-id">
        <IconLeft>
          <FaIdCard /> ID
        </IconLeft>
      </SidebarLink>

      <SidebarLink to="/pass-page">
        <IconLeft>
          <FaIdCard /> Pass Page
        </IconLeft>
      </SidebarLink>

      <SidebarLink to="/renewal">
        <IconLeft>
          <FaSyncAlt /> Pass Renewal
        </IconLeft>
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
