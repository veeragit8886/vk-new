import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import CartItems from "../Cart/CartItems";
import logo from "/images/wialogo.png";
import logo1 from "/images/vklogo.png";

const navlist = [
  { list: "Home", path: "/" },
  {
    list: "Company", 
    path: "#company",
    // subList: ["About Company", "Team Member", "Team Details"],
  },
  {
    list: "Services",
    path: "#services",
    // subList: ["Services 01", "Services 02", "Services Details"],
  },
  {
    list: "Clients",
    path: "#Clients",
    // subList: ["Project Grid", "Project Masonary", "Project Slider"],
  },
  { list: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <header className="bg-gray-900 text-white text-lg text-semibold sticky top-0 z-[999] shadow border-b border-b-gray-500">
      <div className="flex justify-between items-center px-4 pt-2 ">
        {/* Logo */}
        <Link to="/">
          <img src={logo1} alt="ValueMart Logo" className="h-16" />
        </Link>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center space-x-3">
          <SearchBar />
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between w-full  items-center ">
          <nav className="flex items-center mx-auto justify-between space-x-6">
            {navlist.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  to={item.path}
                  className="flex items-center font-semibold text-lg gap-1 py-5 hover:text-blue-700"
                >
                  {item.list}
                  {item.subList && <ChevronDown size={16} />}
                </Link>
                {item.subList && (
                  <div className="absolute left-0 top-16 bg-white text-black shadow-lg hidden group-hover:block z-[1000] min-w-max p-4">
                    <div className="flex flex-col gap-2 ">
                      {item.subList.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={`${item.path}/${subItem
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="hover:bg-gray-200 px-2 py-1 text-md rounded"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Icons
          // <div className="flex items-center space-x-4">
          //   {/* <CgProfile size={24} /> */}
             {/* <button onClick={toggleCart}>
             <Menu size={24} />
             </button> */}
           {/* </div>  */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed top-0 left-0 h-screen w-[300px] bg-gray-950 text-white z-[1000] p-5 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src={logo1} alt="Logo White" className="h-8" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          {navlist.map((item, idx) => (
            <div key={idx} className="py-2 border-b border-gray-800">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActiveSubMenu(activeSubMenu === idx ? null : idx)
                }
              >
                <Link to={item.path}>{item.list}</Link>
                {item.subList && (
                  <ChevronDown
                    className={`transition-transform ${
                      activeSubMenu === idx ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                )}
              </div>
              {item.subList && activeSubMenu === idx && (
                <div className="mt-2 pl-4 space-y-1">
                  {item.subList.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={`${item.path}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block text-md hover:text-yellow-300 py-1"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}

      {/* Cart Panel */}
      <CartItems cartOpen={cartOpen} toggleCart={toggleCart} />
    </header>
  );
};

export default NavBar;
