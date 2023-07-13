import React from 'react'
import './Hero.css';
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion';
import NumbersCounter from 'number-counter'



const hero = () => {
    const transition = {type: 'spring' , duration :3}
    return (
        <div className='Hero' id='Home'  >
            <div className="blur blur-h"></div>
            <div className='left-h'>

                <Header />
        {/* best add */}

            <div className="the-best-ad">
                <motion.div
                initial = {{left : '180px'}}
                whileInView={{left : '8px'}}
                transition={{...transition , type : 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>


        <div className='hero-text'>
            <div>
            <span className='stroke-text'>shape </span>
            <span>Your</span>
            </div>
        <div>
            <span>ideal daily</span>
            
        </div>
        <div>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rerum! Lorem ipsum dolor sit amet.
            </span>
        </div>
        </div>

{/* floating tag */}

<div className="figures">
    <div>
        <span>
        <NumbersCounter end ={140} start={100} delay='4' preFix='+'/>
        </span>
        <span>expert coaches</span>
        </div>
    
    <div>
        <span>
        <NumbersCounter end ={978} start={800} delay='4' preFix='+'/>
        </span>
        <span>members joins</span>
        </div>
    
    <div>
        <span>
        <NumbersCounter end ={50} start={0} delay='4' preFix='+'/>
        </span>
        <span>fitness programs</span>
        </div>
    
    
</div>

{/* hero butn */}

        <div className="hero-btn">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>


            </div>

            <div className='right-h'>
            <button className="btn">Join Now</button>
                
                <motion.div className="heart-rate"
                initial = {{right: '-1rem'}}
                whileInView={{right : '4rem'}}
                transition={transition}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>


            <div className="hero-image">
                <motion.img  
                initial = {{right:'15rem'}}
                whileInView={{right:'8rem'}}
                transition={transition}
                src={hero_image} alt="" className='hero_image'/>
                <motion.img 
                
                initial = {{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                src={hero_image_back} alt=""  className='hero_image_back'/>
            </div>

            <motion.div 
            initial = {{right : '37rem'}}
            whileInView={{right : '28rem'}}
            transition={transition}
            
            className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>
                <NumbersCounter end ={220} start={170} delay='4' preFix='kcal'/>
                </span>
                </div>
            </motion.div>


            </div>
        </div>
    )
}

export default hero
