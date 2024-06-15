// Button.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function BackButton({ text, onClick }) {
  return (
    <div className="back-button-div">
      <button className="back-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
