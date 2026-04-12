"use client";
import { useState } from "react";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaMedium } from "react-icons/fa";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/articles", label: "Writings" },
  { path: "/books", label: "Books" },
  { path: "/#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "#", icon: FaYoutube, label: "YouTube" },
  { href: "#", icon: FaLinkedin, label: "LinkedIn" },
  { href: "#", icon: FaMedium, label: "Medium" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire up newsletter service (e.g. Mailchimp, ConvertKit)
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-8 md:pt-20 md:pb-10">

        {/* Top: tagline + newsletter */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-16 border-b border-white/10">

          {/* Tagline */}
          <div className="md:max-w-xs">
            <p className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-white">
              Writing to think.<br />Thinking to write.
            </p>
          </div>

          {/* Newsletter signup */}
          <div className="md:max-w-sm w-full">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Newsletter
            </p>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Occasional essays, book notes, and quiet thoughts — straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address for newsletter"
                className="flex-1 bg-transparent border-b border-white/20 focus:border-white outline-none text-sm text-white placeholder-gray-600 py-2 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-white text-black text-xs font-semibold tracking-widest uppercase px-6 py-2.5 hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
              >
                {submitted ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Middle: nav + social */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 border-b border-white/10">

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Shabbir Alam Khan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
