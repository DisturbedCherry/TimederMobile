// WelcomeScreen.js
import React from 'react';
import './EventScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import ProfileEvent from '../../components/EventContent';
import EvenPictureThis from '../../images/juwe.png'
import { useNavigate } from 'react-router-dom';

export default function EventScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="event-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <ProfileEvent eventName='Juwenalia' evenPicture={EvenPictureThis}/>
    </div>
  );
}
