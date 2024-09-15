import React, { useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider"; // Import the Slider from MUI

function Homepage({ currentComponent, handleScrollClick }) {
  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };
  const sliderRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false); // State to control image visibility

  // Add focus to the slider on component load
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus(); // Ensure slider is focused when page loads
    }
    setIsImageVisible(true);
  }, []);

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <h2
          className={`text-6xl font-semibold text-gray-500 ml-96 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          How does <br /> it <span className="text-white">Work </span>
          <span className="text-blue-600">?</span>
        </h2>
        <div
          className={`w-[90px] h-[4px] mb-11 mt-2 bg-white ml-96  transition-transform duration-1000 ${
            isImageVisible ? "translate-y-[30px]" : ""
          }`}
        ></div>

        <p
          className={`text-lg ml-96 text-gray-400 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          We make it possible in a quick and easy <br />
          few step process, takes max 5 mins
        </p>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/homepage.png"
          alt="Mobile"
          className={`absolute bottom-0 w-full max-w-xs ml-8 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right: MUI Slider */}
        <div className="h-full flex justify-center items-center ml-56">
          <Slider
            orientation="vertical"
            value={currentComponent}
            min={0}
            max={4}
            step={1}
            marks // Adds default marks for the slider points
            onChange={handleSliderChange}
            ref={sliderRef} // Add ref to the slider
            aria-label="Component Slider" // Accessibility label
            tabIndex={0} // Make the slider focusable
            sx={{
              height: 200, // Custom height for the vertical slider

              "& .MuiSlider-thumb": {
                backgroundColor: "blue", // Custom thumb color
              },
              "& .MuiSlider-track": {
                backgroundColor: "blue", // Custom track color
              },
              "& .MuiSlider-rail": {
                backgroundColor: "gray", // Custom rail color
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
