import React, { useState } from "react";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import "./App.css"; // For styling and transitions
import Homepage from "./components/Homepage/Homepage";
import Step1part2 from "./components/Step1part2/Step1part2";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(0); // Tracks which component to show
  const [showStep1Part2, setShowStep1Part2] = useState(false); // Track Step1Part2 state
  // Function to handle component change
  const handleScrollClick = (componentNumber) => {
    setCurrentComponent(componentNumber);
    const [showStep1Part2, setShowStep1Part2] = useState(false); // Track Step1Part2 state
  };

  return (
    <div className="app-container ">
      {/* Render Components with the custom scrollbar */}
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
            showPart2={() => setShowStep1Part2(true)} // Function to show Step1Part2
          />
        )}

        {currentComponent === 1 && showStep1Part2 && (
          <Step1part2
            currentComponent={currentComponent}
            handleScrollClick={handleScrollClick}
            showPart1={() => setShowStep1Part2(false)} // Function to go back to Step1
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
