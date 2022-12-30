import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Images from '../../../Images/Image';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Accordion from 'react-bootstrap/Accordion';
import Footer from "../Footer/Footer";
import "./Notification.css";

const Notification = () => {
    return (
        <>
            <Menu />
            <section>
                <Banner imgSource={Images.notification} text="Notification" />
                <div className='p-4'>
                    <div className='container p-0'>
                        <div className="page-wrapper" style={{ minHeight: '250px' }}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="faq-accordian-main-area notification-arrow-hide-parents">
                                            <div className="accordion accordion-" id="accordionFlushExample">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Wrapped Bitcoin is now listed on Unity Exchange</h2>
                                                                            </Accordion.Header>
                                                                            <p>25 min ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Vivamus tortor, odio viverra malesuada sapien dui.</h2>
                                                                            </Accordion.Header>
                                                                            <p>27 min ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Srapped Citcoin is now listed on Unity Exchange</h2>
                                                                            </Accordion.Header>
                                                                            <p>45 min ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Trapped Eitcoin is now listed on Unity Exchange</h2>
                                                                            </Accordion.Header>
                                                                            <p>2 hours ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Lindy Uikit on trending</h2>
                                                                            </Accordion.Header>
                                                                            <p>2 days ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5">
                                                        <Accordion.Header>
                                                            <h2 className="accordion-header w-100" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    <div className="notification-detail-main-area">
                                                                        <div className="notification-user-img">
                                                                            <img src={Images.two} alt="user img" />
                                                                        </div>
                                                                        <div className="notification-heading-main-area">
                                                                            <Accordion.Header>
                                                                                <h2>Urapped Bitcoin is now listed on Unity Exchange</h2>
                                                                            </Accordion.Header>
                                                                            <p>4 days ago</p>
                                                                        </div>
                                                                        <div className="notification-dlt-main-area">
                                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
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

export default Notification
