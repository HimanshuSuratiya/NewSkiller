import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import OTPVerification from "../Common Components/OtpVerification/OTPVerification";
import RegisterType from "../Common Components/RegisterType/RegisterType";
import Signup from './Signup';

const SignupLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="otp-verification" element={<OTPVerification />} />
                <Route path="register-type" element={<RegisterType />} />
            </Routes>
        </>
    )
}

export default SignupLayout;