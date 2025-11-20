import React, { useState } from "react";
import "./styles/FacultyProfile.css";


const FacultyProfile = ({ facultyData }) => {
  const [searchId, setSearchId] = useState("");
  const faculty = facultyData.find((f) => f.facultyId === searchId);

  return (
    <div>
      <h2>Faculty Profile</h2>
      <input
        placeholder="Enter Faculty ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      {faculty ? (
        <div>
          <p>Name: {faculty.facultyName}</p>
          <p>Age: {faculty.age}</p>
          <p>Qualification: {faculty.qualification}</p>
          <p>Joined At: {faculty.joinedAt}</p>
          <p>Status: {faculty.status}</p>
        </div>
      ) : (
        <p>No faculty found with that ID.</p>
      )}
    </div>
  );
};

export default FacultyProfile;