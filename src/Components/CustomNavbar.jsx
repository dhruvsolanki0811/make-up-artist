import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
const Scroller=()=>{
 const whatwedo= document.getElementById("whatwedo")
  whatwedo.scrollIntoView({ behavior: 'smooth' })
 ;}

  return (
    <>
 <Navbar collapseOnSelect expand="lg" bg="" variant=""  >
        <Navbar.Brand href="/" className='' style={{paddingLeft:"25px"}}>
         Artist
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       < Nav className="me-auto" >
           
           </Nav>
          <Nav style={{paddingRight:"25px"}}>
            <Nav.Link  href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/#whatwedo">
              What we do
            </Nav.Link><Nav.Link  href="/gallery">
              Gallery
            </Nav.Link><Nav.Link  href="/aboutus">
              About us
            </Nav.Link><Nav.Link  href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    )
}

export default CustomNavbar