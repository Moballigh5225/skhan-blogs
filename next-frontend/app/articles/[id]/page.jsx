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

  const { title, author, content, coverImage, day, month, year, file } = article;
  const formattedDate = formatDate(day, month, year);
  const isUrduContent = (text) => /[\u0600-\u06FF]/.test(text);
  const isUrdu = content.some((block) =>
    block.children.some((child) => isUrduContent(child.text))
  );

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
          {file?.asset?.url && (
            <a
              href={file.asset.url}
              download
              className="buy-now-button"
            >
              Download
            </a>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug">
          {title}
        </h1>

        {/* Cover image */}
        {coverImage && (
          <div className="flex justify-center mb-8">
            <Image
              src={coverImage.asset.url}
              alt={coverImage.alt || "Article Cover"}
              width={320}
              height={200}
              className="object-cover"
            />
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-xs text-gray-500 uppercase tracking-widest mb-10 pb-8 border-b border-gray-200">
          <span>{author.name}</span>
          <span>{formattedDate}</span>
        </div>

        {/* Content */}
        <div
          className={`space-y-4 ${isUrdu ? "is-urdu" : ""}`}
          style={{ direction: isUrdu ? "rtl" : "ltr" }}
        >
          {content.map((block) => {
            const { _key, children } = block;
            return (
              <div key={_key}>
                {children.map((child, i) => {
                  const isBold = child.marks.includes("strong");
                  return (
                    <p
                      key={i}
                      className={`text-base text-gray-800 leading-relaxed ${isUrdu ? "leading-8" : ""} ${isBold ? "font-bold" : ""}`}
                    >
                      {child.text}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ArticleDetailPage;
