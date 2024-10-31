// Modal.js
"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import { useRecoilState } from "recoil";
import { Line } from "./Line"; // Adjust the path if necessary
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [modalContent, setModalContent] = useRecoilState(modalState);
  if (!modalContent) return null; // If no content, don't render anything

  const handleClose = () => {
    setModalContent(null); // Close the modal by resetting state
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-7/12 overflow-y-auto max-h-[80vh] relative">
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-gray-900 close-button" // Position to the top left
          onClick={handleClose}
        >
          &times; {/* Close button */}
        </button>
        <h2 className="text-lg font-bold mb-4">{modalContent.title}</h2>

        <div className="text-right font-bold">
          {/* Make text bold */}
          <PortableText
            value={modalContent.richText}
            components={{ line: Line }} // Using Line component for rendering
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
