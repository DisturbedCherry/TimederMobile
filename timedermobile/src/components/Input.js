// Input.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed

export default function Input({ label, placeholder, value, onChange, type = "text" }) {
    return (
        <div className="input-login-screen">
            <h2 className='input-login-screen-label'>{label}:</h2>
            <input type={type} id={label} name={label} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
}