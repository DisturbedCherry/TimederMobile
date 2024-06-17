import React from 'react';
import './Components.css';

const InputBox = ({ placeholdertext, onChange, value, typeInput = "text" }) => {
    return (
        <input
            type={typeInput}
            onChange={onChange}
            value={value}
            className={`input-box-vital ${value.length >= 3 ? 'valid' : ''}`}
            placeholder={placeholdertext}
        />
    );
};

export default InputBox;