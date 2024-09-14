import React from "react";
import Slider from "@mui/material/Slider"; // Import MUI Slider

function Step4({ currentComponent, handleScrollClick }) {
  // Handle slider change event
  const handleSliderChange = (event, newValue) => {
    handleScrollClick(newValue); // Trigger the scroll click based on the slider value
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-between bg-black">
      {/* Left Text Section */}
      <div className="relative w-1/2 h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white ml-96">Step 4</h2>
        <div className="w-[60px] h-[2px] my-6 bg-white ml-96"></div>
        <ul className="list-disc text-lg ml-96">
          <li className="text-yellow-500">Tenant gets approved to move in:</li>
          <ul className="list-disc text-sm text-gray-400 ml-5 mt-2">
            <li>Gets Zero security deposit approval</li>
            <li>Zero cost EMI = Monthly Rent</li>
          </ul>
        </ul>

        {/* Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
          <img src="/images/step4arrow.png" alt="Arrow" className="w-72 h-72" />
        </div>
      </div>

      {/* Middle: Mobile Image */}
      <div className="relative w-1/2 h-screen">
        <img
          src="/images/step4.png"
          alt="Mobile"
          className="absolute top-4 w-full max-w-xs ml-8"
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

export default Step4;
