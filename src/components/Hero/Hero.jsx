import React from 'react' ;
import "./Hero.css" ;
import  Header from "../Header/Header" ;
import hero_image from "../../assets/hero_image.png" ;
import hero_image_back from "../../assets/hero_image_back.png" ;
import calories from "../../assets/calories.png" ;
import NumberCounter from "number-counter" ;
import {motion, useSpring} from "framer-motion" ;
import { Link } from 'react-scroll';

const Hero = () => {
  const transition = {type : "spring", duration : 3 }
  const mobile = window.innerWidth <= 768 ? true : false 

  const handleClick = () => {

  }
  return (
    <div className='hero' >
      <div className="blur hero_blur"></div>
      <div className="left_div">
            <Header/>
            
            <div className="the_best_add">
              <motion.div
              initial = {{left:mobile?"178px": "238px"}}
              whileInView = {{left: "8px"}}
              transition={{...transition,type:"tween"}}
              ></motion.div>
              <span>the best fitness club in the town</span>
            </div>

          <div className='hero_text'>
            <div>
              <span className='stroke_text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>in here we will help you to shape and build your ideal body 
                and live up your life fullest
              </span>
            </div>
          </div>

            {/* figures */}

            <div className="figures">
              <div>
                <span>
                  <NumberCounter  end={140} start={100}  delay="4" preFix="+"/>
                  </span>
                <span>Expert Coaches</span>
              </div>
              <div>
                <span><NumberCounter  end={978} start={780}  delay="3" preFix="+"/></span>
                <span>Memebers joined</span>
              </div>
              <div>
                <span><NumberCounter  end={50} start={30}  delay="4" preFix="+"/></span>
                <span>Fitness Programs</span>
              </div>
            </div>

            {/* buttons */}

            <div className='hero_btn'>
              <button className='btn'>
                <Link
                
                to ="join_us"
                smooth = {true}

                >
                Get Started</Link>
                
                </button>
              <button className='btn'>
                <Link
                to='plan_id' 
                spy = {true}
               smooth = {true}
                >
                Learn More
                </Link>
                </button>
            </div>


     </div>
      <div className="right_div">
        <button className='btn'>
          <Link
          to ="join_us"
          smooth = {true}
          >
          Join Now
          </Link>
          </button>

         {/* right side image  */}

        <img src={hero_image} alt="" className='hero_image'/> 
        <img src={hero_image_back} className="hero_image_back"/>
            
             {/* calories */}
           <div className='calories'>
            <img src={calories}/>
            <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
            </div>
            
            </div>  
      </div>
    </div>
  )
}

export default Hero
