import React, { useState, useEffect } from 'react';
import './Components.css';

const GoingButton = () => {
  const [isGoing, setIsGoing] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('isGoing');
    if (savedState !== null) {
      setIsGoing(JSON.parse(savedState));
    }
  }, []);

  const handleClick = () => {
    const newIsGoing = !isGoing;
    setIsGoing(newIsGoing);
    localStorage.setItem('isGoing', JSON.stringify(newIsGoing));
  };

  return (
    <button
      onClick={handleClick}
      className={`toggle-button-going ${isGoing ? 'going' : 'not-going'}`}
    >
      {isGoing ? 'Going' : 'Not going'}
    </button>
  );
};

export default GoingButton;
