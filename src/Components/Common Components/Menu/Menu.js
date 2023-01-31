import React, { useState, useRef, useEffect } from "react";
import Images from "../../../Images/Image";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const defaultState = {
    categories: '',
    moreMenu: '',
    isOpen: false,
    isSekerProvider: null,
    logedin: parseInt(localStorage.getItem("isLogin")),
}

const Menu = (props) => {
    const [state, setState] = useState(defaultState);
    const anchorRef = useRef(null);
    let navigate = useNavigate();

    const handleToggle = () => {
        setState(prevState => ({ ...prevState, isOpen: !state.isOpen }));
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setState(prevState => ({ ...prevState, isOpen: false }));
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setState(prevState => ({ ...prevState, isOpen: false }));
        } else if (event.key === 'Escape') {
            setState(prevState => ({ ...prevState, isOpen: false }));
        }
    }

    const prevOpen = useRef(state.isOpen);
    useEffect(() => {
        if (prevOpen.current === true && state.isOpen === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = state.isOpen;
    }, [state.isOpen]);

    window.addEventListener("scroll", function () {
        let navArea = document.getElementById("navArea");
        if (window.pageYOffset > 0) {
            navArea.classList.add("is-sticky");
        } else {
            navArea.classList.remove("is-sticky");
        }
    });

    const handleLogout = () => {
        localStorage.setItem("isLoginType", 'guest')
        navigate("/login");
    }

    const closeCategoryPopUp = () => {
        setState(prevState => ({ ...prevState, categories: '' }));
    }

    const handleSkillSeekerClick = () => {
        localStorage.setItem('isLoginType', 'skillseeker')
        setState(prevState => ({ ...prevState, isSekerProvider: false }));
    }

    const handleSkillProviderClick = () => {
        localStorage.setItem('isLoginType', 'skillprovider')
        setState(prevState => ({ ...prevState, isSekerProvider: true }));
    }

    const handleSkillSeekerProviderStatus = () => {
        if (localStorage.getItem('isLoginType') === 'skillseeker') {
            localStorage.setItem('isLoginType', 'skillprovider')
            setState(prevState => ({ ...prevState, isSekerProvider: true }));
        }
        else if (localStorage.getItem('isLoginType') === 'skillprovider') {
            localStorage.setItem('isLoginType', 'skillseeker')
            setState(prevState => ({ ...prevState, isSekerProvider: false }));
        }
    }

    return (
        <>
            <header className="header">
                {localStorage.getItem("isLoginType") === 'skillseeker' &&
                    <nav style={{ backgroundColor: `${props.color}` }} className="navbar navbar-expand-md " id="navArea">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to='/'>
                                <img src={Images.Logo} />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 main-menu-ul">
                                    <li className="nav-item">
                                        <NavLink className="nav-link postATaskbtn" aria-current="page" to="/post-a-task">Post a task</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <a className={`nav-link dropdown ${state.categories}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, categories: state.categories === '' ? 'show' : '', moreMenu: '' }));
                                        }}>Categories{state.categories === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />} </a>
                                        <div className={`dropdown-menu submenu ${state.categories}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <h5>What are you looking for?</h5>
                                                    <p>Pick a type of task.</p>
                                                    <div className="asSkiller">
                                                        <h6>As a Skiller</h6>
                                                        <p>I am looking for work in ...</p>
                                                    </div>
                                                    <div className="asSkiller mt-2">
                                                        <h6>As a Poster</h6>
                                                        <p>I need to hire someone for ...</p>
                                                    </div>
                                                </div>
                                                <div className="submenuRightCont">
                                                    <ul className="CategoriesList">
                                                        <li><NavLink to="/category/Accountants" onClick={closeCategoryPopUp}>Accountants</NavLink></li>
                                                        <li><NavLink to="/category/Admin" onClick={closeCategoryPopUp}>Admin</NavLink></li>
                                                        <li><NavLink to="/category/Alterations" onClick={closeCategoryPopUp}>Alterations</NavLink></li>
                                                        <li><NavLink to="/category/Appliances" onClick={closeCategoryPopUp}>Appliances</NavLink></li>
                                                        <li><NavLink to="/category/Assembly" onClick={closeCategoryPopUp}>Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Auto Electricians" onClick={closeCategoryPopUp}>Auto Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Bakers" onClick={closeCategoryPopUp}>Bakers</NavLink></li>
                                                        <li><NavLink to="/category/Barbers" onClick={closeCategoryPopUp}>Barbers</NavLink></li>
                                                        <li><NavLink to="/category/Beauticians" onClick={closeCategoryPopUp}>Beauticians</NavLink></li>
                                                        <li><NavLink to="/category/Bicycle Service" onClick={closeCategoryPopUp}>Bicycle Service</NavLink></li>
                                                        <li><NavLink to="/category/Bricklaying" onClick={closeCategoryPopUp}>Bricklaying</NavLink></li>
                                                        <li><NavLink to="/category/Building Construction" onClick={closeCategoryPopUp}>Building &amp; Construction</NavLink></li>
                                                        <li><NavLink to="/category/Business" onClick={closeCategoryPopUp}>Business</NavLink></li>
                                                        <li><NavLink to="/category/Car Body Work" onClick={closeCategoryPopUp}>Car Body Work</NavLink></li>
                                                        <li><NavLink to="/category/Car Detailing" onClick={closeCategoryPopUp}>Car Detailing</NavLink></li>
                                                        <li><NavLink to="/category/Car Repair" onClick={closeCategoryPopUp}>Car Repair</NavLink></li>
                                                        <li><NavLink to="/category/Car Service" onClick={closeCategoryPopUp}>Car Service</NavLink></li>
                                                        <li><NavLink to="/category/Carpentry" onClick={closeCategoryPopUp}>Carpentry</NavLink></li>
                                                        <li><NavLink to="/category/Cat Care" onClick={closeCategoryPopUp}>Cat Care</NavLink></li>
                                                        <li><NavLink to="/category/Catering" onClick={closeCategoryPopUp}>Catering</NavLink></li>
                                                        <li><NavLink to="/category/Chef" onClick={closeCategoryPopUp}>Chef</NavLink></li>
                                                        <li><NavLink to="/category/Cladding" onClick={closeCategoryPopUp}>Cladding</NavLink></li>
                                                        <li><NavLink to="/category/Cleaning" onClick={closeCategoryPopUp}>Cleaning</NavLink></li>
                                                        <li><NavLink to="/category/Computers IT" onClick={closeCategoryPopUp}>Computers &amp; IT</NavLink></li>
                                                        <li><NavLink to="/category/Concreting" onClick={closeCategoryPopUp}>Concreting</NavLink></li>
                                                        <li><NavLink to="/category/Decking" onClick={closeCategoryPopUp}>Decking</NavLink></li>
                                                        <li><NavLink to="/category/Delivery" onClick={closeCategoryPopUp}>Delivery</NavLink></li>
                                                        <li><NavLink to="/category/Design" onClick={closeCategoryPopUp}>Design</NavLink></li>
                                                        <li><NavLink to="/category/Dog Care" onClick={closeCategoryPopUp}>Dog Care</NavLink></li>
                                                        <li><NavLink to="/category/Draftsman" onClick={closeCategoryPopUp}>Draftsman</NavLink></li>
                                                        <li><NavLink to="/category/Driving" onClick={closeCategoryPopUp}>Driving</NavLink></li>
                                                        <li><NavLink to="/category/Electricians" onClick={closeCategoryPopUp}>Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Entertainment" onClick={closeCategoryPopUp}>Entertainment</NavLink></li>
                                                        <li><NavLink to="/category/Events" onClick={closeCategoryPopUp}>Events</NavLink></li>
                                                        <li><NavLink to="/category/Fencing" onClick={closeCategoryPopUp}>Fencing</NavLink></li>
                                                        <li><NavLink to="/category/Flooring" onClick={closeCategoryPopUp}>Flooring</NavLink></li>
                                                        <li><NavLink to="/category/Florist" onClick={closeCategoryPopUp}>Florist</NavLink></li>
                                                        <li><NavLink to="/category/Furniture Assembly" onClick={closeCategoryPopUp}>Furniture Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Gardening" onClick={closeCategoryPopUp}>Gardening</NavLink></li>
                                                        <li><NavLink to="/category/Gate Installation" onClick={closeCategoryPopUp}>Gate Installation</NavLink></li>
                                                        <li><NavLink to="/category/Hairdressers" onClick={closeCategoryPopUp}>Hairdressers</NavLink></li>
                                                        <li><NavLink to="/category/Handyman" onClick={closeCategoryPopUp}>Handyman</NavLink></li>
                                                        <li><NavLink to="/category/Heating Cooling" onClick={closeCategoryPopUp}>Heating &amp; Cooling</NavLink></li>
                                                        <li><NavLink to="/category/Home Theatre" onClick={closeCategoryPopUp}>Home Theatre</NavLink></li>
                                                        <li><NavLink to="/category/Interior Designer" onClick={closeCategoryPopUp}>Interior Designer</NavLink></li>
                                                        <li><NavLink to="/category/Landscaping" onClick={closeCategoryPopUp}>Landscaping</NavLink></li>
                                                        <li><NavLink to="/category/Laundry" onClick={closeCategoryPopUp}>Laundry</NavLink></li>
                                                        <li><NavLink to="/category/Lawn Care" onClick={closeCategoryPopUp}>Lawn Care</NavLink></li>
                                                        <li><NavLink to="/category/Lessons" onClick={closeCategoryPopUp}>Lessons</NavLink></li>
                                                        <li><NavLink to="/category/Locksmith" onClick={closeCategoryPopUp}>Locksmith</NavLink></li>
                                                        <li><NavLink to="/category/Makeup Artist" onClick={closeCategoryPopUp}>Makeup Artist</NavLink></li>
                                                        <li><NavLink to="/category/Marketing" onClick={closeCategoryPopUp}>Marketing</NavLink></li>
                                                        <li><NavLink to="/category/Mobile Mechanic" onClick={closeCategoryPopUp}>Mobile Mechanic</NavLink></li>
                                                        <li><NavLink to="/category/Painting" onClick={closeCategoryPopUp}>Painting</NavLink></li>
                                                        <li><NavLink to="/category/Paving" onClick={closeCategoryPopUp}>Paving</NavLink></li>
                                                        <li><NavLink to="/category/Pest Control" onClick={closeCategoryPopUp}>Pest Control</NavLink></li>
                                                        <li><NavLink to="/category/Pet Care" onClick={closeCategoryPopUp}>Pet Care</NavLink></li>
                                                        <li><NavLink to="/category/Photographers" onClick={closeCategoryPopUp}>Photographers</NavLink></li>
                                                        <li><NavLink to="/category/Plasterer" onClick={closeCategoryPopUp}>Plasterer</NavLink></li>
                                                        <li><NavLink to="/category/Plumbing" onClick={closeCategoryPopUp}>Plumbing</NavLink></li>
                                                        <li><NavLink to="/category/Pool Maintenance" onClick={closeCategoryPopUp}>Pool Maintenance</NavLink></li>
                                                        <li><NavLink to="/category/Removals" onClick={closeCategoryPopUp}>Removals</NavLink></li>
                                                        <li><NavLink to="/category/Roofing" onClick={closeCategoryPopUp}>Roofing</NavLink></li>
                                                        <li><NavLink to="/category/Sharpening" onClick={closeCategoryPopUp}>Sharpening</NavLink></li>
                                                        <li><NavLink to="/category/Staffing" onClick={closeCategoryPopUp}>Staffing</NavLink></li>
                                                        <li><NavLink to="/category/Tailors" onClick={closeCategoryPopUp}>Tailors</NavLink></li>
                                                        <li><NavLink to="/category/Tattoo Artists" onClick={closeCategoryPopUp}>Tattoo Artists</NavLink></li>
                                                        <li><NavLink to="/category/Tiling" onClick={closeCategoryPopUp}>Tiling</NavLink></li>
                                                        <li><NavLink to="/category/Tradesman" onClick={closeCategoryPopUp}>Tradesman</NavLink></li>
                                                        <li><NavLink to="/category/Tutoring" onClick={closeCategoryPopUp}>Tutoring</NavLink></li>
                                                        <li><NavLink to="/category/Wallpapering" onClick={closeCategoryPopUp}>Wallpapering</NavLink></li>
                                                        <li><NavLink to="/category/Waterproofing" onClick={closeCategoryPopUp}>Waterproofing</NavLink></li>
                                                        <li><NavLink to="/category/Web" onClick={closeCategoryPopUp}>Web</NavLink></li>
                                                        <li><NavLink to="/category/Writing" onClick={closeCategoryPopUp}>Writing</NavLink></li>
                                                        <li><NavLink to="/category/View all" onClick={closeCategoryPopUp}>View all</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/browse-requests">Browse requests</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></li>
                                </ul>
                                <div className="d-flex">
                                    <FormControlLabel className="skillSekkerProvider-text-size" sx={{ color: '#fff' }} control={<></>} label="SkillSeeker" onClick={handleSkillSeekerClick} />
                                    <FormControlLabel sx={{ color: '#fff' }} control={<Switch color="default" checked={localStorage.getItem('isLoginType') === 'skillprovider' ? true : localStorage.getItem('isLoginType') === 'skillseeker' && false} onChange={handleSkillSeekerProviderStatus} />} />
                                    <FormControlLabel className="skillSekkerProvider-text-size" sx={{ color: '#fff' }} control={<></>} label="SkillProvider" onClick={handleSkillProviderClick} />
                                    <div className="ms-2 d-flex justify-content-center align-items-center Notification-dropdown">
                                        <div className="d-flex user-detail-main-area">
                                            <div className="user-img-area">
                                                <div className="font-awesome-size">
                                                    <Badge badgeContent={4} color="error" className="notification-badge">
                                                        <NotificationsActiveIcon style={{ fontSize: '28px', color: '#fff', cursor: 'pointer' }} />
                                                    </Badge>
                                                </div>
                                                <div className="Notification-dropdown-content Notification-dropdown-massege-box-area">
                                                    <div className="px-2 d-flex align-items-center justify-content-between">
                                                        <h5 className="p-0 m-0">Notifications</h5>
                                                        <button className="notification-clear-all-btn">Clear all</button>
                                                    </div>
                                                    <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                    <div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.one} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Naveen Kumar</h6>
                                                                        <p className="p-0 m-0 notification-date">23 Nov 2022</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.three} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Neelam shukla</h6>
                                                                        <p className="p-0 m-0 notification-date">15 Sep 2022</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.two} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Himanshu Suratiya</h6>
                                                                        <p className="p-0 m-0 notification-date">15 Aug 2012</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <NavLink to="/notification"><button className="notification-view-all-notification-btn">View all Notification</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <>
                                        <Stack direction="row" spacing={2}>
                                            <div>
                                                <Button
                                                    ref={anchorRef}
                                                    id="composition-button"
                                                    aria-controls={state.isOpen ? 'composition-menu' : undefined}
                                                    aria-expanded={state.isOpen ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleToggle}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                                </Button>
                                                <Popper
                                                    open={state.isOpen}
                                                    anchorEl={anchorRef.current}
                                                    className="Right-Icon-Sub-menu"
                                                    role={undefined}
                                                    placement="bottom-start"
                                                    transition
                                                    disablePortal
                                                >
                                                    {({ TransitionProps, placement }) => (
                                                        <Grow
                                                            {...TransitionProps}
                                                            style={{
                                                                transformOrigin:
                                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                            }}
                                                        >
                                                            <Paper>
                                                                <ClickAwayListener onClickAway={handleClose}>
                                                                    <MenuList
                                                                        autoFocusItem={state.isOpen}
                                                                        id="composition-menu"
                                                                        aria-labelledby="composition-button"
                                                                        onKeyDown={handleListKeyDown}
                                                                    >
                                                                        <NavLink to="/profile">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Profile
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/my-tasks">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Tasks
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/past-tasks">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Past Tasks
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/help">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Help
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <Divider style={{ backgroundColor: 'gray' }} />
                                                                        <MenuItem onClick={handleLogout}>
                                                                            <ListItemIcon>
                                                                                <Logout fontSize="small" />
                                                                            </ListItemIcon>
                                                                            Logout
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </ClickAwayListener>
                                                            </Paper>
                                                        </Grow>
                                                    )}
                                                </Popper>
                                            </div>
                                        </Stack>
                                    </>
                                </div>
                            </div>
                        </div>
                    </nav>
                }
                {localStorage.getItem("isLoginType") === 'skillprovider' &&
                    <nav style={{ backgroundColor: `${props.color}` }} className="navbar navbar-expand-md " id="navArea">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to='/'>
                                <img src={Images.Logo} />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 main-menu-ul">
                                    <li className="nav-item">
                                        <NavLink className="nav-link postATaskbtn" aria-current="page" to="/post-a-task">Post a task</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <a className={`nav-link dropdown ${state.categories}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, categories: state.categories === '' ? 'show' : '', moreMenu: '' }));
                                        }}>Categories{state.categories === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />} </a>
                                        <div className={`dropdown-menu submenu ${state.categories}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <h5>What are you looking for?</h5>
                                                    <p>Pick a type of task.</p>
                                                    <div className="asSkiller">
                                                        <h6>As a Skiller</h6>
                                                        <p>I am looking for work in ...</p>
                                                    </div>
                                                    <div className="asSkiller mt-2">
                                                        <h6>As a Poster</h6>
                                                        <p>I need to hire someone for ...</p>
                                                    </div>
                                                </div>
                                                <div className="submenuRightCont">
                                                    <ul className="CategoriesList">
                                                        <li><NavLink to="/category/Accountants" onClick={closeCategoryPopUp}>Accountants</NavLink></li>
                                                        <li><NavLink to="/category/Admin" onClick={closeCategoryPopUp}>Admin</NavLink></li>
                                                        <li><NavLink to="/category/Alterations" onClick={closeCategoryPopUp}>Alterations</NavLink></li>
                                                        <li><NavLink to="/category/Appliances" onClick={closeCategoryPopUp}>Appliances</NavLink></li>
                                                        <li><NavLink to="/category/Assembly" onClick={closeCategoryPopUp}>Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Auto Electricians" onClick={closeCategoryPopUp}>Auto Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Bakers" onClick={closeCategoryPopUp}>Bakers</NavLink></li>
                                                        <li><NavLink to="/category/Barbers" onClick={closeCategoryPopUp}>Barbers</NavLink></li>
                                                        <li><NavLink to="/category/Beauticians" onClick={closeCategoryPopUp}>Beauticians</NavLink></li>
                                                        <li><NavLink to="/category/Bicycle Service" onClick={closeCategoryPopUp}>Bicycle Service</NavLink></li>
                                                        <li><NavLink to="/category/Bricklaying" onClick={closeCategoryPopUp}>Bricklaying</NavLink></li>
                                                        <li><NavLink to="/category/Building Construction" onClick={closeCategoryPopUp}>Building &amp; Construction</NavLink></li>
                                                        <li><NavLink to="/category/Business" onClick={closeCategoryPopUp}>Business</NavLink></li>
                                                        <li><NavLink to="/category/Car Body Work" onClick={closeCategoryPopUp}>Car Body Work</NavLink></li>
                                                        <li><NavLink to="/category/Car Detailing" onClick={closeCategoryPopUp}>Car Detailing</NavLink></li>
                                                        <li><NavLink to="/category/Car Repair" onClick={closeCategoryPopUp}>Car Repair</NavLink></li>
                                                        <li><NavLink to="/category/Car Service" onClick={closeCategoryPopUp}>Car Service</NavLink></li>
                                                        <li><NavLink to="/category/Carpentry" onClick={closeCategoryPopUp}>Carpentry</NavLink></li>
                                                        <li><NavLink to="/category/Cat Care" onClick={closeCategoryPopUp}>Cat Care</NavLink></li>
                                                        <li><NavLink to="/category/Catering" onClick={closeCategoryPopUp}>Catering</NavLink></li>
                                                        <li><NavLink to="/category/Chef" onClick={closeCategoryPopUp}>Chef</NavLink></li>
                                                        <li><NavLink to="/category/Cladding" onClick={closeCategoryPopUp}>Cladding</NavLink></li>
                                                        <li><NavLink to="/category/Cleaning" onClick={closeCategoryPopUp}>Cleaning</NavLink></li>
                                                        <li><NavLink to="/category/Computers IT" onClick={closeCategoryPopUp}>Computers &amp; IT</NavLink></li>
                                                        <li><NavLink to="/category/Concreting" onClick={closeCategoryPopUp}>Concreting</NavLink></li>
                                                        <li><NavLink to="/category/Decking" onClick={closeCategoryPopUp}>Decking</NavLink></li>
                                                        <li><NavLink to="/category/Delivery" onClick={closeCategoryPopUp}>Delivery</NavLink></li>
                                                        <li><NavLink to="/category/Design" onClick={closeCategoryPopUp}>Design</NavLink></li>
                                                        <li><NavLink to="/category/Dog Care" onClick={closeCategoryPopUp}>Dog Care</NavLink></li>
                                                        <li><NavLink to="/category/Draftsman" onClick={closeCategoryPopUp}>Draftsman</NavLink></li>
                                                        <li><NavLink to="/category/Driving" onClick={closeCategoryPopUp}>Driving</NavLink></li>
                                                        <li><NavLink to="/category/Electricians" onClick={closeCategoryPopUp}>Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Entertainment" onClick={closeCategoryPopUp}>Entertainment</NavLink></li>
                                                        <li><NavLink to="/category/Events" onClick={closeCategoryPopUp}>Events</NavLink></li>
                                                        <li><NavLink to="/category/Fencing" onClick={closeCategoryPopUp}>Fencing</NavLink></li>
                                                        <li><NavLink to="/category/Flooring" onClick={closeCategoryPopUp}>Flooring</NavLink></li>
                                                        <li><NavLink to="/category/Florist" onClick={closeCategoryPopUp}>Florist</NavLink></li>
                                                        <li><NavLink to="/category/Furniture Assembly" onClick={closeCategoryPopUp}>Furniture Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Gardening" onClick={closeCategoryPopUp}>Gardening</NavLink></li>
                                                        <li><NavLink to="/category/Gate Installation" onClick={closeCategoryPopUp}>Gate Installation</NavLink></li>
                                                        <li><NavLink to="/category/Hairdressers" onClick={closeCategoryPopUp}>Hairdressers</NavLink></li>
                                                        <li><NavLink to="/category/Handyman" onClick={closeCategoryPopUp}>Handyman</NavLink></li>
                                                        <li><NavLink to="/category/Heating Cooling" onClick={closeCategoryPopUp}>Heating &amp; Cooling</NavLink></li>
                                                        <li><NavLink to="/category/Home Theatre" onClick={closeCategoryPopUp}>Home Theatre</NavLink></li>
                                                        <li><NavLink to="/category/Interior Designer" onClick={closeCategoryPopUp}>Interior Designer</NavLink></li>
                                                        <li><NavLink to="/category/Landscaping" onClick={closeCategoryPopUp}>Landscaping</NavLink></li>
                                                        <li><NavLink to="/category/Laundry" onClick={closeCategoryPopUp}>Laundry</NavLink></li>
                                                        <li><NavLink to="/category/Lawn Care" onClick={closeCategoryPopUp}>Lawn Care</NavLink></li>
                                                        <li><NavLink to="/category/Lessons" onClick={closeCategoryPopUp}>Lessons</NavLink></li>
                                                        <li><NavLink to="/category/Locksmith" onClick={closeCategoryPopUp}>Locksmith</NavLink></li>
                                                        <li><NavLink to="/category/Makeup Artist" onClick={closeCategoryPopUp}>Makeup Artist</NavLink></li>
                                                        <li><NavLink to="/category/Marketing" onClick={closeCategoryPopUp}>Marketing</NavLink></li>
                                                        <li><NavLink to="/category/Mobile Mechanic" onClick={closeCategoryPopUp}>Mobile Mechanic</NavLink></li>
                                                        <li><NavLink to="/category/Painting" onClick={closeCategoryPopUp}>Painting</NavLink></li>
                                                        <li><NavLink to="/category/Paving" onClick={closeCategoryPopUp}>Paving</NavLink></li>
                                                        <li><NavLink to="/category/Pest Control" onClick={closeCategoryPopUp}>Pest Control</NavLink></li>
                                                        <li><NavLink to="/category/Pet Care" onClick={closeCategoryPopUp}>Pet Care</NavLink></li>
                                                        <li><NavLink to="/category/Photographers" onClick={closeCategoryPopUp}>Photographers</NavLink></li>
                                                        <li><NavLink to="/category/Plasterer" onClick={closeCategoryPopUp}>Plasterer</NavLink></li>
                                                        <li><NavLink to="/category/Plumbing" onClick={closeCategoryPopUp}>Plumbing</NavLink></li>
                                                        <li><NavLink to="/category/Pool Maintenance" onClick={closeCategoryPopUp}>Pool Maintenance</NavLink></li>
                                                        <li><NavLink to="/category/Removals" onClick={closeCategoryPopUp}>Removals</NavLink></li>
                                                        <li><NavLink to="/category/Roofing" onClick={closeCategoryPopUp}>Roofing</NavLink></li>
                                                        <li><NavLink to="/category/Sharpening" onClick={closeCategoryPopUp}>Sharpening</NavLink></li>
                                                        <li><NavLink to="/category/Staffing" onClick={closeCategoryPopUp}>Staffing</NavLink></li>
                                                        <li><NavLink to="/category/Tailors" onClick={closeCategoryPopUp}>Tailors</NavLink></li>
                                                        <li><NavLink to="/category/Tattoo Artists" onClick={closeCategoryPopUp}>Tattoo Artists</NavLink></li>
                                                        <li><NavLink to="/category/Tiling" onClick={closeCategoryPopUp}>Tiling</NavLink></li>
                                                        <li><NavLink to="/category/Tradesman" onClick={closeCategoryPopUp}>Tradesman</NavLink></li>
                                                        <li><NavLink to="/category/Tutoring" onClick={closeCategoryPopUp}>Tutoring</NavLink></li>
                                                        <li><NavLink to="/category/Wallpapering" onClick={closeCategoryPopUp}>Wallpapering</NavLink></li>
                                                        <li><NavLink to="/category/Waterproofing" onClick={closeCategoryPopUp}>Waterproofing</NavLink></li>
                                                        <li><NavLink to="/category/Web" onClick={closeCategoryPopUp}>Web</NavLink></li>
                                                        <li><NavLink to="/category/Writing" onClick={closeCategoryPopUp}>Writing</NavLink></li>
                                                        <li><NavLink to="/category/View all" onClick={closeCategoryPopUp}>View all</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/browse-requests">Browse requests</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></li>
                                </ul>
                                <div className="d-flex">
                                    <FormControlLabel className="skillSekkerProvider-text-size" sx={{ color: '#fff' }} control={<></>} label="SkillSeeker" onClick={handleSkillSeekerClick} />
                                    <FormControlLabel sx={{ color: '#fff' }} control={<Switch color="default" checked={localStorage.getItem('isLoginType') === 'skillprovider' ? true : localStorage.getItem('isLoginType') === 'skillseeker' && false} onChange={handleSkillSeekerProviderStatus} />} />
                                    <FormControlLabel className="skillSekkerProvider-text-size" sx={{ color: '#fff' }} control={<></>} label="SkillProvider" onClick={handleSkillProviderClick} />
                                    <div className="ms-2 d-flex justify-content-center align-items-center Notification-dropdown">
                                        <div className="d-flex user-detail-main-area">
                                            <div className="user-img-area">
                                                <div className="font-awesome-size">
                                                    <Badge badgeContent={4} color="error" className="notification-badge">
                                                        <NotificationsActiveIcon style={{ fontSize: '28px', color: '#fff', cursor: 'pointer' }} />
                                                    </Badge>
                                                </div>
                                                <div className="Notification-dropdown-content Notification-dropdown-massege-box-area">
                                                    <div className="px-2 d-flex align-items-center justify-content-between">
                                                        <h5 className="p-0 m-0">Notifications</h5>
                                                        <button className="notification-clear-all-btn">Clear all</button>
                                                    </div>
                                                    <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                    <div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.one} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Naveen Kumar</h6>
                                                                        <p className="p-0 m-0 notification-date">23 Nov 2022</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.three} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Neelam shukla</h6>
                                                                        <p className="p-0 m-0 notification-date">15 Sep 2022</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                        <div>
                                                            <div className="d-flex p-2 align-items-center justify-content-center">
                                                                <div>
                                                                    <Avatar alt="Remy Sharp" src={Images.two} />
                                                                </div>
                                                                <div className="px-2 w-100">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6 className="p-0 m-0">Himanshu Suratiya</h6>
                                                                        <p className="p-0 m-0 notification-date">15 Aug 2012</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="p-0 m-0 main-notification-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider className="my-2" style={{ backgroundColor: 'gray' }} />
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <NavLink to="/notification"><button className="notification-view-all-notification-btn">View all Notification</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <>
                                        <Stack direction="row" spacing={2}>
                                            <div>
                                                <Button
                                                    ref={anchorRef}
                                                    id="composition-button"
                                                    aria-controls={state.isOpen ? 'composition-menu' : undefined}
                                                    aria-expanded={state.isOpen ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleToggle}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                                </Button>
                                                <Popper
                                                    open={state.isOpen}
                                                    anchorEl={anchorRef.current}
                                                    className="Right-Icon-Sub-menu"
                                                    role={undefined}
                                                    placement="bottom-start"
                                                    transition
                                                    disablePortal
                                                >
                                                    {({ TransitionProps, placement }) => (
                                                        <Grow
                                                            {...TransitionProps}
                                                            style={{
                                                                transformOrigin:
                                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                            }}
                                                        >
                                                            <Paper>
                                                                <ClickAwayListener onClickAway={handleClose}>
                                                                    <MenuList
                                                                        autoFocusItem={state.isOpen}
                                                                        id="composition-menu"
                                                                        aria-labelledby="composition-button"
                                                                        onKeyDown={handleListKeyDown}
                                                                    >
                                                                        <NavLink to="/profile">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Profile
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/wallet">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Wallet
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/my-requests">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Requests
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/my-proposals">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Proposals
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/my-tasks">
                                                                            <MenuItem onClick={handleClose}>
                                                                                My Tasks
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/past-tasks">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Past Tasks
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/search-posts">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Search posts
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <NavLink to="/help">
                                                                            <MenuItem onClick={handleClose}>
                                                                                Help
                                                                            </MenuItem>
                                                                        </NavLink>
                                                                        <Divider style={{ backgroundColor: 'gray' }} />
                                                                        <MenuItem onClick={handleLogout}>
                                                                            <ListItemIcon>
                                                                                <Logout fontSize="small" />
                                                                            </ListItemIcon>
                                                                            Logout
                                                                        </MenuItem>
                                                                    </MenuList>
                                                                </ClickAwayListener>
                                                            </Paper>
                                                        </Grow>
                                                    )}
                                                </Popper>
                                            </div>
                                        </Stack>
                                    </>
                                </div>
                            </div>
                        </div>
                    </nav>
                }
                {localStorage.getItem("isLoginType") === 'guest' &&
                    <nav style={{ backgroundColor: `${props.color}` }} className="navbar navbar-expand-md " id="navArea">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to='/'>
                                <img src={Images.Logo} />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0 main-menu-ul">
                                    <li className="nav-item">
                                        <NavLink className="nav-link postATaskbtn" aria-current="page" to="/post-a-task">Post a task</NavLink>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/how-it-works">How it works</NavLink></li>
                                    <li className="nav-item dropdown">
                                        <a className={`nav-link dropdown ${state.categories}`} data-bs-toggle="dropdown" onClick={() => {
                                            setState(prevState => ({ ...prevState, categories: state.categories === '' ? 'show' : '', moreMenu: '' }));
                                        }}>Categories{state.categories === '' ? <ArrowRightIcon style={{ fontSize: '28px' }} /> : <ArrowDropDownIcon style={{ fontSize: '28px' }} />} </a>
                                        <div className={`dropdown-menu submenu ${state.categories}`}>
                                            <div className="categoriesContant">
                                                <div className="submenuLeftCont">
                                                    <h5>What are you looking for?</h5>
                                                    <p>Pick a type of task.</p>
                                                    <div className="asSkiller">
                                                        <h6>As a Skiller</h6>
                                                        <p>I am looking for work in ...</p>
                                                    </div>
                                                    <div className="asSkiller mt-2">
                                                        <h6>As a Poster</h6>
                                                        <p>I need to hire someone for ...</p>
                                                    </div>
                                                </div>
                                                <div className="submenuRightCont">
                                                    <ul className="CategoriesList">
                                                        <li><NavLink to="/category/Accountants" onClick={closeCategoryPopUp}>Accountants</NavLink></li>
                                                        <li><NavLink to="/category/Admin" onClick={closeCategoryPopUp}>Admin</NavLink></li>
                                                        <li><NavLink to="/category/Alterations" onClick={closeCategoryPopUp}>Alterations</NavLink></li>
                                                        <li><NavLink to="/category/Appliances" onClick={closeCategoryPopUp}>Appliances</NavLink></li>
                                                        <li><NavLink to="/category/Assembly" onClick={closeCategoryPopUp}>Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Auto Electricians" onClick={closeCategoryPopUp}>Auto Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Bakers" onClick={closeCategoryPopUp}>Bakers</NavLink></li>
                                                        <li><NavLink to="/category/Barbers" onClick={closeCategoryPopUp}>Barbers</NavLink></li>
                                                        <li><NavLink to="/category/Beauticians" onClick={closeCategoryPopUp}>Beauticians</NavLink></li>
                                                        <li><NavLink to="/category/Bicycle Service" onClick={closeCategoryPopUp}>Bicycle Service</NavLink></li>
                                                        <li><NavLink to="/category/Bricklaying" onClick={closeCategoryPopUp}>Bricklaying</NavLink></li>
                                                        <li><NavLink to="/category/Building Construction" onClick={closeCategoryPopUp}>Building &amp; Construction</NavLink></li>
                                                        <li><NavLink to="/category/Business" onClick={closeCategoryPopUp}>Business</NavLink></li>
                                                        <li><NavLink to="/category/Car Body Work" onClick={closeCategoryPopUp}>Car Body Work</NavLink></li>
                                                        <li><NavLink to="/category/Car Detailing" onClick={closeCategoryPopUp}>Car Detailing</NavLink></li>
                                                        <li><NavLink to="/category/Car Repair" onClick={closeCategoryPopUp}>Car Repair</NavLink></li>
                                                        <li><NavLink to="/category/Car Service" onClick={closeCategoryPopUp}>Car Service</NavLink></li>
                                                        <li><NavLink to="/category/Carpentry" onClick={closeCategoryPopUp}>Carpentry</NavLink></li>
                                                        <li><NavLink to="/category/Cat Care" onClick={closeCategoryPopUp}>Cat Care</NavLink></li>
                                                        <li><NavLink to="/category/Catering" onClick={closeCategoryPopUp}>Catering</NavLink></li>
                                                        <li><NavLink to="/category/Chef" onClick={closeCategoryPopUp}>Chef</NavLink></li>
                                                        <li><NavLink to="/category/Cladding" onClick={closeCategoryPopUp}>Cladding</NavLink></li>
                                                        <li><NavLink to="/category/Cleaning" onClick={closeCategoryPopUp}>Cleaning</NavLink></li>
                                                        <li><NavLink to="/category/Computers IT" onClick={closeCategoryPopUp}>Computers &amp; IT</NavLink></li>
                                                        <li><NavLink to="/category/Concreting" onClick={closeCategoryPopUp}>Concreting</NavLink></li>
                                                        <li><NavLink to="/category/Decking" onClick={closeCategoryPopUp}>Decking</NavLink></li>
                                                        <li><NavLink to="/category/Delivery" onClick={closeCategoryPopUp}>Delivery</NavLink></li>
                                                        <li><NavLink to="/category/Design" onClick={closeCategoryPopUp}>Design</NavLink></li>
                                                        <li><NavLink to="/category/Dog Care" onClick={closeCategoryPopUp}>Dog Care</NavLink></li>
                                                        <li><NavLink to="/category/Draftsman" onClick={closeCategoryPopUp}>Draftsman</NavLink></li>
                                                        <li><NavLink to="/category/Driving" onClick={closeCategoryPopUp}>Driving</NavLink></li>
                                                        <li><NavLink to="/category/Electricians" onClick={closeCategoryPopUp}>Electricians</NavLink></li>
                                                        <li><NavLink to="/category/Entertainment" onClick={closeCategoryPopUp}>Entertainment</NavLink></li>
                                                        <li><NavLink to="/category/Events" onClick={closeCategoryPopUp}>Events</NavLink></li>
                                                        <li><NavLink to="/category/Fencing" onClick={closeCategoryPopUp}>Fencing</NavLink></li>
                                                        <li><NavLink to="/category/Flooring" onClick={closeCategoryPopUp}>Flooring</NavLink></li>
                                                        <li><NavLink to="/category/Florist" onClick={closeCategoryPopUp}>Florist</NavLink></li>
                                                        <li><NavLink to="/category/Furniture Assembly" onClick={closeCategoryPopUp}>Furniture Assembly</NavLink></li>
                                                        <li><NavLink to="/category/Gardening" onClick={closeCategoryPopUp}>Gardening</NavLink></li>
                                                        <li><NavLink to="/category/Gate Installation" onClick={closeCategoryPopUp}>Gate Installation</NavLink></li>
                                                        <li><NavLink to="/category/Hairdressers" onClick={closeCategoryPopUp}>Hairdressers</NavLink></li>
                                                        <li><NavLink to="/category/Handyman" onClick={closeCategoryPopUp}>Handyman</NavLink></li>
                                                        <li><NavLink to="/category/Heating Cooling" onClick={closeCategoryPopUp}>Heating &amp; Cooling</NavLink></li>
                                                        <li><NavLink to="/category/Home Theatre" onClick={closeCategoryPopUp}>Home Theatre</NavLink></li>
                                                        <li><NavLink to="/category/Interior Designer" onClick={closeCategoryPopUp}>Interior Designer</NavLink></li>
                                                        <li><NavLink to="/category/Landscaping" onClick={closeCategoryPopUp}>Landscaping</NavLink></li>
                                                        <li><NavLink to="/category/Laundry" onClick={closeCategoryPopUp}>Laundry</NavLink></li>
                                                        <li><NavLink to="/category/Lawn Care" onClick={closeCategoryPopUp}>Lawn Care</NavLink></li>
                                                        <li><NavLink to="/category/Lessons" onClick={closeCategoryPopUp}>Lessons</NavLink></li>
                                                        <li><NavLink to="/category/Locksmith" onClick={closeCategoryPopUp}>Locksmith</NavLink></li>
                                                        <li><NavLink to="/category/Makeup Artist" onClick={closeCategoryPopUp}>Makeup Artist</NavLink></li>
                                                        <li><NavLink to="/category/Marketing" onClick={closeCategoryPopUp}>Marketing</NavLink></li>
                                                        <li><NavLink to="/category/Mobile Mechanic" onClick={closeCategoryPopUp}>Mobile Mechanic</NavLink></li>
                                                        <li><NavLink to="/category/Painting" onClick={closeCategoryPopUp}>Painting</NavLink></li>
                                                        <li><NavLink to="/category/Paving" onClick={closeCategoryPopUp}>Paving</NavLink></li>
                                                        <li><NavLink to="/category/Pest Control" onClick={closeCategoryPopUp}>Pest Control</NavLink></li>
                                                        <li><NavLink to="/category/Pet Care" onClick={closeCategoryPopUp}>Pet Care</NavLink></li>
                                                        <li><NavLink to="/category/Photographers" onClick={closeCategoryPopUp}>Photographers</NavLink></li>
                                                        <li><NavLink to="/category/Plasterer" onClick={closeCategoryPopUp}>Plasterer</NavLink></li>
                                                        <li><NavLink to="/category/Plumbing" onClick={closeCategoryPopUp}>Plumbing</NavLink></li>
                                                        <li><NavLink to="/category/Pool Maintenance" onClick={closeCategoryPopUp}>Pool Maintenance</NavLink></li>
                                                        <li><NavLink to="/category/Removals" onClick={closeCategoryPopUp}>Removals</NavLink></li>
                                                        <li><NavLink to="/category/Roofing" onClick={closeCategoryPopUp}>Roofing</NavLink></li>
                                                        <li><NavLink to="/category/Sharpening" onClick={closeCategoryPopUp}>Sharpening</NavLink></li>
                                                        <li><NavLink to="/category/Staffing" onClick={closeCategoryPopUp}>Staffing</NavLink></li>
                                                        <li><NavLink to="/category/Tailors" onClick={closeCategoryPopUp}>Tailors</NavLink></li>
                                                        <li><NavLink to="/category/Tattoo Artists" onClick={closeCategoryPopUp}>Tattoo Artists</NavLink></li>
                                                        <li><NavLink to="/category/Tiling" onClick={closeCategoryPopUp}>Tiling</NavLink></li>
                                                        <li><NavLink to="/category/Tradesman" onClick={closeCategoryPopUp}>Tradesman</NavLink></li>
                                                        <li><NavLink to="/category/Tutoring" onClick={closeCategoryPopUp}>Tutoring</NavLink></li>
                                                        <li><NavLink to="/category/Wallpapering" onClick={closeCategoryPopUp}>Wallpapering</NavLink></li>
                                                        <li><NavLink to="/category/Waterproofing" onClick={closeCategoryPopUp}>Waterproofing</NavLink></li>
                                                        <li><NavLink to="/category/Web" onClick={closeCategoryPopUp}>Web</NavLink></li>
                                                        <li><NavLink to="/category/Writing" onClick={closeCategoryPopUp}>Writing</NavLink></li>
                                                        <li><NavLink to="/category/View all" onClick={closeCategoryPopUp}>View all</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/browse-requests">Browse requests</NavLink></li>
                                    <Stack direction="row" spacing={2}>
                                        <div>
                                            <Button
                                                ref={anchorRef}
                                                id="composition-button"
                                                className="p-0 m-0"
                                                aria-controls={state.isOpen ? 'composition-menu' : undefined}
                                                aria-expanded={state.isOpen ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleToggle}
                                            >
                                                <li className="nav-item">
                                                    <a className='nav-link' style={{ paddingTop: '9px', textTransform: 'capitalize' }} >
                                                        more {state.isOpen ? <ArrowDropDownIcon style={{ fontSize: '28px' }} /> : <ArrowRightIcon style={{ fontSize: '28px' }} />}
                                                    </a>
                                                </li>
                                            </Button>
                                            <Popper
                                                open={state.isOpen}
                                                anchorEl={anchorRef.current}
                                                className="Right-Icon-Sub-menu"
                                                role={undefined}
                                                placement="bottom-start"
                                                transition
                                                disablePortal
                                            >
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                        }}
                                                    >
                                                        <Paper>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList
                                                                    autoFocusItem={state.isOpen}
                                                                    className="p-0"
                                                                    id="composition-menu"
                                                                    aria-labelledby="composition-button"
                                                                    onKeyDown={handleListKeyDown}
                                                                >
                                                                    <NavLink to="/help">
                                                                        <MenuItem onClick={handleClose}>
                                                                            Help
                                                                        </MenuItem>
                                                                    </NavLink>
                                                                    <NavLink to="/contact-us">
                                                                        <MenuItem onClick={handleClose}>
                                                                            Contact-us
                                                                        </MenuItem>
                                                                    </NavLink>
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </div>
                                    </Stack>
                                </ul>
                                <div className="d-flex">
                                    <button className="btn defoultBtn"> <NavLink className="nav-link" to="/login"> <PersonIcon /> Login </NavLink></button>
                                    <button className="btn defoultBtn signupBtn"> <NavLink className="nav-link" to="/signup"> <AddIcon /> Sign Up </NavLink></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                }
            </header>
        </>
    );
};

export default Menu;