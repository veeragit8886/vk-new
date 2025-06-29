import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('All');

  const imageData = {
    'All': [
      { img: '/images/Secondary dark@2x.png' },
      { img: '/testimonials/001.jpg' },
      { img: '/images/Primary@2x.png' },
      { img: '/images/Flat@2x.png' },
      { img: '/images/Jobsprint-Vertical@2x.png' }
    ],
    'Branding': [
      { img: '/testimonials/001.jpg' },
      { img: '/testimonials/001 (1).jpg' },
      { img: '/testimonials/002.jpg' },
      { img: '/testimonials/brochure.jpg' },
      { img: '/testimonials/RV Interior Brochure.jpg' }
    ],
    'Website': [
      { img: '/images/website1.jpg' },
      { img: '/images/website2.jpg' },
      { img: '/images/website3.jpg' },
      { img: '/images/website4.jpg' },
      { img: '/images/website5.jpg' }
    ],
    'Logos': [
      { img: '/images/Secondary dark@2x.png' },
      { img: 'images/Amaya-Primary@2x.png' },
      { img: '/images/Flat@2x.png' },
      { img: '/images/Horizontal@2x.png' },
      { img: '/images/Primary@2x.png' }
    ],
    'App': [
      { img: '/images/app1.jpg' },
      { img: '/images/app2.jpg' },
      { img: '/images/app3.jpg' },
      { img: '/images/app4.jpg' },
      { img: '/images/app5.jpg' }
    ]
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const tabs = ['All', 'Branding', 'Website', 'Logos', 'App'];

  return (
    <section className="bg-gradient-to-r from-black to-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our <span className="text-blue-500">Work</span>
          </h2>
        </header>

        <div className="flex justify-center mb-6 flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm rounded-full transition-colors ${activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="px-2">
          <Slider {...settings}>
            {imageData[activeTab].map((x, i) => (
              <div key={i} className="px-2 focus:outline-none">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all h-60"> {/* Reduced height */}
                  <div className="h-full overflow-hidden rounded-lg">
                    <img
                      src={x.img}
                      alt=""
                      className={`w-full h-full hover:scale-105 transition-transform duration-300 ${
                        activeTab === 'Logos'
                          ? 'object-contain max-h-40 p-4'
                          : 'object-cover h-full'
                      }`}
                    />


                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;