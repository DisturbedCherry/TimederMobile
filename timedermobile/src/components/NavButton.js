// NavButton.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function Button({ text, onClick, icon, bgcolor, textcolor }) {
  const buttonStyles = {
    backgroundColor: bgcolor,
    borderRadius: '27px',
    border: '4px solid #312c33',
    display: 'inline-flex', // Use inline-flex to enable flexbox
    alignItems: 'center', // Center items vertically
    cursor: 'pointer',
    color: textcolor,
    fontSize: '16px',
    fontWeight: 'bold',
    paddingLeft: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
    width: '120%',
    textDecoration: 'none',
    textShadow: '0px 0px 0px #312c33',
    marginBottom: '10px',
    justifyContent: 'center', // Center items horizontally
    marginLeft: '-10%',
  };

  const iconStyles = {
    marginRight: '8px', // Add some space between the icon and text
    height: '16px', // Adjust the size as needed
    width: '16px', // Adjust the size as needed
  };

  return (
    <div className="nav-button-div">
      <button className="nav-button" onClick={onClick} style={buttonStyles}>
      {icon}
        {text}
      </button>
    </div>
  );
}
