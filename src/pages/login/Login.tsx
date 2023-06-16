import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import loginsvg from "../../asset/pablo-sign-in 1.svg"
import logo from "../../asset/Group.svg"

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // Once logged in, navigate to the dashboard page
    navigate('/home');
  };

  return (
    <div className="login-container">
     <div className="logos">
     <img src={logo} alt="" />
     </div>
      <div className="login-content">

        <div className="image-container left-box">
          <img src={loginsvg} alt="Logo" />
        </div>

        <div className="form-container right-box">
       
          <div className="login-form">
          <h1> Welcome!</h1>
          <h3>Enter details to login.</h3>
          {/*  login form fields  */}
          <br />
            <div>
               <input type="email" placeholder="Email" />
            </div>
              
              <br />
            <div>
            <input type="password" placeholder="Password" />
            {/* <button>Show</button> */}
            </div>
              <br />
              <button onClick={handleLogin}>LOG IN</button>
          </div>
         
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
