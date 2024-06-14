// WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';
import Button from './Button';
import logo from '../../images/logo.png'; 

export default function WelcomeScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="welcome-screen">
      <h1 className="limited-time">Limited Time Only</h1>
      <h1 className="limited-time">Limited Time Only</h1>
      <h1>TIMEder</h1>
      <h1 className="limited-time">Limited Time Only</h1>
      <h1 className="limited-time">Limited Time Only</h1>
      <img src={logo} alt="Logo" />
      <Button text="SING IN" onClick={handleButtonClick} />
    </div>
  );
}
