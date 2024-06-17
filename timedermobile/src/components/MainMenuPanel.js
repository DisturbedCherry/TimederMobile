// MainMenuPanels.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import { useNavigate } from 'react-router-dom';

export default function Panel( {icon, navigation} ) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(navigation);
  }

  return (
    <div className="menu-panel">
      <button className="menu-panel-button" onClick={handleButtonClick}>
        {icon}
      </button>
    </div>
  );
}
