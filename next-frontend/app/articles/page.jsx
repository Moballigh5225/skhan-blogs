"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "../components/SkeletonLoader";

const Articles = () => {
  const { articles } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);

  const Loader = () => (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto flex flex-col justify-start py-4 px-2 md:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create a SkeletonLoader for each article */}
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto flex flex-col justify-start py-4 px-2 md:px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => {
          // Construct the published date
          const monthMapping = {
            January: 0,
            February: 1,
            March: 2,
            April: 3,
            May: 4,
            June: 5,
            July: 6,
            August: 7,
            September: 8,
            October: 9,
            November: 10,
            December: 11,
          };

          const { day, month, year } = article;
          const dateObject = new Date(year, monthMapping[month], day);
          const formattedDate = dateObject.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <article
              key={article._id}
              className="article shadow-lg p-4 bg-white border border-gray-200"
            >
              {article.coverImage && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={article.coverImage.asset.url}
                    alt={article.coverImage.alt || "Article Cover"}
                    width={120}
                    height={180}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-center mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-center text-gray-600 mb-1">
                <span className="font-bold">Author:</span> {article.author.name}
              </p>
              <p className="text-sm text-center text-gray-600 mb-1">
                <span className="font-bold">Published Date:</span>{" "}
                {formattedDate}
              </p>
              <Link href={`/articles/${article._id}`}>
                <span className="buy-now-button inline-flex items-center text-black hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded mt-4">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="1em"
                    height="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
