import React from "react";

export const Line = ({ children }) => {
  return (
    <div className="flex justify-between mb-4">
      <span className="font-bold text-lg">{children}</span>
      <span className="flex-grow h-1 border-b border-gray-300 mx-2"></span>
    </div>
  );
};
