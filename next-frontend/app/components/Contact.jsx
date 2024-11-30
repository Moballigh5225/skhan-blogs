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

    // Set your EmailJS userID, serviceID, and templateID
    const serviceID = "your_service_id"; // Replace with your service ID
    const templateID = "your_template_id"; // Replace with your template ID
    const userID = "your_user_id"; // Replace with your user ID

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (response) => {
        setStatus("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        setStatus("Error Sending Message. Please Try Again.");
      }
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Have any questions or feedback? Feel free to reach out via email or
          fill out the form below, and we'll get back to you as soon as
          possible.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </div>

          {/* Status Message */}
          {status && <p className="mt-4 text-gray-800">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
