import React from "react";
import PolygonSvgIcon from "../assets/svg/PolygonSvgIcon";

const SectionFormContact = () => {
  return (
    <div className="w-[100%] flex flex-col px-10 py-4  justify-center items-center bg-slate-50">
      <div className="flex flex-col sm:flex-row w-full my-2 sm:justify-between">
        <div className="w-full sm:w-[48%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Nos contactas para</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Selecciona un motivo"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[48%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Nos contactas para</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Selecciona un motivo"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFormContact;
