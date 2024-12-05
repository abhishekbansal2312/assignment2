import React, { createContext, useContext, useEffect, useState } from "react";

const JobsContext = createContext();

export function JobsProvider({ children }) {
  const [currentJobs, setCurrentJobs] = useState([]);
  const [showBookMarked, setShowBookMarked] = useState(false);

  const allJobs = [
    {
      title: "Senior UX Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$20,000-$25,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Marketing Officer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$20,000-$25,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Interaction Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$20,000-$15,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Project Manager",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$300,000-$21,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Software Engineer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$330,000-$825,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Visual Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$32,000-$25,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Networking Engineer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$2,000-$75,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Marketing Manager",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$120,000-$21,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Junior Graphic Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$20,000-$25,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "UI/UX Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$80,000-$25,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Front End Developer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$100,000-$21,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
    {
      title: "Product Designer",
      location: "Dhaka, Bangladesh",
      company: "Google Inc.",
      salary: "$60,000-$100,000",
      isBookmarked: false,
      logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png",
      jobType: "Remote",
    },
  ];

  useEffect(() => {
    setCurrentJobs(allJobs); // Correct usage
  }, []);

  return (
    <JobsContext.Provider
      value={{
        currentJobs,
        setCurrentJobs,
        showBookMarked,
        setShowBookMarked,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobsProvider");
  }
  return context;
}
