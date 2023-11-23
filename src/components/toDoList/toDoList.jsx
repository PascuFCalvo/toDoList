import { useState } from "react";
import "./toDoList.css";

export const ToDoList = ({ onDelete }) => {
  const [inputText, setInputText] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleButton = () => {
    setJobs([...jobs, inputText]);
    setInputText("");
  };

  const handleDelete = (index) => {
    const deletedJob = jobs[index];
    setJobs(jobs.filter((_, jobIndex) => jobIndex !== index));
    onDelete(deletedJob);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="toDoListDesign">
      <h1>Add something to do:</h1>
      <input
        type="text"
        id="inputText"
        name="inpuText"
        placeholder="add a job"
        value={inputText}
        onChange={handleChange}
      />
      <button id="buttonSend" onClick={handleButton}>
        ADD
      </button>

      {jobs.map((job, index) => (
        <div className="job" key={index}>
          <div className="jobName">
            {job}
            <button className="close" onClick={() => handleDelete(index)}>
              ↣
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
