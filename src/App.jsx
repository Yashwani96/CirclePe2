import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Homepage from "./components/Homepage/Homepage";
import Step1part2 from "./components/Step1part2/Step1part2";
import "./App.css"; // For styling and transitions

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(0); // Tracks which component to show
  const [showStep1Part2, setShowStep1Part2] = useState(false); // Track Step1Part2 state

  // Function to handle component change
  const handleScrollClick = (componentNumber) => {
    setCurrentComponent(componentNumber);
  };

  // Handle keyboard navigation
  const handleKeyNavigation = (event) => {
    if (event.key === "ArrowUp" && currentComponent < 4) {
      setCurrentComponent(currentComponent + 1); // Move to previous component
    } else if (event.key === "ArrowDown" && currentComponent > 0) {
      setCurrentComponent(currentComponent - 1); // Move to next component
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyNavigation);
    return () => {
      window.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [currentComponent]);

  return (
    <div className="app-container">
      <div className="component-wrapper">
        {currentComponent === 0 && (
          <Homepage
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
          />
        )}
        {currentComponent === 1 && !showStep1Part2 && (
          <Step1
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
            showPart2={() => setShowStep1Part2(true)}
          />
        )}
        {currentComponent === 1 && showStep1Part2 && (
          <Step1part2
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
            showPart1={() => setShowStep1Part2(false)}
          />
        )}
        {currentComponent === 2 && (
          <Step2
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
          />
        )}
        {currentComponent === 3 && (
          <Step3
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
          />
        )}
        {currentComponent === 4 && (
          <Step4
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
          />
        )}
      </div>
    </div>
  );
};

export default App;
