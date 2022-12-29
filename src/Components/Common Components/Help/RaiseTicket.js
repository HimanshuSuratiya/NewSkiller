import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@material-ui/core/Typography';
import { IconButton, Divider } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { TextField, TextareaAutosize } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
    RaiseTicketBtn: {
        color: '#ffffff',
        background: '#188dc7',
        padding: '4px 20px',
        fontSize: '16px',
        transition: '.5s',
        borderRadius: '20px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },
}));

const RaiseTicket = ({ setClosePopUp, popUp }) => {
    const classes = useStyles();
    const handleClose = () => {
        setClosePopUp(false);
    };

    return (
        <div>
            <Dialog
                open={popUp}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <div className="d-flex justify-content-between align-items-center">
                        <Typography variant="h5">
                            {"Raise ticket"}
                        </Typography>
                        <IconButton>
                            <CloseIcon onClick={() => { setClosePopUp(false) }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <Divider style={{ backgroundColor: 'gray' }} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField
                            className="mb-3"
                            fullWidth
                            variant='outlined'
                            size='large'
                            label={'Name'}
                        />
                        <TextField
                            fullWidth
                            className="mb-3"
                            variant='outlined'
                            size='large'
                            label={'Email'}
                        />
                        <TextField
                            fullWidth
                            className="mb-3"
                            variant='outlined'
                            size='large'
                            label={'Phone'}
                        />
                        <TextareaAutosize
                            className='p-2'
                            aria-label="minimum height"
                            minRows={2}
                            style={{ width: '100%' }}
                            placeholder="Description"
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='px-4 py-4'>
                    <button className={classes.RaiseTicketBtn} onClick={handleClose}>Cancel</button>
                    <button className={classes.RaiseTicketBtn} onClick={handleClose}>Submit</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default RaiseTicket;