import React from 'react'
import { Row,Col,Card, Container } from 'react-bootstrap'
import bridal from "../assets/bridal.jpg"
import Model from "../assets/Model.jpg"
import Celebrity from "../assets/Celebrity.jpg"
import press from "../assets/Press.jpg"
import more from "../assets/more.jpg"
import {Link} from "react-router-dom"

const Gallery = () => {
  return (
    <section className='pt-3 pb-3'>
        {/* <Container> */}

<Row className="gx-3 gy-3 justify-content-center"  xs={1} md={5}>
{getColumnsForRow()}
</Row>
 </section>)
}
const getColumnsForRow =()=>{
    let items = [{photo:bridal,name:"Bridal",link:"bridal"},{photo:Model,name:"Model",link:"model"},{photo:Celebrity,name:"Celebrity",link:"celebrity"},{photo:press,name:"Press and praise",link:"pressandpraise"},{photo:more,name:"More",link:"more"}].map((arr,index) => {
      return ( 
        <Col style={{ width: '30vH'}}>

        <Card key={index} style={{ width: '100%',justifyContent:"center" }} >

        <div className="image-gallery">
        <Link to={`/gallery/${arr.link}`}>

      <Card.Img style={{height:"37vH" } }variant="top" src={arr.photo} />
      <div className="overlay"></div>
      </Link>
      </div>    


      <Card.Footer style={{backgroundColor:"#A97F4B" ,textAlign:"center"
    
    
    }}>
      <small style={{color: "black",  fontFamily: 'Playfair Display,serif',fontSize:'2vH'}}>  {arr.name}</small>
        </Card.Footer>

    </Card>

    </Col>
      );

  });
  return items;
};

export default Gallery