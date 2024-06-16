// MainMenu.js
import React from 'react';
import './MainMenu.css';
import Sidebar from '../../components/Sidebar';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import BackButton from '../../components/CornerButton';
import { BiBell } from "react-icons/bi";
import Panel from '../../components/MainMenuPanel'
import { BiSolidCalendar } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { BiBug } from "react-icons/bi";
import { PiBeerBottle } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { FaRegDotCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function MainMenu() {
  const navigate = useNavigate();

  const handleNotificationButtonClick = () => {
    navigate('/NotificationScreen');
  };

  return (
    <div className="main-menu">
      <BackButton className="back-button" icon={<BiBell />} onClick={handleNotificationButtonClick}/>
      <Sidebar/>
      <LimitedTimeOnly/>
      <div className='panel-section'>
        <div className='panel-row'>
          <Panel icon={<BiSolidCalendar />} navigation={'/CalendarScreen'}/>
          <Panel icon={<GrGroup />} navigation={'/AllGroups'}/>
          <Panel icon={<BiBug />} navigation={'/ReportIssueScreen'}/>
        </div>
        <div className='panel-row'>
          <Panel icon={<PiBeerBottle />} navigation={'/CreateEvenScreen'}/>
          <Panel icon={<BiBell />} navigation={'/NotificationScreen'}/>
          <Panel icon={<FiSettings />} navigation={'/SettingsScreen'}/>
        </div>
        <div className='panel-row'>
          <Panel icon={<FaRegDotCircle  />} navigation={'/MainMenu'}/>
          <Panel icon={<FaRegDotCircle  />} navigation={'/MainMenu'}/>
          <Panel icon={<FaRegDotCircle  />} navigation={'/MainMenu'}/>
        </div>
      </div>
    </div>
  );
}
