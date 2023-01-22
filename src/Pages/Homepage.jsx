import { Button, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import HomeGallery from "../Components/HomeGallery";
import WhatWeDo from "../Components/WhatWeDo";
import Comparison from "../Components/Comparison";
import { Link } from "react-router-dom";
function Homepage() {
  const buttonStyle={
    width: "100px",
    height: "35px",
    borderRadius: "100px/100px", /* horizontal radius / vertical radius */
    backgroundColor: "rgb(252 151 172)",
    color: "white",
    textAlign: "center",
    lineHeight: "20px",
    border:"none"
  }

  return (
    <>
            {/* <CustomNavbar /> */}
  
    <Row>

        {/* <CustomNavbar /> */}

        <div className="wrapper">
          <div className="inner">
            <div className="content">
              <h5>Expert in Makeover & Wellness</h5>
              <h2>Artist</h2>
              <Link to="/gallery"><Button style={buttonStyle} className="text-decoration-none text-white" >Explore</Button></Link> 
              </div>
        </div>
        </div>
</Row>
<Row  className="p-4"   >
            <WhatWeDo/>
          </Row> 

          <Row  className="p-4">
            <Comparison/>
          </Row>
<Row >
            <HomeGallery/>
          </Row>
          {/* <Row  className="p-4" style={{background:"#000"}}>
            <Testimonials/>
          </Row>    */}


           
          {/* <Row className="p-4">
            <Services/>
          </Row> */}
          
       
    </>
  );
}

export default Homepage;
