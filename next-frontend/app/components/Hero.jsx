import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-h1  { animation: heroFadeUp 0.4s ease-out 0ms   both; }
        .hero-sub { animation: heroFadeUp 0.4s ease-out 100ms both; }
        .hero-cta { animation: heroFadeUp 0.4s ease-out 200ms both; }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="hero-h1 text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Writing on faith,<br />thought, and memory.
          </h1>
          <p className="hero-sub text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            Essays, poetry, and reflections by Shabbir Alam Khan.
          </p>
          <div className="hero-cta flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="inline-block bg-white text-black text-xs font-semibold tracking-widest uppercase px-8 py-3 hover:bg-gray-200 transition-colors duration-200"
            >
              Read Writings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
