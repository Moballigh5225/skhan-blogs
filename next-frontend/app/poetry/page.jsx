"use client";
import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Image from "next/image";

const PoetrySkeletonLoader = () => (
  <div className="animate-pulse border border-gray-200 p-4 mb-3 w-4/5 mx-auto">
    <div className="h-4 bg-gray-200 rounded w-2/3 ml-auto mb-3" />
    <div className="h-3 bg-gray-100 rounded w-1/3 ml-auto" />
    <div className="h-3 bg-gray-100 rounded w-1/4 mt-6" />
  </div>
);

const Poetry = () => {
  const { poetry } = useRecoilValue(parentState);
  const loading = useRecoilValue(loadingState);
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [, setModalContent] = useRecoilState(modalState);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(poetry.length / itemsPerPage);

  const currentPoems = poetry.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setFade(false);
    }, 300);
  };

  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      setFade(false);
    }, 300);
  };

  const formatDate = (day, month, year) => {
    const suffix =
      day % 10 === 1 && day !== 11 ? "st"
        : day % 10 === 2 && day !== 12 ? "nd"
        : day % 10 === 3 && day !== 13 ? "rd"
        : "th";
    return `${day}${suffix} ${month}, ${year}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-2xl md:text-3xl font-bold text-black mb-10 text-right" dir="rtl">
          شعر و شاعری
        </h1>

        <div className={`poem-container ${fade ? "fade-out" : "fade-in"}`}>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <PoetrySkeletonLoader key={i} />
            ))
          ) : currentPoems.length > 0 ? (
            currentPoems.map((poem) => (
              <div
                key={poem._id}
                className="border border-gray-200 mb-3 w-4/5 mx-auto cursor-pointer hover:border-gray-400 transition-colors duration-200 overflow-hidden"
                onClick={() => setModalContent(poem)}
              >
                {poem.featuredImage?.asset?.url && (
                  <div className="relative w-full" style={{ aspectRatio: "1200/630" }}>
                    <Image
                      src={poem.featuredImage.asset.url}
                      alt={poem.featuredImage.alt || poem.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                  </div>
                )}
                <div className="p-4 text-right" dir="rtl">
                  <h2 className="text-base font-semibold text-black mb-1">
                    {poem.titleUrdu || poem.title}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {poem.author?.name || "Unknown Author"}
                  </p>
                  <p className="text-xs text-gray-400 mt-4 text-left" dir="ltr">
                    {formatDate(poem.day, poem.month, poem.year)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="text-3xl mb-4">📜</p>
              <p className="text-base font-medium" dir="rtl">ابھی کوئی شعر موجود نہیں</p>
              <p className="text-sm mt-1">No poetry has been added yet.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="prev-button"
            >
              Previous
            </button>
            <span className="text-sm text-gray-500">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="next-button"
            >
              Next
            </button>
          </div>
        )}

      </div>

      <Modal />
    </div>
  );
};

export default Poetry;
