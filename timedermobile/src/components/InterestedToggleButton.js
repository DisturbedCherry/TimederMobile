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
      className={`toggle-button-interested ${isPublic ? 'Interested' : 'Not interested'}`}
    >
      {isPublic ? 'Interested' : 'Not interested'}
    </button>
  );
};

export default ButtonToggle;
