import React, { useState } from 'react';
import './CreateEventScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import InputNormal from '../../components/NormalInput'
import Button from '../../components/BigButton';
import { useNavigate } from 'react-router-dom';
import authService from "../../services/authService";
import {showErrorMessage, showSuccessMessage} from "../../services/swalService";
import InputBox from "../../components/CustomInput";
import {createEvent} from "../../services/eventService";

export default function CreateEventScreen() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [users, setUsers] = useState('');
  const [groups, setGroups] = useState('');

  const handleButtonClick = () => {
    alert('NOT WORKING YET');
  }

  const handleCreateButtonClick = async () => {
    if (!name || !location || !date || !startTime || !description) {
      alert('All fields must be filled out.');
      return;
    }

    try {
      // Call the createEvent function
      await createEvent({
        name,
        date,
        startTime,
        description,
        localization: location,
        photoFilePath: photo,
      }, authService.getUserId());
      showSuccessMessage('Event created successfully!').then(r => r.dismiss);
      navigate('/CalendarScreen')
    } catch (error) {
      showErrorMessage('Failed to create event.' + error).then(r => r.dismiss);
    }
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
          <InputBox placeholdertext='SET NAME' value={name} onChange={e => setName(e.target.value)}/>
          <InputBox placeholdertext='SET LOCATION' value={location} onChange={e => setLocation(e.target.value)}/>
          <InputBox placeholdertext='SET DATE' typeInput="date" value={date} onChange={e => setDate(e.target.value)}/>
          <InputBox placeholdertext='SET START TIME' value={startTime} onChange={e => setStartTime(e.target.value)}/>
          <InputNormal placeholdertext='SET DESCRIPTION' value={description} onChange={e => setDescription(e.target.value)}/>
          {/*<InputNormal placeholdertext='SET PHOTO' value={photo} onChange={e => setPhoto(e.target.value)}/>*/}
          {/*<InputNormal placeholdertext='ADD USERS' value={users} onChange={e => setUsers(e.target.value)}/>*/}
          {/*<InputNormal placeholdertext='ADD GROUPS' value={groups} onChange={e => setGroups(e.target.value)}/>*/}
          <div className='button-positioning-event'>
            <Button text="CREATE EVENT" onClick={handleCreateButtonClick}/>
          </div>
        </div>
      </div>
  );
}