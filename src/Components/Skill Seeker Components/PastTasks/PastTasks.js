import React from 'react'
import Menu from '../../Common Components/Menu/Menu';
import Divider from '@mui/material/Divider';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import DateRangeIcon from '@mui/icons-material/DateRange';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField2 from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Avatar from '@mui/material/Avatar';
import "./PastTasks.css";
import TaskData from '../../TaskData';

const PastTasks = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Menu color={'#8fc1e2'} />
            <section style={{ marginTop: '70px' }}>
                <Divider className='my-2' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='container px-5'>
                    <div className='row text-center px-2'>
                        <div className='col-lg-6 ps-0 text-start ps-1'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <div>
                                        <DesktopDatePicker
                                            label="Start Date"
                                            className='past-task-datepicker me-2'
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField2 {...params} />}
                                        />
                                        <DesktopDatePicker
                                            label="End Date"
                                            className='past-task-datepicker ms-2'
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField2 {...params} />}
                                        />
                                    </div>
                                </Stack>
                            </LocalizationProvider>
                        </div>
                        <div className='col-lg-3'>
                            <div>
                                <h3>Past Tasks</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 pe-0 text-right'>
                            <div>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder={'Search'}
                                    InputProps={{ endAdornment: <SearchIcon /> }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='container px-5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='left-main-Div my-task-single-line-card'>
                                {TaskData.map((item, index) => {
                                    if (item.status === 'Cancel') {
                                        return (
                                            <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width' style={{ width: '90%' }}>
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
                                                <div className='px-2'>
                                                    <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='left-main-Div my-task-single-line-card'>
                                {TaskData.map((item, index) => {
                                    if (item.status === 'Completed') {
                                        return (
                                            <div key={index} id={`browse-card-${index}`} className='rounded card-main-div my-task-single-card-width' style={{ width: '90%' }}>
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
                                                <div className='px-2'>
                                                    <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PastTasks;