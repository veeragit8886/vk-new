import React from 'react';
import img1 from '/images/team1.jpg';
import img2 from '/images/team2.jpg';
import img3 from '/images/team3.jpg';
import img4 from '/images/team4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';

const MeetTeam = () => {
  const team = [
    { img: img1, name: "Robert R. Simmons", desg: "CEO & Founder",desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime ' },
    { img: img2, name: "Laverne M. Kellems", desg: "IT Consultant",desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime ' },
    { img: img3, name: "Jermaine P. Elkins", desg: "Web Designer",desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime ' },
    { img: img4, name: "David R. Robinson", desg: "Web Designer",desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime ' },
  ];

  return (
    <section className="px-5 md:px-10 lg:px-20 py-16 bg-white text-gray-900">
      <header className="text-center mb-16">
        <h2 className="text-xl font-semibold text-blue-600 uppercase mb-4">Meet Our Team</h2>
        <p className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          We've Exclusive Team Members – Meet Our Professionals
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <motion.article
          initial={{opacity: 0, translateY: "100%"}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration:1}} 
           key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg">
            <figure>
              <img
                src={member.img}
                alt={`${member.name} - ${member.desc}`}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-transparent bg-gradient-to-r from-black to-blue-900 text-white p-4 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm my-2 text-white/80">{member.desg}</p>
                <p className="text-sm my-2 text-white/80">{member.desc}</p>
                <hr className="my-3 border-white/30" />
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex justify-center items-center w-6 h-6 border border-gray-400 rounded-full text-gray-400 hover:bg-orange-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex justify-center items-center w-6 h-6 border border-gray-400 rounded-full text-gray-400 hover:bg-orange-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex justify-center items-center w-6 h-6 border border-gray-400 rounded-full text-gray-400 hover:bg-orange-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex justify-center items-center w-6 h-6 border border-gray-400 rounded-full text-gray-400 hover:bg-orange-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
              </figcaption>
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;
