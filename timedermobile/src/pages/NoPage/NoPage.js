import React from 'react';
import './NoPage.css';
import BackButton from '../../components/CornerButton';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function NoPage() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  
  return (
    <div className='no-page'>
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <h1>No Page Found</h1>
    </div>
  )
}