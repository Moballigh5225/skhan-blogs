"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "../components/SkeletonLoader";
import { formatDate } from "../utils/formatDate";

const Articles = () => {
  const { articles } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center text-gray-400">
        <p className="text-lg">No articles yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.map((article) => {
            const formattedDate = formatDate(article.day, article.month, article.year);
            return (
              <article
                key={article._id}
                className="bg-white border border-gray-200 p-4 flex flex-col"
              >
                {article.coverImage && (
                  <div className="flex justify-center mb-4">
                    <Image
                      src={article.coverImage.asset.url}
                      alt={article.coverImage.alt || "Article Cover"}
                      width={120}
                      height={180}
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-sm font-semibold text-black mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mb-1">
                  {article.author.name}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  {formattedDate}
                </p>
                <div className="mt-auto">
                  <Link href={`/articles/${article._id}`}>
                    <span className="buy-now-button inline-flex items-center gap-2">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
