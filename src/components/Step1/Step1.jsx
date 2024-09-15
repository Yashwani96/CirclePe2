import React, { useRef, useEffect, useState } from "react";
import Slider from "@mui/material/Slider"; // Import the Slider from MUI

function Step1({ currentComponent, handleScrollClick, showPart2 }) {
  const [activeListItem, setActiveListItem] = useState(1);
  const sliderRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false); // State to control image visibility

  // Ensure the slider is focused when the component mounts
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus(); // Set focus to the slider
    }
    setIsImageVisible(true);
  }, []);

  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  const handleClick = (index) => {
    setActiveListItem(index); // Set the active item on click
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <h2
          className={`text-6xl font-semibold text-gray-500 ml-96 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Step <span className="text-white">1</span>
        </h2>
        <div
          className={`w-[90px] h-[4px] mb-0 mt-14 bg-blue-500 ml-96 transition-transform duration-1000 ${
            isImageVisible ? "translate-y-[-30px]" : ""
          }`}
        ></div>
        <ul
          className={`list-disc text-lg ml-96 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First List Item: Default Highlighted */}
          <li
            className={`cursor-pointer ${
              activeListItem === 1 ? "text-yellow-500" : "text-gray-400"
            } hover:text-yellow-500`}
            onClick={() => handleClick(1)}
          >
            Tenant selects the property
          </li>

          {/* Second List Item */}
          <li
            className={`cursor-pointer ${
              activeListItem === 2 ? "text-yellow-500" : "text-gray-400"
            } hover:text-yellow-500`}
            onClick={() => {
              handleClick(2);
              showPart2(); // Navigate to Step1Part2 on click
            }}
          >
            Tenant selects flexible rent tenure & amount
          </li>
        </ul>

        {/* Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
          <img src="/images/step1arrow.png" alt="Arrow" className="w-72 h-72" />
        </div>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/step1.png"
          alt="Mobile"
          className={`absolute bottom-0 w-full max-w-xs ml-8 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right: MUI Slider */}
        <div className="h-full flex justify-center items-center ml-56">
          <Slider
            ref={sliderRef} // Add a ref to the slider for focus
            orientation="vertical"
            value={currentComponent}
            min={0}
            max={4}
            step={1}
            marks // Adds default marks for the slider points
            onChange={handleSliderChange}
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

export default Step1;
