import React from "react";
import "./styles/FacultyList.css";


const FacultyList = ({ facultyData }) => (
  <div>
    <h2>Faculty List</h2>
    <ul>
      {facultyData.map((faculty, index) => (
        <li key={index}>
          {faculty.facultyName} ({faculty.facultyId}) - {faculty.status}
        </li>
      ))}
    </ul>
  </div>
);

export default FacultyList;