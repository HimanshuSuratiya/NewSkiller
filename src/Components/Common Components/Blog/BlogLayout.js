import React from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";

const BlogLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="blog-detail" element={<BlogDetail />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default BlogLayout;