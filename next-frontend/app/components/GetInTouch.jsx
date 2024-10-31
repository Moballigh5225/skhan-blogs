"use client";

import { useState } from "react";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulating form submission
    setStatus("Your message has been sent!");

    // Reset the form
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-100 py-8 px-4 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </div>

        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </form>
    </div>
  );
};

export default GetInTouch;
