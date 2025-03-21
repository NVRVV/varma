import React, { useState } from 'react';
import './Header.css';
import { RiMenuFoldLine , RiMenuFold2Line } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-header text-primary px-2 py-3 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl px-2 md:text-4xl font-bold">
          <a href="#home">Varma <span className="text-secondary">Namepalli</span></a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden px-2 md:flex">
          <ul className="flex space-x-6">
            <li><a id='nav' href="#home" className="text-3xl lg:text-4xl p-3">Home</a></li>
            <li><a id='nav' href="#about" className="text-3xl lg:text-4xl p-3">About</a></li>
            <li><a id='nav' href="#projects" className="text-3xl lg:text-4xl p-3">Projects</a></li>
            <li><a id='nav'href="#education" className="text-3xl lg:text-4xl p-3">Education</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <RiMenuFold2Line/> : <RiMenuFoldLine/>}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full backdrop-blur-md bg-header/30 rounded-lg">
        <ul className="flex flex-col items-end pr-10 space-y-4 py-4">
          <li>
            <a 
              href="#home" 
              className="text-2xl p-5 relative "
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-2xl p-5 relative "
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-2xl p-5 relative "
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className="text-2xl p-5 relative "
              onClick={toggleMenu}
            >
              Education
            </a>
          </li>
        </ul>
      </nav>      
      )}
    </header>
  );
};

export default Header;
