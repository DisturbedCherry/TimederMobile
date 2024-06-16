// SettingsScreen.js
import React from 'react';
import './SettingsScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton'

export default function SettingsScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="settings-screen">
      <h1>Settings</h1>
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='switches'>
        <div className="switch-container">
          <span className="switch-label">Sounds</span>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="switch-container">
          <span className="switch-label">Vibrations</span>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className='button-container'>
        <SmallButton text='Change profile picture' onClick={handleButtonClick}/>
        <SmallButton text='Delete account' onClick={handleButtonClick}/>
      </div>
    </div>
  );
}
