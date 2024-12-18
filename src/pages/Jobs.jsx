import React, { useEffect, useState } from "react";
import SearchJob from "../components/SearchJob";
import SearchLocation from "../components/SearchLocation";
import { useJobs } from "../context/JobsProvider";
import JobList from "../components/JobList";
import { FaLocationArrow } from "react-icons/fa";

export default function Jobs() {
  const [location, setLocation] = useState("");
  const { currentJobs, showBookMarked } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    setLoading(true);
    setError("");

    const savedJobs = JSON.parse(localStorage.getItem("jobs"));
    const jobsToDisplay = savedJobs || currentJobs;

    try {
      const filtered = jobsToDisplay.filter(
        (jobItem) =>
          (!job || jobItem.title.toLowerCase().includes(job.toLowerCase())) &&
          (!location ||
            jobItem.location.toLowerCase().includes(location.toLowerCase())) &&
          (!showBookMarked || jobItem.isBookmarked)
      );
      setFilteredJobs(filtered);
    } catch (error) {
      setError("An error occurred while filtering jobs.");
    } finally {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [job, location, currentJobs, showBookMarked]);

  return (
    <div className="min-h-screen">
      <div className="search-container flex justify-start pl-2 flex-nowrap border-2 w-full mt-8 max-w-3xl ml-36 space-x-4 p-1 rounded-sm">
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

      {loading && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>{" "}
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center mt-8">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <JobList filteredJobs={filteredJobs} handleBookmark={handleBookmark} />
      )}
    </div>
  );
}
