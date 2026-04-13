import Link from "next/link";

const HomeAboutPreview = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
          About
        </h2>
        <div className="max-w-2xl">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
            {/* Replace with <img> when photo is available */}
            <div
              className="flex-shrink-0 mx-auto sm:mx-0 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-xl font-semibold text-gray-500 select-none">SK</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed pt-1">
              Shabbir Alam Khan (Salahuddin Shabbir) is an Indian social thinker,
              writer, and organizational leader associated with Jamaat-e-Islami
              Hind. His work explores how ethical principles drawn from faith can
              guide individuals and communities in an increasingly complex world.
            </p>
          </div>
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
