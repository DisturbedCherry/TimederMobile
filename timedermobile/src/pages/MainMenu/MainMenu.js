// MainMenu.js
import React from 'react';
import './MainMenu.css';
import Sidebar from '../../components/Sidebar';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import BackButton from '../../components/CornerButton';
import { BiBell } from "react-icons/bi";
import Panel from '../../components/MainMenuPanel'

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
          <Panel/>
          <Panel/>
          <Panel/>
        </div>
        <div className='panel-row'>
          <Panel/>
          <Panel/>
          <Panel/>
        </div>
        <div className='panel-row'>
          <Panel/>
          <Panel/>
          <Panel/>
        </div>
      </div>
    </div>
  );
}
