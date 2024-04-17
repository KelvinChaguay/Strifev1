import React from 'react'
import { Card, CardContent, Container, Grid, Typography, Slider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Fade } from '@mui/material'
import { Chat as ChatIcon, Groups as GroupsIcon, FilePresent as FilePresentIcon, Opacity, ExpandMore } from '@mui/icons-material'
import { EmojiEmotions } from '@mui/icons-material'
import { blue, grey } from '@mui/material/colors'
import { Backdrop, Button, CircularProgress, BottomNavigation, BottomNavigationAction, InputAdornment, IconButton, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled, Paper, Box, keyframes } from '@mui/material';
import Lottie from 'react-lottie';

// Import images and GIFs
import logo from '../../Images/Strife.PNG';
import fire from '../../Images/giphy.gif';
import doc from '../../Images/giphyd.gif';
import earth from '../../Images/giphye.gif';

// Button 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Strife from '../../Images/Strife.json';
import footer from '../../Images/footer-img.png';

// Font Animation
import { TypeAnimation } from 'react-type-animation';
import TypingAnimation from './TypingAnimation';
import AnimatedTypography from './AnimatedTypography';


// Define keyframes for animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Define styled components with hover transitions and animations
const AnimatedCard = styled(Card)`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  animation: ${rotate} 5s linear infinite;
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

// hover effect
const customTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,

})};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
    `}
  `;

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;
function About() {
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
            <Box className="forgatPass-box" style={{ backgroundColor: '#1a1a1a' }}>
                <Fade in={true} timeout={1000}>
                    <Container maxWidth="md" component="main">
                        {/* Main Content */}
                        <Fade in={true} timeout={1000}>
                            <Container maxWidth="md" component="main">
                                <Box sx={{ my: 8 }}>
                                    <AnimatedTypography variant="h1" component="h1"
                                        gutterBottom style={{ color: 'linear-gradient(90.36deg, rgb(48, 181, 255) 29.42%, rgb(78, 102, 250) 50.67%, rgb(141, 82, 248) 73.23%)' }}
                                        text="Welcome- to - Strife" />
                                    <TypingAnimation text=" .Strife is a free chat application that allows you to connect 
                                    with friends, family, and colleagues in real-time. With Strife,
                                     you can enjoy individual and group chats, send and receive documents, 
                                     and rate your experience. Sign up today and experience the power of Strife.😃"
                                        speed={40} />

                                    <Typography variant="body1" gutterBottom style={{ color: '#63d7b0' }}>


                                        <Lottie options={options} />
                                    </Typography>


                                    <br />

                                </Box>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <StyledCard className='about-box' style={{ cursor: 'default' }}>
                                            <img src={fire} alt="fire" style={{ width: '100%', height: 'auto' }} />
                                            <CardContent>
                                                <Typography variant="h5" component="div" style={{ color: 'blueviolet', fontSize: '22px' }}>
                                                    <ChatIcon />   Normal Chat
                                                </Typography>
                                                <Typography variant="body2" style={{ color: '#63d7b0', textAlign: 'center', fontSize: '16px' }}>
                                                    Enjoy our free individual room to joing single real-time conversations.
                                                </Typography>
                                            </CardContent>
                                        </StyledCard>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <StyledCard className='about-box' style={{ cursor: 'default' }}>
                                            <img src={earth} alt="earth" style={{ width: '100%', height: 'auto' }} />
                                            <CardContent>
                                                <Typography variant="h5" component="div" style={{ color: 'blueviolet' }}>
                                                    <GroupsIcon /> Group Chat
                                                </Typography>
                                                <Typography variant="body2" style={{ color: '#63d7b0', textAlign: 'center', fontSize: '16px' }}>
                                                    Access our free chat room feature to join group conversations.
                                                </Typography>
                                            </CardContent>
                                        </StyledCard>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <StyledCard className='about-box' style={{ cursor: 'default' }}>
                                            <img src={doc} alt="doc" style={{ width: '100%', height: 'auto' }} />
                                            <CardContent>
                                                <Typography variant="h5" component="div" style={{ color: 'blueviolet' }}>
                                                    <EmojiEmotions />     Emoji Chat
                                                </Typography>
                                                <Typography variant="body2" style={{ color: '#63d7b0', textAlign: 'center', fontSize: '16px' }}>
                                                    Send and recieved Emoji on our free chat website with no issues.
                                                </Typography>
                                            </CardContent>
                                        </StyledCard>
                                    </Grid>
                                </Grid>

                            </Container>

                        </Fade>

                    </Container>

                </Fade>
                {/* Call to Action Section */}
                <Container maxWidth="md" component="main">
                    <Typography variant="h2" component="h1" gutterBottom style={{ color: '#63d7b0', textAlign: 'center' }}>
                        Get Started with Strife Today
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align="center" style={{ color: 'white' }}>
                        Experience the power of Strife. Sign up for Strife today and take your chats to the next level.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button className="btn-forgatPas" color="inherit" variant="contained" size="large" href='/signUp' >
                            Sign Up
                        </Button>
                    </Box>
                </Container>


                {/* Creators Section */}
                <Container maxWidth="md" component="main">
                    <AnimatedTypography variant="h3" component="h1"
                        gutterBottom style={{ color: 'linear-gradient(90.36deg, rgb(48, 181, 255) 29.42%, rgb(78, 102, 250) 50.67%, rgb(141, 82, 248) 73.23%)' }}
                        text=" Meet-the-Creators" />
                    <Grid container spacing={4} justifyContent="center">
                        {['Quanisha', 'Omar', 'Bozo', 'Kelvin'].map((creator, index) => (
                            <Link to="/" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Box sx={{ width: 1, padding: '50px', animation: `${upDown} 1.6s linear infinite` }}>
                                        <CardContent>

                                            <Typography variant="h5" component="h2">
                                                <AnimatedCard style={{ width: '30px' }}>💥</AnimatedCard>
                                                {creator}
                                            </Typography>
                                            <img src={logo} alt={creator} style={{ width: '100px', borderRadius: '50%' }} />

                                            <Typography variant="body2">
                                                🎓🖥️ Computer Science Student
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Grid>
                            </Link>
                        ))}
                    </Grid>
                </Container>



                {/* FAQ Section */}
                <Container maxWidth="md" component="main" >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        style={{
                            color: '#008080', // Teal color
                            textAlign: 'center',
                        }}
                    >
                        FAQ
                    </Typography>
                    {
                        [
                            { question: 'How to send an emoji?', 
                            answer: 'To use the app, you need to  click on the emoji icon in the text box. This will open an emoji picker. Click on the emoji you want to send, and it will be added to your message.' },
                            { question: 'How to create an account?',
                             answer: 'To create an account, you need to click on the "Sign Up" button on the homepage and be asked to provide a username, email, and password.' },
                            { question: 'How to reset my password?', 
                            answer: 'To reset your password, click on the "Forgot Password" link on the login page and asked to enter your email address, and a link to reset your password will be sent to you.' },
                            { question: 'How to contact support?',
                             answer: 'To contact support, you need to click contact page and send a form' }
                        ].map((faq, index) => (
                            <Accordion key={index}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography style={{ color: '#63d7b0' }}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: 'darkviolet' }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Container>

                {/* Footer */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        p: 6,
                        color: 'white',
                        backgroundImage: `url(${footer})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transition: 'opacity 100ms ease-out, transform 420ms cubic-bezier(0.25, 1.19, 0.5, 1.48)',
                        borderRadius: '29px',
                        boxShadow: 0,
                        zIndex: 1

                    }}
                    component="footer"
                >
                    <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />

                    <Container maxWidth="md">
                        <Grid container spacing={5} justifyContent="space-evenly">
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Home
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    Discover the power Strife. Learn more about our features and how they can enhance your chat experience.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Contact Us
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    Have questions or need support? Contact us at support@strife.com or call us at (123) 456-7890.
                                </Typography>
                            </Grid>

                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6, alignItems: 'center' }}>
                            <Typography variant="body2" color="inherit" align="center">
                                {'© '}
                                {new Date().getFullYear()}
                                {' Strife. All rights reserved.'}
                            </Typography>

                        </Box>

                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default About