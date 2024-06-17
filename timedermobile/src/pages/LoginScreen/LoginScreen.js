import BackButton from '../../components/CornerButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import Input from '../../components/Input';
import './LoginScreen.css';
import Button from '../../components/BigButton';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import AuthService from "../../services/authService";
import {showErrorMessage, showSuccessMessage} from "../../services/swalService";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [index, setIndex] = useState('');
  const [password, setPassword] = useState('');

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleForgotPasswordClick = () => {
    navigate('/RecoverPassword');
  }

  const handleLoginButtonClick = async () => {
      try {
          const response = await AuthService.login(index, password);
          if (response.status === 200) {
              localStorage.removeItem('token');
              localStorage.setItem('token', response.data.token);
              showSuccessMessage('Login successful').then(r => r.dismiss);
              navigate('/MainMenu');
          } else {
              showErrorMessage('Login failed').then(r => r.dismiss);
          }
      } catch (error) {
          showErrorMessage('An error occurred').then(r => r.dismiss);
      }
  };

  return (
    <div className="login-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <LimitedTimeOnly/>
      <Input label='INDEX' placeholder='123456' value={index} onChange={e => setIndex(e.target.value)}/>
      <Input label='PASSWORD' placeholder='**********' value={password} onChange={e => setPassword(e.target.value)} type="password"/>
      <ForgotPasswordButton className="forgot-password-button" text="FORGOT PASSWORD" onClick={handleForgotPasswordClick} />
      <Button text="LOG IN" onClick={handleLoginButtonClick}/>
    </div>
  )
}
