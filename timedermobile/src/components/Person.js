// BigButton.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import { BiSolidUser } from "react-icons/bi";

export default function Person({ text }) {
  return (
    <div className="person-div">
      <button className="small-button" >
      <BiSolidUser />
        {text}
      </button>
    </div>
  );
}
