import React, { useState } from "react";
import "./styles/FacultyRegistration.css";


const FacultyRegistration = ({ onRegister }) => {
  const [faculty, setFaculty] = useState({
    facultyId: "",
    facultyName: "",
    age: "",
    qualification: "",
    joinedAt: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(faculty);
    setFaculty({
      facultyId: "",
      facultyName: "",
      age: "",
      qualification: "",
      joinedAt: "",
      status: "active",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="facultyId" placeholder="ID" onChange={handleChange} required />
      <input name="facultyName" placeholder="Name" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <input name="qualification" placeholder="Qualification" onChange={handleChange} required />
      <input name="joinedAt" type="date" onChange={handleChange} required />
      <select name="status" onChange={handleChange}>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default FacultyRegistration;