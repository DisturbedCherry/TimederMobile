// SettingsScreen.js
import React from 'react';
import './CalendarScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton'
import Calendar from '../../images/calendar.png'
import { useNavigate } from 'react-router-dom';

export default function CalendarScreen() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleThisMonthButtonClick = () => {
    navigate('/MonthEventScreen');
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const redirectToCreateEvent = () => {
    navigate('/CreateEventScreen');
  };

  return (
    <div className="event-calendar-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='content-part'>
        <h1>Events Calendar</h1>
        <img src={Calendar} alt="calendar" className='calendar-picture-temp'/>
      </div>
      <div className='button-container-for-calendar'>
        <SmallButton text='VIEW LATEST EVENT' onClick={handleThisMonthButtonClick}/>
        <SmallButton text='CREATE NEW EVENT' onClick={redirectToCreateEvent}/>
      </div>
    </div>
  );
}
