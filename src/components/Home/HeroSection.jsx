import React, { useEffect, useState } from 'react'
import img from '/images/banner.jpg'
import { IoIosArrowForward } from "react-icons/io";
import dots from '/images/mask-hero.png'


const HeroSection = () => {

  const [number,setNumber1] = useState(1)
  const [number2,setNumber2] = useState(1)

    
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 lg:p-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-3 md:p-10'>
            <div className='font-bold mx-5 mt-10'>  
                <h1 className='text-white text-xl'>5m <sup>+</sup> Trusted Our Clients </h1>
                <p className='text-2xl lg:text-4xl my-5 lg:mt-10 text-white'>Digital Innovation for  <span className='text-blue-700'>Hyderabad Businesses</span></p>
                <p className='text-white font-semibold text-lg'>Growth-focused websites, mobile apps, and brand designs that fuel your success.</p>
                <div className=' mt-2 lg:mt-5 block md:flex md:justify-start md:items-center flex-col lg:flex-row md:space-x-5 lg:space-x-10'>
                    <a href='#contact' className='flex items-center text-white bg-blue-800  p-2 lg:p-4 rounded-2xl'>Get Your Free Strategy Call <IoIosArrowForward />
                    </a>
                    <a href='#services' className='flex mt-2 justify-between items-center text-white'>Explore our Services <IoIosArrowForward /> </a>
                </div>
            </div>
            <div className="relative flex justify-between items-center z-10 overflow-hidden">
  <img src={img} alt="profile" className="rounded-full lg:h-[400px] lg:w-[700px] z-10" />

  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <img
      src={dots}
      alt="moving dots"
      className="mx-auto w-full max-w-[400px] lg:-top-10 relative z-0 marquee-image"
    />
  </div>
</div>

        </div>
    </div>
  )
}

export default HeroSection