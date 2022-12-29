import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Images from "../../../Images/Image";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "../LandingPage.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Testimonial = () => {

    const TestimonialData = [
        {
            imgSource: Images.web,
            text: 'Web Development',
        },
        {
            imgSource: Images.app,
            text: 'App Development',
        },
        {
            imgSource: Images.software,
            text: 'Software Development',
        },
        {
            imgSource: Images.digital,
            text: 'Digital Marketing',
        },
        {
            imgSource: Images.android,
            text: 'Android Development',
        },
        {
            imgSource: Images.marketing,
            text: 'Marketing',
        },
        {
            imgSource: Images.clang,
            text: 'C Language',
        },
        {
            imgSource: Images.cppjava,
            text: 'C++ & Java Master',
        },
        {
            imgSource: Images.database,
            text: 'Database Management',
        },
        {
            imgSource: Images.one,
            text: 'Food & Drink',
        },
        {
            imgSource: Images.two,
            text: 'Plumber',
        },
        {
            imgSource: Images.three,
            text: 'Cleaning Services',
        },
        {
            imgSource: Images.four,
            text: 'Yoga Classes',
        },
        {
            imgSource: Images.five,
            text: 'Salon spa',
        },
        {
            imgSource: Images.six,
            text: 'Gym',
        },
        {
            imgSource: Images.seven,
            text: 'Transport',
        },
    ]

    const slides = TestimonialData.map((item, index) => {
        return (
            <SwiperSlide key={`slide-${index}`} style={{ listStyle: "none" }}>
                <div className="swiper-slide">
                    <div className="clientbox">
                        <div className="clientImg">
                            <img src={item.imgSource} />
                        </div>
                        <div className="member-info d-flex">
                            <div>
                                <h3>Jhon dow</h3>
                                <p>Director of the board</p>
                            </div>
                            <div style={{ position: 'absolute', right: '50px' }}>
                                <FormatQuoteIcon style={{ fontSize: '40px', color: '#8fc1e2' }} />
                            </div>
                        </div>
                    </div>
                    <p className="clientfeed">Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore eiusmod tempor
                        incididunt magna aliqu.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        dolore eiusmod tempor incididunt magna aliqu.</p>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <div className="aon-testmonials-area sf-curve-pos">
            <div className="container">
                <div className="section-head">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <span className="sf-sub-title">Testimonial</span>
                            <h2 className="sf-title">What People Say</h2>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="swiper ourclientTestimonials">
                            <div className="">
                                <Swiper
                                    id="swiper"
                                    virtual
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    autoplay
                                    onReachEnd={() => {
                                        const tmp = slides.unshift();
                                        slides.push(tmp);
                                    }}
                                    navigation
                                    pagination
                                >
                                    {slides}
                                </Swiper>
                            </div>
                            <div className="slider-btn-wrap">
                                <div className="service-prev slider-btn style2" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-service">
                                    <i><ArrowBackIcon style={{ cursor: 'pointer' }} /></i>
                                </div>
                                <div className="service-next slider-btn style2" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-service">
                                    <i><ArrowForwardIcon style={{ cursor: 'pointer' }} /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;