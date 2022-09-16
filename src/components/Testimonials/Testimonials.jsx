import React from 'react' ;
import "./testimonials.css" ;
import {testimonialsData } from "../../data/testimonialsData"
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png" ;
import rightArrow from "../../assets/rightArrow.png" ;

import {motion} from "framer-motion" ;

const Testimonials = () => {
    const [selected, setSelected] = useState(0) ;
    const tLength = testimonialsData.length ;

    const transition = {typr : "spring", duration : 3}
  return (
    <>
    
    <div className='testimonials' id='testimonial_id'>
        <div className="left_t">
            <span>Testimonials</span>
            <span className='stroke_text'>What they </span>
            <span>say abount us</span>
            <motion.span
            key={selected}
            initial = {{opacity : 0, x:-100}}
            animate={{opacity : 1, x:0}}
            exit={{opacity : 0, x:-100}}
            transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:"var(--orange)"}}>
                    {testimonialsData[selected].name}
                </span> {" "}
                 - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right_t">
            <motion.div
              initial = {{opacity : 0, x:-100}}
              whileInView = {{opacity : 1, x:0}}
              transition={{...transition,duration : 2}}
            ></motion.div>
            <motion.div
            initial = {{opacity : 0, x:100}}
            whileInView = {{opacity : 1, x:0}}
            transition={{...transition,duration : 2}}
            >
                
            </motion.div>

            {/* image */}
           <motion.img 
             key={selected}
             initial = {{opacity : 0, x:100}}
             animate={{opacity : 1, x:0}}
             exit={{opacity : 0, x:-100}}
             transition={transition}
           src={testimonialsData[selected].image} 
           alt="" className="src" />
        

            <div className="arrows">
                <img 
                onClick={() => {
                    selected === 0? setSelected(tLength-1):
                     setSelected((prev) => prev-1)
                }}
                src={leftArrow} 
                alt="" className="src" />
                <img 
                onClick={() => {
                    selected == tLength-1? setSelected(0):
                    setSelected((prev) => prev+1)
                }}
                src={rightArrow} alt="" className="src" />
            </div>
        </div>
      
    </div>
  </>

  )
}

export default Testimonials
