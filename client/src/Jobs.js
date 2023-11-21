import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/json"); // Make the request to your server endpoint
        setJobsData(response.data); // Set the response data in the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the jobsData in your component */}
      {jobsData.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
