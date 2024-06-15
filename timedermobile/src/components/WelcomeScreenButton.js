// WelcomeScreenButton.js
import React from 'react';
import '../pages/WelcomeScreen/WelcomeScreen.css'; // You can create and style this CSS file if needed
import './Components.css'; // You can create and style this CSS file if needed

export default function Button({ text, onClick }) {
  return (
    <div className="sign-in-button-div">
      <button className="sign-in-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
