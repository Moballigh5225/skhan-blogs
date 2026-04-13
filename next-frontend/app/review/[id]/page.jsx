"use client";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { parentState } from "../../atoms/parentAtom";
import Image from "next/image";
import Link from "next/link";

const ReviewDetailPage = ({ params }) => {
  const { id } = params;
  const { bookReviews } = useRecoilValue(parentState);
  const [review, setReview] = useState(null);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (id && Array.isArray(bookReviews)) {
      const found = bookReviews.find((r) => r._id === id);
      setReview(found);
    }
  }, [id, bookReviews]);

  if (!review) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black" />
      </div>
    );
  }

  const { title, titleUrdu, author, edition, publishedBy, reviewedBy, totalPages, content, contentUrdu, coverImage } = review;

  const hasUrdu = !!(titleUrdu || (contentUrdu && contentUrdu.length > 0));
  const isUrdu = lang === "ur";

  const displayTitle = isUrdu && titleUrdu ? titleUrdu : title;
  const displayContent = isUrdu && contentUrdu?.length > 0 ? contentUrdu : content;

  const shuffleReviews = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const randomReviews = shuffleReviews(
    bookReviews.filter((r) => r._id !== id)
  ).slice(0, 3);

  const renderContent = (blocks) => {
    if (!blocks || blocks.length === 0) return null;
    return blocks.map((block) => {
      const { _key, _type, children, style } = block;

      if (_type !== "block") return null;

      const Tag = style === "h1" ? "h1"
        : style === "h2" ? "h2"
        : style === "h3" ? "h3"
        : style === "h4" ? "h4"
        : style === "blockquote" ? "blockquote"
        : "p";

      const baseClass = Tag === "blockquote"
        ? "border-l-4 border-gray-300 pl-4 italic text-gray-600"
        : Tag === "h1" ? "text-2xl font-bold text-black"
        : Tag === "h2" ? "text-xl font-bold text-black"
        : Tag === "h3" ? "text-lg font-semibold text-black"
        : "text-base text-gray-800 leading-relaxed";

      return (
        <Tag
          key={_key}
          className={`${baseClass} ${isUrdu ? "leading-8" : ""}`}
        >
          {children?.map((child, i) => {
            const isBold = child.marks?.includes("strong");
            const isEm = child.marks?.includes("em");
            return (
              <span
                key={i}
                className={`${isBold ? "font-bold" : ""} ${isEm ? "italic" : ""}`}
              >
                {child.text}
              </span>
            );
          })}
        </Tag>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Top nav */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/review" className="inline-block">
            <span className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-200">
              ← Back
            </span>
          </Link>

          {/* Language toggle — only shown when Urdu content exists */}
          {hasUrdu && (
            <div className="flex border border-gray-200 overflow-hidden text-xs">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors duration-150 ${
                  lang === "en"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("ur")}
                className={`px-3 py-1.5 transition-colors duration-150 ${
                  lang === "ur"
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-black"
                }`}
              >
                اردو
              </button>
            </div>
          )}
        </div>

        {/* Cover image */}
        {coverImage?.asset?.url && (
          <div className="relative w-full mb-8 overflow-hidden" style={{ aspectRatio: "1200/630" }}>
            <Image
              src={coverImage.asset.url}
              alt={coverImage.alt || displayTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold text-black mb-8 leading-snug"
          dir={isUrdu ? "rtl" : "ltr"}
        >
          {displayTitle}
        </h1>

        {/* Metadata */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 mb-10 pb-8 border-b border-gray-200"
          dir={isUrdu ? "rtl" : "ltr"}
        >
          {author && <p><span className="text-black font-medium">Author:</span> {author}</p>}
          {edition && <p><span className="text-black font-medium">Edition:</span> {edition}</p>}
          {publishedBy && <p><span className="text-black font-medium">Published By:</span> {publishedBy}</p>}
          {reviewedBy && <p><span className="text-black font-medium">Reviewed By:</span> {reviewedBy.name}</p>}
          {totalPages && <p><span className="text-black font-medium">Pages:</span> {totalPages}</p>}
        </div>

        {/* Content */}
        <div
          className="space-y-4"
          dir={isUrdu ? "rtl" : "ltr"}
          style={{ textAlign: isUrdu ? "right" : "left" }}
        >
          {renderContent(displayContent)}
        </div>

        {/* Other reviews */}
        {randomReviews.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
              Other Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {randomReviews.map((r) => (
                <article key={r._id} className="border border-gray-200 overflow-hidden">
                  {r.coverImage?.asset?.url && (
                    <figure className="relative w-full" style={{ aspectRatio: "1200/630" }}>
                      <Image
                        src={r.coverImage.asset.url}
                        alt={r.coverImage.alt || r.title}
                        fill
                        className="object-cover"
                      />
                    </figure>
                  )}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-black mb-1 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{r.author}</p>
                    <Link href={`/review/${r._id}`} className="text-xs uppercase tracking-widest text-black hover:text-gray-600 transition-colors duration-200 inline-flex items-center gap-1">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ReviewDetailPage;
