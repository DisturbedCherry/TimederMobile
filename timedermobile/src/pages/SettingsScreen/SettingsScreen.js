import React, { useState, useEffect } from 'react';
import './SettingsScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton';
import { useNavigate } from 'react-router-dom';

export default function SettingsScreen() {
  const [soundsEnabled, setSoundsEnabled] = useState(false);
  const [vibrationsEnabled, setVibrationsEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve switch states from localStorage
    const savedSoundsEnabled = localStorage.getItem('soundsEnabled') === 'true';
    const savedVibrationsEnabled = localStorage.getItem('vibrationsEnabled') === 'true';

    setSoundsEnabled(savedSoundsEnabled);
    setVibrationsEnabled(savedVibrationsEnabled);
  }, []);

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSoundsToggle = () => {
    const newSoundsEnabled = !soundsEnabled;
    setSoundsEnabled(newSoundsEnabled);
    localStorage.setItem('soundsEnabled', newSoundsEnabled);
  };

  const handleVibrationsToggle = () => {
    const newVibrationsEnabled = !vibrationsEnabled;
    setVibrationsEnabled(newVibrationsEnabled);
    localStorage.setItem('vibrationsEnabled', newVibrationsEnabled);
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="settings-screen">
      <h1>Settings</h1>
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick} />
      <PinButton className="pin-button" icon={<TiPin />} onClick={handleButtonClick} />
      <Sidebar />
      <div className='switches-settings'>
        <div className="switch-container">
          <span className="switch-label">Sounds</span>
          <label className="switch">
            <input type="checkbox" checked={soundsEnabled} onChange={handleSoundsToggle} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="switch-container">
          <span className="switch-label">Vibrations</span>
          <label className="switch">
            <input type="checkbox" checked={vibrationsEnabled} onChange={handleVibrationsToggle} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className='button-container-settings'>
        <div className='button-div-settings'>
          <SmallButton text='Change profile picture' onClick={handleButtonClick} />
        </div>
        <div className='button-div-settings'>
          <SmallButton text='Delete account' onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}
