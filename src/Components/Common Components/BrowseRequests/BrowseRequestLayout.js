import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import BrowseRequest from "./BrowseRequest";
import UserProfile from "../UserProfile/UserProfile";

const BrowseRequestLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<BrowseRequest />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default BrowseRequestLayout;