"use client";

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Stay Updated with Our Latest Posts
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter to receive updates on new blog posts,
          tips, and insights directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <form
          action="#"
          method="POST"
          className="flex justify-center gap-4 items-center mx-auto max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 w-72 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
