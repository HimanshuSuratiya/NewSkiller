import React from "react";
import "./MyProfile.css";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { TextField, TextareaAutosize } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const MyProfile = () => {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="My profile" />
                <div className="container mt-4 ProfileMainContainer">
                    <div className="main-body">
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>John Doe</h4>
                                                <p className="text-secondary mb-1">Full Stack Developer</p>
                                                <p className="text-muted font-size-sm mb-0">Bay Area, San Francisco, CA</p>
                                                <Stack className="my-2">
                                                    <Rating className="d-flex justify-content-center" style={{ color: '#188dc7' }} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                </Stack>
                                                <div className="d-flex justify-content-between">
                                                    <button className="profileFollowBtn">Follow</button>
                                                    <button className="profileMessageBtn">Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><LanguageIcon /> Website</h6>
                                            <span className="text-secondary">https://skiller.com</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><GitHubIcon /> Github</h6>
                                            <span className="text-secondary">skiller</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"> <TwitterIcon /> Twitter</h6>
                                            <span className="text-secondary">@skiller</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><InstagramIcon /> Instagram</h6>
                                            <span className="text-secondary">skiller</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><FacebookIcon /> Facebook</h6>
                                            <span className="text-secondary">skiller</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                defaultValue="John Doe"
                                                size='large'
                                                label={'Name'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                defaultValue="johnDoe@gmail.com"
                                                size='large'
                                                label={'Email'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                defaultValue="(239) 816-9029"
                                                size='large'
                                                label={'Phone'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                defaultValue="Bay Area, San Francisco, CA"
                                                size='large'
                                                label={'Location'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                defaultValue="America"
                                                size='large'
                                                label={'Country'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <label className="p-0">Your Address</label>
                                            <TextareaAutosize
                                                className='p-2'
                                                aria-label="minimum height"
                                                minRows={1}
                                                style={{ width: '100%' }}
                                                value="House No 125 GD calony Mayur Vihar Phase-3 Delhi = 110096"
                                            />
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                type="password"
                                                defaultValue="Bay Area, San Francisco, CA"
                                                size='large'
                                                label={'Password'}
                                            />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div>
                                                <button className="profileMessageBtn">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MyProfile;