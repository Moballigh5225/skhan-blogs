"use client";
import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { useRecoilState } from "recoil";
import { Line } from "./Line";
import { modalState } from "../atoms/modalAtom";
import Image from "next/image";

const Modal = () => {
  const [modalContent, setModalContent] = useRecoilState(modalState);
  const [lang, setLang] = useState("ur");

  // Reset language to Urdu each time a new poem opens
  useEffect(() => {
    if (modalContent) setLang("ur");
  }, [modalContent?._id]);

  if (!modalContent) return null;

  const { title, titleUrdu, richText, richTextUrdu, featuredImage } = modalContent;

  const hasUrdu = !!(titleUrdu || (richTextUrdu && richTextUrdu.length > 0));
  const hasEnglish = !!(title || (richText && richText.length > 0));

  const isUrdu = lang === "ur";
  const displayTitle = isUrdu && titleUrdu ? titleUrdu : title;
  const displayContent = isUrdu && richTextUrdu?.length > 0 ? richTextUrdu : richText;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={() => setModalContent(null)}
    >
      <div
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header bar */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <button
            className="text-gray-400 hover:text-black transition-colors duration-200 text-xs uppercase tracking-widest"
            onClick={() => setModalContent(null)}
          >
            Close
          </button>

          {/* Language toggle — only shown when both versions exist */}
          {hasUrdu && hasEnglish && (
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
        </div>

        <div className="px-8 pb-8 pt-5">
          {/* Featured image */}
          {featuredImage?.asset?.url && (
            <div className="relative w-full mb-6 overflow-hidden" style={{ aspectRatio: "1200/630" }}>
              <Image
                src={featuredImage.asset.url}
                alt={featuredImage.alt || displayTitle || "Poetry image"}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Title */}
          <h2
            className="text-lg font-bold text-black mb-6"
            dir={isUrdu ? "rtl" : "ltr"}
            style={{ textAlign: isUrdu ? "right" : "left" }}
          >
            {displayTitle}
          </h2>

          {/* Content */}
          <div
            dir={isUrdu ? "rtl" : "ltr"}
            style={{ textAlign: isUrdu ? "right" : "left" }}
            className={isUrdu ? "leading-8" : ""}
          >
            <PortableText
              value={displayContent}
              components={{ line: Line }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
