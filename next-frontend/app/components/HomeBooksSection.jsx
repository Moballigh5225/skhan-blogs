"use client";
import { useRecoilValue } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import Image from "next/image";
import Link from "next/link";

const HomeBooksSection = () => {
  const { books } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);

  if (!loading && books.length === 0) return null;

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">
            Books
          </h2>
          <Link
            href="/books"
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
          >
            View all →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 w-full aspect-[3/4] mb-3 rounded-xl" />
                <div className="h-3 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <Link key={book._id} href="/books" className="group block">
                <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  {book.coverImage?.asset?.url ? (
                    <Image
                      src={book.coverImage.asset.url}
                      alt={book.coverImage.alt || book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border border-gray-200">
                      <span className="text-gray-300 text-xs uppercase tracking-widest">
                        No Cover
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xs text-gray-600 leading-snug group-hover:text-black transition-colors duration-200">
                  {book.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBooksSection;
