import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
      <Link to="/" style={{ marginRight: "10px" }}>About Us</Link>
      <Link to="/education" style={{ marginRight: "10px" }}>Education</Link>
      <Link to="/experience" style={{ marginRight: "10px" }}>Experience</Link>
      <Link to="/certifications" style={{ marginRight: "10px" }}>Certifications</Link>
      <Link to="/contact" style={{ marginRight: "10px" }}>Contact Us</Link>
    </nav>
  );
};

export default Navbar;
