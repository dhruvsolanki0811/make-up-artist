import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footerpage from "./Components/FooterPage";
import Gallery from "./Pages/Gallery";
import ErrorPage from "./Pages/ErrorPage";
import CategoryGallery from './Pages/CategoryGallery';
import Contact from './Pages/Contact';
import About from './Pages/About';

const CustomRoutes = () => {
  return (
  <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/gallery" >
            <Route index element={<Gallery />} />

            <Route  path="bridal" element={<CategoryGallery category="bridal" />} />
            <Route  path="model" element={<CategoryGallery category="bridal"  />} />
            <Route  path="celebrity" element={<CategoryGallery category="bridal" />} />
            <Route  path="pressandpraise" element={<CategoryGallery category="bridal" />} />
            <Route  path="more" element={<CategoryGallery category="bridal" />} />
            
              </Route>
              <Route exact path="/aboutus" element={<About />} />

              <Route exact path="/contact" element={<Contact />} />
            <Route exact path="*" element={<ErrorPage />} />

          </Routes>
  
  )
}

export default CustomRoutes