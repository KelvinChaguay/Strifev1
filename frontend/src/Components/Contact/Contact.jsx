import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { Fade } from '@mui/material'

function Contact() {
    return (
        <Box className="forgatPass-box" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Main Content */}
            <Fade in={true} timeout={1000}>
                <Container maxWidth="md" variant="h1"  gutterBottom style={{ color: '#63d7b0' }}>
                    <Box sx={{ my: 6 }}>
                        <Typography variant="h2" component="h1" gutterBottom style={{ color: '#63d7b0' }}>
                            Contact Strife
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                            {'Have a question or need help?'}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                            {'Email Address'}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', margin: '10px' }} />
                        </Box>        
                        <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                            {'Confirm Email Address'}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <input type="email" placeholder="Confirm Email Address" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', margin: '10px' }} />
                        </Box>
                        <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                            {'Subject'}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <input type="text" placeholder="Subject" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', margin: '10px' }} />
                        </Box>
                        
                        <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                            {'Please contact us, we are happy to help.'}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <textarea placeholder="Message" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', margin: '10px' }} />
                        </Box>
                        <br/>
                        <Button className="btn-forgatPas" color="inherit" variant="contained" size="large" href='/' >
                            Send
                        </Button>
                        





                    </Box>



                </Container>

            </Fade>
           

        </Box>
    )
}

export default Contact
