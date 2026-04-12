"use client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { useRecoilState } from "recoil";
import { Line } from "./Line";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [modalContent, setModalContent] = useRecoilState(modalState);

  if (!modalContent) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => setModalContent(null)}
    >
      <div
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-black transition-colors duration-200 text-xs uppercase tracking-widest"
          onClick={() => setModalContent(null)}
        >
          Close
        </button>

        <h2 className="text-lg font-bold text-black mb-6 text-right" dir="rtl">
          {modalContent.title}
        </h2>

        <div className="text-right" dir="rtl">
          <PortableText
            value={modalContent.richText}
            components={{ line: Line }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
