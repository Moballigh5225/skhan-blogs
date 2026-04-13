"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/articles", label: "Articles" },
  { path: "/review", label: "Book Review" },
  { path: "/books", label: "Books" },
  { path: "/poetry", label: "Poetry" },
  { path: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">

          {/* Desktop nav links — left */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`text-sm transition-colors duration-200 ${
                  isActive(path)
                    ? "text-white border-b border-white pb-0.5"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger — left on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Logo — right */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/urdualphabet.svg"
              width={36}
              height={36}
              alt="Logo"
              style={{ transform: "rotate(-90deg)", filter: "invert(1)" }}
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`py-2.5 text-sm transition-colors duration-200 ${
                  isActive(path)
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
