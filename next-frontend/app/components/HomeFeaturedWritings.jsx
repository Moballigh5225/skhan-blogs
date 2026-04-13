"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";

const getExcerpt = (content) => {
  const text = content?.[0]?.children?.[0]?.text || "";
  return text.length > 110 ? text.substring(0, 110) + "…" : text;
};

const TypeBadge = ({ type }) => (
  <span
    className={`inline-block text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full mb-3 ${
      type === "article"
        ? "bg-black text-white"
        : "bg-gray-100 text-gray-600"
    }`}
  >
    {type === "article" ? "Article" : "Book Review"}
  </span>
);

const HomeFeaturedWritings = () => {
  const { articles, bookReviews } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);

  const combined = [
    ...articles.map((a) => ({ ...a, _type: "article" })),
    ...bookReviews.map((r) => ({ ...r, _type: "review" })),
  ].slice(0, 3);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-10">
          Featured Writings
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-5 bg-gray-100 rounded w-3/4 mb-4" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : combined.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combined.map((item) => {
              const image = item._type === "article" ? item.featuredImage : item.coverImage;
              const href = item._type === "article" ? `/articles/${item._id}` : `/review/${item._id}`;
              return (
                <Link
                  key={item._id}
                  href={href}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                >
                  {image?.asset?.url ? (
                    <div className="relative w-full" style={{ aspectRatio: "1200/630" }}>
                      <Image
                        src={image.asset.url}
                        alt={image.alt || item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full bg-gray-50 flex items-center justify-center" style={{ aspectRatio: "1200/630" }}>
                      <span className="text-gray-200 text-xs uppercase tracking-widest">No Image</span>
                    </div>
                  )}
                  <div className="p-6">
                    <TypeBadge type={item._type} />
                    <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug group-hover:text-black">
                      {item.title}
                    </h3>
                    {getExcerpt(item.content) && (
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {getExcerpt(item.content)}
                      </p>
                    )}
                    <span className="inline-block mt-5 text-xs uppercase tracking-widest text-gray-300 group-hover:text-gray-500 transition-colors duration-200">
                      Read →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="min-h-[180px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl text-center py-12 px-6">
            <p className="text-gray-700 text-base font-medium mb-2">Essays are on their way.</p>
            <p className="text-gray-400 text-sm">
              <a href="#newsletter" className="underline underline-offset-2 hover:text-gray-700 transition-colors duration-200">
                Subscribe below to be notified when the first one drops.
              </a>
            </p>
          </div>
        )}

        {!loading && (articles.length + bookReviews.length) > 3 && (
          <div className="mt-10 flex gap-6">
            <Link
              href="/articles"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
            >
              All articles →
            </Link>
            <Link
              href="/review"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
            >
              All reviews →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeFeaturedWritings;
