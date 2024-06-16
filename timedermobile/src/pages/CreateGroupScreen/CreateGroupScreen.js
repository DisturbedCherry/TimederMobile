import React from 'react';
import './CreateGroupScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import InputVital from '../../components/CustomInput'
import InputNormal from '../../components/NormalInput'
import Button from '../../components/BigButton';
import ToggleButton from '../../components/ToggleButton'

export default function CreateGroupScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="create-group-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='button-container-notification'>
        <h1>Create group</h1>
        <InputVital placeholdertext='SET NAME'/>
        <InputNormal placeholdertext='SET JOIN DESCRIPTION'/>
        <InputNormal placeholdertext='SET MEMBER LIMIT'/>
        <InputNormal placeholdertext='SET DESCRIPTION'/>
        <ToggleButton />
        
        <Button text="CREATE GROUP" onClick={handleButtonClick}/>
      </div>
    </div>
  );
}