import React from 'react'
import Images from "../../../Images/Image";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Footer = () => {
    return (
        <footer className="site-footer footer-light">
            <div className="footer-top-newsletter">
                <div className="container">
                    <div className="sf-news-letter">
                        <span>Subscribe Our Newsletter</span>
                        <form>
                            <div className="form-group sf-news-l-form">
                                <input type="text" className="form-control" placeholder="Enter Your Email" />
                                <button type="submit" className="sf-sb-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6  m-b30 d-flex justify-content-center">
                            <div className="sf-site-link sf-widget-link">
                                <h4 className="sf-f-title">Site Links</h4>
                                <ul>
                                    <li><NavLink to="/"><KeyboardDoubleArrowRightIcon /> Home</NavLink></li>
                                    <li><NavLink to="/contact-us"><KeyboardDoubleArrowRightIcon /> Contact Us</NavLink></li>
                                    <li><NavLink to="/how-it-works"><KeyboardDoubleArrowRightIcon /> How it works</NavLink></li>
                                    <li><NavLink to="/"><KeyboardDoubleArrowRightIcon /> Privacy Policy</NavLink></li>
                                    <li><NavLink to="/"><KeyboardDoubleArrowRightIcon /> Terms & Conditions</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6  m-b30 d-flex justify-content-center">
                            <div className="sf-site-link sf-widget-cities">
                                <h4 className="sf-f-title">Popular Categories</h4>
                                <ul>
                                    <li><NavLink to="/category/Ballston Lake"><KeyboardDoubleArrowRightIcon /> Ballston Lake</NavLink></li>
                                    <li><NavLink to="/category/Batumi"><KeyboardDoubleArrowRightIcon /> Batumi</NavLink></li>
                                    <li><NavLink to="/category/Brooklyn"><KeyboardDoubleArrowRightIcon /> Brooklyn</NavLink></li>
                                    <li><NavLink to="/category/Cambridge"><KeyboardDoubleArrowRightIcon /> Cambridge</NavLink></li>
                                    <li><NavLink to="/category/Accountants"><KeyboardDoubleArrowRightIcon /> Accountants</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6  m-b30 d-flex justify-content-center">
                            <div className="sf-site-link sf-widget-contact">
                                <h4 className="sf-f-title">Contact Info</h4>
                                <ul>
                                    <li><HomeIcon /> Sector - 55 Noida Pincode - 201301 </li>
                                    <li><PhoneIcon /> +91 123 456 7890</li>
                                    <li><PhoneIcon /> +91 123 456 7890</li>
                                    <li><AttachEmailIcon /> info@Skiller.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="sf-footer-bottom-section">
                        <div className="sf-f-logo"><a href="javascript:void(0);"><img src={Images.logodark} alt="" /></a>
                        </div>
                        <div className="sf-f-copyright">
                            <span>Copyright 2022 | Skiller. All Rights Reserved</span>
                        </div>
                        <div className="sf-f-social">
                            <ul className="socila-box">
                                <li><a href="javascript:void(0);"><i> <TwitterIcon /> </i></a></li>
                                <li><a href="javascript:void(0);"><i> <FacebookIcon /></i></a></li>
                                <li><a href="javascript:void(0);"><i> <EmailIcon /></i></a></li>
                                <li><a href="javascript:void(0);"><i> <InstagramIcon /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;