import React, { useEffect, useRef, useState } from "react";

import Slider from "@mui/material/Slider"; // Import MUI Slider

function Step2({ currentComponent, handleScrollClick }) {
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
      <div className="relative w-1/2 h-screen flex flex-col justify-center px-20">
        <h2 className="text-6xl font-semibold text-gray-500 ml-96 ">
          Step{" "}
          <span
            className={`text-white transition-opacity duration-1000 ease-in-out ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            2
          </span>
        </h2>
        <div
          className={`w-[90px] h-[4px] mb-0 mt-14 bg-blue-500 ml-96 transition-transform duration-1000 ${
            isImageVisible ? "translate-y-[-30px]" : ""
          }`}
        ></div>
        <ul className="list-disc text-lg ml-96">
          <li className="text-yellow-500">
            Tenant selects Pay with Circle enabling:
          </li>
          <ul
            className={`list-disc text-sm text-gray-400 ml-5 mt-2 transition-opacity duration-1000 ease-in-out ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <li>Zero security deposit move-in</li>
            <li>Reduced rent offer</li>
            <li>3 months salary cover</li>
          </ul>
        </ul>

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
          className={`absolute top-0 w-full ml-8 max-w-xs  transition-opacity duration-1000 ease-in-out ${
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
