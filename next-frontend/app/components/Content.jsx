"use client";

const ContentSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Discover Our Latest Articles
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            Stay up to date with our latest articles. Explore a wide range of
            topics and gain insights from experts in various fields. Whether
            you're looking for inspiration, tips, or deep dives into industry
            trends, we've got you covered.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">
              Read Articles
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
