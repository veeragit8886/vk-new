import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample images
const person1 = 'https://randomuser.me/api/portraits/men/32.jpg';
const person2 = 'https://randomuser.me/api/portraits/men/44.jpg';
const person3 = 'https://randomuser.me/api/portraits/men/67.jpg';
const brand1 = '/testimonials/001.jpg';
const brand2 = '/testimonials/001 (1).jpg';
const brand3 = '/testimonials/002.jpg';
const brand4 = '/testimonials/brochure.jpg';
const brand5 = '/testimonials/RV Interior Brochure.jpg';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [slidesToShow, setSlidesToShow] = useState(3);

  const tabs = ['All', 'App Development', 'Branding', 'Logos', 'Website'];

  useEffect(() => {
    // Adjust slides to show based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(activeTab === 'Branding' ? 2 : 2);
      } else {
        setSlidesToShow(activeTab === 'Branding' ? 3 : 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: activeTab === 'Branding' ? 2 : 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  const allTestimonials = [
    // Person testimonials
    {
      img: person1,
      name: 'Robert J. Hare',
      position: 'CEO, TechSolutions Inc.',
      desc: 'The mobile app development team delivered beyond our expectations.',
      category: 'App Development',
      rating: 5,
      type: 'person'
    },
    {
      img: person2,
      name: 'David B. Carter',
      position: 'Owner, Carter & Sons',
      desc: 'Clean and modern logo design. Loved it!',
      category: 'Logos',
      rating: 4,
      type: 'person'
    },
    {
      img: person3,
      name: 'Emma R. Lewis',
      position: 'E-commerce Manager',
      desc: 'The website they built is sleek and responsive.',
      category: 'Website',
      rating: 5,
      type: 'person'
    },
    // Branding testimonials
    {
      img: brand1,
      name: 'Sophia L. Moore',
      position: 'Marketing Director',
      desc: 'Brand identity project exceeded expectations.',
      category: 'Branding',
      rating: 5,
      type: 'brand'
    },
    {
      img: brand2,
      name: 'James A. Smith',
      position: 'Founder, Creative Minds',
      desc: 'Creative and cohesive brand visuals!',
      category: 'Branding',
      rating: 4,
      type: 'brand'
    },
    {
      img: brand3,
      name: 'Linda E. Wilson',
      position: 'Product Manager',
      desc: 'Professional branding design and execution.',
      category: 'Branding',
      rating: 5,
      type: 'brand'
    },
    {
      img: brand4,
      name: 'Michael K. White',
      position: 'Sales Director',
      desc: 'Brochure branding was top-notch!',
      category: 'Branding',
      rating: 4,
      type: 'brand'
    },
    {
      img: brand5,
      name: 'Rachel P. Stone',
      position: 'Creative Director',
      desc: 'Impressive branding concept and delivery.',
      category: 'Branding',
      rating: 5,
      type: 'brand'
    }
  ];

  const filteredTestimonials = 
    activeTab === 'All' 
      ? allTestimonials.filter(t => t.type === 'person') // Show only persons initially
      : activeTab === 'Branding'
        ? allTestimonials.filter(t => t.category === 'Branding')
        : allTestimonials.filter(t => t.category === activeTab);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.header>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <div className="slider-container px-4">
          {filteredTestimonials.length > 0 ? (
            <Slider {...settings}>
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/5 p-6 rounded-xl h-full border border-white/10 hover:border-blue-400/50 transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-4">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className={`rounded-full w-full h-full object-cover border-4 ${
                            testimonial.type === 'brand' 
                              ? 'border-blue-400 rounded-lg' 
                              : 'border-blue-600'
                          }`}
                        />
                      </div>
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}>★</span>
                        ))}
                      </div>
                      <blockquote className="text-gray-200 mb-4 italic">
                        "{testimonial.desc}"
                      </blockquote>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-blue-300">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-10 text-gray-400">
              No testimonials found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden md:block`}
      style={{ ...style, right: '-40px' }}
      onClick={onClick}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-blue-600/50 rounded-full hover:bg-blue-600 transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden md:block`}
      style={{ ...style, left: '-40px' }}
      onClick={onClick}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-blue-600/50 rounded-full hover:bg-blue-600 transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;