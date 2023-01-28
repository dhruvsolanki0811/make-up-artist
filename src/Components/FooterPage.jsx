import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { HiPhone,HiEnvelope ,HiHome} from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



export default function FooterPage() {


  return (
     
<>

<div bgcolor='light' className='text-center text-lg-start'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <SocialIcon style={{ height: 40, width: 40 }} url="https://twitter.com/" />
      <SocialIcon style={{ height: 40, width: 40 ,marginLeft:30}} url="https://instagram.com/" />
      <SocialIcon style={{ height: 40, width: 40,marginLeft:30 }}  url="https://facebook.com/" />
      <SocialIcon style={{ height: 40, width: 40,marginLeft:30 }} url="https://pinterest.com/" />
      </section> */}

      <section >
        <Container className='mt-5'>
                 <Row className='mt-3'>
            <Col md="3" lg="4" style={{paddingLeft:"27px"}} className='mx-auto mb-4' >
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Playfair Display, serif',fontSize:'2.7vH'}}>
Artist</h6>
              <p style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
               We ensure you look the best at your best. Connect with us on different platforms.
              </p>
            </Col>

            {/* <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col> */}

            <Col md="3" lg="2" className='mx-auto mb-2' style={{paddingLeft:"27px"}}>
              <h6 className='text-uppercase fw-bold mb-3' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Playfair Display, serif',fontSize:'2.7vH'}}>Useful links</h6>
              <p>
                <Link to="/" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                  Home
                </Link>
              </p>
              <p>
                <HashLink to="/#whatwedo" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                  What we do
                </HashLink>
              </p>
              <p>
                <Link to="/gallery" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily:'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                  Gallery
                </Link>
              </p>
              
            </Col>
            <Col md="3" lg="2"  className='mx-auto mb-2' style={{paddingLeft:"27px"}}>
              <h6 className='text-uppercase fw-bold mb-3' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Playfair Display, serif',fontSize:'2.7vH'}}>Useful links</h6>
              
              <p>
                <Link to="/aboutus" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                  About us
                </Link>
              </p>
              <p>
                <Link to="/contact" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                  Contact us
                </Link>
              </p>
              </Col>

            <Col md="3" lg="3"  className='mx-auto mb-md-0 mb-3' style={{paddingLeft:"27px"}}>
              <h6 className='text-uppercase fw-bold mb-3' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Playfair Display, serif',fontSize:'2.7vH'}}>Contact</h6>
              <p style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                {/* <Icon icon="home" className="me-2" /> */}
                <HiHome className="me-1" />

                New York, NY 10012, US
              </p>
              <p style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
              <HiEnvelope className="me-1"/>

                {/* <Icon icon="envelope" className="me-3" /> */}
                info@example.com
              </p>
              <p style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
                {/* <Icon icon="phone" className="me-3" />  */}
               <HiPhone className="me-1"/>
                + 01 234 567 88
              </p>
              <p style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif',fontSize:'2.6vH'}}>
              <HiPhone className="me-1"/>

                {/* <Icon icon="print" className="me-3" /> */}
                 + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    
      
        </div>

      <Row  className="p-3 d-flex justify-content-center border-bottom">
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }} url="https://twitter.com/" />
      <SocialIcon style={{ height: 35, width: 35 ,marginLeft:30}} url="https://instagram.com/" />
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }}  url="https://facebook.com/" />
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }} url="https://pinterest.com/" />
      </Row>
      </>

  );
}