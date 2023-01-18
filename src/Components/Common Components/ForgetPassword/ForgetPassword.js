import React, { useState } from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Images from '../../../Images/Image';
import { TextField } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OtpInput from "react-otp-input";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
    NextBtn: {
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

    recentOtp: {
        color: 'gray',
        transition: '.5s',
        fontSize: '16px',
        "&:hover": {
            color: 'black',
        },
    },
}));

const defaultState = {
    emailorphone: '',
    emailScreen: true,
    getOtpScreen: false,
    changePassword: false
}

const ForgetPassword = () => {
    const classes = useStyles();
    const [state, setState] = useState(defaultState)
    let navigate = useNavigate();

    const handleForgetPassword = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const resendOtpRequest = () => {
        alert('Please wait your recent otp request is submitted')
    }

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.forgetPass} text="Forget Password" />
                <div className="container py-4 h-80">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 Loginanimation">
                            <img src={Images.forgetAnnimation} className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            {state.emailScreen &&
                                <div>
                                    <h3>Enter your mobile number or email</h3>
                                    <p>We will send you a OTP message</p>
                                    <div className="form-outline">
                                        <TextField
                                            name="emailorphone"
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Email or Phone'}
                                            onChange={handleForgetPassword}
                                        />
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center">
                                        <button className={`btn btn-primary btn-lg btn-block ${classes.NextBtn}`} onClick={() => { setState((prevState) => ({ ...prevState, emailScreen: false, getOtpScreen: true })) }}>Next <ArrowRightAltIcon /></button>
                                    </div>
                                </div>
                            }
                            {state.getOtpScreen &&
                                <>
                                    <div>
                                        <a className="d-flex justify-content-center" style={{ fontSize: '22px', letterSpacing: "2px" }}>OTP Verification</a>
                                        <div className="form-outline mb-2">
                                            <span className="form-label mb-0 d-flex justify-content-center" for="form1Example13">Your Phone number is  {state.emailorphone} {state.email}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Grid
                                            item
                                            xs={12}
                                            container
                                            justify="center"
                                            alignItems="center"
                                            direction="column"
                                        >
                                            <Grid item spacing={3} justify="center">
                                                <OtpInput
                                                    numInputs={5}
                                                    separator={
                                                        <span>
                                                            <strong>.</strong>
                                                        </span>
                                                    }
                                                    inputStyle={{
                                                        width: "3rem",
                                                        height: "3rem",
                                                        margin: "0 1rem",
                                                        fontSize: "2rem",
                                                        borderRadius: 4,
                                                        border: "1px solid rgba(0,0,0,0.3)"
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center">
                                        <button className={`btn btn-primary btn-lg btn-block me-2 ${classes.NextBtn}`} onClick={resendOtpRequest}>Resend OTP</button>
                                        <button className={`btn btn-primary btn-lg btn-block ms-2 ${classes.NextBtn}`} onClick={() => { setState((prevState) => ({ ...prevState, getOtpScreen: false, changePassword: true })) }}>Verify</button>
                                    </div>
                                </>
                            }
                            {state.changePassword &&
                                <div>
                                    <h3>New Credentials</h3>
                                    <div className="form-outline">
                                        <div className='mt-3'>
                                            <TextField
                                                name="newpassword"
                                                fullWidth
                                                variant='outlined'
                                                type="password"
                                                size='large'
                                                label={'New Password'}
                                            />
                                        </div>
                                        <div className='mt-3'>
                                            <TextField
                                                name="confirmpassword"
                                                fullWidth
                                                variant='outlined'
                                                type="password"
                                                size='large'
                                                label={'Confirm Password'}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center">
                                        <button className={`btn btn-primary btn-lg btn-block ${classes.NextBtn}`} onClick={() => { navigate('/'); alert('Your Password is changed') }}>Update <ArrowRightAltIcon /></button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ForgetPassword
