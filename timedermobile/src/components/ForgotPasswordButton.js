// Button.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function ForgotPasswordButton({ text, onClick }) {
  return (
    <div className='forgot-password-button-div'>
      <button className="forgot-password-button" onClick={onClick}>
          {text}
      </button>
    </div>
  );
}
