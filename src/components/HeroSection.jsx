import Spline from '@splinetool/react-spline'
import React from 'react'
import SearchBar from './SearchBar'
import WOW from "wow.js";
import "animate.css/animate.min.css";
import { useEffect } from "react"

export default function HeroSection() {
  useEffect(() => {
    new WOW(
{      live: true,
}    ).init();
  }, []);
  return (
    <div className='flex xl:flex-row lg:flex-col md:flex-col xs:flex-col items-center justify-between mt-[60px] ml-10 '>
        <div className='mb-10 wow animate__animated animate__fadeInLeft'>
            <h1  className='bg-primary [text-shadow:0_6px_8px_rgba(50,0,255,0.2)]  py-3 mt-5 bg-clip-text  text-transparent font-bold sm:text-5xl xs:text-2xl'>
            Sharing Knowledge, Building Connections</h1>
            <p className='text-[#555555]  mt-5 lg:text-center xl:text-start xs:text-sm description'>Empower yourself by empowering others - exchange knowledge freely.</p>
            <SearchBar></SearchBar>
        </div>
        <div className="xl:w-[900px] lg:w-[700px] sm:w-full h-[650px] ml-10 sm:block xs:hidden"> 
  <Spline className="w-full h-full wow animate__animated animate__fadeInRight"
       scene="https://prod.spline.design/2u5vbjK93PVckqjD/scene.splinecode" />
       </div>
    </div>
  )
}
