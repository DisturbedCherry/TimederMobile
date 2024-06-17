// GropusEventsOnProfile.js
import React, {useEffect, useState} from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import SmallButton from './SmallButton';
import { useNavigate } from 'react-router-dom';
import {showErrorMessage} from "../services/swalService";
import {getUserGroups} from "../services/groupService";
import {getUserEvents} from "../services/eventService";

export default function GEOP() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  const navigate = useNavigate();

  const [userGroups, setUserGroups] = useState([]);
const [userEvents, setUserEvents] = useState([]);

    useEffect(() => {
        const fetchUserGroups = async () => {
            try {
                const response = await getUserGroups(); // Use the getUser function
                setUserGroups(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch user groups. Error: ' + error).then(r => r.dismiss);
            }
        };

        const fetchUserEvents = async () =>  {
            try {
                const response = await getUserEvents(); // Use the getUser function
                setUserEvents(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch user events. Error: ' + error).then(r => r.dismiss);
            }
        }

        fetchUserEvents();
        fetchUserGroups();
    }, []);

  const handleJuwenaliaButtonClick = () => {
    navigate('/EventScreen')
  }

  return (
    <div className='geop-div'>
        <SmallButton text='Juwenalia' onClick={handleJuwenaliaButtonClick}/>
        {userGroups.map((group, index) => (
            <SmallButton key={index} text={group.name} onClick={handleButtonClick}/>
        ))}
        {userEvents.map((event, index) => (
            <SmallButton key={index} text={event.name} onClick={handleButtonClick}/>
        ))}
    </div>
  );
}
