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
    navigate('/EventScreen')
  }

  return (
    <div className='geop-div'>
      <SmallButton text='Turniej AZS' onClick={handleButtonClick}/>
      <SmallButton text='Juwenalia' onClick={handleJuwenaliaButtonClick}/>
      <SmallButton text='Maraton' onClick={handleButtonClick}/>
      <SmallButton text='Piątkowe wyjście' onClick={handleButtonClick}/>
      <SmallButton text='APR' onClick={handleButtonClick}/>
    </div>
  );
}
