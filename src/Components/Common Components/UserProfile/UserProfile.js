import React from 'react'
import Images from '../../../Images/Image';
import Banner from '../Banner/Banner'
import Menu from '../Menu/Menu'
import "./UserProfile.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Badge from '@mui/material/Badge';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Footer from "../Footer/Footer";

const UserProfile = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    const reviewData = [
        {
            name: 'Oriolgabalda',
            imgsource: Images.one,
            country: 'Spain',
            rateValue: 4.5,
            mainText: 'Philippa is the best person you will ever find on Fiverr!! Positive, great attitude, always willing to help, communicative, great to talk to. The result has been waaay better than what I could ever expect. A lot of detailed documentation, always',
            timeStatus: '2 days ago',
        },
        {
            name: 'Pitman991',
            imgsource: Images.two,
            country: 'Germany',
            rateValue: 5,
            mainText: 'Ich bin noch relativ neu in der Welt der Dating Apps und bin recht naiv an die Sache herangegangen. Philippa hat mir neben wertvollen Anregungen vor allem ehrliches Feedback gegeben, mit dem ich mein Profil bestimmt werde verbessern können. Ich kann den Gig also nur empfehlen.',
            timeStatus: '3 days ago',
        },
        {
            name: 'Miguelgimene819',
            imgsource: Images.six,
            country: 'India',
            rateValue: 4.5,
            mainText: 'Very straightforward and satisfying',
            timeStatus: '5 days ago',
        },
        {
            name: 'Nenadpa',
            imgsource: Images.seven,
            country: 'Austria',
            rateValue: 4,
            mainText: 'Highly profesional and top feedback. A deep insight on what do to and maybe not to do. Full PDF Review about everything, from photos to bio to tipps and tricks all included. 10/10 would date',
            timeStatus: '1 week ago',
        },
    ]

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="User Profile" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 p-2'>
                            <div className='p-4 main-left-user-profile-card'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <FavoriteBorderIcon className='icon-common-class' />
                                    <button className='user-profile-online-btn'>Online</button>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={Images.seven}
                                                sx={{ width: 130, height: 130 }}
                                            />
                                        </StyledBadge>
                                    </div>
                                    <div className='text-center'>
                                        <h4 className='p-0 m-0'>Brunzo Z.</h4>
                                        <p className='p-0 m-0'>Helping people with dating</p>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            <p className='p-0 m-0 user-profile-font-weight'>4.5 (86 reviews)</p>
                                        </div>
                                        <button className='user-profile-contect-me w-75'>Contact Me</button>
                                    </div>
                                </div>
                                <Divider className='my-2' style={{ backgroundColor: 'gray' }} />
                                <div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <LocationOnIcon className='icon-common-class' /> From</p>
                                        <p className='user-profile-font-weight'>Germany</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <PersonIcon className='icon-common-class' /> Member since</p>
                                        <p className='user-profile-font-weight'>Apr 2022</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <SendIcon className='icon-common-class' /> Last Delivery</p>
                                        <p className='user-profile-font-weight'>2 days</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p> <ToggleOnIcon className='icon-common-class' /> last Online</p>
                                        <p className='user-profile-font-weight'>3 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 my-4 main-left-user-profile-card'>
                                <h4>Languages</h4>
                                <p className='p-0 m-0'>English  - Native/Bilingual</p>
                                <p className='p-0 m-0'>German (Deutsch) - Native/Bilingual</p>
                                <p className='p-0 m-0'>Swedish (Svenska) - Basic</p>
                                <p className='p-0 m-0'>Hindi (Hindi) - Basic</p>
                                <p className='p-0 m-0'>	Arabic (Arabic) - Basic</p>
                                <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                <h4>Skills</h4>
                                <p className='user-profile-skill'>C</p>
                                <p className='user-profile-skill'>C++</p>
                                <p className='user-profile-skill'>Java</p>
                                <p className='user-profile-skill'>Javascript</p>
                                <p className='user-profile-skill'>React.js</p>
                                <p className='user-profile-skill'>React Native</p>
                                <p className='user-profile-skill'>Github</p>
                                <Divider className='my-4' style={{ backgroundColor: 'gray' }} />
                                <h4>Education</h4>
                                <p>B.C.A - Fashion Studies</p>
                                <p>Stockholm University, Sweden, Graduated 2019</p>
                            </div>
                        </div>
                        <div className='col-lg-8 p-2'>
                            <div className='p-4 main-left-user-profile-card'>
                                <div>
                                    <h3>About</h3>
                                    <p className='p-0 m-0 description-text'>Hi everyone! My name is Brunzo Z. and I am a fashion student and part-time model from Germany. As I love traveling and exploring new places, I have used online dating apps a lot myself during the last few years. After thousands of matches and dozens of dates, I want to share my experiences and help you guys to get more matches and better dates on tinder, bumble and hinge! Hi everyone! My name is Brunzo Z. and I am a fashion student and part-time model from Germany. As I love traveling and exploring new places, I have used online dating apps a lot myself during the last few years.</p>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center review-heading-seller'>
                                        <h3 className='p-0 pe-3'>86 reviews as seller</h3>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        <p className='p-0 m-0 user-profile-font-weight'>4.5</p>
                                    </div>
                                    <div className='w-100 d-flex'>
                                        <div className='w-50 py-2'>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0 user-profile-font-weight'>4.5 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={95} />
                                                <p className='p-0 m-0 user-profile-font-weight'>(86)</p>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0 user-profile-font-weight'>4.5 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={5} />
                                                <p className='p-0 m-0 user-profile-font-weight'>(12)</p>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0 user-profile-font-weight'>3.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0 user-profile-font-weight'>(0)</p>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0 user-profile-font-weight'>2.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0 user-profile-font-weight'>(0)</p>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0 user-profile-font-weight'>1.0 star</p>
                                                <BorderLinearProgress style={{ width: '70%' }} variant="determinate" value={0} />
                                                <p className='p-0 m-0 user-profile-font-weight'>(0)</p>
                                            </div>
                                        </div>
                                        <div className='w-50 p-2'>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Rating Breakdown</p>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Seller communication level</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0 user-profile-font-weight'>5</p>
                                                </div>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Recommend to a friend</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0 user-profile-font-weight'>5</p>
                                                </div>
                                            </div>
                                            <div className='my-1 d-flex justify-content-between align-items-center'>
                                                <p className='p-0 m-0'>Service as described</p>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <StarBorderIcon className='me-2' style={{ color: '#faaf00' }} />
                                                    <p className='p-0 m-0 user-profile-font-weight'>5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {reviewData.map((item) => {
                                            return (
                                                <>
                                                    <div>
                                                        <Divider className='my-2' style={{ backgroundColor: 'gray' }} />
                                                        <div className='d-flex'>
                                                            <div className='py-2 pe-2'>
                                                                <Avatar
                                                                    alt="Remy Sharp"
                                                                    src={item.imgsource}
                                                                    sx={{ width: 50, height: 50 }}
                                                                />
                                                            </div>
                                                            <div className='py-2 w-100'>
                                                                <div className='d-flex justify-content-between align-items-between'>
                                                                    <h5 className='p-0 m-0'>{item.name}</h5>
                                                                    <p className='p-0 m-0 status-day-review'> <AccessAlarmIcon style={{ fontSize: '18px', marginRight: '3px' }} />{item.timeStatus}</p>
                                                                </div>
                                                                <p className='p-0 m-0 user-profile-flag-text-area'><AssistantPhotoIcon style={{ fontSize: '18px' }} />{item.country}</p>
                                                                <div className='d-flex align-items-center rating-icon-star'>
                                                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                                                </div>
                                                                <p className='p-0 user-review-text'>{item.mainText}</p>
                                                                <div className='d-flex align-items-center helpful'>
                                                                    <p className='p-0 m-0 pe-2'>Helpful?</p>
                                                                    <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px', color: '#188dc7' }} /> Yes</p>
                                                                    <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px', color: '#188dc7' }} /> No</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
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

export default UserProfile;