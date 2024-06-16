import BackButton from '../../components/CornerButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import Input from '../../components/Input';
import './LoginScreen.css';
import Button from '../../components/BigButton';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    alert('NOT WORKING YET');
  }

  const handleLoginButtonClick = () => {
    navigate('/MainMenu');
  };

  return (
    <div className="login-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <LimitedTimeOnly/>
      <Input label='INDEX' placeholder='123456'/>
      <Input label='PASSWORD' placeholder='**********'/>
      <ForgotPasswordButton className="forgot-password-button" text="FORGOT PASSWORD" onClick={handleButtonClick} />
      <Button text="LOG IN" onClick={handleLoginButtonClick}/>
    </div>
  )
}
