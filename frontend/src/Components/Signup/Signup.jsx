import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Backdrop, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import logo from '../../Images/strife.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled, Paper, Box, keyframes } from '@mui/material';
import Lottie from 'react-lottie';
import Strife from '../../Images/Strife.json';
import TypingAnimation from './TypingAnimation';
import { ArrowRightAltSharp } from '@mui/icons-material';


const SignUp = () => {
  const navigate = useNavigate();
  const [radioBtn, setRadioBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const errorPane = {
    position: 'top-center',
    autoClose: 2000,
    pauseOnHover: true,
    theme: 'dark',
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password.trim() !== confirmPassword.trim()) {
      setLoading(false);
      toast.error('Password and confirm password should be same.', errorPane);
      return false;
    } else if (username.length < 3) {
      setLoading(false);
      toast.error('Username should be greater than 3 characters.', errorPane);
      return false;
    } else if (password.length < 8) {
      setLoading(false);
      toast.error('Password should be equal or greater than 8 characters.', errorPane);
      return false;
    } else if (email === '') {
      setLoading(false);
      toast.error('Email is required.', errorPane);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { email, username, password } = values;
    if (radioBtn === false) {
      setLoading(false);
      toast.error('Please agree with our terms and conditions.', errorPane);
      return;
    }
    if (handleValidation()) {
      try {
        const response = await axios.post(
          'http://localhost:4040/register/',
          {
            username,
            email,
            password,
          },
          {
            headers: {
              'Content-type': 'application/json',
            },
          }
        );
        console.log(response);
        navigate('/app/welcome');
        localStorage.setItem('userData', JSON.stringify(response));
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.status === 405) {
          setLoading(false);
          toast.error('User with email already exists. Please create a new email!', errorPane);
        }
        if (error.response.status === 406) {
          setLoading(false);
          toast.error('User already exists. Please create a new username!', errorPane);
        }
      }
    }
  };
  const Item = styled(Paper)`
  padding: 1rem;
  text-align: center;
  color: white;
  background-color: #333;
  border-radius: 10px;
  textAlign: 'center';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: -1;

`;

  const upDown = keyframes`
  0% {
    transform: translateY(1%);
  }
  25% {
    transform: translateY(-0.5%);
  }
  50% {
    transform: translateY(-2%);
  }
  75% {
    transform: translateY(-0.5%);
  }
  100% {
    transform: translateY(1%);
  }
`;

  const options = {
    loop: true,
    autoplay: true,
    animationData: Strife,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="logo-container">
          <Box sx={{ width: 1, padding: '0px', animation: `${upDown} 1.6s linear infinite` }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 8">
                <Lottie
                  style={{ height: '500px', width: '500px' }}
                  options={options}
                  isStopped={true} // This will stop the animation
                />
              </Box>
            </Box>
          </Box>
        </div>
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 6,
            color: '#63d7b0',
            fontSize: '2w',
            paddingBottom: '20px',
            backgroundImage: 'linear-gradient(to top, #0c041f 0%, #241d35 100%)',
            border:'2px solid  #800080',
            backgroundPosition: 'center',
            transition: 'opacity 100ms ease-out, transform 420ms cubic-bezier(0.25, 1.19, 0.5, 1.48)',
            borderRadius: '29px',
            boxShadow: 0,
            zIndex: 1,
            position: 'absolute',
            top: '50%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '60%',
            maxWidth: '100%',
            textAlign: 'center',
          }}
          component="footer"
        >
          <div>

            <form action="" onSubmit={(event) => handleSubmit(event)}>
              <div className="container-alt-login">
                <div className="container-about-signup">
                  <div className="about">
                    <h1>
                    <TypingAnimation  text=" .Let's get you ready! 😎"
                                        speed={40}  />
                                        </h1>
                  </div>
                </div>
              
                <div className="form-container-login">
                  <div className="fields-group-login">
                    <TextField
                      className="input-email-sigup"
                      type="text"
                      label="Username"
                      name="username"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <br />
                    <TextField
                      className="input-email-sigup"
                      type="email"
                      label="Email"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <br />
                    <TextField
                      className="input-email-sigup"
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      name="password"
                      onChange={(e) => handleChange(e)}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />
                    <TextField
                      className="input-email-sigup"
                      type={showPassword ? 'text' : 'password'}
                      label="Confirm Password"
                      name="confirmPassword"
                      onChange={(e) => handleChange(e)}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <br />
                  <div>
                    <button style={{ background: 'linear-gradient(to top, #8648f9 50%, #5359fd 100%)',
                color: '#63d7b0',
                border: 0,}} className="button-login" type="submit" id="btn" onClick={(e) => handleSubmit(e)}>
                      Create User
                    </button>
                  </div>
                  <label className="checkbox">
                    <input
                      required="required"
                      aria-required="true"
                      type="checkbox"
                      value="1"
                      name="user[agreement]"
                      id="user_agreement"
                      onClick={() => setRadioBtn(true)}
                      onChange={() => setRadioBtn(!radioBtn)}
                    />
                    <p className="checkbox-req">I have read and agree to the strife terms</p>
                  </label>
                  <div className="form-footer-login">
                    <ul className="no-list-login">
                      <li>
                        Already have an account ? <Link to="/" style={{color:'darkviolet'}}>Login.<ArrowRightAltSharp/></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </div>

      <ToastContainer />
    </>
  );
};

export default SignUp;
