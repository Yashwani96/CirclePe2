import React, { useState } from "react";
import Slider from "@mui/material/Slider"; // Import the Slider from MUI

function Step1({ currentComponent, handleScrollClick, showPart2 }) {
  const [activeListItem, setActiveListItem] = useState(1);

  const handleClick = (index) => {
    setActiveListItem(index); // Set the active item on click
  };

  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white ml-96">Step 1</h2>
        <div className="w-[60px] h-[2px] my-6 bg-white ml-96"></div>
        <ul className="list-disc text-lg ml-96">
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
          className="absolute bottom-0 w-full max-w-xs ml-8"
        />

        {/* Right: MUI Slider */}
        <div className="h-full flex justify-center items-center ml-56">
          <Slider
            orientation="vertical"
            value={currentComponent}
            min={0}
            max={4}
            step={1}
            marks // This adds default marks for the slider points
            onChange={handleSliderChange}
            sx={{
              height: 300, // Custom height for the vertical slider
              "& .MuiSlider-thumb": {
                backgroundColor: "yellow", // Custom thumb color
              },
              "& .MuiSlider-track": {
                backgroundColor: "white", // Custom track color
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
