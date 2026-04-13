"use client";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { parentState } from "../../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../../utils/formatDate";

const ArticleDetailPage = ({ params }) => {
  const { id } = params;
  const { articles } = useRecoilValue(parentState);
  const [article, setArticle] = useState(null);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (id && Array.isArray(articles)) {
      const found = articles.find((item) => item._id === id);
      setArticle(found);
    }
  }, [id, articles]);

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black" />
      </div>
    );
  }

  const { title, titleUrdu, author, content, contentUrdu, featuredImage, day, month, year, file } = article;
  const formattedDate = formatDate(day, month, year);

  const hasUrdu = !!(titleUrdu || (contentUrdu && contentUrdu.length > 0));
  const isUrdu = lang === "ur";

  const displayTitle = isUrdu && titleUrdu ? titleUrdu : title;
  const displayContent = isUrdu && contentUrdu?.length > 0 ? contentUrdu : content;

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
          <Link href="/articles">
            <span className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-200">
              ← Back
            </span>
          </Link>
          <div className="flex items-center gap-3">
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
            {file?.asset?.url && (
              <a href={file.asset.url} download className="buy-now-button">
                Download
              </a>
            )}
          </div>
        </div>

        {/* Featured image */}
        {featuredImage?.asset?.url && (
          <div className="relative w-full mb-8 overflow-hidden" style={{ aspectRatio: "1200/630" }}>
            <Image
              src={featuredImage.asset.url}
              alt={featuredImage.alt || displayTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug"
          dir={isUrdu ? "rtl" : "ltr"}
        >
          {displayTitle}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-xs text-gray-500 uppercase tracking-widest mb-10 pb-8 border-b border-gray-200">
          <span>{author.name}</span>
          <span>{formattedDate}</span>
        </div>

        {/* Content */}
        <div
          className="space-y-4"
          dir={isUrdu ? "rtl" : "ltr"}
          style={{ textAlign: isUrdu ? "right" : "left" }}
        >
          {renderContent(displayContent)}
        </div>

      </div>
    </div>
  );
};

export default ArticleDetailPage;
