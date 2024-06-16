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
import { useNavigate } from 'react-router-dom';

export default function NotificationScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="create-event-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='button-container-event'>
        <h1>Create event</h1>
        <InputVital placeholdertext='SET NAME'/>
        <InputVital placeholdertext='SET LOCATION'/>
        <InputVital placeholdertext='SET DATE'/>
        <InputVital placeholdertext='SET START TIME'/>
        <InputNormal placeholdertext='SET DESCRIPTION'/>
        <InputNormal placeholdertext='SET PHOTO'/>
        <InputNormal placeholdertext='ADD USERS'/>
        <InputNormal placeholdertext='ADD GROUPS'/>
        <div className='button-positioning-event'>
          <Button text="CREATE EVENT" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}