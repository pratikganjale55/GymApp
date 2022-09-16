import React from 'react' ;
import logo from "../../assets/logo.png" ;
import "./Header.css" ;
import bars from "../../assets/bars.png" ;
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false ;
  const [meanuOpen, setMenuOpen] = useState(false) ;
  return (
    <div className='header' id='header'>
      <img src={logo} alt="" className='logo'/>
    {
     meanuOpen === false &&  mobile  === true ? (
        <div 
        style={{
          backgroundColor : "var(--appColor)" ,
          padding : "0.5rem" ,
          borderRadius : "5px"
        }}
        onClick={() => setMenuOpen(true)}
        >
          <img src={bars} style={{ width : "1.5rem", height: "1.5rem"}}/>
        </div>
      ) : (
        <ul className="header_menu">
        <li >
          <Link
          onClick={() => setMenuOpen(false)}
          to='header'
          activeClass='active'
          spy = {true}
          smooth = {true}
          > Home</Link>
          
          </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
          onClick={() => setMenuOpen(false)}
          to='programs_id' 
           spy = {true}
          smooth = {true}
          >Programs</Link>
          </li>
        <li >
          <Link
          onClick={() => setMenuOpen(false)}
          to='reasons' 
           spy = {true}
          smooth = {true}
          >
          Why us
          </Link>
          </li>
        <li >
          <Link 
          onClick={() => setMenuOpen(false)}
          to='plan_id' 
           spy = {true}
          smooth = {true}
          >Plans</Link>
          </li>
        <li >
          <Link
          onClick={() => setMenuOpen(false)}
          to='testimonial_id' 
           spy = {true}
          smooth = {true}
          >
          Testimonials
          </Link>
          </li>
      </ul>
      )
    }
      
    </div>
  )
}

export default Header
