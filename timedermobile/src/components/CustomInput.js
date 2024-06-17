import React from 'react';
import './Components.css';

const InputBox = ({ placeholdertext, onChange, value }) => {
    return (
        <input
            type="text"
            onChange={onChange}
            value={value}
            className={`input-box-vital ${value.length >= 3 ? 'valid' : ''}`}
            placeholder={placeholdertext}
        />
    );
};

export default InputBox;