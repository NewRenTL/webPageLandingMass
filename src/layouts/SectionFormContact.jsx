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
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Nombre Completo</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Ingresa tu nombre completo"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[100%] focus:outline-none"
            ></input>
            {/* <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full my-2 sm:justify-between">
        <div className="w-full sm:w-[48%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Tienda Mass</h2>
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
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Teléfono</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Ingresa tu nombre completo"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[100%] focus:outline-none"
            ></input>
            {/* <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full my-2 sm:justify-between">
        <div className="w-full sm:w-[48%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">DNI</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Ingresa tu DNI"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[85%] focus:outline-none"
            ></input>
            <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[48%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Teléfono</h2>
          <div className="w-full flex flex-row bg-white rounded-full border-4 border-[#9E9E9E] p-1">
            <input
              placeholder="Ingresa tu email"
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[100%] focus:outline-none"
            ></input>
            {/* <div className="w-[15%] flex flex-row items-center justify-center">
              <PolygonSvgIcon></PolygonSvgIcon>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full my-2 sm:justify-between">
        <div className="w-full sm:w-[100%] my-2 flex flex-col">
          <h2 className="text-xl mb-2 font-bold font-inter1 text-[#FFBC00]">Comentarios</h2>
          <div className="w-full flex flex-row bg-white rounded-xl border-4 border-[#9E9E9E] p-1">
            {/* <input
              placeholder="Ingresa tu DNI"
              
              className="px-10 py-2 rounded-full text-[#9E9E9E] w-[100%] focus:outline-none"
            ></input> */}
            <textarea placeholder="Ingresa tus comentarios aqui.."  className="px-3 py-2  text-[#9E9E9E] w-[100%] focus:outline-none" rows={10} ></textarea>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full my-2 sm:justify-between">
        <div className="w-full sm:w-[100%] my-2 flex flex-col">
          <div className="w-full flex flex-row bg-white rounded-xl justify-center items-center p-1">
            <p className="text-center inline font-inter1 ">Estoy de acuerdo con el <span className="text-[#4662C9]">Aviso de privacidad</span> y los <span className="text-[#4662C9]">Términos y condiciones</span></p>
          </div>
          <div className="w-full flex my-4 items-center justify-center">
                <button className="py-4 px-10 rounded-lg bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-700 transition duration-200">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFormContact;
