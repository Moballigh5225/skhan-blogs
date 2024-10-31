"use client"; // Ensure this is a client component
import { useRecoilValue } from "recoil";
import { parentState } from "../../atoms/parentAtom";
import Image from "next/image";
import TextSkeletonLoader from "../../components/TextSkeletonLoader";

const About = () => {
  const data = useRecoilValue(parentState); // Get the data from Recoil state
  const books = data.books; // Access books from the state
  const author = books.length > 0 ? books[0].author : null; // Get the first author from the books array

  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-screen rounded-lg overflow-hidden">
      {/* Left Side (About Content) - will move to the bottom on smaller screens */}
      <div className="flex-1  p-8 flex flex-col items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">
            SHABBIR ALAM KHAN
          </h1>
          {!author ? (
            <TextSkeletonLoader />
          ) : (
            <>
              <p className="text-lg text-black mb-4">
                QASF is not just a foundation for me. It is a way of expressing
                my gratitude to the society that has given me so much love and
                respect. I have always felt that it is my duty to give back to
                society. While setting up the foundation I met a lot of people
                who shared my vision for an ideal society and wanted to bring
                about real positive change.
              </p>
              <p className="text-lg text-black mb-4">
                We, at QASF work by keeping Hazrat Muhammad PBUH as our
                foundation – to reach out and serve as many as we can, with an
                open heart and love to the people living in this society.
              </p>
              <p className="text-lg text-black mb-4">
                By promoting the message of hope and growth together, we can
                envisage a brighter future for the coming generations and us.
              </p>
              <p className="text-lg font-bold text-black">{author.name}</p>
              <p className="text-lg text-black">Entrepreneur / Founder</p>
            </>
          )}
        </div>
      </div>

      {/* Right Side (Author Image) - will move to the top on smaller screens */}
      <div className="flex-1 bg-white p-4 flex items-center justify-center">
        <div className="relative w-full h-96 max-w-xs sm:max-w-md lg:max-w-lg rounded-lg shadow-lg overflow-hidden">
          {!author ? (
            <div className="h-64 bg-gray-300 rounded animate-pulse w-full" /> // Skeleton for image
          ) : (
            <Image
              src="/images/skm.jpeg" // Local image path
              alt={author.name}
              layout="fill" // Ensure the image covers the entire container
              objectFit="contain" // Prevents the image from being cut off
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
