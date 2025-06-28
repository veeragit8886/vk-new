import React, { useState , useEffect } from 'react'
import img from '/images/offerbanner.png'
import { useInstantTransition } from 'framer-motion'

const CompanyOffer = () => {

  const [number, setNumber] = useState(1);
  const [projectNumber, setProjectNumber] = useState(1);
  const [Teammember,setTeamMember] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prev => {
        if (prev < 450) return prev + 1;
        return prev;
      });

      setProjectNumber(prev => {
        if (prev < 642) return prev + 1;
        return prev;
      });

      setTeamMember(prev =>{
        if(prev<100) return prev + 1;
        return prev;
      })
    }, 50); // adjust the speed here (50ms)

    // clear the interval when both limits are reached
    if (number >= 451 && projectNumber >= 643) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [number, projectNumber]);

  return (

    <section className="bg-gradient-to-r from-black to-blue-950 text-white" id='Company'>
    <div className="px-5 md:px-10 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <header>
            <h2 className="text-lg font-semibold text-orange-300 uppercase tracking-wider mb-4">
              Our Company Offer
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Startups. <br className="hidden md:block" />  Delivering Success.
            </h1>
          </header>
  
          <p className="mb-10 text-white/80 leading-relaxed">
            At VK Innovations, we help startups and growing businesses turn bold ideas into scalable digital solutions. From branding and websites to powerful apps and result-driven marketing, we bring your vision to life with precision and creativity.
          </p>
  
          <hr className="border-white/30 my-10" />
  
          {/* Stats Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <article>
              <h3 className="text-lg font-semibold mb-2">Innovative Solution Created</h3>
              <p className="text-5xl font-bold text-orange-300 mb-2">{number}+</p>
              {/* <p className="text-white/70">IT Solutions that drive business success in the digital age.</p> */}
            </article>
  
            <article>
              <h3 className="text-lg font-semibold mb-2">Revolutionary Ideas Executed</h3>
              <p className="text-5xl font-bold text-orange-300 mb-2">{projectNumber}+</p>
              {/* <p className="text-white/70">Empowering your potential with scalable digital transformation.</p> */}
            </article>
                        <article>
              <h3 className="text-lg font-semibold mb-2">Expert Team Members</h3>
              <p className="text-5xl font-bold text-orange-300 mb-2">{Teammember}+</p>
              {/* <p className="text-white/70">Empowering your potential with scalable digital transformation.</p> */}
            </article>
          </div>
        </div>
  
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Startup success illustration"
            className="max-h-[600px] w-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default CompanyOffer