"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "../components/SkeletonLoader";

const Review = () => {
  const { bookReviews } = useRecoilValue(parentState);
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
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!bookReviews || bookReviews.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto flex flex-col justify-start py-4 px-2 md:px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bookReviews.map((bookReview) => (
          <article
            key={bookReview._id}
            className="article shadow-lg bg-white border border-gray-200 p-4 mx-2 md:mx-4 lg:mx-0"
          >
            {bookReview.coverImage && (
              <div className="flex justify-center mb-4">
                <Image
                  src={bookReview.coverImage.asset.url}
                  alt={bookReview.coverImage.alt || "Book Cover"}
                  width={120}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">
              {" "}
              {/* Changed color to golden */}
              {bookReview.title}
            </h3>
            <p className="text-sm flex items-center text-gray-600 mb-1">
              <span className="font-bold">Author:</span> {bookReview.author}
            </p>
            {bookReview.reviewedBy && (
              <p className="text-sm flex items-center text-gray-600 mb-2">
                <span className="font-bold">Reviewed By:</span>{" "}
                {bookReview.reviewedBy.name}
              </p>
            )}
            <div className="flex justify-between items-center mt-4">
              <div className="flex-1"></div>
              <Link href={`/review/${bookReview._id}`}>
                <span className="buy-now-button inline-flex items-center text-black hover:bg-gray-800 transition-colors duration-300 px-4 py-2 rounded">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon ml-2 hidden md:inline"
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Review;
