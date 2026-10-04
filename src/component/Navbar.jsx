import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-6 pt-6">
        <div
          className="
          mx-auto
    flex
    h-20
    max-w-350
    items-center
    justify-between
    rounded-full
    border
    border-white/30
    bg-black/20
    px-8
    backdrop-blur-sm
        "
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5">
              <span className="h-2 w-2 bg-[#136bc2]"></span>
              <span className="h-2 w-2 bg-[#136bc2]"></span>
              <span className="h-2 w-2 bg-[#136bc2]"></span>
              <span className="h-2 w-2 bg-[#136bc2]"></span>
            </div>

            <span className="text-2xl font-medium text-white">Consulting</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className="text-white/90 transition hover:text-white"
            >
              Home
            </NavLink>

            <NavLink
              to="/About"
              className="text-white/90 transition hover:text-white"
            >
              About
            </NavLink>

            <NavLink
              to="/Services"
              className="text-white/90 transition hover:text-white"
            >
              Services
            </NavLink>

            <NavLink
              to="/Blogs"
              className="text-white/90 transition hover:text-white"
            >
              Blog
            </NavLink>

            {/* Contact Button */}
            <NavLink
              to="/contact"
              className="
              rounded-full
              border
              border-white/60
              px-7
              py-3
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
            <span className="h-0.5 w-7 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mx-4 mt-2 rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-white">
                Home
              </NavLink>

              <NavLink to="/About" className="text-white">
                About
              </NavLink>

              <NavLink to="/Services" className="text-white">
                Services
              </NavLink>

              <NavLink to="/Blog" className="text-white">
                Blog
              </NavLink>

              <NavLink
                to="/Contact"
                className="w-fit rounded-full border border-white/50 px-6 py-3 text-white hover:-bg-conic-90[#136bc2]:"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
