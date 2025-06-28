import React from 'react';
import img1 from '/images/blog1.jpg';
import img2 from '/images/blog2.jpg';
import img3 from '/images/blog3.jpg';
import { LuArrowUpRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

const Blogs = () => {
  const studies = [
    {
      img: img1,
      title: 'Product Design',
      desc: 'IT Service Case Studies Accelerating Business Fly Success Tech',
      button: 'Read More',
    },
    {
      img: img2,
      title: 'Cloud Solutions',
      desc: 'Transforming infrastructure with scalable tech deployments',
      button: 'Read More',
    },
    {
      img: img3,
      title: 'App Development',
      desc: 'End-to-end mobile and web application design success stories',
      button: 'Read More',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black to-blue-950 text-white py-16">
      <div className="px-5 md:px-10 lg:px-20">
        <header className="md:flex justify-between items-center mb-12">
          <div>
            <p className="text-blue-500 font-semibold">Latest News & Blog</p>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">
              Upcoming News & <span className="text-blue-600">Blog</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-6 py-3 rounded-2xl font-medium"
              aria-label="View All News"
            >
              View All News
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {studies.map((x, i) => (
            <motion.article
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            key={i}
             className="relative group rounded-xl overflow-hidden shadow-lg text-gray-900 transition-transform hover:-translate-y-2">
              <img
                src={x.img}
                alt={`${x.title} blog cover`}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <p className="text-blue-700 text-md font-semibold mb-2">{x.title}</p>
                <h3 className="text-xl text-white font-bold mb-3 group-hover:underline">{x.desc}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">{x.button}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-700 text-white p-2 rounded-full">
                    <LuArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-center px-3 py-1 rounded-md shadow-lg">
                <p className="text-lg font-bold leading-none">25</p>
                <p className="text-sm leading-none">Dec</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
