import React, { useState } from 'react';
import './Components.css';

const InputBox = ({ placeholdertext }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      className="input-box-normal"
      placeholder={placeholdertext}
    />
  );
};

export default InputBox;