import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'


export default function Header() {

  const mobile = window.innerWidth <= 768 ? true : false ;
  const [menuOpened , setMenuOpened] = useState(false);

  return (
    <div className="header">
        <img src={logo} alt="logo" className='logo' />
        {menuOpened===false && mobile === true ?(
        <div className='bars' onClick={()=>{
          menuOpened == false ?  setMenuOpened(true) :  setMenuOpened(false)}}>
          <img src={bars} alt="baricon" />
        </div> 
      ):(<>
        <div className='bars' onClick={()=>{
          menuOpened == false ?  setMenuOpened(true) :  setMenuOpened(false)}}>
          <img src={bars} alt="baricon" />
        </div> 
          <ul className='header_menu'>
            <li ><Link to='home' onClick={()=> setMenuOpened(false)} span={true} smooth={true}>Home</Link></li>
            <li ><Link to='programs' onClick={()=> setMenuOpened(false)} span={true} smooth={true}>Programs</Link></li>
            <li ><Link to='reasons' onClick={()=> setMenuOpened(false)} span={true} smooth={true}>Why us?</Link></li>
            <li ><Link to='plans' onClick={()=> setMenuOpened(false)} span={true} smooth={true}>Plans</Link></li>
            <li ><Link to='testimonials' onClick={()=> setMenuOpened(false)} span={true} smooth={true}>Testimonials</Link></li>
        </ul>
         </>
      )}
     

        
    </div>
  )
}