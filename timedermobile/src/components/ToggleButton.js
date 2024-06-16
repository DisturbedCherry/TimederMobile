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
      className={`toggle-button ${isPublic ? 'public' : 'private'}`}
    >
      {isPublic ? 'PUBLIC' : 'PRIVATE'}
    </button>
  );
};

export default ButtonToggle;
