"use client";
import { useRecoilValue } from "recoil";
import { parentState } from "../atoms/parentAtom";
import Image from "next/image";
import SkeletonLoader from "../components/SkeletonLoader";

const Books = () => {
  const { books } = useRecoilValue(parentState);

  if (books.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white border border-gray-200 p-4 flex flex-col"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={book.coverImage.asset.url}
                  alt={book.title}
                  width={120}
                  height={180}
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold text-black mb-1 leading-snug">
                {book.title}
              </h3>
              {book.author && (
                <p className="text-xs text-gray-500 mb-4">
                  {book.author.name}
                </p>
              )}

              <div className="mt-auto">
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-now-button inline-block"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
