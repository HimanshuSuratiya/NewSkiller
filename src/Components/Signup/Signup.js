import React, { useState } from 'react'
import Images from "../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField, TextareaAutosize } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import "../../Animation.css";
import Banner from "../Common Components/Banner/Banner";
import Footer from "../Common Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import Menu from "../Common Components/Menu/Menu";

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

    LoginPlatforms: {
        height: '50px',
        width: '100%',
    },

    LoginFields: {
        alignItems: "center",
        borderRadius: "10px",
        width: "48%",
        cursor: 'pointer',
        backgroundColor: "#edecec",
    },

    googleImage: {
        "& img": {
            height: "20px",
            width: "20px",
        },
    },

}));

const Signup = () => {
    const classes = useStyles();
    const [phone, setPhone] = useState(false)

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 200,
            left: 0,
            behavior: "instant",
        });
    }

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="Signup or Register" />
                <div className="container py-4 h-80 abc">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 Signupanimation">
                            <img src={Images.SignUp} className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            {phone
                                ?
                                <>
                                    <div className="form-outline">
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            size='large'
                                            label={'Enter your phone number'}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <NavLink to="otp-verification" className={`btn btn-primary btn-lg btn-block ${classes.SignupBtn}`}>Verify <ArrowRightAltIcon /></NavLink >
                                    </div>
                                </>
                                :
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
                                            label={'Phone Number'}
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
                                            label={'Country'}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <TextareaAutosize
                                            className='p-2'
                                            aria-label="minimum height"
                                            minRows={2}
                                            style={{ width: '100%' }}
                                            placeholder="Enter your Location Address"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <NavLink to="otp-verification" className={`btn btn-primary btn-lg btn-block ${classes.SignupBtn}`}>Sign up <ArrowRightAltIcon /></NavLink >
                                    </div>
                                    <div className="divider d-flex align-items-center my-3 justify-content-center">
                                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>
                                    <div className={`${classes.LoginPlatforms} d-flex justify-content-between`}>
                                        <div className={`d-flex justify-content-center ${classes.LoginFields}`} onClick={() => { setPhone(true); scrollToTop(); }}>
                                            <div className="media-options">
                                                <a>
                                                    <FacebookIcon />
                                                    <span> Login with Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`d-flex justify-content-center ${classes.LoginFields}`} onClick={() => { setPhone(true); scrollToTop(); }}>
                                            <div className="media-options">
                                                <a className={classes.googleImage}>
                                                    <img src={Images.google} />
                                                    <span> Login with Google</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink className="d-flex justify-content-center text-decoration-underline mt-2" to="/login">Already have an account ?... </NavLink>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Signup;