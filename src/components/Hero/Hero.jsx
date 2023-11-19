import React from 'react'
import './Hero.css'
import Header from'../Header/Header'
import hero_image from "../../assets.bak/hero_image.png"
import hero_image_back from "../../assets.bak/hero_image_back.png"
import Heart from "../../assets.bak/heart.png"
import Calories from "../../assets.bak/calories.png"
import "../../App.css"
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">

      <div className="blur hero-blur"></div>
       <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? "165px" : '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>The Best Fight Club in Town</span>
        </div>


        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Pelea</span>
            <span> por Superar</span>
          </div>
          <div>
            <span>Tus Limites</span>
          </div>
            <div>
              <span>
                Con nosotros aprenderas a superar tus limites y alcanzar tus metas
              </span>
            </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={10} start={0} delay='1' preFix="+" />
            </span>
            <span> coaches expertos</span>
          </div>
          <div>
            <span>
            <NumberCounter end={150} start={0} delay='3' preFix="+" />
            </span>
            <span> miembros activos</span>
            </div>
          <div>
            <span>
            <NumberCounter end={10} start={0} delay='1' preFix="+" />
            </span>
            <span> programas de entrenamiento</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Registrate</buttons>
          <buttons className="btn">Mas informacion</buttons>
        </div>
       </div>
       <div className="right-h">
        <button className="btn">Registrate</button>

          <motion.div className="heart-rate"
            initial={{ right: "-1rem"}}
            whileInView={{ right: "4rem"}}
            transition={{transition}}
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
        
          <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={{transition}}
            src={hero_image_back} 
            alt="" className="hero-image-back"/>

          {/* calories */}
          <motion.div 
          initial={{ right: "37rem"}}
          whileInView={{ right: "28rem"}}
          transition={{transition}}
          className="calories"
          >
          <img src={Calories} alt="" />
            <div>
              <span>Calorias quemadas</span>
              <span>200 kcal</span>
            </div>
          </motion.div>
       </div>
    </div>
  )
}

export default Hero