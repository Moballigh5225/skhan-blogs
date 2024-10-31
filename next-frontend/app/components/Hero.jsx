export default function Hero() {
  return (
    <section className="text-center py-16">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-24 mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold">
        Building digital products, brands, and experiences.
      </h1>
      <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded">
        Latest Posts
      </button>
    </section>
  );
}
