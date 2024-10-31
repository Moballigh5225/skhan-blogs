"use client";

import { useRecoilValue } from "recoil";
import { parentState } from "../atoms/parentAtom";
import Image from "next/image";
import SkeletonLoader from "../components/SkeletonLoader";

const Books = () => {
  const { books } = useRecoilValue(parentState);

  return (
    <div className="flex  flex-col justify-start py-4 px-2 md:px-4 lg:px-8">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Increased gap from gap-4 to gap-6 */}
        {books.length === 0
          ? Array.from({ length: 2 }).map((_, index) => (
              <SkeletonLoader key={`skeleton-${index}`} />
            ))
          : books.map((book) => (
              <div
                key={book._id}
                className="flex flex-col books-card-one shadow-md border border-gray-200 p-4 bg-white"
              >
                {/* Image Section */}
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src={book.coverImage.asset.url}
                    alt={book.title}
                    width={120}
                    height={180}
                    className="rounded-lg object-contain"
                  />
                </div>

                {/* Book Details Section */}
                <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                  {book.title}
                </h3>
                {book.author && (
                  <p className="text-gray-600 text-xs md:text-sm mb-2">
                    Author: {book.author.name} {/* Access author's name */}
                  </p>
                )}

                {/* Buy Now Button */}
                <div className="mt-auto flex justify-center">
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-now-button"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Books;
