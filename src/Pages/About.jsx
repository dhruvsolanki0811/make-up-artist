import React from 'react'
import "../Styling/Aboutus.css"

import bridal from "../assets/bridal.jpg"
import Celebrity from "../assets/Celebrity.jpg"
import press from "../assets/Press.jpg"
import {Link} from "react-router-dom"
import { Card, Col, Row } from 'react-bootstrap'

const About = () => {
  return (
    
<>
<section class="wrap-banner">
 <div> 
  <h2 style={{fontFamily: 'Playfair Display, serif',fontSize:"7vH"}}>About us</h2>
  </div>
</section>
<section style={{textAlign:"center",paddingTop:"7vH",  justifyContent:"center",  alignItems:"center"}}>
<h1 style={{fontFamily: 'Playfair Display, serif',color: "hsl(240, 38%, 20%)"}}>Best Makeup Artist</h1>
<p style={{justifyContent:"center",textAlign:"center",paddingTop:"2vH",fontFamily: 'Barlow Condensed, sans-serif',fontSize:"2.6vH",color: "hsl(240, 38%, 20%)"}}><strong style={{fontSize:"33px"}}>A</strong>rtist was born & brought up in Pune, has a degree in IT engineering from Pune 
University. She recognized her passion for makeup in 2012. She always plumped for 
makeup during her college days. While working for IT industry, she leaned towards this 
field and then started her journey as makeup artist. And that makes her very experienced 
in this industry. The transformation that was brought after every look and hairstyles in 
that short term caught her fascination. She knew she wanted to be the Bridal Makeup 
Artist in Pune....Hard work, dedication and zest soon brought her up to the top as a 
bridal makeup artist and makeup educator</p>
<center style={{paddingTop:"2vH"}}>
<hr size="6" width="33%" align="center" color="#000"/>
</center  >

<section style={{paddingTop:"4vH",}}>
        {/* <Container> */}

<Row className="gx-5 gy-5 justify-content-center " style={{marginLeft:"0",marginRight:"0"}}  xs={1} md={3}>
{getColumnsForRow()}
</Row> 
{/* </Container> */}
 </section>

 <p  style={{textAlign:"center",paddingTop:"2vH",fontFamily: 'Barlow Condensed, sans-serif',fontSize:"2.6vH",color: "hsl(240, 38%, 20%)"}}>And there is Artist – Bridal Makeup Artist, an Entrepreneur, Makeup Educator and a Mother.</p>
 <p style={{textAlign:"justify",paddingTop:"2vH",fontFamily: 'Barlow Condensed, sans-serif',fontSize:"2.6vH",color: "hsl(240, 38%, 20%)"}}>From working in ATOS to owning her Makeup Studio cum Academy & Holy Nails – a Nail Spa in Pune, Artist has been dabbled 
keeping in mind the needs and demands as a best bridal makeup artist . She believes in quality work and spreads positivity through her 
work. Over the years self taught and blessed artist Artist has built her reputation for high work profile and her creativity ..with her 
technical ability in hair and crafty eye she creates highly clean and minimal to more extreme and dramatic looks with same ease and 
enthusiasm…….her forte is complete control over makeup and hair which makes it easier for her to create and visualise the Final Look !</p>
<p style={{textAlign:"justify",paddingTop:"2vH",fontFamily: 'Barlow Condensed, sans-serif',fontSize:"2.6vH",color: "hsl(240, 38%, 20%)"}}>From working in ATOS to owning her Makeup Studio cum Academy & Holy Nails – a Nail Spa in Pune, Artist has been dabbled 
keeping in mind the needs and demands as a best bridal makeup artist . She believes in quality work and spreads positivity through her 
work. Over the years self taught and blessed artist Artist has built her reputation for high work profile and her creativity ..with her 
technical ability in hair and crafty eye she creates highly clean and minimal to more extreme and dramatic looks with same ease and 
enthusiasm…….her forte is complete control over makeup and hair which makes it easier for her to create and visualise the Final Look !</p>
</section>
</>
  )
}

const getColumnsForRow =()=>{
  let items = [{photo:bridal,name:"bridal"},{photo:Celebrity,name:"celebrity"},{photo:press,name:"pressandpraise"}].map((arr,index) => {
    return ( 
      <Col style={{ width: '40vH'}}>
      <Link to={`/gallery`}>

      <Card key={arr.name+index} style={{ width: '100%',justifyContent:"center" ,boxShadow: "0 15px 15px rgb(0 0 0 / 25%)"}} >

      <div className="image-gallery">

    <Card.Img style={{height:"45vH" } }variant="top" src={arr.photo} />
    <div className="overlay"></div>
    </div>    



  </Card>
  </Link>

  </Col>
    );

});
return items;
};
export default About