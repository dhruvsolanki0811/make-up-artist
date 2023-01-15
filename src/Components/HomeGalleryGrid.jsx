import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import bridal from "../assets/bridal.jpg"
import Model from "../assets/Model.jpg"
import Celebrity from "../assets/Celebrity.jpg"
import press from "../assets/Press.jpg"
import more from "../assets/more.jpg"
import {Link} from "react-router-dom"

const HomeGalleryGrid = () => {
  
  return (
    <section className='pt-3 pb-3'>
        {/* <Container> */}

<Row className="gx-5 gy-5 justify-content-center " style={{marginLeft:"0",marginRight:"0"}}  xs={1} md={3}>
{getColumnsForRow()}
</Row> 
{/* </Container> */}
 </section>
  );
};

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
export default HomeGalleryGrid;
