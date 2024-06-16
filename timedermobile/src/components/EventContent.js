// EventContent.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import InterestedButton from './InterestedToggleButton'
import GoingButton from './GoingToggleButton'

export default function EventContent({ eventName, evenPicture }) {
  const photoStyle = {
    borderRadius: '10%',
    overflow: 'hidden',
    height: '130px',
    width: '250px',
    margin: '0px',
  }

  const paraStyle = {
    margin: '0',
    fontSize: '30px',
  }
  return (
    <div className="event-content">
      <p style={paraStyle}>{eventName}</p>
      <img src={evenPicture} alt="evenPicture" style={photoStyle}/>
      <div>
        <div className='statisctics'>
          Interested: 2137
        </div>
        <div className='statisctics'>
          Going: 1568
        </div>
      </div>
      <div className='info'>
        22-28 APRIL
        19:00
        LODZ
      </div>
      <div className='title'>
        THE BEST STUDENTS' PARTY EVER
      </div>
      <InterestedButton/>
      <GoingButton/>
    </div>
  );
}

