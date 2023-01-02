import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import MyProposal from "./MyProposal";
import UserProfile from "../../Common Components/UserProfile/UserProfile";

const MyProposalLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<MyProposal />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default MyProposalLayout;