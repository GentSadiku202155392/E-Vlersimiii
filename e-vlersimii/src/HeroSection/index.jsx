import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'
import Image from '../cruds/crud-img/Home-Page.svg'
import "./hero.css";
const HeroSection = () => {

const [hover, setHover] =useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer>
        <HeroBg>
        
        <img src={Image} alt="img" className='image' />


        </HeroBg>
        <HeroContent>
            <HeroH1>E-Vlersimii</HeroH1>
            
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave ={onHover}
                primary="true"
                dark="true"
                >
                    Kyqu { hover ? <ArrowForward/> : <ArrowRight/> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection