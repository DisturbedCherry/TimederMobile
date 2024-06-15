// Logo.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import logo from '../images/logo.png'

export default function Logo() {

  return (
    <div className="logo-div">
      <img src={logo} alt="Logo"/>
    </div>
  );
}
