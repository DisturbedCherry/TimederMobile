// Input.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function Input({ label, placeholder }) {
  return (
    <div className="input">
      <h2>{label}:</h2>
      <input type="text" id={label} name={label} placeholder={placeholder}/>
    </div>
  );
}