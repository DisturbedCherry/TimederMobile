// MainMenuPanels.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function Panel( {icon} ) {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };
  return (
    <div className="menu-panel">
      <button className="menu-panel-button" onClick={handleButtonClick}>
        {icon}
      </button>
    </div>
  );
}
