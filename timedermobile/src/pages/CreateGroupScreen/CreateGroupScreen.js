import React, { useState } from 'react';
import './CreateGroupScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import InputNormal from '../../components/NormalInput'
import Button from '../../components/BigButton';
import ToggleButton from '../../components/ToggleButton'
import { useNavigate } from 'react-router-dom';
import { createGroup } from '../../services/groupService';
import {showErrorMessage, showSuccessMessage} from "../../services/swalService";
import authService from "../../services/authService";
import InputBox from "../../components/CustomInput"; // Import the createGroup function

export default function CreateGroupScreen() {
    const [name, setName] = useState('');
    const [joinCode, setJoinCode] = useState('');
    const [memberLimit, setMemberLimit] = useState('');
    const [description, setDescription] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleCreateGroup = async () => {
        if (!name || !joinCode || !memberLimit || !description) {
            await showErrorMessage('All fields must be filled out.');
            return;
        }

        try {
            await createGroup({ name, joinCode, totalSize: memberLimit, description, isPrivate }, authService.getUserId());
            await showSuccessMessage('Group created successfully!');

            navigate('/AllGroups');
        } catch (error) {
            await showErrorMessage('Failed to create group.');
        }
    };

    return (
        <div className="create-group-screen">
            <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
            <PinButton className="pin-button" icon={<TiPin  />} onClick={handleCreateGroup}/>
            <Sidebar/>
            <div className='button-container-notification-groups'>
                <h1>Create group</h1>
                <InputBox placeholdertext='SET NAME' onChange={e => setName(e.target.value)} value={name}/>
                <InputNormal placeholdertext='SET JOIN CODE' onChange={e => setJoinCode(e.target.value)}/>
                <InputNormal placeholdertext='SET MEMBER LIMIT' onChange={e => setMemberLimit(e.target.value)}/>
                <InputNormal placeholdertext='SET DESCRIPTION' onChange={e => setDescription(e.target.value)}/>
                <ToggleButton onClick={() => setIsPrivate(!isPrivate)} />

                <Button text="CREATE GROUP" onClick={handleCreateGroup}/>
            </div>
        </div>
    );
}