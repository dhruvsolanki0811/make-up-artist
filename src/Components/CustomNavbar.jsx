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
        style={{paddingLeft:"25px"}}
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
      {/* <Link to="/">
            <Nav.Link  >
            
              Home
            </Nav.Link>
            </Link>
            <Link to="/#whatwedo">
            <Nav.Link >
              What we do
            </Nav.Link>
            </Link>

            <Link to="/gallery">

            <Nav.Link  >
              Gallery
            </Nav.Link>
            </Link>

            <Link to="/aboutus">

            <Nav.Link >
              About us
            </Nav.Link> */}

            {/* <Link to="/contact">
            <Nav.Link >

              Contact
            </Nav.Link> */}
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <HashLink className="text-decoration-none text-black" to="/#whatwedo" >
                WhatweDo
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/gallery">
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/aboutus">
                About
              </Link>
            </Nav.Link>

            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/contact">
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