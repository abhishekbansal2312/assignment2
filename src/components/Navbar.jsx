import React from "react";
import { useJobs } from "../context/JobsProvider";

export default function Navbar() {
  const { showBookMarked, setShowBookMarked } = useJobs();
  return (
    <div>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-5xl flex justify-between items-center py-2 px-6">
          <div className="text-xl font-bold ">Explorin Solution</div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowBookMarked(!showBookMarked)}
              className={`px-3 py-3 border-2 ${
                showBookMarked ? "bg-green-500" : "bg-slate-100"
              } text-white`}
            ></button>

            <div className="text-gray-500 ">My Saved Jobs</div>

            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-2 h-2 mt-1 mr-2 flex items-center justify-center"></span>
            </div>

            <img
              src="https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="User Profile"
              className="rounded-full w-10 h-10 border-2 border-gray-300"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
