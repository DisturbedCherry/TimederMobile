import React from 'react';
import './GroupScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/Person'
import { useNavigate } from 'react-router-dom';

export default function GroupScreen() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="notification-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <div className='button-container-notification'>
        <h1>Wejkusie</h1>
        <h2>JOIN GROUP CODE: SGFKSD</h2>
        <SmallButton text='Jakub Wiślicki' />
        <SmallButton text='Timothy Kalejaiye' />
        <SmallButton text='Jakub Jagodziński' />
        <SmallButton text='Anna Nowak' />
        <SmallButton text='Tomasz Kowalski' />
      </div>
    </div>
  );
}