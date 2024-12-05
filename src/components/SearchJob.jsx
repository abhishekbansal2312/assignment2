import React from "react";

const SearchJob = ({ job, onJobChange }) => {
  return (
    <div className="flex items-center pl-2 w-full max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 text-orange-500 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"
        />
      </svg>
      <input
        type="text"
        id="job"
        value={job}
        onChange={onJobChange}
        placeholder="Search by: Job title, Position, Key..."
        className="outline-none w-full text-gray-700 placeholder-gray-500 py-1"
      />
    </div>
  );
};

export default SearchJob;
