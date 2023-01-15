import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "../CategoryGallery.css"
import { Link } from "react-router-dom";
import before from "../assets/before.jpg"

const CategoryGallery = ({category}) => {

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    console.log(lightboxDisplay)
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
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
    
    <section>
      <Link to={"/gallery"}>
    <button style={buttonStyle} >{"< Back"}</button>
    </Link>
    <div className="gallery-div"> 
    <div className="big"  onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=10"   alt="picsum"/></div>

  <div   onClick={() => showImage(before)} ><img src={`https://picsum.photos/430?random=1` }alt="picsum"/></div>
    <div   onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=2"  alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=3"   alt="picsum"/></div>
    <div className="wide" onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=4" alt="picsum"/></div>

    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=5"   alt="picsum"/></div>
    <div className="tall" onClick={() => showImage(before)} ><img src="https://picsum.photos/430/430?random=6"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=7"   alt="picsum"/></div>
    <div className="tall" onClick={() => showImage(before)} ><img src="https://picsum.photos/430/430?random=8"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=9"   alt="picsum"/></div>
    
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=11"   alt="picsum"/></div>

    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=12"   alt="picsum"/></div>
    <div className="big" onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=15"   alt="picsum"/></div>

    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=13"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=14"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=16"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=17"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=18"   alt="picsum"/></div>
    <div className="wide" onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=19"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=20"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=21"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=22"   alt="picsum"/></div>
    <div onClick={() => showImage(before)} ><img src="https://picsum.photos/430?random=23"   alt="picsum"/></div>
    
  </div>
      </section>    
     

    </>
  )
  }

export default CategoryGallery;