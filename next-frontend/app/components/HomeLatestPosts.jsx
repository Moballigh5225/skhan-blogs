"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";

const MONTH_ORDER = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
};

const formatDate = (day, month, year) => {
  if (!day && !month && !year) return "";
  return [day, month, year].filter(Boolean).join(" ");
};

const getExcerpt = (content) => {
  const text = content?.[0]?.children?.[0]?.text || "";
  return text.length > 90 ? text.substring(0, 90) + "…" : text;
};

const HomeLatestPosts = () => {
  const { articles } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);

  const sorted = [...articles].sort((a, b) => {
    if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
    const bm = MONTH_ORDER[b.month] || 0;
    const am = MONTH_ORDER[a.month] || 0;
    if (bm !== am) return bm - am;
    return (b.day || 0) - (a.day || 0);
  });

  const latest = sorted.slice(0, 3);

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-10">
          Latest Posts
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 animate-pulse">
                <div className="h-3 bg-gray-100 rounded w-1/3 mb-4" />
                <div className="h-5 bg-gray-100 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full" />
              </div>
            ))}
          </div>
        ) : latest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.map((article) => (
              <Link
                key={article._id}
                href={`/articles/${article._id}`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 block"
              >
                {formatDate(article.day, article.month, article.year) && (
                  <p className="text-xs text-gray-300 uppercase tracking-widest mb-3">
                    {formatDate(article.day, article.month, article.year)}
                  </p>
                )}
                <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                {getExcerpt(article.content) && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {getExcerpt(article.content)}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No posts yet.</p>
        )}

        {!loading && articles.length > 3 && (
          <div className="mt-10">
            <Link
              href="/articles"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
            >
              All posts →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeLatestPosts;
