import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import CategoriesPost from "./CategoriesPost";
import UserProfile from "../UserProfile/UserProfile";

const CategoriesLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<CategoriesPost />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default CategoriesLayout;