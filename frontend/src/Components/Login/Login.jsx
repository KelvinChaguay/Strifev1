import React from 'react';
import { useState } from "react";
import logo from "../../Images/Strife.PNG";
import { Backdrop, Button, CircularProgress, BottomNavigation, BottomNavigationAction, InputAdornment, IconButton, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled, Paper, Box, keyframes } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from './Strife.json';
import Strife from '../../Images/Strife.json';
function Login() {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const errorPane = {
    position: "top-center",
    autoClose: 2000,
    pauseOnHover: true,
    theme: 'dark'
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here, such as sending a reset password link to the user's email
    toast.success("A password reset link has been sent to your email.", errorPane);
  };

  const loginHandler = async (e) => {
    setLoading(true);
    const { username, password } = data;
    try {
      const response = await axios.post("http://localhost:4040/login/", {
        username,
        password,
      },
        {
          headers: {
            "Content-type": "application/json",
          }
        },
      );

      if (response.data.status === true) {
        setLoading(false);
        localStorage.setItem("userData", JSON.stringify(response));
        navigate("/app/welcome");
      }
      else {
        setLoading(false);
        toast.error("Incorrect username or password. Please try again", errorPane);
        navigate("/");
      }

    } catch (error) {
      toast.error("API Error. Please retry in few mins", errorPane);
    }
    setLoading(false);
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

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
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
            <p className="login-text">Login to your Account</p>
            <br />
            <br />
            <br />
            <br />
            <div className="fields-group-login">
              <TextField
                className="input-email-sigup"
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <br />
            <div className="fields-group-login">
              <TextField
                className="input-email-sigup"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => changeHandler(e)}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <br />
            
            <Button className="btn-forgatPas" style={{ marginTop: '20px', borderRadius: '20px' }}
              variant="contained"
              onClick={loginHandler}
              color="primary"
              fullWidth
            >

              Login
            </Button>

            <br />
            <br />
            <br />
            <div className="forgot-password-link">
              <Link to="/forgot-password" style={{ color:'white', fontSize: '18px' }}>Forgot Password?</Link>
            </div>
            <br />
            <br />

            <p>
              Don't have an Account ?{" "}
              <span
                className="hyper"
                onClick={() => {
                  navigate('/signup')
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </Box>
      </div>
      <ToastContainer />
      <BottomNavigation
        sx={{
          width: "90%", position: "absolute", bottom: 0, backgroundColor: '#333', color: '#63d7b0', borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: 1
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="✨🔮 About🔮✨"
          href="/about"
          style={{ borderRadius: '12px', marginRight: '100px', color: '#63d7b0' }}
        />
        <BottomNavigationAction
          label="✨🔮 Contact Us ✨🔮"
          href="/contact"
         
          style={{ borderRadius: '12px', color: '#63d7b0' }}
        />
      </BottomNavigation>
    </>
  );
}

export default Login;
