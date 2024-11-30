"use client";

const FeaturedPosts = () => {
  // Sample blog posts data
  const posts = [
    {
      title: "How to Start a Blog in 2024",
      description:
        "A step-by-step guide for beginners to start a blog in 2024. Learn about choosing the right platform, setting up, and writing your first post.",
      image: "/images/post1.jpg",
      link: "/posts/how-to-start-a-blog",
    },
    {
      title: "The Importance of SEO for Blogs",
      description:
        "Understanding the basics of SEO and how to optimize your blog for better visibility on search engines.",
      image: "/images/post2.jpg",
      link: "/posts/importance-of-seo",
    },
    {
      title: "10 Tips for Writing Engaging Content",
      description:
        "Learn how to write blog posts that captivate your readers. These 10 tips will help you engage your audience and increase traffic.",
      image: "/images/post3.jpg",
      link: "/posts/10-tips-for-writing",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-8">
          Featured Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8">
          <a
            href="/posts"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
