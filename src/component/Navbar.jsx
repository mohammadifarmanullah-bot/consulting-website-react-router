
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/", end: true },
  { name: "About", path: "/About" },
  { name: "Services", path: "/Services" },
  { name: "Blog", path: "/Blogs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Shared styles for active and inactive links
  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300
    ${
      isActive
        ? "text-[#136bc2] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#136bc2]"
        : "text-white/80 hover:text-white"
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6">
      <div className="mx-auto flex h-20 max-w-350 items-center justify-between rounded-full border border-white/20 bg-black/30 px-5 backdrop-blur-xl sm:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Consulting home"
        >
          <div className="grid grid-cols-2 gap-1">
            {[1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="h-2.5 w-2.5 rounded-sm bg-[#136bc2]"
              />
            ))}
          </div>

          <span className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Consulting
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Contact button */}
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-[#136bc2] bg-[#136bc2] text-white"
                  : "border-white/40 text-white hover:border-white hover:bg-white hover:text-black"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 transition hover:bg-white/10 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`mx-2 mt-3 overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/95 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 translate-y-0 p-5 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 border-transparent p-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#136bc2]/15 text-[#55a5f5]"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/Contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className={({ isActive }) =>
              `mt-1 rounded-full border px-5 py-3 text-center text-sm font-medium transition ${
                isActive
                  ? "border-[#136bc2] bg-[#136bc2] text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;