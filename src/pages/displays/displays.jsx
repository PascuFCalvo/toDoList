import { useState } from "react";
import { ToDoList } from "../../components/toDoList/toDoList";
import { DoneList } from "../../components/doneList/doneList";
import "./displays.css";

export const Displays = () => {
  const [deletedJobs, setDeletedJobs] = useState([]);

  const handleDelete = (deletedJob) => {
    setDeletedJobs((prevDeletedJobs) => prevDeletedJobs.concat(deletedJob));
  };

  return (
    <div className="displaysDesign">
      <ToDoList onDelete={handleDelete} />
      <DoneList deletedJobs={deletedJobs} />
    </div>
  );
};
