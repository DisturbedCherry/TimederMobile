import React from 'react';
import './CreateEvenScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import Input from '../../components/CustomInput'

export default function NotificationScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="create-event-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='button-container-notification'>
        <h1>Notifications</h1>
        <Input placeholdertext='test'/>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}