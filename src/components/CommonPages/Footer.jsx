import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo1 from "/images/vklogo.png";

const Footer = () => {
  return (
    <footer className="mt-16 mx-auto px-4 sm:px-8 lg:px-16 pt-16 bg-gradient-to-r from-black to-blue-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <span className="absolute top-2 right-2 opacity-20">
        <svg
          width="93"
          height="93"
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {[...Array(5)].map((_, row) => (
            [...Array(5)].map((_, col) => (
              <circle 
                key={`${row}-${col}`} 
                cx={2.5 + col * 22} 
                cy={2.5 + row * 22} 
                r="2.5" 
                fill="#9ca3af"
              />
            ))
          ))}
        </svg>
      </span>

      {/* Main footer content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* Company info */}
          <div>
            <img src={logo1} alt="VK Innovations Logo" className="h-20 w-auto mb-4" />
            <p className="text-gray-400 font-medium mb-6">
              Our experience brings the right insight, technology and teamwork
              together to create outstanding digital experiences, every time.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: faFacebookF, url: "https://www.facebook.com/share/1HBjqeTJvK/" },
                { icon: faLinkedinIn, url: "https://www.linkedin.com/company/102755699/admin/dashboard/" },
                { icon: faYoutube, url: "https://www.youtube.com/@vkinnovations" },
                { icon: faInstagram, url: "https://www.instagram.com/vk_innovations_?igsh=MWo1Ynl4cjBybDFrcg==" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:bg-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.icon.iconName}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {['Web Development', 'App Development', 'Digital Marketing', 'Branding', 'ECommerce Solutions'].map((service, index) => (
                <li key={index}>
                  <a 
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { name: 'Home', url: '/' },
                { name: 'About Us', url: '/#about' },
                { name: 'Services', url: '/#services' },
                { name: 'Contact', url: '/#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Contact Us</h2>
            <address className="not-italic space-y-2">
              <p>Sri Towers, KPHB 7th Phase</p>
              <p>
                <span className="sr-only">Phone:</span> 7659995858
              </p>
              <p>
                <span className="sr-only">Phone:</span> 9849194727
              </p>
              <p>
                <span className="sr-only">Email:</span>{" "}
                <a href="mailto:info@VKInnovations.in" className="hover:text-white transition-colors duration-200">
                  info@VKInnovations.in
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 relative z-10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VK Innovations. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background circle */}
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 opacity-20"
        aria-hidden="true"
      >
        <circle
          cx="25"
          cy="118"
          r="101"
          stroke="url(#paint0_linear_52:83)"
          strokeWidth="34"
        />
        <defs>
          <linearGradient
            id="paint0_linear_52:83"
            x1="-12.7969"
            y1="-37.3359"
            x2="99.2109"
            y2="173.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;