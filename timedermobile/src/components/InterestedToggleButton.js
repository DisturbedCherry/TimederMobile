import React, { useState, useEffect } from 'react';
import './Components.css';

const InterestedButton = () => {
  const [isInterested, setIsInterested] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('isInterested');
    if (savedState !== null) {
      setIsInterested(JSON.parse(savedState));
    }
  }, []);

  const handleClick = () => {
    const newIsInterested = !isInterested;
    setIsInterested(newIsInterested);
    localStorage.setItem('isInterested', JSON.stringify(newIsInterested));
  };

  return (
    <button
      onClick={handleClick}
      className={`toggle-button-interested ${isInterested ? 'interested' : 'not-interested'}`}
    >
      {isInterested ? 'Interested' : 'Not interested'}
    </button>
  );
};

export default InterestedButton;
