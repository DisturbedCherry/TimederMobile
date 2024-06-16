// Sidebar.js
import React, { useState } from 'react';
import './Components.css';
import logo from '../images/logo.png';
import Button from './NavButton';
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiBug } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (path) => {
    navigate(path);
    toggleSidebar(); 
  };

  return (
    <div>
      {!isSidebarOpen && (
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <img src={logo} alt="Logo" className="sidebar-image"/>
          <p className='timeder-text'>TIMEDER</p>
          <Button text='MAIN MENU' bgcolor='rgb(242, 226, 244)' icon={<IoMdMenu  />} textcolor='#312c33' onClick={() => handleButtonClick('/MainMenu')} />
          <Button text='MY PROFILE' bgcolor='rgb(242, 226, 244)' icon={<BiSolidUser />} textcolor='#312c33' onClick={() => handleButtonClick('/ProfileScreen')} />
          <Button text='GROUPS' bgcolor='rgb(242, 226, 244)' icon={<GrGroup />} textcolor='#312c33' onClick={() => handleButtonClick('/AllGroups')}/>
          <Button text='EVENT CALENDAR' bgcolor='rgb(242, 226, 244)' icon={<BiSolidCalendar />} textcolor='#312c33' onClick={() => handleButtonClick('/CalendarScreen')}/>
          <Button text='NOTIFICATIONS' bgcolor='rgb(242, 226, 244)' icon={<BiBell />} textcolor='#312c33' onClick={() => handleButtonClick('/NotificationScreen')}/>
          <Button text='REPORT A BUG' bgcolor='rgb(242, 226, 244)' icon={<BiBug />} textcolor='#312c33' onClick={() => handleButtonClick('/ReportIssueScreen')}/>
          <Button text='SETTINGS' bgcolor='rgb(242, 226, 244)' icon={<FiSettings />} textcolor='#312c33' onClick={() => handleButtonClick('/SettingsScreen')}/>
          <Button text='SIGN OUT' bgcolor='#312c33' textcolor='rgb(242, 226, 244)' onClick={() => handleButtonClick('/')}/>

        </div>
      </div>
      <div className={`overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
