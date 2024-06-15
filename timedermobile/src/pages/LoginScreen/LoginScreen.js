import BackButton from '../../components/CornerButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import Input from '../../components/Input';
import './LoginScreen.css';
import Button from '../../components/BigButton';
import { IoIosArrowBack } from "react-icons/io";

export default function LoginScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };

  return (
    <div className="login-screen">
      <BackButton className="back-button" icon={<IoIosArrowBack />} onClick={handleButtonClick}/>
      <LimitedTimeOnly/>
      <Input label='USERNAME/EMAIL' placeholder='123456@edu.p.lodz.pl'/>
      <Input label='PASSWORD' placeholder='**********'/>
      <ForgotPasswordButton className="forgot-password-button" text="FORGOT PASSWORD" onClick={handleButtonClick} />
      <Button text="LOG IN" onClick={handleButtonClick}/>
    </div>
  )
}
