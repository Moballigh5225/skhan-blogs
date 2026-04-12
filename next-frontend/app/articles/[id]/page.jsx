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
      const foundArticle = articles.find((item) => item._id === id);
      setArticle(foundArticle);
    }
  }, [id, articles]);

  const Loader = () => (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
    </div>
  );

  if (!article) {
    return <Loader />;
  }

  const { title, author, content, coverImage, day, month, year, file } =
    article;

  const formattedDate = formatDate(day, month, year);

  const isUrduContent = (text) => /[\u0600-\u06FF]/.test(text);

  const isUrdu = content.some((block) =>
    block.children.some((child) => isUrduContent(child.text))
  );

  return (
    <div className="w-full mx-auto py-4 px-4 md:px-8 lg:px-12">
      <div className="flex justify-between mb-6">
        {/* Back button - Hidden on mobile */}
        <Link href="/articles">
          <span className="hidden sm:inline-block buy-now-button items-center text-white transition-colors duration-300 px-4 py-2 rounded mt-4">
            ← Back
          </span>
        </Link>

        {/* Download Button - Original UI */}
        {file?.asset?.url && (
          <a
            href={file.asset.url}
            download
            className="buy-now-button items-center text-white transition-colors duration-300 px-4 py-2 rounded mt-4"
          >
            Download File
          </a>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
      {coverImage && (
        <div className="flex justify-center mb-6">
          <Image
            src={coverImage.asset.url}
            alt={coverImage.alt || "Article Cover"}
            width={320}
            height={180}
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Article Metadata */}
      <div className="space-y-2 mb-6 px-4 text-left">
        <p>
          <strong>Author:</strong> {author.name}
        </p>
        <p>
          <strong>Published Date:</strong> {formattedDate}
        </p>
      </div>

      {/* Content Rendering */}
      <div
        className={`mt-6 px-4 ${isUrdu ? "is-urdu" : ""}`}
        style={{
          direction: isUrdu ? "rtl" : "ltr",
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {content.map((block) => {
          const { _key, children } = block;
          return (
            <div key={_key} className="">
              {children.map((child, index) => {
                const { text, marks } = child;
                const isBold = marks.includes("strong");

                return isBold ? (
                  <p
                    key={index}
                    className={`font-bold ${isUrdu ? "leading-8" : "leading-relaxed"}`}
                  >
                    {text}
                  </p>
                ) : (
                  <p
                    key={index}
                    className={`${isUrdu ? "leading-8" : "leading-relaxed"}`}
                  >
                    {text}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
