"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      () => {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      () => {
        setStatus("Failed to send. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-md">
          Have a question or want to collaborate? Fill out the form and
          we&apos;ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none text-sm text-white placeholder-gray-600 py-2 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none text-sm text-white placeholder-gray-600 py-2 transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none text-sm text-white placeholder-gray-600 py-2 transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none text-sm text-white placeholder-gray-600 py-2 transition-colors duration-200 resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-white text-black text-xs font-semibold tracking-widest uppercase px-8 py-3 hover:bg-gray-200 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>

          {status && (
            <p className="text-sm text-gray-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
