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

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
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
          <Button text='MY PROFILE' bgcolor='rgb(242, 226, 244)' icon={<BiSolidUser />} textcolor='#312c33' onClick={handleButtonClick}/>
          <Button text='GROUPS' bgcolor='rgb(242, 226, 244)' icon={<GrGroup />} onClick={handleButtonClick}/>
          <Button text='EVENT CALENDAR' bgcolor='rgb(242, 226, 244)' icon={<BiSolidCalendar />} onClick={handleButtonClick}/>
          <Button text='NOTIFICATIONS' bgcolor='rgb(242, 226, 244)' icon={<BiBell />} onClick={handleButtonClick}/>
          <Button text='REPORT A BUG' bgcolor='rgb(242, 226, 244)' icon={<BiBug />} onClick={handleButtonClick}/>
          <Button text='SETTINGS' bgcolor='rgb(242, 226, 244)' icon={<FiSettings />} onClick={handleButtonClick}/>
          <Button text='SIGN OUT' bgcolor='#312c33' textcolor='rgb(242, 226, 244)' onClick={handleButtonClick}/>

        </div>
      </div>
      <div className={`overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
