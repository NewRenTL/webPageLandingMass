import React from "react";

const ExtraSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#FFF8D9] rounded-xl mt-2 mb-0 py-4">
      <div className="w-full md:w-[60%] flex flex-col py-5 px-6">
        <div className="flex flex-col text-start text-white text-3xl xl:text-4xl px-10 py-4 bg-[#082EB7] rounded-full">
          <p className="flex font-bold font-inter1 uppercase"> !Hola!</p>
          <p className="inline font-bold font-inter1 uppercase flex-row ">
            {" "}
            Soy tu tienda{" "}
            <span className="font-inter1 inline-flex text-[#FFBC00]">
              &nbsp;MASS
            </span>
          </p>
        </div>
        <p className="font-inter1 text-start flex text-[#082EB7] px-2 lg:px-10 my-2 lg:my-5 lg:text-2xl py-1">
          Soy la tienda con los mejores precios y los productos necesarios para
          tu hogar siempre cerquita de ti
        </p>

        <div className="icons flex flex-col md:flex-row h-full items-center justify-center">
          <div className="flex flex-col w-1/3 my-2 justify-center items-center">
            <div className="flex container_image mb-2 w-[80%] justify-center">
              <img className="lg:w-[45%]" src="/img/Pagina_2/casita.png"></img>
            </div>
            <div className="w-full flex font-inter1 font-bold text-center justify-center text-2xl text-[#FFBC00]">
              956
            </div>
            <h3 className="flex text-[#082EB7] lg:text-2xl font-semibold">tiendas</h3>
          </div>
          <div className="flex flex-col w-1/3 my-2 justify-center items-center">
            <div className="flex container_image mb-2 w-[80%] justify-center">
              <img className="lg:w-[33%]" src="/img/Pagina_2/productX1.png"></img>
            </div>
            <div className="w-full flex font-inter1 font-bold text-center justify-center text-2xl text-[#FFBC00]">
              750
            </div>
            <h3 className="flex text-[#082EB7] lg:text-2xl font-semibold">productos</h3>
          </div>
          <div className="flex flex-col w-1/3 my-2 justify-center items-center">
            <div className="flex container_image mb-2 w-[80%] justify-center">
              <img className="lg:w-[40%]" src="/img/Pagina_2/mapita.png"></img>
            </div>
            <div className="w-full flex font-inter1 font-bold text-center justify-center text-2xl text-[#FFBC00]">
              137
            </div>
            <h3 className="flex text-[#082EB7] lg:text-2xl font-semibold">distritos</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-8 justify-center items-center md:w-[40%]">
        <img className="flex" src="/img/Pagina_2/juntomass.png"></img>
      </div>
    </div>
  );
};

export default ExtraSection;
