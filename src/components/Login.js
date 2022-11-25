import './Login.css';
import {useNavigate} from 'react-router-dom'

function Login() {
const navigate = useNavigate()

  function continueHandler(){
navigate('/dashboard')
  }
  return (
    <div className="Login">
      <h1>Welcome to the Admin Portal</h1>
      <div className='login-button'>
      <button onClick={continueHandler} className='continue-button'>Continue</button>
      </div>
    </div>
  );
}

export default Login;
