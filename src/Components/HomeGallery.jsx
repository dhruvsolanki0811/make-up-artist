import React from "react";
import HomeGalleryGrid from "./HomeGalleryGrid";



const HomeGallery = () => {

  const title = {
    color: "rgb(252 151 172)",
    color: "hsl(240, 38%, 20%)",
    paddingTop: "25px",
    fontFamily: 'Playfair Display, serif',
    fontSize:"5vH"
  };
  return (
    <center className="pb-3">
      <h2 style={title}>Gallery</h2>
      <div style={{
    paddingTop: "10px",
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize:"3.5vH",
    color: "hsl(240, 38%, 20%)"
  }}>
        “Creativity is your best makeup skill, don’t be afraid to experiment.”{" "}
      </div>
      <div style={{textAlign: "center",    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize:"3vH",    color: "hsl(240, 38%, 20%)"  }}>– Pat McGrath</div>

      
    <HomeGalleryGrid/>
    </center>
  );
};

export default HomeGallery;
