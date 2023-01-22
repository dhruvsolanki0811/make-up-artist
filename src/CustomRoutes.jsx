import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footerpage from "./Components/FooterPage";
import Gallery from "./Pages/Gallery";
import ErrorPage from "./Pages/ErrorPage";
import CategoryGallery from './Pages/CategoryGallery';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Messages from './Pages/Messages';
import { AuthProvider,useAuthState } from './Context/AuthContext';

function RequireAuth({ children }) {
  const  {isAuthenticated}  = useAuthState();
  return isAuthenticated === true ? children : <Navigate to="/login" replace />;
}

function AlreadyAuth({ children }) {
  const  {isAuthenticated}  = useAuthState();
  return isAuthenticated === false ? children : <Navigate to="/messages" replace />;
}

const CustomRoutes = () => {

  return (
    <AuthProvider>

  <Routes>
            <Route  path="/" element={<Homepage />} />
            <Route  path="/login" element={<AlreadyAuth><Login /></AlreadyAuth> } />
            <Route  path="/messages" element={
      <RequireAuth>
        <Messages />
      </RequireAuth>
    } />


            <Route  path="/gallery" >
            <Route index element={<Gallery />} />

            <Route  path="bridal" element={<CategoryGallery category="Bridal" />} />
            <Route  path="model" element={<CategoryGallery category="Model"  />} />
            <Route  path="celebrity" element={<CategoryGallery category="Celebrity" />} />
            <Route  path="pressandpraise" element={<CategoryGallery category="Press and Praise" />} />
            <Route  path="more" element={<CategoryGallery category="More" />} />
            
              </Route>
              <Route exact path="/aboutus" element={<About />} />

              <Route exact path="/contact" element={<Contact />} />
            <Route exact path="*" element={<ErrorPage />} />

          </Routes>
          </AuthProvider>
  
  )
}

export default CustomRoutes