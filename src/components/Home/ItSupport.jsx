import React from 'react'
import webimg from '/images/webdev.png'
import appimg from '/images/appdev1.jpg'
import dmimg from '/images/dmimg1.avif'
import brandimg from '/images/brandimg1.png'
import { motion } from 'framer-motion'
import ecom from '/images/ecom1.avif'
import { Link } from 'react-router-dom'


const ItSupport = () => {
const ServicesCards = [
    {
      img: webimg,
      title: 'Web Development',
      alt: 'Web Development Service Image',
      desc: 'Modern, responsive, and SEO-optimized websites that turn visitors into customers—crafted for startups and growing businesses..',
      buttons:' Launch a website that performs.'
    },
    {
      img: appimg,
      title: 'App Development',
      alt: 'App Development Illustration',
      desc: 'We build custom mobile apps for iOS, Android & cross-platform—designed for speed, scalability, and user engagement.',
      buttons:'Let’s build your next big app.'
    },
    {
      img: dmimg,
      title: 'Digital Marketing',
      alt: 'Digital Marketing Strategy Visual',
      desc: 'Data-driven strategies across SEO, Google Ads, social media, and email marketing to grow your visibility and drive qualified leads.',
      buttons:' Boost your brand. Get more leads.'
    },
    {
      img: brandimg,
      title: 'Branding',
      alt: 'Brand Identity Creation',
      desc: 'We help startups and businesses create a powerful first impression with strategic branding. From logo design to brand guidelines, we craft identities that stand out and build trust.',
      buttons:' Build a brand your customers will remember.'
    },
    {
      img: ecom,
      title: 'ECommerce Solutions',
      alt: 'E-commerce Solutions UI Image',
      desc: 'Launch and scale your online store with custom e-commerce solutions built on Shopify, WooCommerce, or fully custom platforms. Designed for speed, security, and sales growth.',
      buttons:'Start selling online—professionally and profitably.'
    },
  ];
  return (
<section className="px-5 md:px-10 lg:px-20 py-16" id='company'>
  <header className="text-center my-10 max-w-2xl mx-auto">
    <h1 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
      Popular Services
    </h1>
    <p className="text-4xl mt-5 font-bold leading-snug">
      How do we work to help you in Startup Business
    </p>
  </header>

  <div className="grid grid-cols-1  gap-6 md:gap-10" id='services'>
    {ServicesCards.map((card, index) => (
      <motion.article
      key={index}
      initial={{opacity: 0, TranslateY: "-100%"}}
                  whileInView={{opacity: 1, TranslateY: 0}}
                  transition={{duration:1.3}}
        className="bg-white grid grid-cols-1 lg:grid-cols-3 rounded-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-x-4 "
      >
        <div className='mx-auto md:mx-0 mb-2'>
        <img src={card.img} alt="" className='rounded-full h-40 flex justify-between items-center ' />
        </div>
        <h2 className="text-2xl font-bold my-2 md:my-4 flex items-center hover:underline">{card.title}</h2>
        
        <div className='flex flex-col items-center'>
          <p className="text-md font-medium my-2 md:my-4 flex items-center text-gray-600 group-hover:text-white transition-colors duration-300">
            {card.desc}
          </p>
          <button className='flex rounded-xl justify-center px-4 py-2 bg-gradient-to-r from-blue-800 to-gray-950 text-white'>
          <a href='#contact' >{card.buttons}</a>
        </button>
        </div>


      </motion.article>

    ))}
  </div>
</section>

  )
}

export default ItSupport