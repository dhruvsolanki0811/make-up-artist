import React from "react";
import bridalS1 from "../Gallery/Bridal/square/alok-verma-ohENjR9w0bk-unsplash.jpg"
import bridalS3 from "../Gallery/Bridal/square/ardy-arjun-SsGD7Vjl4AY-unsplash.jpg"
import bridalS5 from "../Gallery/Bridal/square/bulbul-ahmed-jUEqikbT4o8-unsplash.jpg"
import bridalS6 from "../Gallery/Bridal/square/dollar-gill-T-PUQaJ8YEw-unsplash.jpg"
import bridalS7 from "../Gallery/Bridal/square/sabesh-photography-rjgFxE3eARQ-unsplash.jpg"
import bridalS8 from "../Gallery/Bridal/square/skg-photography-zW7hVlt6Oa0-unsplash.jpg"
import bridalP4 from "../Gallery/Bridal/potrait/dhiren-maru-i7zfFnsIBhI-unsplash.jpg"
import bridalP5 from "../Gallery/Bridal/potrait/dollar-gill-2hprQNyWkvY-unsplash.jpg"
import bridalP6 from "../Gallery/Bridal/potrait/dollar-gill-vZUveRc8Vqk-unsplash.jpg"
import bridalP7 from "../Gallery/Bridal/potrait/mohit-maru-x9KgVjd3AVA-unsplash.jpg"
import bridalP8 from "../Gallery/Bridal/potrait/photo-1610173827043-9db50e0d8ef9.jfif"
import modelL1 from "../Gallery/Model/landscape/shubham-patel-7O1VG7O_SB4-unsplash.jpg"
import modelL2 from "../Gallery/Model/landscape/matheus-ferrero-4QotHf68gSg-unsplash.jpg"
import modelS7 from "../Gallery/Model/square/seth-doyle-hF2XIzJimtM-unsplash.jpg"
import modelS8 from "../Gallery/Model/square/alex-hddife-dESD2tPePxw-unsplash.jpg"
import modelP1 from "../Gallery/Model/potrait/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import celebrityP6 from "../Gallery/Celebrity/potrait/radu-florin-5QUdx2QujlU-unsplash.jpg"
import moreS7 from "../Gallery/More/square/seth-doyle-vmBik4xv27s-unsplash.jpg"
import moreS8 from "../Gallery/More/square/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import moreP1 from "../Gallery/More/potrait/albert-dera-ILip77SbmOE-unsplash.jpg"
import "../CategoryGallery.css"

import {Link} from "react-router-dom"

const HomeGalleryGrid = () => {
  
  return (
    <section className='pt-3 pb-3'>
        {/* <Container> */}

{/* <Row className="gx-5 gy-5 justify-content-center " style={{marginLeft:"0",marginRight:"0"}}  xs={1} md={3}>
</Row>  */}
{/* </Container> */}

<div className="gallery-div"> 

    <div className="big"   ><img src={bridalS1}   alt="picsum"/></div>

  <div    ><img src={bridalP7} alt="picsum"/></div>
    <div    ><img src={moreS8}  alt="picsum"/></div>
    <div  ><img src={bridalP8}   alt="picsum"/></div>

    <div className="wide"  ><img src={modelL2} alt="picsum"/></div>

    <div  ><img src={celebrityP6}   alt="picsum"/></div>
    <div className="tall"  ><img src={moreS7}   alt="picsum"/></div>
    <div  ><img src={bridalS8}   alt="picsum"/></div>
    <div className="tall"  ><img src={modelS7}  alt="picsum"/></div>
    <div  ><img src={modelS8}   alt="picsum"/></div>
    
    <div  ><img src={bridalP5}   alt="picsum"/></div>

    <div  ><img src={bridalS6}   alt="picsum"/></div>
    <div className="big"  ><img src={bridalS3} alt="picsum"/></div>

    <div  ><img src={bridalS5}   alt="picsum"/></div>
    <div  ><img src={bridalP6}   alt="picsum"/></div>
    <div  ><img src={modelP1}   alt="picsum"/></div>
    <div  ><img src={moreP1}   alt="picsum"/></div>
    <div  ><img src={bridalS7}   alt="picsum"/></div>
    <div className="wide"  ><img src={modelL1}   alt="picsum"/></div>
    <div  ><img src={bridalP4}   alt="picsum"/></div>

    
  </div>
 </section>
  );
};


export default HomeGalleryGrid;
