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

export default function MainMenu() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="main-menu">
      <BackButton className="back-button" icon={<BiBell />} onClick={handleButtonClick}/>
      <Sidebar/>
      <LimitedTimeOnly/>
      <div className='panel-section'>
        <div className='panel-row'>
          <Panel icon={<BiSolidCalendar />}/>
          <Panel icon={<GrGroup />}/>
          <Panel icon={<BiBug />}/>
        </div>
        <div className='panel-row'>
          <Panel icon={<PiBeerBottle />}/>
          <Panel icon={<BiBell />}/>
          <Panel icon={<FiSettings />}/>
        </div>
        <div className='panel-row'>
          <Panel icon={<FaRegDotCircle  />}/>
          <Panel icon={<FaRegDotCircle  />}/>
          <Panel icon={<FaRegDotCircle  />}/>
        </div>
      </div>
    </div>
  );
}
