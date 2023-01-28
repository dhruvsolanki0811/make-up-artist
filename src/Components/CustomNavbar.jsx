import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const CustomNavbar = () => {
const handleScroll=()=>{
 
 const whatwedo= document.getElementById("whatwedo")
  whatwedo.scrollIntoView({ behavior: 'smooth' })
 ;}

  return (
    <>
 <Navbar collapseOnSelect expand="lg" bg="white" sticky='top'   style={{width:"100%"}}>

        <Navbar.Brand href="/" className='' 
        style={{paddingLeft:"25px",fontFamily: 'Playfair Display, serif',fontSize:"5vH",color: "hsl(240, 38%, 20%)"}}
        >
         Artist
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       < Nav className="me-auto" >
           
           </Nav>

          <Nav
           style={{paddingRight:"25px"}}
           >
   
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/" style={{fontFamily: 'Barlow Condensed, sans-serif',fontSize:"3vH",color: "hsl(240, 38%, 20%)"}}>
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <HashLink className="text-decoration-none text-black" to="/#whatwedo" style={{fontFamily: 'Barlow Condensed, sans-serif',fontSize:"3vH",color: "hsl(240, 38%, 20%)"}}>
                WhatweDo
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/gallery" style={{fontFamily: 'Barlow Condensed, sans-serif',fontSize:"3vH",color: "hsl(240, 38%, 20%)"}}>
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/aboutus" style={{fontFamily: 'Barlow Condensed, sans-serif',fontSize:"3vH",color: "hsl(240, 38%, 20%)"}}>
                About
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/contact" style={{fontFamily: 'Barlow Condensed, sans-serif',fontSize:"3vH",color: "hsl(240, 38%, 20%)"}}>
                Contact Us
              </Link>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>

            </Navbar>


    </>
    )
}

export default CustomNavbar