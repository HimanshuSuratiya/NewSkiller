import React from "react";
import Images from "../../../Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper";
import "../LandingPage.css";

const Categories = () => {
    const CategoriesData = [
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

    return (
        <>
            <section className="categoriesSection aon-categories-area">
                <div className="container">
                    <div className="section-head">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <span className="aon-sub-title">categories</span>
                                <h2 className="aon-title">Popular Categories</h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-t80">
                                <div>
                                    <div className="swiper-wrapper categoriesDot">
                                        <Swiper
                                            slidesPerView={5}
                                            spaceBetween={30}
                                            freeMode={true}
                                            autoplay
                                            pagination={{
                                                dynamicBullets: true,
                                            }}
                                            navigation={true}
                                            modules={[FreeMode, Pagination, Navigation]}
                                            className="mySwiper left-arrow-category"
                                        >
                                            {CategoriesData.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className="swiper-slide">
                                                            <div>
                                                                <a href="#!" className="teamImg">
                                                                    <img src={item.imgSource} />
                                                                </a>
                                                                <div className="member-info">
                                                                    <h3>{item.text}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Categories;