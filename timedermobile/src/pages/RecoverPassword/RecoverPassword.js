import BackButton from '../../components/CornerButton';
import Input from '../../components/Input';
import './RecoverPassword.css';
import Button from '../../components/BigButton';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import AuthService from "../../services/authService";
import {showErrorMessage, showSuccessMessage} from "../../services/swalService";

export default function RecoverPassword() {
  const navigate = useNavigate();
  const [index, setIndex] = useState('');
  const [password, setPassword] = useState('');


  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    alert('NOT WORKING YET');
  }

  const handleLoginButtonClick = async () => {
      try {
          const response = await AuthService.login(index, password);
          if (response.status === 200) {
              showSuccessMessage('Login successful').then(r => r.dismiss);
              localStorage.setItem('token', response.data.token);
              navigate('/MainMenu');
          } else {
              showErrorMessage('Login failed').then(r => r.dismiss);
          }
      } catch (error) {
          showErrorMessage('An error occurred').then(r => r.dismiss);
      }
  };

  return (
    <div className="recover-password-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleBackButtonClick}/>
      <div className='reset-password-content-div'>
        <div className='reset-password-text-div'>
          Reset password
        </div>
        <Input label='Email' placeholder='123456@edu.p.lodz.pl'/>
        <div>
          <Button text='Send email' onClick={handleButtonClick}/>
        </div>
      </div>

    </div>
  )
}
