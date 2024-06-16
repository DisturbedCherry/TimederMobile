// ReportIssueScreen.js
import React from 'react';
import './ReportIssueScreen.css';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/CornerButton';
import PinButton from '../../components/PinButton';
import { IoIosArrowBack } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import ReportIssueInput from '../../components/ReportIssueInput';
import Button from '../../components/BigButton';
import { useNavigate } from 'react-router-dom';

export default function ReportIssueScreen() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="month-event-screen">
      <h1>Report issue</h1>
      <h3>Tell us what's wrong?</h3>
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <PinButton className="pin-button" icon={<TiPin  />} onClick={handleButtonClick}/>
      <Sidebar/>
      <ReportIssueInput/>
      <div className='report-issue-button-div'>
        <Button text="REPORT ISSUE" onClick={handleButtonClick}/>
      </div>

    </div>
  );
}
