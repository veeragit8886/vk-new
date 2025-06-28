import { useState } from 'react'
import './App.css'
import NavBar from './components/CommonPages/NavBar'
import Footer from './components/CommonPages/Footer'
import HeroSection from './components/Home/HeroSection'
import ItSupport from './components/Home/ItSupport'
import AllServices from './components/Services/AllServices'
import CompanyOffer from './components/Home/CompanyOffer'
import Testimonials from './components/CommonPages/Testimonials'
import AboutUs from './components/About/AboutUs'
import Nav from './components/Nav'
import ConsultationForm from './components/CommonPages/ConsultationForm'
import Clients from './components/CommonPages/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
    <CursorPointer/>
    <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter> */}
        {/* <NavBar/> */}
        {/* <NavBar/> */}
        <Nav/>
        <HeroSection/>
        <ItSupport/>
        <CompanyOffer/>
        <Clients/>
        <AllServices/>
        <Testimonials/>
        <ConsultationForm/>
        <Footer/>
    </>
  )
}

export default App
