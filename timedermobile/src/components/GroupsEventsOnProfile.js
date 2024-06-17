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
        const fetchUserEvents = async () =>  {
            try {
                const response = await getUserEvents(); // Use the getUser function
                setUserEvents(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch user events. Error: ' + error).then(r => r.dismiss);
            }
        }

        fetchUserEvents();
    }, []);

  const handleJuwenaliaButtonClick = () => {
    navigate('/EventScreen')
  }

  return (
    <div className='geop-div'>
        {/*<SmallButton text='Juwenalia' onClick={handleJuwenaliaButtonClick}/>*/}
        {userEvents.map((event, index) => (
            index === 0 ? <SmallButton key={index} text={event.name} onClick={handleButtonClick}/> : null
        ))}
    </div>
  );
}
