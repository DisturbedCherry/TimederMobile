// Button.js
import React from 'react';
import './LoginScreen.css'; // You can create and style this CSS file if needed

export default function BackButton({ text, onClick }) {
  return (
    <button className="BackButton" onClick={onClick}>
      {text}
    </button>
  );
}
