import React from 'react';
import { Container, Row, Col ,Button} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { HiPhone,HiEnvelope ,HiHome} from "react-icons/hi2";



export default function FooterPage() {


  return (
     
<>

<div bgcolor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <SocialIcon style={{ height: 40, width: 40 }} url="https://twitter.com/" />
      <SocialIcon style={{ height: 40, width: 40 ,marginLeft:30}} url="https://instagram.com/" />
      <SocialIcon style={{ height: 40, width: 40,marginLeft:30 }}  url="https://facebook.com/" />
      <SocialIcon style={{ height: 40, width: 40,marginLeft:30 }} url="https://pinterest.com/" />
      </section> */}

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your div content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
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

            <Col md="3" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-3'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  What we do
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gallery
                </a>
              </p>
              
            </Col>
            <Col md="3" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-3'>Useful links</h6>
              
              <p>
                <a href='#!' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
              </Col>

            <Col md="4" lg="3" xl="2" className='mx-auto mb-md-0 mb-3'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>
                {/* <Icon icon="home" className="me-2" /> */}
                <HiHome className="me-1"/>

                New York, NY 10012, US
              </p>
              <p>
              <HiEnvelope className="me-1"/>

                {/* <Icon icon="envelope" className="me-3" /> */}
                info@example.com
              </p>
              <p>
                {/* <Icon icon="phone" className="me-3" />  */}
               <HiPhone className="me-1"/>
                + 01 234 567 88
              </p>
              <p>
              <HiPhone className="me-1"/>

                {/* <Icon icon="print" className="me-3" /> */}
                 + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>     */}
      
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