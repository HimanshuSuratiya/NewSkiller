import React from 'react'
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import HowItsWork from "./HowItsWork/HowItsWork";
import Vendor from "./Vendor/Vendor";
import StaticsCounter from "./StaticsCounter/StaticsCounter";
import Blogs from "./Blogs/Blogs";
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonial from "./Testimonial/Testimonial";
import Menu from "../Common Components/Menu/Menu";
import Footer from "../Common Components/Footer/Footer";

const LandingPage = () => {
    return (
        <>
            <Menu />
            <Banner />
            <Categories />
            <HowItsWork />
            <Vendor />
            <StaticsCounter />
            <Blogs />
            <ChooseUs />
            <Testimonial />
            <Footer />
        </>
    )
}

export default LandingPage;