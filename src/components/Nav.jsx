import React, { useState,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoimg from '/images/vklogo.png';

function Nav() {
  const [nav, setNav] = useState(false);
  const [scrolled,setScrolled] = useState(false)
  

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <div className={`text-gray-500 h-[80px] z-[999] bg-gray-900 transition-all duration-300 mx-auto flex justify-between md:px-10 lg:px-20 items-center fixed inset-0 ${setScrolled ?'  shadow-xl ': ''}`}>
        <div>
        <img src={logoimg} alt="" className=' h-14 md:h-16' />
        </div>
        <div className=''>
        <ul className="hidden md:flex text-xl text-white font-semibold  ">
        <li className="p-5  hover:text-blue-700">
            <a href="">Home</a>
          </li>
          <li className="p-5 hover:text-blue-700">
            <a href="#services">Services</a>
          </li>
          <li className="p-5 hover:text-blue-700">
            <a href="#Company">Company</a>
          </li>
            <li className="p-5 hover:text-blue-700">
            <a href="#clients">Clients</a>
          </li>
          <li className="p-5 hover:text-blue-700">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        </div>
        <div className='hidden md:block'>

        </div>

        <div onClick={handleNav} className="block md:hidden cursor-pointer mr-4">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

      </div>

      <div
        className={
          nav
            ? 'z-10 fixed h-full left-0 top-0 w-[50%] bg-black text-white ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <div className='flex justify-center items-center my-3'>

        <img src={logoimg} alt="" className=' h-20 md:h-16' />
        </div>
        <ul className="p-8 text-lg">
        <li onClick={closeNav} className="py-2">
            <a href="/">Home</a>
          </li>
          <li onClick={closeNav} className="py-2">
            <a href="#about">About</a>
          </li>
          <li onClick={closeNav} className="py-2">
            <a href="#skills">Services</a>
          </li>

        </ul>
        <div>
            <button className='bg-blue-900 px-4 py-2 text-white rounded-xl ml-5'>Start Now</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
