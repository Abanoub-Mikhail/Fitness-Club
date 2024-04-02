import React, { useEffect, useState } from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

export default function Hero() {
    const transition = {type:'spring' , duration : 3}
    const mobile = window.innerWidth<=768? true : false ;

    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

  return (
    <div className="hero" id='home'>
         {isVisible && (
        <button className={`scroll-top ${isVisible? 'visible' : ''} `} onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile?'160px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition , type:'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix='+' />
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span> <NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span> <NumberCounter end={20} start={0} delay='2' preFix='+' /></span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </div>
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={heart} alt="heart" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="hero image" className='hero_image' />
            <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition}
            src={hero_image_back} alt="hero image black" className='hero_image_black' />

            <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={calories} alt="calories" />
                <div>
                <span>Calories burned</span><span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
