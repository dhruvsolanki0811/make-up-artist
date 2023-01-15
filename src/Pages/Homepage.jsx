import { Button, Container, Row } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import HomeGallery from "../Components/HomeGallery";
import WhatWeDo from "../Components/WhatWeDo";
import FooterPage from "../Components/FooterPage";
import CustomFooter from "../Components/CustomFooter";
import Comparison from "../Components/Comparison";
function Homepage() {
  const buttonStyle={
    width: "100px",
    height: "35px",
    borderRadius: "100px/100px", /* horizontal radius / vertical radius */
    backgroundColor: "#800000",
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
              <button style={buttonStyle} className="rounded-button-03">Read More</button> 
              </div>
        </div>
        </div>
</Row>
<Row  className="p-4"   >
            <WhatWeDo/>
          </Row> 
<Row >
            <HomeGallery/>
          </Row>
          
<Row  className="p-4">
            <Comparison/>
          </Row>
    
           
          {/* <Row className="p-4">
            <Services/>
          </Row> */}
          
       
    </>
  );
}

export default Homepage;
