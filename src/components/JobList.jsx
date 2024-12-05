import React from "react";

export default function JobList({ filteredJobs, handleBookmark }) {
  return (
    <div className="mt-8 ml-8">
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredJobs.map((jobItem, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow flex flex-col transition duration-300 ease-in-out transform  hover:bg-gradient-to-r hover:from-orange-200 hover:to-white"
            >
              <h3 className="text-lg font-arial">{jobItem.title}</h3>

              <div className="flex gap-2 items-center mt-1">
                <span className="bg-green-500 bg-opacity-20 text-green-700 px-3 py-1 text-sm rounded">
                  {jobItem.jobType}
                </span>
                <p className="text-sm text-gray-400">
                  Salary - {jobItem.salary}
                </p>
              </div>

              <div className="flex mt-4 items-center">
                <img
                  src={jobItem.logo}
                  alt={`${jobItem.company} logo`}
                  className="w-12 h-12 object-contain mr-4"
                />

                <div>
                  <p className="text-sm font-semibold">{jobItem.company}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 3.25 2.58 6.17 6.02 9.34L12 21l.98-2.66C16.42 15.17 19 12.25 19 9c0-3.87-3.13-7-7-7z"
                      />
                    </svg>
                    {jobItem.location}
                  </div>
                </div>
                <button
                  onClick={() => handleBookmark(index)}
                  className={`mt-2 p-2 rounded-full text-sm ml-8 ${
                    jobItem.isBookmarked ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  {jobItem.isBookmarked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current text-red-500"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3l14 14M19 3L5 17"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No jobs found</p>
      )}
    </div>
  );
}
