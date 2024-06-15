// WelcomeScreenButton.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function Button({ text, onClick}) {
  return (
    <div className="big-button-div">
      <button className="big-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
