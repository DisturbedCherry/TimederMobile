// Button.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed


export default function PinButton({ icon, onClick }) {
  return (
    <div className="pin-button-div">
      <button className="back-button" onClick={onClick}>
        {icon}
      </button>
    </div>
  );
}

