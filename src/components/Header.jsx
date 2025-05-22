import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = ({ month, year, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
      <button
        onClick={onPrev}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Previous Month"
      >
        <ChevronLeft size={20} />
      </button>
      <h1 className="text-2xl font-bold text-gray-800">
        {month} {year}
      </h1>
      <button
        onClick={onNext}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Next Month"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Header;
