import React from 'react'
import "../Styling/CategoryGallery.css"
import { Link } from "react-router-dom";
import { Bridal, Celebrity, Model, More, PressandPraise } from '../Components/Photo';

const CategoryGallery = ({category}) => {

const categoryFunc=()=>{
  if(category==="Bridal"){
    return (<Bridal/>)
  }
  else if(category==="Model"){
    return (<Model/>)
  }
  else if(category==="Celebrity"){

    return (<Celebrity/>)
  }
  else if(category==="Press and Praise"){
    return (<PressandPraise/>)
  }
  else if(category==="More"){
    return (<More/>)
  }
}

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
    {/* <Breadcrumb>
      <Breadcrumb.Item >
        <Link className='text-decoration-none text-black' to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item  className='text-decoration-none text-black'>
      <Link className='text-decoration-none text-black' to="/">  Gallery</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{category}</Breadcrumb.Item>
    </Breadcrumb> */}

      <Link to={"/gallery"}>
    <button style={buttonStyle} >{"< Back"}</button>
    </Link>
   {categoryFunc()}
      </section>    
     

    </>
  )
  }

export default CategoryGallery;