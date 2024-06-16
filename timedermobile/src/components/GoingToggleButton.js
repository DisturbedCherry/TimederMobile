import React, { useState } from 'react';
import './Components.css';

const ButtonToggle = () => {
  const [isPublic, setIsPublic] = useState(false);

  const handleClick = () => {
    setIsPublic(!isPublic);
  };

  return (
    <button
      onClick={handleClick}
      className={`toggle-button-going ${isPublic ? 'going' : 'notgoing'}`}
    >
      {isPublic ? 'GOING' : 'NOT GOING'}
    </button>
  );
};

export default ButtonToggle;
