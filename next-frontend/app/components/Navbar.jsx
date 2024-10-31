"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path;

  // Inline styles for active link
  const activeStyle = {
    borderBottom: "2px solid black",
    paddingBottom: "2px", // Adjust padding for better appearance
  };

  return (
    <nav className="sticky top-0 z-10" style={{ background: "white" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left for smaller screens */}
          <div className="flex-shrink-0 md:hidden">
            <Image
              src="/images/urdualphabet.svg"
              width={40}
              height={40}
              alt="Logo"
              style={{ transform: "rotate(-90deg)" }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mr-auto">
            {[
              "/",
              "/pages/articles",
              "/pages/review",
              "/pages/books",
              "/pages/poetry",
              "/pages/about",
            ].map((path, index) => {
              const linkText =
                path === "/" ? "Home" : path.split("/").pop().replace("-", " ");

              return (
                <Link
                  key={index}
                  href={path}
                  style={isActive(path) ? activeStyle : {}}
                  className="text-gray-800 font-bold transition-transform duration-300 ease-out transform hover:scale-105 border-b-2 border-transparent"
                >
                  {linkText}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo on the right for larger screens */}
          <div className="flex-shrink-0 ml-auto hidden md:block">
            <Image
              src="/images/urdualphabet.svg"
              width={40}
              height={40}
              alt="Logo"
              style={{ transform: "rotate(-90deg)" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "/",
              "/pages/articles",
              "/pages/review",
              "/pages/books",
              "/pages/poetry",
              "/pages/about",
            ].map((path, index) => {
              const linkText =
                path === "/" ? "Home" : path.split("/").pop().replace("-", " ");

              return (
                <Link
                  key={index}
                  href={path}
                  style={isActive(path) ? activeStyle : {}}
                  className="block text-gray-800 font-bold transition-transform duration-300 ease-out transform hover:scale-105 border-b-2 border-transparent px-3 py-2 rounded-md text-base"
                >
                  {linkText}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
