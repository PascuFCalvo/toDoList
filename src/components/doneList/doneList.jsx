import { useEffect, useState } from "react";
import "./doneList.css";

export const DoneList = ({ deletedJobs }) => {
  let [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(deletedJobs);
  }, [deletedJobs]);

  const handleDelete = (index) => {
    console.log("hola");
    setJobs(jobs.filter((_, jobIndex) => jobIndex !== index));
  };

  return (
    <div className="doneListDesign">
      <h1>Jobs done:</h1>
      <ul>
        {jobs.map((job, index) => (
          <div className="job" key={index}>
            <div className="jobName">{job}</div>
            <button className="close" onClick={() => handleDelete(index)}>
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
