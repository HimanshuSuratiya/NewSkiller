import React, { useState } from "react";
import Menu from "../../Common Components/Menu/Menu";
import Divider from '@mui/material/Divider';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import TaskData from "../../TaskData";
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Avatar from '@mui/material/Avatar';
import MyProposalDetail from "./MyProposalDetail";

const MyProposal = () => {
    const [detail, setDetail] = useState(false);
    const [cardData, setCardDate] = useState({});

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

    return (
        <>
            <Menu color={'#8fc1e2'} />
            <section style={{ marginTop: '70px' }}>
                <Divider className='my-2' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='container'>
                    <div className='d-flex justify-content-start align-items-center' style={{ padding: '0px 25px' }}>
                        <div style={{ paddingLeft: '10px' }} className='d-flex align-items-center justify-content-between'>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder={'Search'}
                                InputProps={{ endAdornment: <SearchIcon /> }}
                            />
                        </div>
                    </div>
                </div>
                <Divider className='my-1' style={{ backgroundColor: '#a9a4a4' }} />
                <div className='BrowseRequest'>
                    <div className='container px-5'>
                        <div className='row'>
                            <div className='col-lg-4 left-main-Div'>
                                {TaskData.map((item, index) => {
                                    return (
                                        <div key={index} id={`browse-card-${index}`} className='m-2 rounded card-main-div' onClick={() => { setCardDate(item); setActiveClass(index); setDetail(true) }
                                        } style={{ width: '365px' }}>
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
                                })}
                            </div>
                            {detail &&
                                <div className='col-lg-8 right-main-div'>
                                    <MyProposalDetail cardData={cardData} setDetail={setDetail} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyProposal;