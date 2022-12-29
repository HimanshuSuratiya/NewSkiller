import React, { useState } from 'react'
import Images from "../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField, TextareaAutosize } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import "../../Animation.css";
import Banner from "../Common Components/Banner/Banner";
import Footer from "../Common Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Menu from "../Common Components/Menu/Menu";
import OtpVerification from "../Common Components/OTP/OtpVerification";

const useStyles = makeStyles(() => ({
    SignupBtn: {
        color: '#ffffff',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        fontSize: '16px',
        borderRadius: '20px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },
}));

const Signup = () => {
    const classes = useStyles();
    const [otpScreen, setOtpScreen] = useState(false);
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="Signup or Register" />
                {otpScreen
                    ?
                    <OtpVerification />
                    :
                    <div className="container py-4 h-80 abc">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6 Signupanimation">
                                <img src={Images.SignUp} className="img-fluid" alt="Phone image" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form>
                                    <div className="form-outline">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'First Name'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Last Name'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Email'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Password'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Confirm Password'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Location'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Phone Number'}
                                        />
                                    </div>
                                    <div className="form-outline mt-3">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Country'}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <TextareaAutosize
                                            className='p-2'
                                            aria-label="minimum height"
                                            minRows={2}
                                            style={{ width: '100%' }}
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <a className={`btn btn-primary btn-lg btn-block ${classes.SignupBtn}`} onClick={() => { setOtpScreen(true) }}>Sign up <ArrowRightAltIcon /></a>
                                    </div>
                                    <NavLink className="d-flex justify-content-center text-decoration-underline mt-2" to="/login">Already have an account ?... </NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <Footer />
        </>
    )
}

export default Signup;