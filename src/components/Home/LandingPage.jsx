import React from 'react'
import HeroSection from './HeroSection'
import ItSupport from './ItSupport'
import AllServices from '../Services/AllServices'
import CompanyOffer from './CompanyOffer'
import MeetTeam from './MeetTeam'
import CaseStudies from './CaseStudies'
import Blogs from '../CommonPages/Blogs'
import Testimonials from '../CommonPages/Testimonials'
import AboutUs from '../About/AboutUs'
import NavBar from '../CommonPages/NavBar'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
        <HeroSection/>
        <ItSupport/>
        <CompanyOffer/>
        <AllServices/>
        {/* <MeetTeam/> */}
        {/* <CaseStudies/> */}
        {/* <Blogs/> */}
        <Testimonials/>
        <AboutUs/>
    </div>
  )
}

export default LandingPage