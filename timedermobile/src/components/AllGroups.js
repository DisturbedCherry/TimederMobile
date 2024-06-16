// GropusEventsOnProfile.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import SmallButton from './SmallButton';
import { useNavigate } from 'react-router-dom';

export default function GEOP() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const handleJuwenaliaButtonClick = () => {
    navigate('/GroupScreen')
  }

  return (
    <div className="menu-panel-geop">
      <SmallButton text='Weeikusie' onClick={handleJuwenaliaButtonClick}/>
      <SmallButton text='Nuggetsy' onClick={handleButtonClick}/>
      <SmallButton text='Białe kapelusze' onClick={handleButtonClick}/>
      <SmallButton text='Szybkie chłopaki' onClick={handleButtonClick}/>
      <SmallButton text='Łabędzie' onClick={handleButtonClick}/>
    </div>
  );
}
