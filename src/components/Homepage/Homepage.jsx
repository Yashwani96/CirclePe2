import React from "react";
import Slider from "@mui/material/Slider"; // Import the Slider from MUI

function Homepage({ currentComponent, handleScrollClick }) {
  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white ml-96">
          How does it Work?
        </h2>
        <div className="w-[60px] h-[2px] my-6 bg-white ml-96"></div>

        <p className="text-lg ml-96 text-gray-400">
          We make it possible in a quick and easy <br />
          few step process, takes max 5 mins
        </p>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/homepage.png"
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
            marks // Adds default marks for the slider points
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

export default Homepage;
