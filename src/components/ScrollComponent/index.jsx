import React, { useState, useEffect } from "react";
import "./ScrollableSections.css"; // Import the updated CSS

const ScrollableSections = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Determine which section should be active based on the scroll position
    const newSection = Math.floor(scrollPosition / viewportHeight);
    setCurrentSection(newSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <div className="sections-wrapper">
      <div
        className={`section ${currentSection === 0 ? "active" : ""}`}
        id="introduction"
      >
        <h1>Introduction</h1>
      </div>
      <div
        className={`section ${currentSection === 1 ? "active" : ""}`}
        id="about"
      >
        <h1>About Us</h1>
      </div>
      <div
        className={`section ${currentSection === 2 ? "active" : ""}`}
        id="contact"
      >
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default ScrollableSections;
