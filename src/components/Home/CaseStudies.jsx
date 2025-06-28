import React from 'react';
import Slider from 'react-slick';
import img1 from '/images/case1.jpg';
import img2 from '/images/case2.jpg';
import img3 from '/images/case3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LuArrowUpRight } from "react-icons/lu";

const CaseStudies = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const studies = [
    {
      img: img1,
      title: 'Professional Web Design',
      desc: 'Web Design & Development',
    },
    {
      img: img2,
      title: 'Travels & Tours Mobile Design',
      desc: 'Mobile App Design',
    },
    {
      img: img3,
      title: 'Creative Web Application',
      desc: 'Full-stack Development',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black to-blue-950 py-16 text-white">
      <header className="text-center mb-12 px-4">
        <p className="text-blue-600 font-semibold text-lg">Latest Case Studies</p>
        <h2 className="text-3xl lg:text-5xl font-bold mt-4">
          Let’s Explore Our Latest Case <span className="text-blue-500">Studies</span>
        </h2>
      </header>

      <div className="slider-container px-4 md:px-10 lg:px-20 overflow-hidden">
        <Slider {...settings}>
          {studies.map((study, index) => (
            <article key={index} className="px-2">
              <div className="group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-white/5">
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-full h-56 md:h-72 object-cover rounded-t-xl"
                />
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:underline text-white">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-400">{study.desc}</p>
                  </div>
                  <div className=" group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-full p-2 group-hover:bg-blue-700">
                    <LuArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudies;
