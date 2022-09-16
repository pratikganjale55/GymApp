import React from 'react' ;
import "./plan.css" ;
import {plansData } from "../../data/plansData.js" ;
import whiteTick from "../../assets/whiteTick.png" ;

const Plans = () => {
  return (
    <div className="plans_container" id='plan_id'>
        <div className="blur plan_blur1"></div>
        <div className="blur plan_blur2"></div>
        <div className="program-headers" style={{gap : "3rem", fontSize : "3rem", fontWeight : "bold", color: "white", textAlign: "center"}}>
            <span className='stroke_text'>READY TO START</span>
            <span> YOUR JOURNEY</span>
            <span className='stroke_text'> NOW WITHUS</span>
        </div>
       
      {/* palns card  */}

      <div className='palns'>
        {
            plansData.map((plan, i) => {
                return (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {
                                plan.features.map((ele, i) => {
                                    return (
                                         <div className="feature">
                                              <img src={whiteTick} alt="" className="src" />
                                              <span key={i}>{ele}</span>
                                         </div>
                                    )
                                })
                            }
                        </div>

                        <span>See more benefit </span>
                        <button className="btn">Join now</button>

                    </div>
                )
            })
        }

      </div>


    </div>
  )
}

export default Plans
