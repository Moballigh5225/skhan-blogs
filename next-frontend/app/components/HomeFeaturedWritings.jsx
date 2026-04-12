"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";

const getExcerpt = (content) => {
  const text = content?.[0]?.children?.[0]?.text || "";
  return text.length > 110 ? text.substring(0, 110) + "…" : text;
};

const HomeFeaturedWritings = () => {
  const { articles } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);
  const featured = articles.slice(0, 3);

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
        ) : featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <Link
                key={article._id}
                href={`/articles/${article._id}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug group-hover:text-black">
                  {article.title}
                </h3>
                {getExcerpt(article.content) && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {getExcerpt(article.content)}
                  </p>
                )}
                <span className="inline-block mt-5 text-xs uppercase tracking-widest text-gray-300 group-hover:text-gray-500 transition-colors duration-200">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No writings yet.</p>
        )}

        {!loading && articles.length > 3 && (
          <div className="mt-10">
            <Link
              href="/articles"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
            >
              View all writings →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeFeaturedWritings;
