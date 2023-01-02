import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Gallery from "react-photo-gallery";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Carousel, { Modal, ModalGateway } from "react-images";
import Divider from '@mui/material/Divider';
import Images from "../../../Images/Image";
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const photos = [
    {
        src: Images.one,
        width: 3,
        height: 3
    },
    {
        src: Images.two,
        width: 1,
        height: 1
    },
    {
        src: Images.three,
        width: 3,
        height: 4
    },
    {
        src: Images.four,
        width: 3,
        height: 4
    },
    {
        src: Images.five,
        width: 3,
        height: 4
    },
    {
        src: Images.six,
        width: 3,
        height: 3
    },
];

const bidDetailPhotos = [
    {
        src: Images.cppjava,
        width: 5,
        height: 8
    },
    {
        src: Images.android,
        width: 7,
        height: 11
    },
    {
        src: Images.app,
        width: 3,
        height: 5
    },
    {
        src: Images.blogThree,
        width: 3,
        height: 4
    },
    {
        src: Images.blogOne,
        width: 3,
        height: 4
    },
    {
        src: Images.blogTwo,
        width: 3,
        height: 3
    },
];

const MyProposalDetail = ({ cardData }) => {
    const [moreOption, setMoreOption] = useState('');
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const handleChangeMoreOption = (event) => {
        setMoreOption(event.target.value);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const handleCloseOpenWithdrawModal = () => {
        setOpenWithdrawModal(false);
    };

    const handleClickOpenWithdrawModal = () => {
        setOpenWithdrawModal(true);
    };

    return (
        <>
            <div className='main-top-container container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='d-flex align-items-center justify-content-between task-status-main-area p-2'>
                            <div className='d-flex align-items-center task-status-area'>
                                <p className='task-status d-flex align-items-center'>{cardData.status}</p>
                            </div>
                        </div>
                        <div className='p-2'>
                            <h4 className='task-status-heading text-uppercase heading-color'>{cardData.taskName}</h4>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <NavLink to="user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2202413/profilepic-dcf6a39c355c95ad9e930b974af69496.jpeg?width=64&height=64" sx={{ width: 45, height: 45 }} />
                                </NavLink>
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>POSTED BY</p>
                                    <a className='p-0 m-0'>{cardData.postedBy}</a>
                                </div>
                            </div>
                            {cardData.status === 'Completed' &&
                                <div className='d-flex align-items-center post-location-data w-50'>
                                    <NavLink to="user-profile">
                                        <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2202413/profilepic-dcf6a39c355c95ad9e930b974af69496.jpeg?width=64&height=64" sx={{ width: 45, height: 45 }} />
                                    </NavLink>
                                    <div className='px-1 posted-area'>
                                        <p className='p-0 m-0'>COMPLETED BY</p>
                                        <a className='p-0 m-0'>{cardData.completedBy}</a>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <CategoryIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>CATEGORY</p>
                                    <a className='p-0 m-0'>{cardData.categoryList}</a>
                                </div>
                            </div>
                            <div className='px-2 d-flex align-items-center post-location-data w-50'>
                                <LocationOnIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LOCATION</p>
                                    <a className='p-0 m-0'>{cardData.location}</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>ORDER DUE DATE</p>
                                    <a className='p-0 m-0'>{cardData.date}</a>
                                </div>
                            </div>
                            <div className='d-flex px-2 align-items-center post-location-data w-50'>
                                <TranslateIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LANGUAGE</p>
                                    <a className='p-0 m-0'>{cardData.language}</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <SchoolIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>SKILLS</p>
                                    <a className='p-0 m-0'>{cardData.skills}</a>
                                </div>
                            </div>
                            <div className='d-flex px-2 align-items-center post-location-data w-50'>
                                <LocalLibraryIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LEARNING METHOD</p>
                                    <a className='p-0 m-0'>{cardData.learningMethod}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 py-2'>
                        <div className='py-3' style={{ border: '1px solid black', borderRadius: '4px' }}>
                            <h3 className='p-0 m-0 py-3 d-flex align-item-center justify-content-center heading-color'>Your Offer</h3>
                            <p className='p-0 m-0 py-1 d-flex align-item-center justify-content-center' style={{ color: '#000', fontWeight: '600', fontSize: '36px' }}>$50</p>
                        </div>
                        <div className='d-flex justify-content-end py-2'>
                            <p className='p-0 m-0 px-1' style={{ fontWeight: '700' }}>About 1 hour ago</p>
                        </div>
                        <div>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-select-small">More options</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={moreOption}
                                    label="More options"
                                    onChange={handleChangeMoreOption}
                                >
                                    <MenuItem value={10}>Option-1</MenuItem>
                                    <MenuItem value={20}>Option-2</MenuItem>
                                    <MenuItem value={30}>Option-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <h5 className='p-0 m-0 heading-color'>Description</h5>
                        <p className='p-0 m-0'>{cardData.description}</p>
                    </div>
                    <div className='p-2'>
                        <h4 className='p-0 m-0 py-2 heading-color'>PHOTOS</h4>
                        <Gallery photos={photos} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map((x) => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <div className='p-2'>
                        <h4 className='p-0 m-0'>Bid Details...</h4>
                    </div>
                    <div className='p-2 d-flex align-items-center justify-content-between'>
                        <h5 className='p-0 m-0 heading-color' style={{ fontWeight: '600', textDecoration: 'underline' }}>Enter expected days to complete the order</h5>
                        <p className='p-0 m-0' style={{ color: '#188dc7' }}>35 Days</p>
                    </div>
                    <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                    <div className='p-2 d-flex align-items-center justify-content-between'>
                        <h5 className='p-0 m-0 heading-color' style={{ fontWeight: '600', textDecoration: 'underline' }}>Expected budget</h5>
                        <p className='p-0 m-0' style={{ color: '#188dc7' }}>$ 50</p>
                    </div>
                    <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                    <div className='p-2 d-flex align-items-center justify-content-between'>
                        <h5 className='p-0 m-0 heading-color' style={{ fontWeight: '600', textDecoration: 'underline' }}>Skills</h5>
                        <p className='p-0 m-0' style={{ color: '#188dc7' }}>React.js, javscript, html</p>
                    </div>
                    <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                    <div className='p-2'>
                        <label className='p-0 m-0 view-more-detail-head'>Pictures</label>
                        <Gallery photos={bidDetailPhotos} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={bidDetailPhotos.map((x) => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <div className='p-2'>
                        <h5 className='p-0 m-0 heading-color' style={{ fontWeight: '600', textDecoration: 'underline' }}>Description</h5>
                        <p className='p-0 m-0' style={{ color: '#188dc7' }}>our task may be impacted. See Safety Centre for info. Lorem Ipsum is simply dummy text printing o and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                    <div className="d-flex align-items-center justify-content-center my-3">
                        <button className='btn btn-primary btn-lg btn-block make-an-offer-btn' onClick={handleClickOpenWithdrawModal}>Withdraw your offer</button>
                    </div>
                </div>
            </div>
            <Dialog
                open={openWithdrawModal}
                onClose={handleCloseOpenWithdrawModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Are you sure .. ?"}
                </DialogTitle>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogContent>
                    <DialogContentText>
                        <h4>Are you sure you want to delte this Withdraw offer</h4>
                    </DialogContentText>
                </DialogContent>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogActions>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenWithdrawModal} autoFocus>
                        Cancel
                    </button>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenWithdrawModal} autoFocus>
                        Withdraw
                    </button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MyProposalDetail;