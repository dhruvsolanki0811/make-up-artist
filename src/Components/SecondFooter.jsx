import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { SocialIcon } from 'react-social-icons'
import '../Styling/footer.css'
const SecondFooter = () => {
  return (
<>
<footer class="footer-section">
        <div class="container">
          
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                               <h1 style={{fontFamily:"Playfair Display,serif"}}>Artist</h1>
                            </div>
                            <div class="footer-text" style={{fontFamily:"Barlow Condensed,sans-serif"}}>
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily:'Barlow Condensed, sans-serif'}}>Home </Link></li>
                                <li>
                                <HashLink to="/#whatwedo" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily: 'Barlow Condensed, sans-serif'}}>
                  What we do
                </HashLink>
                                    </li>
                                <li><Link to="/gallery" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily:'Barlow Condensed, sans-serif'}}>Gallery </Link></li>
                                <li><Link to="/aboutus" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily:'Barlow Condensed, sans-serif'}}>About </Link></li>
                                <li><Link to="/contact" className='text-reset' style={{color: "hsl(240, 38%, 20%)",  fontFamily:'Barlow Condensed, sans-serif'}}>Contact </Link></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Row  className="p-3 pt-0 d-flex justify-content-center border-bottom">
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }} url="https://twitter.com/" />
      <SocialIcon style={{ height: 35, width: 35 ,marginLeft:30}} url="https://instagram.com/" />
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }}  url="https://facebook.com/" />
      <SocialIcon style={{ height: 35, width: 35,marginLeft:30 }} url="https://pinterest.com/" />
      </Row>
    </footer>
</>  )
}

export default SecondFooter