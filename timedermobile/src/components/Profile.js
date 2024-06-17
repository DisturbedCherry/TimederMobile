// Profile.js
import React from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import GroupsEventsOnProfile from './GroupsEventsOnProfile'

export default function ProfileContent({ name, profile }) {
  const photoStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    height: '130px',
    width: '130px',
    margin: '0px',
    marginLeft: '40px',
    marginRight: '40px',

  }

  const paraStyle = {
    margin: '0',
  }
  return (
    <div className="profile-content">
      <p style={paraStyle}>Hello {name}</p>
      <img src={profile} alt="profile" style={photoStyle}/>
      <div className='groups-and-events'>My groups and events:</div>
      <GroupsEventsOnProfile/>
    </div>
  );
}

