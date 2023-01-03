import React, { useState } from 'react'
import Menu from '../../Common Components/Menu/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Avatar from '@mui/material/Avatar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Slider from '@mui/material/Slider';
import "../../Common Components/BrowseRequests/BrowseRequest.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import MyReqestDetail from './MyReqestDetail';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import Images from '../../../Images/Image';
import { NavLink } from 'react-router-dom';
import TaskData from "../../TaskData";
import PaidIcon from '@mui/icons-material/Paid';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
];

function valuetextDistance(value) {
    return `${value}`;
}

function valuetextTaskBudget(value) {
    return `${value}`;
}

const defaultState = {
    category: [],
    distanceRangeValue: [20, 40],
    taskBudgetRangeValue: [10, 40],
    distanceMinRangeValue: 20,
    distanceMaxRangeValue: 40,
    location: '',
    taskBudgetMinRangeValue: 10,
    taskBudgetMaxRangeValue: 40,
    showDetail: false,
    cardData: {},
}

const emails = ['username@gmail.com', 'user02@gmail.com'];

const MyRequest = () => {
    const [state, setState] = useState(defaultState);
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);
    const [toggleShow, setToggleShow] = useState({
        left: false,
    });

    const handleDistanceRangeChange = (event, newValue) => {
        setState((prevState) => ({ ...prevState, distanceRangeValue: newValue, distanceMinRangeValue: newValue[0], distanceMaxRangeValue: newValue[1] }));
    };

    const handleDistanceMinimumRange = (event) => {
        if (event.target.value <= state.distanceMaxRangeValue) {
            setState((prevState) => ({ ...prevState, distanceMinRangeValue: event.target.value, distanceRangeValue: [event.target.value, state.distanceMaxRangeValue] }));
        } else {
            alert('Please select Smallest Distance');
        }
    };

    const handleDistanceMaximumRange = (event) => {
        if (event.target.value >= state.distanceMinRangeValue) {
            setState((prevState) => ({ ...prevState, distanceMaxRangeValue: event.target.value, distanceRangeValue: [state.distanceMinRangeValue, event.target.value] }));
        } else {
            alert('Please select greatest Distance');
        }
    };

    const handleTaskBudgetRangeChange = (event, newValue) => {
        setState((prevState) => ({ ...prevState, taskBudgetRangeValue: newValue, taskBudgetMinRangeValue: newValue[0], taskBudgetMaxRangeValue: newValue[1] }));
    };

    const handleTaskBudgetMinimumRange = (event) => {
        if (event.target.value <= state.taskBudgetMaxRangeValue) {
            setState((prevState) => ({ ...prevState, taskBudgetMinRangeValue: event.target.value, taskBudgetRangeValue: [event.target.value, state.taskBudgetMaxRangeValue] }));
        } else {
            alert('Please select Smallest Ammount');
        }
    };

    const handleTaskBudgetMaximumRange = (event) => {
        if (event.target.value >= state.taskBudgetMinRangeValue) {
            setState((prevState) => ({ ...prevState, taskBudgetMaxRangeValue: event.target.value, taskBudgetRangeValue: [state.taskBudgetMinRangeValue, event.target.value] }));
        } else {
            alert('Please select greatest Ammount');
        }
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setToggleShow({ ...toggleShow, [anchor]: open });
    };

    const selectCategory = (event) => {
        const {
            target: { value }
        } = event;
        setState((prevState) => ({ ...prevState, category: typeof value === "string" ? value.split(",") : value }));
    };

    const selectLocation = (event) => {
        setState((prevState) => ({ ...prevState, location: event.target.value }));
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`
        };
    }

    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
        };

        return (
            <Dialog onClose={handleClose} open={open} className="dialog-comment">
                <div className='d-flex align-items-center justify-content-between'>
                    <DialogTitle className="p-0 px-3 py-2">Please confirm</DialogTitle>
                    <CloseIcon className='me-2' style={{ fontSize: '35px', cursor: 'pointer' }} onClick={handleClose} />
                </div>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <div className='p-3'>
                    <p className='m-0'>Are you sure you want to repost with the same details ?</p>
                </div>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <div className='d-flex align-items-center justify-content-end px-3 mb-3'>
                    <button className='btn btn-primary btn-lg btn-block please-confirm-my-task-re-post-btn' onClick={handleClose}>Cancel</button>
                    <button className='btn btn-primary btn-lg btn-block please-confirm-my-task-re-post-btn' onClick={handleClose}>Repost</button>
                </div>
            </Dialog>
        );
    }

    SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired,
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270, marginTop: '60px', padding: '0px 15px' }}
            role="presentation"
        >
            <div className='d-flex justify-content-end align-items-center py-2 mt-2' onClick={toggleDrawer(anchor, false)}>
                <ChevronLeftIcon style={{ fontSize: '30px' }} />
            </div>
            <Divider style={{ backgroundColor: '#a9a4a4' }} />
            <div className='my-2'>
                <h4 className='p-0 m-0 filter-heading'>Category</h4>
                <div className='d-flex justify-content-center align-items-center'>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-multiple-checkbox-label">Select Category</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={state.category}
                            onChange={selectCategory}
                            input={<OutlinedInput label="Select Category" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={state.category.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Divider className='mt-3 mb-3' style={{ backgroundColor: '#a9a4a4' }} />
            <div>
                <h4 className='p-0 m-0 filter-heading'>Distance</h4>
                <div className='d-flex justify-content-center align-items-center'>
                    <Box sx={{ width: 240 }}>
                        <Slider
                            className="browser-request-range-slider"
                            getAriaLabel={() => 'Temperature range'}
                            value={state.distanceRangeValue}
                            onChange={handleDistanceRangeChange}
                            step={20}
                            getAriaValueText={valuetextDistance}
                        />
                        <Box className='d-flex justify-content-between my-1'>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Min distance</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.distanceMinRangeValue}
                                    label="Min distance"
                                    onChange={handleDistanceMinimumRange}
                                >
                                    <MenuItem value={0}>5 km</MenuItem>
                                    <MenuItem value={20}>20 km</MenuItem>
                                    <MenuItem value={40}>50 km</MenuItem>
                                    <MenuItem value={60}>70 km</MenuItem>
                                    <MenuItem value={80}>100 km</MenuItem>
                                    <MenuItem value={100}>125 km</MenuItem>
                                </Select>
                            </FormControl>
                            <span className='d-flex justify-content-center align-items-center'>-</span>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Max distance</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.distanceMaxRangeValue}
                                    label="Max distance"
                                    onChange={handleDistanceMaximumRange}
                                >
                                    <MenuItem value={0}>10 km</MenuItem>
                                    <MenuItem value={20}>20 km</MenuItem>
                                    <MenuItem value={40}>50 km</MenuItem>
                                    <MenuItem value={60}>75 km</MenuItem>
                                    <MenuItem value={80}>100 km</MenuItem>
                                    <MenuItem value={100}>150+ km</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </div>
            </div>
            <Divider className='my-3' style={{ backgroundColor: '#a9a4a4' }} />
            <div className=''>
                <h4 className='p-0 m-0 filter-heading'>Task Budget</h4>
                <div className='d-flex justify-content-center align-items-center'>
                    <Box sx={{ width: 240 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            className="browser-request-range-slider"
                            value={state.taskBudgetRangeValue}
                            onChange={handleTaskBudgetRangeChange}
                            step={10}
                            getAriaValueText={valuetextTaskBudget}
                        />
                        <Box className='d-flex justify-content-between my-1'>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Min amount</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.taskBudgetMinRangeValue}
                                    label="Min amount"
                                    onChange={handleTaskBudgetMinimumRange}
                                >
                                    <MenuItem value={0}>$5</MenuItem>
                                    <MenuItem value={10}>$10</MenuItem>
                                    <MenuItem value={20}>$50</MenuItem>
                                    <MenuItem value={30}>$100</MenuItem>
                                    <MenuItem value={40}>$200</MenuItem>
                                    <MenuItem value={50}>$500</MenuItem>
                                    <MenuItem value={60}>$1000</MenuItem>
                                    <MenuItem value={70}>$1500</MenuItem>
                                    <MenuItem value={80}>$2000</MenuItem>
                                    <MenuItem value={90}>$5000</MenuItem>
                                    <MenuItem value={100}>$9999</MenuItem>
                                </Select>
                            </FormControl>
                            <span className='d-flex justify-content-center align-items-center'>-</span>
                            <FormControl sx={{ minWidth: 115 }} size="small">
                                <InputLabel id="demo-select-small">Max amount</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={state.taskBudgetMaxRangeValue}
                                    label="Max amount"
                                    onChange={handleTaskBudgetMaximumRange}
                                >
                                    <MenuItem value={0}>$5</MenuItem>
                                    <MenuItem value={10}>$10</MenuItem>
                                    <MenuItem value={20}>$50</MenuItem>
                                    <MenuItem value={30}>$100</MenuItem>
                                    <MenuItem value={40}>$200</MenuItem>
                                    <MenuItem value={50}>$500</MenuItem>
                                    <MenuItem value={60}>$1000</MenuItem>
                                    <MenuItem value={70}>$1500</MenuItem>
                                    <MenuItem value={80}>$2000</MenuItem>
                                    <MenuItem value={90}>$5000</MenuItem>
                                    <MenuItem value={100}>$9999</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </div>
            </div>
            <Divider className='my-3' style={{ backgroundColor: '#a9a4a4' }} />
            <div className='my-2'>
                <h4 className='p-0 m-0 filter-heading'>Location</h4>
                <div className='d-flex justify-content-center align-items-center'>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="demo-select-small">Location</InputLabel>
                        <Select

                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={state.location}
                            label="Location"
                            onChange={selectLocation}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Location-1</MenuItem>
                            <MenuItem value={20}>Location-2</MenuItem>
                            <MenuItem value={30}>Location-3</MenuItem>
                            <MenuItem value={40}>Location-4</MenuItem>
                            <MenuItem value={50}>Location-5</MenuItem>
                            <MenuItem value={60}>Location-6</MenuItem>
                            <MenuItem value={70}>Location-7</MenuItem>
                            <MenuItem value={80}>Location-8</MenuItem>
                            <MenuItem value={90}>Location-9</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </Box>
    );

    return (
        <>
            <Menu color={'#8fc1e2'} />
            <section style={{ marginTop: '70px' }}>
                <Divider className='my-2' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center' style={{ padding: '0px 25px' }}>
                        <div>
                            <React.Fragment key={'left'}>
                                <FilterListIcon onClick={toggleDrawer('left', true)} style={{ cursor: 'pointer' }} />
                                <Button onClick={toggleDrawer('left', true)}>{'Filter'}</Button>
                                <SwipeableDrawer
                                    anchor={'left'}
                                    open={toggleShow['left']}
                                    onOpen={toggleDrawer('left', true)}
                                >
                                    {list('left')}
                                </SwipeableDrawer>
                            </React.Fragment>
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder={'Search'}
                                InputProps={{ endAdornment: <SearchIcon /> }}
                            />
                            <Tooltip title="List">
                                <ListIcon onClick={() => { setState((prevState) => ({ ...prevState, showDetail: false })) }} style={{ fontSize: '40px' }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='BrowseRequest'>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className={`p-0 ${state.showDetail ? 'col-lg-4' : 'col-lg-12'}`}>
                                <Box className='p-0 m-0' style={{ borderRadius: '5px' }}>
                                    <Box sx={{ bgcolor: "background.paper" }} style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
                                        <Tabs
                                            className='my-task-main-tabs-area'
                                            value={value}
                                            onChange={handleChange}
                                            variant="scrollable"
                                            scrollButtons
                                            allowScrollButtonsMobile
                                            aria-label="scrollable force tabs example"
                                        >
                                            <Tab label="In Progress" {...a11yProps(0)} />
                                            <Tab label="Completed" {...a11yProps(1)} />
                                            <Tab label="Cancelled" {...a11yProps(2)} />
                                            <Tab label="Archived " {...a11yProps(3)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value} index={0} className="my-task-tab-panel">
                                        <div className='left-main-Div my-task-single-line-card'>
                                            {TaskData.map((item, index) => {
                                                if (item.status === 'In Progress') {
                                                    return (
                                                        <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width'>
                                                            <div className='px-2 d-flex justify-content-between align-items-center'>
                                                                <h4 className='px-1 m-0' onClick={() => { setState((prevState) => ({ ...prevState, cardData: item, showDetail: true })); }}>{item.taskName}</h4>
                                                                <span className='px-1 dollerPrice'>${item.price}</span>
                                                            </div>
                                                            <div className='px-2 my-1 d-flex justify-content-between'>
                                                                <div className='d-flex flex-column'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.dueDate} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider style={{ backgroundColor: 'gray' }} />
                                                            <div className='pt-2 px-2'>
                                                                <NavLink to="/user-profile" className="d-flex align-items-center">
                                                                    <Avatar src={Images.one} />
                                                                    <div>
                                                                        <span className='ps-2' style={{ fontSize: '15px' }}>Dein Markash</span>
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1} className="my-task-tab-panel">
                                        <div className='left-main-Div my-task-single-line-card'>
                                            {TaskData.map((item, index) => {
                                                if (item.status === 'Completed') {
                                                    return (
                                                        <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width' onClick={() => { setState((prevState) => ({ ...prevState, cardData: item, showDetail: true })); }}>
                                                            <div className='px-2 d-flex justify-content-between align-items-center'>
                                                                <h4 className='px-1 m-0 '>{item.taskName}</h4>
                                                                <span className='px-1 dollerPrice'>${item.price}</span>
                                                            </div>
                                                            <div className='px-2 my-1 d-flex justify-content-between'>
                                                                <div className='d-flex flex-column'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.dueDate} </span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <PaidIcon className='icon' /> <span className='px-2 fontServerandDate' style={{ fontWeight: '600' }}>Payment: {item.payment} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Divider style={{ backgroundColor: 'gray' }} />
                                                            <div className='pt-2 px-2'>
                                                                <NavLink to="/user-profile" className="d-flex align-items-center">
                                                                    <Avatar src={Images.one} />
                                                                    <div>
                                                                        <span className='ps-2' style={{ fontSize: '15px' }}>Dein Markash</span>
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={2} className="my-task-tab-panel">
                                        <div className='left-main-Div my-task-single-line-card'>
                                            {TaskData.map((item, index) => {
                                                if (item.status === 'Cancel') {
                                                    return (
                                                        <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width' onClick={() => { setState((prevState) => ({ ...prevState, cardData: item, showDetail: true })); }}>
                                                            <div className='px-2 d-flex justify-content-between align-items-center'>
                                                                <h4 className='px-1 m-0 '>{item.taskName}</h4>
                                                                <span className='px-1 dollerPrice'>${item.price}</span>
                                                            </div>
                                                            <div className='px-2 my-1 d-flex justify-content-between'>
                                                                <div className='d-flex flex-column w-100'>
                                                                    <div className='d-flex align-items-center justify-content-between'>
                                                                        <div>
                                                                            <LanguageIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.remote} </span>
                                                                        </div>
                                                                        <span className='px-2 bg-danger' style={{ color: '#000', borderRadius: '10px' }}>Canceled</span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <AddLocationIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.location} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={3} className="my-task-tab-panel">
                                        <div className='left-main-Div my-task-single-line-card'>
                                            {TaskData.map((item, index) => {
                                                if (item.status === 'Cancel') {
                                                    return (
                                                        <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width' onClick={() => { setState((prevState) => ({ ...prevState, cardData: item, showDetail: true })); }}>
                                                            <div className='px-2 d-flex justify-content-between align-items-center'>
                                                                <h4 className='px-1 m-0 '>{item.taskName}</h4>
                                                                <span className='px-1 dollerPrice'>${item.price}</span>
                                                            </div>
                                                            <div className='px-2 my-1 d-flex justify-content-between'>
                                                                <div className='d-flex flex-column w-100'>
                                                                    <div className='d-flex align-items-center justify-content-between'>
                                                                        <div>
                                                                            <LanguageIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.remote} </span>
                                                                        </div>
                                                                        <span className='px-2 bg-success' style={{ color: '#fff', borderRadius: '10px' }}>Archived</span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <AddLocationIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.location} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </TabPanel>
                                </Box>
                            </div>
                            {state.showDetail &&
                                <div className='col-lg-8 my-task-right-main-div'>
                                    <MyReqestDetail cardData={state.cardData} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </>
    )
}

export default MyRequest