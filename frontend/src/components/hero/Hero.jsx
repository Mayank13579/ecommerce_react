import React from 'react'
import '../hero/Hero.css'
import hero from '../../assets/hero.jpg'
import hand from '../../assets/hand.jpg'
const Hero = () => {
  return (
    
    <div className="hero">
        <div className="hero-left">
        <h2>new arrivals only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
    <div className="hero-latest-btn">
        <div>latest collection</div>
        <img src="" alt="" />
    </div>


        </div>
        <div className="hero-right"></div>
        <img src={hero} alt="" />
    </div>
  )
}

export default Hero