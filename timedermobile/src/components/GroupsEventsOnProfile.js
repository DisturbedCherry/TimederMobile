// GropusEventsOnProfile.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import SmallButton from './SmallButton';

export default function GEOP( {icon} ) {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };
  return (
    <div className="menu-panel">
      <SmallButton text='Turniej AZS' onClick={handleButtonClick}/>
      <SmallButton text='Juwenalia' onClick={handleButtonClick}/>
      <SmallButton text='Maraton' onClick={handleButtonClick}/>
      <SmallButton text='Piątkowe wyjście' onClick={handleButtonClick}/>
      <SmallButton text='APR' onClick={handleButtonClick}/>
    </div>
  );
}
