import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../../config/firebase';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate('/login');
        }
        setIsLoading(false);
    });

    const onLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logout berhasil');
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log('Logout gagal');
        });
    }

    if (isLoading) {
        return <div></div>
    }

    return (
        <div>
            <Typography variant="h1" color="initial">
                Test
            </Typography>
            <Button variant="contained" color="primary" onClick={onLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Dashboard