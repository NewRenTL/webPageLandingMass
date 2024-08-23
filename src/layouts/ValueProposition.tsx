import React from "react";

type Props = {};

const ValueProposition = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row px-2 py-5 bg-[#D6F8F4]">
      <div className="w-full md:w-[50%] flex flex-col  items-center justify-start">
        <div className="w-[90%] md:w-[70%] flex flex-col bg-slate-50 justify-center items-center p-8 rounded-full">
          <p className="flex flex-col text-3xl text-[#082EB7] uppercase font-bold font-inter1">
            Mi propuesta
            <span className="inline text-yellow-400">de&nbsp;Valor</span>
          </p>
        </div>
        <div className="w-full md:w-[70%] flex flex-col my-6 px-3 text-lg text-[#082EB7]">
          <p>
            “Soy una tienda con los precios más bajos cerca de ti, y lo consigo
            gracias a mi surtido optimizado especializado en marcas controladas
            de calidad que cubren las necesidades diarias de mis caser@s”
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
        <div className="w-[90%] md:w-[80%] flex flex-col bg-[#082EB7] justify-center items-center p-10 rounded-full">
          <p className="flex flex-col text-3xl text-[#ffffff] uppercase font-bold font-inter1">
            Soy una tienda de
            <span className="inline text-yellow-400">&nbsp;Bajos Precios</span>
          </p>
        </div>
        <div className="w-full md:w-[60%] flex flex-col my-6 px-5 text-[#082EB7]">
          <p className="text-center flex justify-center items-center">
            ¿Como lo logro?
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <img className="flex" src="/img/Pagina_2/easyprocess.png"></img>
        </div>
        <div className="flex w-full px-2 my-6">
          <div className="w-[50%] flex flex-col justify-center text-center items-center px-8">
            <p className="inline text-center text-[#082EB7] font-inter1">
              Manteniendo siempre{" "}
              <span className="text-yellow-400 font-semibold">
                procesos simples y costos bajos
              </span>
              , logro tener <span className="text-yellow-400 font-semibold">los mejores precios todos los días</span> y cerquita a tu
              hogar.
            </p>
          </div>
          <div className="w-[50%] flex flex-col justify-center text-center items-center px-8">
            <p className="inline text-cente text-[#082EB7]  font-inter1">
              <span className="text-yellow-400 font-semibold">¡Pero eso no es todo!</span> Mi gente está siempre revisando los precios
              de todos para asegurarte que <span className="text-yellow-400 font-semibold">yo tengo los mejores</span>.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
