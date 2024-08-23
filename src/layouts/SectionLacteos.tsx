import React from "react";
import LacteosSlider from "../components/Sliders/LacteosSlider";

const SectionLacteos: React.FC = () => {
  return (
    <div className="w-full mt-2 flex flex-col bg-[#D6F8F4]">
      <div className="flex flex-col mt-10 px-12">
        <h2 className=" text-xl text-center sm:text-start sm:text-[50px] uppercase  font-inter1 font-extrabold flex text-[#FFBC00]">
          Lacteos
        </h2>
      </div>

      <LacteosSlider></LacteosSlider>
    </div>
  );
};

export default SectionLacteos;
