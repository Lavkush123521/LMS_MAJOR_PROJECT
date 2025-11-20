import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";


const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/register">Faculty Registration</Link> |{" "}
      <Link to="/list">Faculty List</Link> |{" "}
      <Link to="/profile">Faculty Profile</Link> |{" "}
      <Link to="/update">Faculty Update</Link>
    </nav>
  );
};

export default Navbar;