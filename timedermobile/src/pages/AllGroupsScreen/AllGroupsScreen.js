// SettingsScreen.js
import React from 'react';
import './AllGroupsScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton'
import { useNavigate } from 'react-router-dom';
import Content from '../../components/AllGroups'

export default function AllGroupsScreen() {
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

  return (
    <div className="all-groups-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='content-part-groups'>
        <div className='button-container-allgroups'>
          <SmallButton text='JOIN' onClick={handleButtonClick}/>
          <SmallButton text='CREATE' onClick={handleButtonClick}/>
        </div>
        <div className='names'>
          <Content/>
        </div>
      </div>
      
    </div>
  );
}
