import React, { useEffect, useState } from 'react';
import './NotificationScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import SmallButton from '../../components/SmallButton'
import { useNavigate } from 'react-router-dom';
import { getNotifications } from '../../services/notificationService';
import {showErrorMessage} from "../../services/swalService";

export default function NotificationScreen() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await getNotifications();
                setNotifications(response.data);
            } catch (error) {
                showErrorMessage('Failed to fetch notifications.').then(r => r.dismiss);
            }
        };

        fetchNotifications();
        }, []);

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="notification-screen">
            <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
            <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
            <Sidebar/>
            <div className='button-container-notification'>
                <h1>Notifications</h1>
                {notifications.map((notification, index) => (
                    <SmallButton key={index} text={notification.content} onClick={handleButtonClick}/>
                ))}
            </div>
        </div>
    );
}