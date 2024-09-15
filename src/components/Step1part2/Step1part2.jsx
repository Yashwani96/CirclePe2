import React, { useRef, useEffect, useState } from "react";
import Slider from "@mui/material/Slider"; // Import MUI Slider

function Step1part2({ currentComponent, handleScrollClick, showPart1 }) {
  const [activeListItem, setActiveListItem] = useState(2);
  const sliderRef = useRef(null);
<<<<<<< HEAD
  const [isImageVisible, setIsImageVisible] = useState(false); // State to control image visibility
=======
>>>>>>> 9e1a26b (added the keyboard functionality to the browser)

  // Ensure the slider is focused when the component mounts
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus(); // Set focus to the slider
    }
<<<<<<< HEAD
    setIsImageVisible(true);
=======
>>>>>>> 9e1a26b (added the keyboard functionality to the browser)
  }, []);

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
        <div className="flex justify-end mr-6">
          <div>
            <h2 className="text-6xl font-semibold text-gray-500  ">
              Step <span className="text-white">1</span>
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
              {/* First List Item */}
              <li
                className={`${
                  activeListItem === 1 ? "text-yellow-500" : "text-gray-400"
                } cursor-pointer hover:text-yellow-500`}
                onClick={() => {
                  handleClick(1);
                  showPart1(); // Navigate back to Step1 on click
                }}
              >
                Tenant selects the property
              </li>

              {/* Second List Item: Default Highlighted */}
              <li
                className={`${
                  activeListItem === 2 ? "text-yellow-500" : "text-gray-400"
                } cursor-pointer hover:text-yellow-500`}
                onClick={() => handleClick(2)}
              >
                Tenant selects flexible rent tenure & amount
              </li>
            </ul>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
          <img
            src="/images/step1part2arrow.png"
            alt="Arrow"
            className="w-72 h-72"
          />
        </div>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/step1part2.png"
          alt="Mobile"
          className={`absolute bottom-0 w-full max-w-xs ml-8 transition-opacity duration-1000 ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right: MUI Slider */}
        <div className="h-full flex justify-center items-center ml-56">
          <Slider
            ref={sliderRef} // Add a ref to focus the slider
            orientation="vertical"
            value={currentComponent}
            min={0}
            max={4}
            step={1}
            marks // Add default marks for each step
            onChange={handleSliderChange}
            aria-label="Component Slider" // Accessibility label for screen readers
            tabIndex={0} // Ensure the slider is keyboard focusable
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

export default Step1part2;
