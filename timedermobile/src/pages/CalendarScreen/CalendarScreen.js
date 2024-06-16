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

export default function CalendarScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="event-calendar-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='content-part'>
        <h1>Events Calendar</h1>
        <img src={Calendar} alt="calendar" />
      </div>
      <div className='button-container'>
        <SmallButton text='VIEW THIS MONTH EVENTS' onClick={handleButtonClick}/>
        <SmallButton text='CREATE NEW EVENT' onClick={handleButtonClick}/>
      </div>
    </div>
  );
}
