import React, { useState } from "react";
import "./styles/FacultyUpdate.css";


const FacultyUpdate = ({ facultyData, setFacultyData }) => {
  const [updateId, setUpdateId] = useState("");
  const [newStatus, setNewStatus] = useState("active");

  const handleUpdate = () => {
    const updated = facultyData.map((f) =>
      f.facultyId === updateId ? { ...f, status: newStatus } : f
    );
    setFacultyData(updated);
  };

  return (
    <div>
      <h2>Update Faculty Status</h2>
      <input
        placeholder="Enter Faculty ID"
        value={updateId}
        onChange={(e) => setUpdateId(e.target.value)}
      />
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default FacultyUpdate;