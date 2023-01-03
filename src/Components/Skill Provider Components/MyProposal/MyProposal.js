import React, { useState } from 'react'
import MyProposalDetail from "./MyProposalDetail";
import Menu from "../../Common Components/Menu/Menu";
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Avatar from '@mui/material/Avatar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import TaskData from "../../TaskData";

const defaultState = {
    showMap: false,
    activeClassId: 'browse-card-3',
    cardData: {},
}

const MyProposal = () => {
    const [state, setState] = useState(defaultState);
    const [cardDetail, setCardDetail] = useState(false);

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
                <div className='container px-5'>
                    <div className='row text-center'>
                        <div className='col-lg-4 ps-0'>
                            <div className='d-flex align-items-center justify-content-between' style={{ width: '290px', marginLeft: '10px' }}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder={'Search'}
                                    InputProps={{ endAdornment: <SearchIcon /> }}
                                />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <h3>My Proposals</h3>
                            </div>
                        </div>
                        <div className='col-lg-4 pe-0 text-right'>
                            <div>
                                {state.showMap &&
                                    <Tooltip title="List">
                                        <ListIcon onClick={() => { setState((prevState) => ({ ...prevState, showMap: !state.showMap })); setCardDetail(false) }} style={{ fontSize: '40px' }} />
                                    </Tooltip>
                                }
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
                                            <div className='px-2'>
                                                <span className="openColor">{item.status + ' :'}</span> <span style={{ fontSize: '12px' }}>{item.offers} offers..</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {cardDetail &&
                                <div className='col-lg-8 right-main-div'>
                                    <MyProposalDetail cardData={state.cardData} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyProposal;