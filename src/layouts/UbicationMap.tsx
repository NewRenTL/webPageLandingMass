import React from "react";
import PolygonSvgIcon from "../assets/svg/PolygonSvgIcon";
import ubicationX from '/img/map.png'

const UbicationMap: React.FC = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="w-full md:w-[50%] px-10 py-5 items-center justify-center ">
        <div className="w-[100%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">
            Departamento
          </h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Selecciona un departamento"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
        <div className="w-[100%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">
            Provincia
          </h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Selecciona una provincia"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
        <div className="w-[100%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">
            Distrito
          </h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Selecciona un distrito"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] px-10 py-5 items-center justify-center ">
        <img src={ubicationX} className="object-cover flex"></img>
      </div>
    </div>
  );
};

export default UbicationMap;
