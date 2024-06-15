// Button.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed


export default function BackButton({ icon, onClick }) {
  return (
    <div className="back-button-div">
      <button className="back-button" onClick={onClick}>
        {icon}
      </button>
    </div>
  );
}
