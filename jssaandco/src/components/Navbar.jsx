import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
          : "bg-white py-3 sm:py-4"
      }`}
    >
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <img
            src="/logo_download-new.jpg"
            alt="JSSA And Co. logo"
            className="object-contain w-auto h-8 rounded-md select-none sm:h-10 md:h-12 lg:h-14"
          />
          <h1 className="text-lg font-bold tracking-tight text-blue-900 sm:text-xl md:text-2xl lg:text-3xl">
            JSSA and Co.
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-6 text-sm font-medium md:flex lg:gap-10">
          <Link
            to="/"
            className="relative text-gray-700 transition-colors duration-200 hover:text-blue-700 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative text-gray-700 transition-colors duration-200 hover:text-blue-700 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>

          <Link
            to="/services"
            className="relative text-gray-700 transition-colors duration-200 hover:text-blue-700 group"
          >
              Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="relative text-gray-700 transition-colors duration-200 hover:text-blue-700 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col px-4 py-3 space-y-2 sm:px-6 sm:py-4">
            <Link
              to="/"
              className="py-2 text-gray-700 transition-colors hover:text-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-gray-700 transition-colors hover:text-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="py-2 text-gray-700 transition-colors hover:text-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="py-2 text-gray-700 transition-colors hover:text-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
