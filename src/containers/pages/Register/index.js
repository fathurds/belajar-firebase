import { Avatar, Box, Container, createTheme, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import { LoadingButton } from "@mui/lab"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import { AlertComponent, Copyright } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUserAPI } from '../../../config/action/auth';

const theme = createTheme();

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        const res = await registerUserAPI(email, password).catch(err => err);
        if (res.error) {
            const temp = res.error.split("/").pop().split("-").join(" ");
            setMessage(temp);
        } else {
            toast.success("Register Success");
            navigate("/login");
        }

        setIsLoading(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                        {message && (
                            <AlertComponent
                                severity="error"
                                onClose={() => setMessage("")}>
                                {message}
                            </AlertComponent>
                        )}

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={isLoading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}

export default Register