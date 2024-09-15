import React, { useEffect, useRef } from "react";

import Slider from "@mui/material/Slider"; // Import MUI Slider

function Step2({ currentComponent, handleScrollClick }) {
  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  const sliderRef = useRef(null);
  // Add focus to the slider on component load
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus(); // Ensure slider is focused when page loads
    }
  }, []);

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center px-20">
        <div className="ml-80">
          <h2 className="text-3xl font-semibold text-white mb-2">Step 2</h2>
          <div className="w-[30px] h-[2px] my-2 bg-white"></div>
          <ul className="list-disc text-lg">
            <li className="text-yellow-500">
              Tenant selects Pay with Circle enabling:
            </li>
            <ul className="list-disc text-sm text-gray-400 ml-5 mt-2">
              <li>Zero security deposit move-in</li>
              <li>Reduced rent offer</li>
              <li>3 months salary cover</li>
            </ul>
          </ul>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-[30%] right-0 transform translate-x-1/2 z-10">
          <img src="/images/step2arrow.png" alt="Arrow" className="w-48 h-48" />
        </div>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/step2.png"
          alt="Mobile"
          className="absolute top-0 w-full ml-8 max-w-xs"
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

export default Step2;
