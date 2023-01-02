import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import MyTasks from "./MyTasks";
import UserProfile from "../../Common Components/UserProfile/UserProfile";

const MyTasksLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<MyTasks />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default MyTasksLayout;