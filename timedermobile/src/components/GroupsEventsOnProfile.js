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
      <SmallButton text='Wejkusie' onClick={handleButtonClick}/>
      <SmallButton text='Juwenalia' onClick={handleButtonClick}/>
      <SmallButton text='Maraton' onClick={handleButtonClick}/>
      <SmallButton text='Dantejczycy' onClick={handleButtonClick}/>
      <SmallButton text='Białe kapelusze' onClick={handleButtonClick}/>
    </div>
  );
}
