import React, { useEffect } from 'react';
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import PostATasker from "./Components/Common Components/Postatasker/PostATasker";
import Howitwork from "./Components/Common Components/Howitworks/Howitwork";
import Help from "./Components/Common Components/Help/Help";
import Contactus from "./Components/Common Components/Contactus/Contactus";
import SignupLayout from './Components/Signup/SignupLayout';
import LoginLayout from './Components/Login/LoginLayout';
import MyProfile from "./Components/Common Components/MyProfile/MyProfile";
import Notification from "./Components/Common Components/Notification/Notification";
import BrowseRequest from "./Components/Common Components/BrowseRequests/BrowseRequest";
import './App.css';
import './Responsive.css';

const App = () => {
  useEffect(() => {
    const LoginData = { users: [{ email: 'skillseeker@gmail.com', password: '12345@', type: 'skillseeker' }, { email: 'skillprovider@gmail.com', password: '12345@', type: 'skillprovider' }] }
    if (localStorage.getItem('isLoginType') === null) {
      localStorage.setItem('isLoginType', 'guest')
    } else {
      if (localStorage.getItem('isLoginType') === 'skillseeker') {
        localStorage.setItem('isLoginType', 'skillseeker')
      } else if (localStorage.getItem('isLoginType') === 'skillprovider') {
        localStorage.setItem('isLoginType', 'skillprovider')
      } else {
        localStorage.setItem('isLoginType', 'guest')
      }
    }
    localStorage.setItem('LoginData', JSON.stringify(LoginData));
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/*" element={<LoginLayout />} />
        <Route path="/signup/*" element={<SignupLayout />} />
        <Route path="/post-a-task" element={<PostATasker />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/browse-requests" element={<BrowseRequest />} />
        {/*<Route path="/category/:name" element={< CategoriesPost />} />
        <Route path="/my-requests" element={<MyRequest />} />
        <Route path="/my-proposals" element={<MyProposal />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/past-tasks" element={<PastTasks />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/search-posts" element={<BrowseRequests />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;