"use client";
// Poetry.js
import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { parentState } from "../../atoms/parentAtom"; // Adjust the path if necessary
import { modalState } from "../../atoms/modalAtom"; // Adjust the path if necessary
import Modal from "../../components/Modal"; // Adjust the path if necessary

const Poetry = () => {
  const { poetry } = useRecoilValue(parentState);
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useRecoilState(modalState);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(poetry.length / itemsPerPage);

  const currentPoems = poetry.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setLoading(poetry.length === 0);
  }, [poetry]);

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
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";
    return `${day}${suffix} ${month}, ${year}`;
  };

  const handleOpenModal = (poem) => {
    setModalContent(poem);
  };

  const Loader = () => (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between flex-1 p-8 text-right rtl">
      <h1 className="text-2xl font-bold">شعر و شاعری</h1>
      <div className={`mt-4 poem-container ${fade ? "fade-out" : "fade-in"}`}>
        {loading ? (
          <Loader />
        ) : currentPoems.length > 0 ? (
          currentPoems.map((currentPoem) => (
            <div
              key={currentPoem._id}
              className="bg-gray-100 p-4 shadow-md relative mb-4 w-4/5 mx-auto poem-card cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleOpenModal(currentPoem)}
            >
              <h2 className="text-lg font-semibold">{currentPoem.title}</h2>
              <p className="text-sm text-gray-600">
                Author: {currentPoem.author?.name || "Unknown Author"}
              </p>
              <p className="absolute bottom-2 left-2 text-xs text-gray-500">
                {formatDate(
                  currentPoem.day,
                  currentPoem.month,
                  currentPoem.year
                )}
              </p>
            </div>
          ))
        ) : (
          <p>No poetry available</p>
        )}
      </div>

      <div className="mt-4 mb-4">
        <div className="flex justify-center">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="prev-button mx-2"
          >
            Previous
          </button>
          <span className="mx-4">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="next-button mx-2"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mb-8"></div>

      {/* Modal Component */}
      <Modal />
    </div>
  );
};

export default Poetry;
