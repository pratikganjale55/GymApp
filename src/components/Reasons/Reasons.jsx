import React from 'react' ;
import "./Reason.css" ;
import image1 from "../../assets/image1.png" ;
import image2 from "../../assets/image2.png" ;
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png" ;
import nb from "../../assets/nb.png" ;
import adidas from "../../assets/adidas.png" ;
import nike from "../../assets/nike.png" ;
import tick from "../../assets/tick.png" ;

const Reasons = () => {
  return (
    <>
    <div className="Reasons" id="reasons">
        <div className="left_r">
            <img src={image1} alt=""  />
            <img src={image2} alt=""  />
            <img src={image3} alt=""  />
            <img src={image4} alt=""  />
            
        </div>
        <div className="right_r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke_text'>Why</span>
                <span> choose us?</span>
            </div>
            
            <div className='details_r'>
                <div>
                    <img src={tick} alt="" className="src" />
                    <span>OVER 140+ EXPERT COACHES</span>
                </div>
                <div>
                    <img src={tick} alt="" className="src" />
                    <span>TRAIN FASTER ANS SAMRTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" className="src" />
                    <span>1 FREE PROGRAM FROM NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" className="src" />
                    <span>REALIABLE PARTNERS</span>
                </div>
            </div>
            
           
           <span style={{
            color : "var(--gray)" ,
            fontWeight : "normal"
           }}>
            Our partners
           </span>

             <div className='partners'>
                    <img src={nb} alt="" className="src" />
                    <img src={adidas} alt="" className="src" />
                    <img src={nike} alt="" className="src" />
            </div>


        </div>
    </div>
    </>
  )
}

export default Reasons
