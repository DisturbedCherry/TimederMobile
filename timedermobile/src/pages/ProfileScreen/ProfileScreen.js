// WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';
import Button from '../../components/BigButton';
import Logo from '../../components/Logo'; 
import LimitedTimeOnly from '../../components/LimitedTimeOnly';

export default function ProfileScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="welcome-screen">
      <LimitedTimeOnly/>
      <Logo/>
      <Button text="SING IN" onClick={handleButtonClick} />
    </div>
  );
}
