import React, { useState } from "react";
import "./Testimonials.css";
import {
  TestimonialsData,
  testimonialsData,
} from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'


export default function Testimonials() {
  const transition = {type:'spring' , duration : 3}
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:'0', x:-100}}
        whileInView={{opacity:'1', x:0}}
        transition={{...transition , duration:2}}
        ></motion.div>
        <motion.div
        initial={{opacity:'0', x:100}}
        whileInView={{opacity:'1', x:0}}
        transition={{...transition , duration:2}}
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="image" />
        <div className="arrwos">
          <img src={leftArrow} alt="leftArrow" onClick={()=>{
            selected===0 ? setSelected(tLength-1) : setSelected((prev)=>prev-1)
          }} />
          <img src={rightArrow} alt="rightArrow" onClick={()=>{
            selected === tLength-1 ? setSelected(0) : setSelected((prev)=>prev+1)
          }} />
        </div>
      </div>
    </div>
  );
}
