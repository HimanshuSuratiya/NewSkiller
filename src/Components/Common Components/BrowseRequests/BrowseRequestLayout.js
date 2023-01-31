import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import BrowseRequest from "./BrowseRequest";
import UserProfile from "../UserProfile/UserProfile";

const BrowseRequestLayout = ({ heading }) => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<BrowseRequest heading={heading} />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default BrowseRequestLayout;