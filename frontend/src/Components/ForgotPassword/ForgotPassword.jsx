import React from 'react'
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import logo from "../../Images/Strife.PNG";


function ForgotPassword() {
    return (

        <Grid item xs={12} sm={6} md={4} >
            <Card>
                <CardContent className="forgatPass-box">
                    <img src={logo} alt="Stripe Logo" height="50" style={{ width: '50px', height: '50px', borderRadius: '50%', alignItems: 'center' }} />
                    <br />
                    <br />

                    <Typography variant="h5" component="div">
                        Forgot Password
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        You may have forgotten your password, but we can help you out. Enter your email address and we will send you a link to reset your password.
                    </Typography>
                    <br />
                    <div className="fields-group-login">
                        <TextField
                            className="input-email-sigup"
                            type="text"
                            placeholder="Email"
                            name="Email"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <Button className="btn-forgatPas" style={{ marginTop: '20px', borderRadius: '20px' }}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >

                        Send Email
                    </Button>

                    <br />
                    <br />

                    <Typography variant="body2" >
                        <a href="/" style={{ color: 'white' }} >Back to Login</a>
                    </Typography>



                </CardContent>
            </Card>
        </Grid>

    )
}

export default ForgotPassword
