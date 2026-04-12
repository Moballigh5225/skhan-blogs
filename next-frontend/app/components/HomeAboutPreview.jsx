import Link from "next/link";

const HomeAboutPreview = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
          About
        </h2>
        <div className="max-w-2xl">
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Shabbir Alam Khan (Salahuddin Shabbir) is an Indian social thinker,
            writer, and organizational leader associated with Jamaat-e-Islami
            Hind. His work explores how ethical principles drawn from faith can
            guide individuals and communities in an increasingly complex world.
          </p>
          <Link
            href="/about"
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
          >
            Read more →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
