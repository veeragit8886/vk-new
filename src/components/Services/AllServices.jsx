import React from 'react';
import webimg from '/images/ux.webp';
import dmimg from '/images/dmimg.webp';
import ecom from '/images/ux1.webp';
import brandimg from '/images/brandimg.webp';
import appimg from '/images/appdev.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllServices = () => {
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
    <section className="bg-transparent bg-gradient-to-r from-black to-blue-950 text-white" aria-label="All IT Services">
      <div className="px-5 md:px-10 lg:px-20 py-10">
        <header className="text-center my-10 max-w-2xl mx-auto">
          <h1 className="text-lg font-semibold text-blue-200 uppercase tracking-wide">
            IT Support Help
          </h1>
          <h2 className="text-4xl mt-5 font-bold leading-tight">
            How Do We Help You Launch and Grow Your Startup?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Discover our professional services designed to accelerate your startup journey with cutting-edge technology and expert strategy.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesCards.map((service, i) => ( 
            <motion.article
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl p-6 transition-all duration-300 hover:bg-gradient-to-r from-blue-600 to-black/40 origin-bottom hover:shadow-lg hover:-translate-y-4"
            >
              <div className="flex items-start justify-between mb-2  md:mb-4">
                <h3 className="text-2xl font-semibold group-hover:underline">
                  {service.title}
                </h3>
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-16 h-16 object-contain ml-4"
                  loading="lazy"
                />
              </div>
              <p className="text-white/60 group-hover:text-white transition-colors duration-300">
                {service.desc}
              </p>
              <div className='my-3 flex justify-center'>
          <button className='flex rounded-xl justify-center px-4 py-2 bg-gradient-to-r from-blue-800 to-gray-950 text-white'>
          <a href='#contact' >{service.buttons}</a>
        </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
