import React, { useState, useEffect, useRef, useCallback } from 'react'
import before from "../assets/before1.jpg"
import after from "../assets/After.jpg"
import "../Styling/Comparison.css"

import { MdCompareArrows } from "react-icons/md";


const Comparison = () => {
    const [isResizing, setIsResizing] = useState(false);
    const topImageRef = useRef();
    const handleRef = useRef();

    const ComparisonSlider = useRef();


      const setPositioning = useCallback((x) => {
        const { left, width } = topImageRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;
      
        if ((x >= left) && (x <= width + left - handleWidth)) {
          handleRef.current.style.left = `${(x - left) / width * 100}%`;
          topImageRef.current.style.clipPath =
            `inset(0 ${100 - (x - left) / width * 100}% 0 0)`;
        }
      }, []);

      const handleResize = useCallback((e) => {
        if (e.clientX) {
          setPositioning(e.clientX);
        } else if (e.touches[0] && e.touches[0].clientX) {
          setPositioning(e.touches[0].clientX);
        }
      }, [setPositioning]);

      const handleResizeEnd = useCallback(() => {
        setIsResizing(false);
      
        ComparisonSlider.current.removeEventListener('mousemove', handleResize);
        ComparisonSlider.current.removeEventListener('touchmove', handleResize);
        ComparisonSlider.current.removeEventListener('mouseup', handleResizeEnd);
        ComparisonSlider.current.removeEventListener('touchend', handleResizeEnd);
      }, [handleResize]);


      useEffect(() => {
        const slider=ComparisonSlider.current
        if (isResizing) {
          slider.addEventListener('mousemove', handleResize);
          slider.addEventListener('touchmove', handleResize);
          slider.addEventListener('mouseup', handleResizeEnd);
          slider.addEventListener('touchend', handleResizeEnd);
        }
      
        return () => {
          slider.removeEventListener('mousemove', handleResize);
          slider.removeEventListener('touchmove', handleResize);
          slider.removeEventListener('mouseup', handleResizeEnd);
          slider.removeEventListener('touchend', handleResizeEnd);
          // slider.removeEventListener('keyup', onkeydown);
        }
      }, [isResizing, handleResize, handleResizeEnd]);

     
      // Set initial positioning on component mount
useEffect(() => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
  
    setPositioning((width / 2 + left) - (handleWidth / 2));
  }, [setPositioning]);

 
return (

    <>
       

    <div className="comparison-slider" ref={ComparisonSlider}>
    <div ref={handleRef} className="handle"
    onMouseDown={() => setIsResizing(true)}
    onTouchStart={() => setIsResizing(true)}

    >
        <MdCompareArrows/>

    </div>
    <div ref={topImageRef} className="comparison-item top">
      <img
				draggable="false"
				src={before}
				alt={"1"}
			 />
    </div>
    <div className="comparison-item">
      <img
				draggable="false"
				src={after}
				alt={"2"}
			 />
    </div>
  </div>

  </>


)
//   return (
//     <>
//     <Container>

//     <ReactCompareSlider style={{height:"45vH",width:"100%"}}
//   itemOne={<ReactCompareSliderImage src={before} alt="Image one" />}
//   itemTwo={<ReactCompareSliderImage src={after}  alt="Image two" />}
//   handleSize={10}


// />
//  </Container> 
//     </>
//   )
}

export default Comparison