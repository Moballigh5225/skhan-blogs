"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // New function to handle link click and close the menu
  const handleLinkClick = (path) => {
    setIsOpen(false); // Close the menu
    router.push(path); // Navigate to the path
  };

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  // Inline styles for active link
  const activeStyle = {
    borderBottom: "2px solid black",
    paddingBottom: "2px", // Adjust padding for better appearance
  };

  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className="sticky top-0 z-10" style={{ background: "white" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Home link for smaller screens */}
          <div className="flex-shrink-0 md:hidden">
            <Link href="/" passHref>
              <Image
                src="/images/urdualphabet.svg"
                width={40}
                height={40}
                alt="Logo"
                style={{ transform: "rotate(-90deg)" }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mr-auto">
            {["/", "/articles", "/review", "/books", "/poetry", "/about"].map(
              (path, index) => {
                const linkText =
                  path === "/"
                    ? "Home"
                    : path === "/review"
                      ? "Book Review" // Set custom text for /review
                      : capitalizeFirstLetter(
                          path.split("/").pop().replace("-", " ")
                        );

                return (
                  <Link
                    key={index}
                    href={path}
                    style={isActive(path) ? activeStyle : {}}
                    className="text-gray-800 font-bold transition-transform duration-300 ease-out transform hover:scale-105 border-b-2 border-transparent"
                    onClick={() => handleLinkClick(path)} // Use new handler
                  >
                    {linkText}
                  </Link>
                );
              }
            )}
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

          {/* Logo with Home link for larger screens */}
          <div className="flex-shrink-0 ml-auto hidden md:block cursor-pointer">
            <Link href="/" passHref>
              <Image
                src="/images/urdualphabet.svg"
                width={40}
                height={40}
                alt="Logo"
                style={{ transform: "rotate(-90deg)" }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["/", "/articles", "/review", "/books", "/poetry", "/about"].map(
              (path, index) => {
                const linkText =
                  path === "/"
                    ? "Home"
                    : path === "/review"
                      ? "Book Review" // Set custom text for /review
                      : capitalizeFirstLetter(
                          path.split("/").pop().replace("-", " ")
                        );

                return (
                  <Link
                    key={index}
                    href={path}
                    style={isActive(path) ? activeStyle : {}}
                    className="block text-gray-800 font-bold transition-transform duration-300 ease-out transform hover:scale-105 border-b-2 border-transparent px-3 py-2 rounded-md text-base"
                    onClick={() => handleLinkClick(path)} // Use new handler
                  >
                    {linkText}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
