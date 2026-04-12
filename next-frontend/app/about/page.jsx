"use client";
import { useRecoilValue } from "recoil";
import { parentState } from "../atoms/parentAtom";
import Image from "next/image";
import TextSkeletonLoader from "../components/TextSkeletonLoader";

const About = () => {
  const data = useRecoilValue(parentState);
  const books = data.books;
  const author = books.length > 0 ? books[0].author : null;

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

          {/* Left: text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              SHABBIR ALAM KHAN
            </h1>
            {!author ? (
              <TextSkeletonLoader />
            ) : (
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  QASF is not just a foundation for me. It is a way of expressing
                  my gratitude to the society that has given me so much love and
                  respect. I have always felt that it is my duty to give back to
                  society. While setting up the foundation I met a lot of people
                  who shared my vision for an ideal society and wanted to bring
                  about real positive change.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  We, at QASF work by keeping Hazrat Muhammad PBUH as our
                  foundation – to reach out and serve as many as we can, with an
                  open heart and love to the people living in this society.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  By promoting the message of hope and growth together, we can
                  envisage a brighter future for the coming generations and us.
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-white font-semibold">{author.name}</p>
                  <p className="text-gray-500 text-sm mt-1">Entrepreneur / Founder</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: author image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {!author ? (
              <div className="w-72 h-96 bg-gray-800 rounded animate-pulse" />
            ) : (
              <div className="relative w-72 h-96">
                <Image
                  src="/images/skm.jpeg"
                  alt={author.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
