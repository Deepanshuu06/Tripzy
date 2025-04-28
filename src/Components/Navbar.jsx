import React, { useState } from "react";
import { constants } from "../constants/constant";
import { style } from "../style";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`w-full ${style.paddingX} ${style.primarybgcolor} py-6 flex justify-between items-center fixed top-0 z-50 shadow-lg`}>
      <div>
        <h1 className="text-3xl font-bold text-white cursor-pointer">
          {constants.appName}
        </h1>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <ul className="flex">
          {constants.navItems.map((item, index) => (
            <li key={index} className="inline-block mx-6">
              <a
                href={item.link}
                className="text-white text-lg font-bold hover:text-gray-400">
                <i className={`icon-${item.icon}`}></i> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-800 md:hidden">
          <ul className="flex flex-col items-center py-4">
            {constants.navItems.map((item, index) => (
              <li key={index} className="my-2">
                <a
                  href={item.link}
                  className="text-white text-lg font-bold hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}>
                  <i className={`icon-${item.icon}`}></i> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
