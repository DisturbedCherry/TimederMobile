import React from 'react';
import './CreateEvenScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import InputVital from '../../components/CustomInput'
import InputNormal from '../../components/NormalInput'
import Button from '../../components/BigButton';

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
        <InputVital placeholdertext='SET NAME'/>
        <InputVital placeholdertext='SET LOCATION'/>
        <InputVital placeholdertext='SET DATE'/>
        <InputVital placeholdertext='SET START TIME'/>
        <InputNormal placeholdertext='SET DESCRIPTION'/>
        <InputNormal placeholdertext='SET PHOTO'/>
        <InputNormal placeholdertext='ADD USERS'/>
        <InputNormal placeholdertext='ADD GROUPS'/>
        <Button text="CREATE EVENT" onClick={handleButtonClick}/>
      </div>
    </div>
  );
}