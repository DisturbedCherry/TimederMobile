// GropusEventsOnProfile.js
import React, {useEffect, useState} from 'react';
import './Components.css'; // You can create and style this CSS file if needed
import SmallButton from './SmallButton';
import { useNavigate } from 'react-router-dom';
import {getUserGroups} from "../services/groupService";
import {showErrorMessage} from "../services/swalService";
import {getUserEvents} from "../services/eventService";

export default function GEOP() {
    const [userGroups, setUserGroups] = useState([]);

    const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  const navigate = useNavigate();

    useEffect(() => {
        const fetchUserGroups = async () => {
            try {
                const response = await getUserGroups(); // Use the getUser function
                setUserGroups(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch user groups.').then(r => r.dismiss);
            }
        };

        fetchUserGroups();
    }, []);

  const handleJuwenaliaButtonClick = () => {
    navigate('/GroupScreen')
  }

  return (
    <div className="menu-panel-geop">
      <SmallButton text='Weeikusie' onClick={handleJuwenaliaButtonClick}/>
        {userGroups.map((group, index) => (
            <SmallButton key={index} text={group.name} onClick={handleButtonClick}/>
        ))}
    </div>
  );
}
