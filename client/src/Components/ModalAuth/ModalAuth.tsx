import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginIcon from '@mui/icons-material/Login';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0 solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};


export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                color="inherit"
            >
                войти
                <LoginIcon sx={{ fontSize: 30 }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        sx={{ width: '100%', }}
                        label="Ваш никнейм"
                        variant="outlined"
                    />
                    <Button
                        variant='contained'
                        sx={{ margin: '10px 0 0' }}
                        onClick={handleClose}
                    >
                        войти
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
