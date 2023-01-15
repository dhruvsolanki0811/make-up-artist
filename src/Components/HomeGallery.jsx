import React from "react";
import HomeGalleryGrid from "./HomeGalleryGrid";



const HomeGallery = () => {

  const title = {
    color: "rgb(252 151 172)",
    paddingTop: "25px",
  };
  return (
    <center className="pb-3">
      <h2 style={title}>Gallery</h2>
      <div style={{
    paddingTop: "10px",
    fontSize:"20px"
  }}>
        “Creativity is your best makeup skill, don’t be afraid to experiment.”{" "}
      </div>
      <div style={{textAlign: "center",fontSize:"20px" }}>– Pat McGrath</div>

      
    <HomeGalleryGrid/>
    </center>
  );
};

export default HomeGallery;
