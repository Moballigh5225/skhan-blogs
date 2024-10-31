"use client"; // Since this is a client component

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { parentState } from "../../../atoms/parentAtom"; // Adjust the import as necessary
import Image from "next/image";
import Link from "next/link";

const ReviewDetailPage = ({ params }) => {
  const { id } = params; // Get the dynamic id from params
  const { bookReviews } = useRecoilValue(parentState); // Destructure bookReviews from parentState
  const [review, setReview] = useState(null); // State to hold the current review

  useEffect(() => {
    if (id && Array.isArray(bookReviews)) {
      const foundReview = bookReviews.find((review) => review._id === id);
      setReview(foundReview);
    }
  }, [id, bookReviews]);
  const Loader = () => (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
    </div>
  );
  // Optional: Show a loading state while waiting for data
  if (!review) {
    return <Loader />;
  }

  const {
    title,
    author,
    edition,
    publishedBy,
    reviewedBy,
    totalPages,
    content,
  } = review;

  // Function to shuffle the reviews
  const shuffleReviews = (reviews) => {
    for (let i = reviews.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
    }
    return reviews;
  };

  // Get 4 random book reviews (excluding the current review)
  const randomReviews = shuffleReviews(
    bookReviews.filter((r) => r._id !== id)
  ).slice(0, 3);

  return (
    <div className="container mx-auto py-4 px-2 md:px-4 lg:px-8">
      {/* Back Button - Hidden on mobile view */}
      <Link href="/pages/review" className=" mb-4">
        <span className="hidden buy-now-button md:inline-flex items-center text-white   transition-colors duration-300 px-4 py-2 rounded mt-4">
          ← Back
        </span>
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      <div className="space-y-2">
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Edition:</strong> {edition}
        </p>
        <p>
          <strong>Published By:</strong> {publishedBy}
        </p>
        <p>
          <strong>Reviewed By:</strong> {reviewedBy.name}
        </p>
        <p>
          <strong>Total Pages:</strong> {totalPages}
        </p>
      </div>

      <div className="mt-4">
        {content.map((block) => {
          const { _key, children } = block;
          return (
            <div key={_key} className="mb-2">
              {children.map((child, index) => {
                const { text, marks } = child;
                const isBold = marks.includes("strong");
                return (
                  <span key={index} className={isBold ? "font-bold" : ""}>
                    {text}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Other Book Reviews Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4 hidden md:block">
        Other Reviews
      </h2>
      {randomReviews.length > 0 ? (
        <div className="articles grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 hidden md:grid">
          {randomReviews.map((bookReview) => (
            <article key={bookReview._id} className="article">
              <div className="article-wrapper">
                {bookReview.coverImage && (
                  <figure>
                    <Image
                      src={bookReview.coverImage.asset.url}
                      alt={bookReview.coverImage.alt || "Book Cover"}
                      width={320} // Adjust the width according to your design
                      height={180} // Adjust the height according to your design
                      className="object-cover" // Ensure proper image sizing
                    />
                  </figure>
                )}
                <div className="article-body">
                  <h2 className="text-lg font-semibold">{bookReview.title}</h2>
                  <p className="text-sm text-gray-600 mb-1">
                    Author: {bookReview.author}
                  </p>
                  {bookReview.reviewedBy && (
                    <p className="text-sm text-gray-600 mb-2">
                      Reviewed By: {bookReview.reviewedBy.name}
                    </p>
                  )}
                  <Link
                    href={`/pages/review/${bookReview._id}`}
                    className="read-more"
                  >
                    Read More
                    <span className="sr-only"> about {bookReview.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No other reviews available.</p> // Message when there are no other reviews
      )}

      <style jsx>{`
        .container {
          width: 100%; /* Default width to 100% */
        }
        @media (min-width: 1280px) {
          .container {
          }
        }
        h1 {
          text-align: center; /* Center the title */
        }
        p {
          text-align: justify; /* Justify the text for equal length on the right */
        }
        .back-button {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: #fff; /* Change text color to white */
          background-color: black; /* Set background color to black */
          padding: 10px 15px;
          border-radius: 5px;
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
          margin-bottom: 20px; /* Add margin below the button */
        }
        .back-button:hover {
          background-color: #333; /* Change background on hover */
          transform: scale(1.05); /* Scale effect on hover */
        }
      `}</style>
    </div>
  );
};

export default ReviewDetailPage;
