import React from 'react'
import Slider from "react-slick";
import icon1 from '/images/Secondary dark@2x.png'
import icon2 from '/images/Amaya-Primary@2x.png'
import icon3 from '/images/Flat@2x.png'
import icon4 from '/images/Horizontal@2x.png'
import icon5 from '/images/Jobsprint-Vertical@2x.png'
import icon6 from '/images/Oakstone-Horizontal@2x.png'
import icon7 from '/images/Primary@2x.png'
// import icon8 from '/images/digi.jpg'


const Clients = () => {

    const clienticons = [icon1,icon2,icon3,icon4,icon5,icon6,icon7]

     const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="slider-container my-16 py-16 bg-gray-100" id='clients'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Trusted by Our Clients</h2>
        <Slider {...settings}>
          {clienticons.map((icon, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center h-32">
                <img
                  src={icon}
                  alt={`client-${index}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default Clients