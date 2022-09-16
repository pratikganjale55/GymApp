import React from 'react'
import"./footer.css" ;
import github from "../../assets/github.png" ;
import instagram from "../../assets/instagram.png" ;
import linkdin from "../../assets/linkedin.png" ;
import logo from "../../assets/logo.png" ;


const Footer = () => {
  return (
    <div className='footer_conatiner'> 
    
    <hr/>

    <div className='footer'>
        <div className="social_link">
            <img src={github} alt="" className="src" />
            <img src={linkdin} alt="" className="src" />
            <img src={instagram} alt="" className="src" />
        </div>
        

    </div>
      <div className="logo_f">
        <img src={logo} alt="" className="src" />
      </div>

      <div className="blur blur_f1"></div>
      <div className="blur blur_f2"></div>
    </div>
  )
}

export default Footer
