// Button.js
import React from 'react';
import './WelcomeScreen.css'; // You can create and style this CSS file if needed

export default function Button({ text, onClick }) {
  return (
    <button className="signInButton" onClick={onClick}>
      {text}
    </button>
  );
}
