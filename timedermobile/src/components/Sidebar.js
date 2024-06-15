// Sidebar.js
import React, { useState } from 'react';
import './Components.css';
import logo from '../images/logo.png';
import Button from './NavButton';
import { BiAlarm } from "react-icons/bi";
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

  return (
    <div>
      {!isSidebarOpen && (
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Your sidebar content goes here */}
          <img src={logo} alt="Logo" className="sidebar-image"/>
          <p className='timeder-text'>TIMEDER</p>
          <Button text='MY PROFILE' bgcolor='rgb(242, 226, 244)' icon={<BiSolidUser />} textcolor='#312c33'/>
          <Button text='GROUPS' bgcolor='rgb(242, 226, 244)' icon={<GrGroup />}/>
          <Button text='EVENT CALENDAR' bgcolor='rgb(242, 226, 244)' icon={<BiSolidCalendar />}/>
          <Button text='NOTIFICATIONS' bgcolor='rgb(242, 226, 244)' icon={<BiBell />}/>
          <Button text='REPORT A BUG' bgcolor='rgb(242, 226, 244)' icon={<BiBug />}/>
          <Button text='SETTINGS' bgcolor='rgb(242, 226, 244)' icon={<FiSettings />}/>
          <Button text='SIGN OUT' bgcolor='#312c33' textcolor='rgb(242, 226, 244)'/>

        </div>
      </div>
      <div className={`overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}
