// ReportIssueScreen.js
import React, { useState } from 'react';
import './ReportIssueScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import ReportIssueInput from '../../components/ReportIssueInput';
import Button from '../../components/BigButton';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import {reportError} from "../../services/errorService";
import {showErrorMessage, showSuccessMessage} from "../../services/swalService";

export default function ReportIssueScreen() {
    const navigate = useNavigate();
    const [issue, setIssue] = useState('');

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleButtonClick = async () => {
        try {
            const response = await reportError(authService.getUserId(), issue);
            if (response.status === 201) {
                await showSuccessMessage('Issue reported successfully! Thank you!');
            } else {
                await showErrorMessage('Failed to report issue.');
            }
        } catch (error) {
            await showErrorMessage('An error occurred while reporting the issue.');
        }
    };

    return (
        <div className="month-event-screen">
            <h1>Report issue</h1>
            <h3>Tell us what's wrong?</h3>
            <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
            <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
            <Sidebar/>
            <ReportIssueInput value={issue} onChange={e => setIssue(e.target.value)}/>
            <div className='report-issue-button-div'>
                <Button text="REPORT ISSUE" onClick={handleButtonClick}/>
            </div>
        </div>
    );
}