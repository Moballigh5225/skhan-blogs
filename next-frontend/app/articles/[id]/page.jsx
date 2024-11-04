"use client"; // Since this is a client component
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { parentState } from "../../atoms/parentAtom";
import Link from "next/link";
import Image from "next/image";

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

  const { title, author, content, coverImage, day, month, year } = article;

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

  const dateObject = new Date(year, monthMapping[month], day);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto py-4 px-2 md:px-4 lg:px-8">
      <Link href="/articles" className="mb-4">
        <span className="hidden buy-now-button md:inline-flex items-center text-white transition-colors duration-300 px-4 py-2 rounded mt-4">
          ← Back
        </span>
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      {coverImage && (
        <div className="flex justify-center mb-4">
          <Image
            src={coverImage.asset.url}
            alt={coverImage.alt || "Article Cover"}
            width={320}
            height={180}
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Wrap Author and Published Date in the same container as content */}
      <div className="space-y-1 mb-4 max-w-2xl mx-auto px-4 text-left">
        <p>
          <strong>Author:</strong> {author.name}
        </p>
        <p>
          <strong>Published Date:</strong> {formattedDate}
        </p>
      </div>

      <div className="mt-4 max-w-2xl mx-auto px-4">
        {content.map((block) => {
          const { _key, children } = block;
          return (
            <div key={_key} className="mb-4">
              {children.map((child, index) => {
                const { text, marks } = child;
                const isBold = marks.includes("strong");
                return isBold ? (
                  <p key={index} className="font-bold text-justify">
                    {text}
                  </p>
                ) : (
                  <p key={index} className="text-justify">
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
