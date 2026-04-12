"use client";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up newsletter service
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Stay Updated
        </h2>
        <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
          New essays, book notes, and quiet thoughts — straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            aria-label="Email address"
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
    </section>
  );
};

export default NewsletterSignup;
