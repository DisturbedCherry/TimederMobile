// WelcomeScreen.js
import React from 'react';
import './ProfileScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import ProfileContent from '../../components/Profile';
import ProfilePicture from '../../images/profile.jpg'

export default function ProfileScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="profile-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <ProfileContent name='Jacob' profile={ProfilePicture}/>
    </div>
  );
}
