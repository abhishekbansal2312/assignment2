import React, { useEffect, useState } from "react";
import SearchJob from "../components/SearchJob";
import SearchLocation from "../components/SearchLocation";
import { useJobs } from "../context/JobsProvider";
import JobList from "../components/JobList";
import { FaLocationArrow } from "react-icons/fa";

export default function Jobs() {
  const [location, setLocation] = useState("");
  const { currentJobs, showBookMarked, setShowBookMarked } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [job, setJob] = useState("");

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBookmark = (index) => {
    const updatedJobs = [...filteredJobs];
    updatedJobs[index].isBookmarked = !updatedJobs[index].isBookmarked;
    setFilteredJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (savedJobs) {
      setFilteredJobs(savedJobs);
    } else {
      setFilteredJobs(currentJobs);
    }
  }, [currentJobs]);

  useEffect(() => {
    const filtered = currentJobs.filter(
      (jobItem) =>
        (!job || jobItem.title.toLowerCase().includes(job.toLowerCase())) &&
        (!location ||
          jobItem.location.toLowerCase().includes(location.toLowerCase())) &&
        (!showBookMarked || jobItem.isBookmarked)
    );
    setFilteredJobs(filtered);
  }, [job, location, currentJobs, showBookMarked]);

  return (
    <div className="min-h-screen">
      <div className="search-container flex justify-start  pl-2 flex-nowrap border-2 w-full mt-8 max-w-3xl ml-36 space-x-4 p-1 rounded-sm">
        <SearchJob job={job} onJobChange={handleJobChange} />
        <SearchLocation
          location={location}
          onLocationChange={handleLocationChange}
        />
        <FaLocationArrow className="text-black hover:text-pink-500" size={44} />
        <button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 w-54 border border-gray-300 whitespace-nowrap">
          Find Job
        </button>
      </div>

      <JobList filteredJobs={filteredJobs} handleBookmark={handleBookmark} />
    </div>
  );
}
