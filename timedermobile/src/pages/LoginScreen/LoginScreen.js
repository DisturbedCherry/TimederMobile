import BackButton from '../../components/BackButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import LimitedTimeOnly from '../../components/LimitedTimeOnly';
import './LoginScreen.css';

export default function LoginScreen() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert('Button clicked!');
  };
  return (
    <div className="login-screen">
      <BackButton className="back-button" text="<" onClick={handleButtonClick}/>
      <LimitedTimeOnly/>
        <div className="username">
          <h2>USERNAME/EMAIL:</h2>
          <input type="text" id="username" name='username' placeholder='123456@edu.p.lodz.pl'/>
        </div>
        <div className="password">
          <h2>PASSWORD:</h2>
          <input type="text" id="password" name='password' placeholder='************'/>
      </div>
      <ForgotPasswordButton className="forgot-password-button" text="FORGOT PASSWORD" onClick={handleButtonClick} />
    </div>
  )
}
