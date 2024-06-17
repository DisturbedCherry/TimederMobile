// WelcomeScreen.js
import React, {useEffect, useState} from 'react';
import './ProfileScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import ProfileContent from '../../components/Profile';
import ProfilePicture from '../../images/profile.jpg'
import { useNavigate } from 'react-router-dom';
import {showErrorMessage} from "../../services/swalService";
import {getUser} from "../../services/userService";

export default function ProfileScreen() {
  const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser(); // Use the getUser function
                setUser(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch user.').then(r => r.dismiss);
            }
        };

        fetchUser();
    }, []);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="profile-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <ProfileContent name={user.firstName} profile={ProfilePicture}/>
    </div>
  );
}
