import React from 'react'
import "./Contactus.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Menu from "../Menu/Menu";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Banner from '../Banner/Banner';
import Images from "../../../Images/Image";
import Footer from "../Footer/Footer";
import { TextField, TextareaAutosize } from '@mui/material';

const Contactus = () => {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.contactus} text="Contact us" />
                <div className="contact py-5">
                    <div className="container-fluid">
                        <div className="mb-2 d-flex justify-content-between w-100 align-items-center main-contact-us-card-div">
                            <div className="card-main-box">
                                <div className="card-icon-box">
                                    <PermPhoneMsgIcon className="card-main-icon" />
                                </div>
                                <p className="w-100 d-flex justify-content-center m-0 card-main-label"> Phone</p>
                                <a className="w-100 d-flex justify-content-center m-0 card-main-text">+918285999309</a>
                                <a className="w-100 d-flex justify-content-center m-0 card-main-text">+911234567890</a>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content-center mt-2 align-items-center">
                                        <button className='btn btn-primary btn-lg btn-block contact-us-btn'>Call </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-main-box">
                                <div className="card-icon-box">
                                    <AddLocationAltIcon className="card-main-icon" />
                                </div>
                                <p className="w-100 d-flex justify-content-center m-0 card-main-label"> Address</p>
                                <a className="w-100 d-flex justify-content-center m-0 card-main-text" style={{ textAlign: 'center' }}>House No 112 Pandit Mohalla Village Kondli Delhi-110096</a>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content-center mt-2 align-items-center">
                                        <button className='btn btn-primary btn-lg btn-block contact-us-btn'>Go to Google maps </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-main-box">
                                <div className="card-icon-box">
                                    <AttachEmailIcon className="card-main-icon" />
                                </div>
                                <p className="w-100 d-flex justify-content-center m-0 card-main-label">Email</p>
                                <a className="w-100 d-flex justify-content-center m-0 card-main-text">Admin123@gmail.com</a>
                                <a className="w-100 d-flex justify-content-center m-0 card-main-text">Himanshu123@gmail.com</a>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content-center mt-2 align-items-center">
                                        <button className='btn btn-primary btn-lg btn-block contact-us-btn'>Contact by a email </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-12 text-center'>
                                <h2 className="font-weight-light mt-3 mb-4">Quick Contact</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className='card-shadow d-flex justify-content-center align-items-center contact-us-img'>
                                    <img src="https://storage-asset.msi.com/template/images/contact_us/kv-contact-us-xs.jpg" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-box ml-3">
                                    <form className='contact-us-form'>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    size='large'
                                                    label={'Name'}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-2">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    size='large'
                                                    label={'Email address'}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-2">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    type="number"
                                                    size='large'
                                                    label={'Phone'}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-2">
                                                <TextareaAutosize
                                                    className='p-2'
                                                    aria-label="minimum height"
                                                    minRows={2}
                                                    style={{ width: '100%' }}
                                                    placeholder="Message"
                                                />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button className='btn btn-primary btn-lg btn-block contact-us-submit-btn'>Submit <ArrowRightAltIcon /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contactus;