import React from 'react' ;
import "./programs.css" ;
import {programsData}  from "../../data/programsData" ;
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className='programs' id='programs_id'>
        <div className="programs_header">
            <span className="stroke_text">Explore our</span>
            <span> Programs</span> 
            <span className="stroke_text">to shape you</span>
        </div>

     
    

      {/* program data */}

      <div className="program_data">
        {
            programsData.map((elem) => {
              return (  
                <div className="category">
                    {elem.image}
                
                <span>{elem.heading}</span>
                <span>{elem.details}</span>
                <div className="join_now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" className="src" />
                    </div>
                </div>
              )
                
            })
        }
    </div>
    </div>
  )
}

export default Programs
