import React from 'react';
import './NotificationScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton'
import { useNavigate } from 'react-router-dom';

export default function NotificationScreen() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <div className="notification-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='button-container-notification'>
        <h1>Notifications</h1>
        <SmallButton text='You have been added to "Wejkusie" group' onClick={handleButtonClick}/>
        <SmallButton text='You have been removed from "PIO project" group' onClick={handleButtonClick}/>
        <SmallButton text='You have joined "Flanki 25 marca" event' onClick={handleButtonClick}/>
        <SmallButton text='You have created "Degustacja monsterków" event' onClick={handleButtonClick}/>
        <SmallButton text='You have left "Party Piotrkowska" event' onClick={handleButtonClick}/>
        <SmallButton text='You have left "Party Piotrkowska" event' onClick={handleButtonClick}/>
      </div>
    </div>
  );
}