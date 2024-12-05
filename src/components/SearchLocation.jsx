import React from "react";

const SearchLocation = ({ location, onLocationChange }) => {
  return (
    <div className="flex items-center pl-4 w-full max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-orange-500 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C8.134 2 5 5.134 5 9c0 3.447 2.238 5.846 5 9 2.762-3.154 5-5.553 5-9 0-3.866-3.134-7-7-7zm0 11c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>

      <input
        type="text"
        id="location"
        value={location}
        onChange={onLocationChange}
        placeholder="City, state, country"
        className="outline-none w-full text-gray-700 placeholder-gray-500 py-2"
      />
    </div>
  );
};

export default SearchLocation;
