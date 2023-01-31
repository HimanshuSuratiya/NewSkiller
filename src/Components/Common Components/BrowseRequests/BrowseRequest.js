import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Avatar from '@mui/material/Avatar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BrowseRequestDetail from "./BrowseRequestDetail";
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
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TaskData from "../../TaskData";
import { NavLink } from 'react-router-dom';
import Images from '../../../Images/Image';
import "./BrowseRequest.css";

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

const category = [
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

const languageList = [
    'English',
    'Spanish',
    'Arabic',
    'Russian',
    'Japanese',
    'Korean',
];

function valuetextTaskBudget(value) {
    return `${value}`;
}

const defaultState = {
    category: [],
    language: [],
    taskBudgetRangeValue: [10, 40],
    taskBudgetMinRangeValue: 10,
    taskBudgetMaxRangeValue: 40,
    location: '',
    showMap: false,
    activeClassId: 'browse-card-3',
    cardData: {},
}

const BrowseRequest = ({ heading }) => {
    const [state, setState] = useState(defaultState);
    const [cardDetail, setCardDetail] = useState(false);
    const [toggleShow, setToggleShow] = useState({
        left: false,
    });

    const handleTaskBudgetRangeChange = (event, newValue) => {
        setState((prevState) => ({ ...prevState, taskBudgetRangeValue: newValue, taskBudgetMinRangeValue: newValue[0], taskBudgetMaxRangeValue: newValue[1] }));
    };

    const handleTaskBudgetMinimumRange = (event) => {
        if (event.target.value <= state.taskBudgetMaxRangeValue) {
            setState((prevState) => ({ ...prevState, taskBudgetMinRangeValue: event.target.value, taskBudgetRangeValue: [event.target.value, state.taskBudgetMaxRangeValue] }));
        } else {
            alert('Please select Smallest Amount');
        }
    };

    const handleTaskBudgetMaximumRange = (event) => {
        if (event.target.value >= state.taskBudgetMinRangeValue) {
            setState((prevState) => ({ ...prevState, taskBudgetMaxRangeValue: event.target.value, taskBudgetRangeValue: [state.taskBudgetMinRangeValue, event.target.value] }));
        } else {
            alert('Please select greatest Amount');
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

    const selectLanguage = (event) => {
        const {
            target: { value }
        } = event;
        setState((prevState) => ({ ...prevState, language: typeof value === "string" ? value.split(",") : value }));
    };

    const selectLocation = (event) => {
        setState((prevState) => ({ ...prevState, location: event.target.value }));
    };

    const setActiveClass = (id) => {
        let selectedCard = document.getElementById(`browse-card-${id}`)
        let allSelectCard = document.querySelectorAll('.card-main-div');
        allSelectCard.forEach(item => {
            if (item.id === selectedCard.id) {
                item.style.border = '2px solid #188dc7';
                item.style.boxShadow = 'rgb(24 141 199 / 40%) 5px 5px,rgba(24, 141, 199, 0.3) 10px 10px';
            } else {
                item.style = 'none';
            }
        });
    }

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
                            {category.map((category) => (
                                <MenuItem key={category} value={category}>
                                    <Checkbox checked={state.category.indexOf(category) > -1} />
                                    <ListItemText primary={category} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Divider className='mt-3 mb-3' style={{ backgroundColor: '#a9a4a4' }} />
            <div className='my-2'>
                <h4 className='p-0 m-0 filter-heading'>Languages</h4>
                <div className='d-flex justify-content-center align-items-center'>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-multiple-checkbox-label">Select Languages</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={state.language}
                            onChange={selectLanguage}
                            input={<OutlinedInput label="Select Category" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                        >
                            {languageList.map((languageList) => (
                                <MenuItem key={languageList} value={languageList}>
                                    <Checkbox checked={state.language.indexOf(languageList) > -1} />
                                    <ListItemText primary={languageList} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                <div className='container px-5'>
                    <div className='row text-center'>
                        <div className='col-lg-4 ps-0 text-start'>
                            <div style={{ paddingLeft: '10px' }}>
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
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <h3>{heading}</h3>
                            </div>
                        </div>
                        <div className='col-lg-4 pe-0 text-right'>
                            <div className='d-flex align-items-center justify-content-end'>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder={'Search'}
                                    InputProps={{ endAdornment: <SearchIcon /> }}
                                />
                                <div>
                                    {state.showMap ?
                                        <Tooltip title="List">
                                            <ListIcon onClick={() => { setState((prevState) => ({ ...prevState, showMap: !state.showMap })); setCardDetail(false) }} style={{ fontSize: '40px' }} />
                                        </Tooltip> : <Tooltip title="Map">
                                            <TravelExploreIcon onClick={() => { setState((prevState) => ({ ...prevState, showMap: !state.showMap })); }} style={{ fontSize: '40px' }} />
                                        </Tooltip>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='BrowseRequest'>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className={`${state.showMap ? 'col-lg-4 left-main-Div' : 'left-main-Div my-task-single-line-card'}`}>
                                {TaskData.map((item, index) => {
                                    return (
                                        <div key={index} id={`browse-card-${index}`} className={`${state.showMap ? 'm-2 rounded card-main-div' : 'm-2 rounded card-main-div my-task-single-card-width'}`} onClick={() => { if (state.showMap) { setState((prevState) => ({ ...prevState, cardData: item })); setActiveClass(index); setCardDetail(true) } else { setActiveClass(index); setCardDetail(true); setState((prevState) => ({ ...prevState, cardData: item, showMap: !state.showMap })); } }}>
                                            <div className='px-2 d-flex justify-content-between align-items-center'>
                                                <h4 className='px-1 m-0 '>{item.taskName}</h4>
                                                <span className='px-1 dollerPrice'>${item.price}</span>
                                            </div>
                                            <div className='px-2 my-1 d-flex justify-content-between'>
                                                <div className='d-flex flex-column'>
                                                    <div className='d-flex align-items-center'>
                                                        <LanguageIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.remote} </span>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <DateRangeIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.date} </span>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <AddLocationIcon className='icon' /> <span className='px-2 fontServerandDate'> {item.location} </span>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Avatar src="/broken-image.jpg" />
                                                </div>
                                            </div>
                                            <Divider style={{ backgroundColor: 'gray' }} />
                                            {item.status === 'In Progress' ?
                                                <div className='pt-2 d-flex align-items-center justify-content-between'>
                                                    <div className='px-2'>
                                                        <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                                    </div>
                                                    <NavLink to="user-profile">
                                                        <div className='px-2 d-flex align-items-center justify-content-center'>
                                                            <Avatar
                                                                alt="Remy Sharp"
                                                                src={Images.one}
                                                                sx={{ width: 24, height: 24 }}
                                                            />
                                                            <span className='ps-2' style={{ fontSize: '12px' }}>Dein Markash</span>
                                                        </div>
                                                    </NavLink>
                                                </div> :
                                                <div className='px-2'>
                                                    <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            {cardDetail ?
                                <div className='col-lg-8 right-main-div'>
                                    <BrowseRequestDetail cardData={state.cardData} Map={true} setCardDetail={setCardDetail} />
                                </div>
                                :
                                state.showMap &&
                                <div className='col-lg-8 right-main-div'>
                                    <p style={{ height: '100%', width: '100%' }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1668591563864!5m2!1sen!2sin" style={{ border: '0', height: '100%', width: '100%', allowfullScreen: "", loading: "lazy", referrerolicy: "no-referrer-when-downgrade" }}>
                                        </iframe>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrowseRequest;