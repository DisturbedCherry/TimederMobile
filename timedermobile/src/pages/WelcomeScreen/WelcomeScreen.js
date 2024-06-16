// WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';
import Button from '../../components/BigButton';
import Logo from '../../components/Logo'; 
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/LoginScreen');
  };

  return (
    <div className="welcome-screen">
      <LimitedTimeOnly/>
      <Logo/>
      <Button text="SING IN" onClick={handleButtonClick} />
    </div>
  );
}
