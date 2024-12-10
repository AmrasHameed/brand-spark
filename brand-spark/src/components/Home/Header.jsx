import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
  <div
    className={`w-full sticky top-0 z-50 px-14 flex justify-between items-center gap-6 transition-all duration-500 ease-in-out ${
      isScrolled ? "backdrop-blur-lg bg-black/50" : "bg-custom-gradient"
    } shadow-md`}
  >
      <img src={logo} className="w-[75px]" alt="logo" />

      {/* Burger and close icon */}
      <div className="icon-button md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Nav items */}
      <ul
        className={`nav-menu ${isOpen ? "block" : ""} md:flex text-sm gap-10`}
      >
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </>
  );
};

export default Header;