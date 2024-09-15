<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
=======
import React, { useEffect, useRef } from "react";
>>>>>>> 9e1a26b (added the keyboard functionality to the browser)
import Slider from "@mui/material/Slider"; // Import MUI Slider

function Step3({ currentComponent, handleScrollClick }) {
  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  const sliderRef = useRef(null);
<<<<<<< HEAD
  const [isImageVisible, setIsImageVisible] = useState(false); // State to control image visibility
=======
>>>>>>> 9e1a26b (added the keyboard functionality to the browser)
  // Add focus to the slider on component load
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus(); // Ensure slider is focused when page loads
    }
<<<<<<< HEAD
    setIsImageVisible(true);
=======
>>>>>>> 9e1a26b (added the keyboard functionality to the browser)
  }, []);

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <div className="flex justify-end mr-6">
          <div>
            <h2 className="text-6xl font-semibold text-gray-500  ">
              Step{" "}
              <span
                className={`text-white transition-opacity duration-1000 ease-in-out ${
                  isImageVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                3
              </span>
            </h2>
            <div
              className={`w-[90px] h-[4px] mb-0 mt-14 bg-blue-500  transition-transform duration-1000 ${
                isImageVisible ? "translate-y-[-30px]" : ""
              }`}
            ></div>
            <ul
              className={`list-disc text-lg  transition-opacity duration-1000 ease-in-out ${
                isImageVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <li className="text-yellow-500">
                Smooth Onboarding for the Tenant begins
              </li>
            </ul>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
          <img src="/images/step3arrow.png" alt="Arrow" className="w-72 h-72" />
        </div>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/step3.png"
          alt="Mobile"
          className={`absolute mt-7 w-full max-w-xs ml-8 transition-opacity duration-1000 ease-in-out ${
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
            marks // Adds default marks for slider points
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

export default Step3;
