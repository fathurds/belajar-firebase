import { Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const AlertComponent = ({ children, onClose, severity }) => {
    return (
        <Alert
            severity={severity}
            sx={{ mb: 3 }}
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={onClose}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
        >
            {children}
        </Alert>
    )
}

export default AlertComponent