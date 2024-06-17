import React from 'react';
import './Components.css';

const InputNormal = ({ placeholdertext, onChange }) => {
  return (
      <input
          type="text"
          onChange={onChange}
          className="input-box-normal"
          placeholder={placeholdertext}
      />
  );
};

export default InputNormal;