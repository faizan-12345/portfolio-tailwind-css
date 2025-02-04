"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900 w-full h-20 px-8 flex justify-between items-center shadow-md">
        {/* Brand */}
        <div className="text-3xl text-white font-serif tracking-wide">
          <h2>Portfolio</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About" },
              { href: "/Skills", label: "Skills" },
              { href: "/Contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white font-semibold text-lg uppercase transition-all duration-300 hover:text-yellow-400 hover:-translate-y-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-white text-5xl"
          >
            ✖
          </button>
          <ul className="space-y-6 text-center">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About" },
              { href: "/Skills", label: "Skills" },
              { href: "/Contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-3xl text-white uppercase block py-2 transition-all duration-300 hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
