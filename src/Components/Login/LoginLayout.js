import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import OTPVerification from "../Common Components/OtpVerification/OTPVerification";
import RegisterType from "../Common Components/RegisterType/RegisterType";
import Login from "./Login";

const LoginLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="otp-verification" element={<OTPVerification />} />
                <Route path="register-type" element={<RegisterType />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default LoginLayout;