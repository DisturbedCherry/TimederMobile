// WelcomeScreen.js
import React from 'react';
import './MonthEventScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import GroupsEventsOnProfile from '../../components/GroupsEventsOnProfile'
import { useNavigate } from 'react-router-dom';

export default function MonthEventScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="month-event-screen">
      <h1>April events</h1>
      <h5>Events this month:</h5>
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <GroupsEventsOnProfile/>
    </div>
  );
}
