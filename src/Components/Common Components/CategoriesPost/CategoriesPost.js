import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Tooltip from '@mui/material/Tooltip';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./CategoriesPost.css"
import { NavLink } from 'react-router-dom';

const CategoriesPost = () => {
    let { name } = useParams()
    const viewPostCategoryData = [
        {
            img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Line sethnita V',
            lastName: 'Melbourne City CBD VIC',
            rate: 4,
            rateNumber: 51,
            review: 'Cynthia was amazing! Very efficient and professional. Thank you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        },
        {
            img: 'https://eu7cmie.cloudimg.io/s/crop/96x96/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1558734/image-ffdf9760b9d6939a9fad07a7b823560d.jpg',
            name: 'Matthew S',
            lastName: 'Edmondson Park NSW',
            rate: 5,
            rateNumber: 63,
            review: 'Great service- Mathew helped me in all the areas i needed assistance with and relieved my work load pressure, and taught me would definitely recommend...',
        },
        {
            img: 'https://eu7cmie.cloudimg.io/s/crop/96x96/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2425127/image-2950cc63705a6193d6e61c12c6daea1c.jpg',
            name: 'Vidhi ashik M',
            lastName: 'St James NSW',
            rate: 2,
            rateNumber: 17,
            review: 'Vidhi was great to work with and she was very patient and helped me along the way as I needed. Would definitely recommend her. Great service- Mathew helped',
        },
        {
            img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Line sethnita V',
            lastName: 'Melbourne City CBD VIC',
            rate: 4,
            rateNumber: 51,
            review: 'Cynthia was amazing! Very efficient and professional. Thank you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        },
        {
            img: 'https://eu7cmie.cloudimg.io/s/crop/96x96/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1558734/image-ffdf9760b9d6939a9fad07a7b823560d.jpg',
            name: 'Matthew S',
            lastName: 'Edmondson Park NSW',
            rate: 5,
            rateNumber: 63,
            review: 'Great service- Mathew helped me in all the areas i needed assistance with and relieved my work load pressure, and taught me would definitely recommend...',
        },
        {
            img: 'https://eu7cmie.cloudimg.io/s/crop/96x96/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2425127/image-2950cc63705a6193d6e61c12c6daea1c.jpg',
            name: 'Vidhi ashik M',
            lastName: 'St James NSW',
            rate: 2,
            rateNumber: 17,
            review: 'Vidhi was great to work with and she was very patient and helped me along the way as I needed. Would definitely recommend her. Great service- Mathew helped',
        },
    ]

    return (
        <>
            <Menu />
            <section >
                <Banner imgSource={'https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113592.jpg?w=2000'} text={name} />
                <div className='p-4 container-fluid'>
                    <div>
                        <div className='one-box-card-area'>
                            {viewPostCategoryData.map((item) => {
                                return (
                                    <>
                                        <div className='p-4 main-category-profile-card'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <NavLink to="user-profile">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={item.img}
                                                        sx={{ width: 65, height: 65 }}
                                                    />
                                                </NavLink>
                                                <div className='text-right'>
                                                    <h5 className='p-0 m-0'>{item.name}</h5>
                                                    <p className='p- m-0'>{item.lastName}</p>
                                                    <div className='d-flex align-items-center justify-content-end'>
                                                        <Rating className='p-0 m-0 ratingFont' name="read-only" value={item.rate} readOnly />
                                                        <span className='ratingNumberFont'>({item.rateNumber})</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider className='my-3' color="secondary" />
                                            <div>
                                                <h4>Latest Reviews</h4>
                                                <p className='latestReviewsPara'>{item.review}</p>
                                            </div>
                                            <div>
                                                <h4>Verified Badges</h4>
                                                <div className='d-flex justify-content-around align-items-center py-3'>
                                                    <Tooltip title="Digital ID Verified" placement="top-start">
                                                        <HowToRegIcon className='category-verified-badges' />
                                                    </Tooltip>
                                                    <Tooltip title="Payment Method Verified" placement="top-start">
                                                        <CreditCardIcon className='category-verified-badges' />
                                                    </Tooltip>
                                                    <Tooltip title="Mobile Verified" placement="top-start">
                                                        <PhoneIcon className='category-verified-badges' />
                                                    </Tooltip>
                                                    <Tooltip title="LinkedIn Verified" placement="top-start">
                                                        <LinkedInIcon className='category-verified-badges' />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-center requestBtnDiv'>
                                                <button className='RequestQuoteBtn' >Request a Quote</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CategoriesPost;