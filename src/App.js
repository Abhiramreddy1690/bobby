import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">About Us</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/certifications" className="nav-link">Certifications</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;