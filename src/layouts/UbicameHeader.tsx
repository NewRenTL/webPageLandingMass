import React from "react"



const UbicameHeader:React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-[#FFF8D9] p-10 sm:flex-row">
      <div className="w-full sm:w-[30%] flex flex-col items-center justify-center">
        <p className="text-center inline">
          <span className="font-extrabold text-2xl uppercase text-blue-600">Ubícame</span><br />
          <span className="font-bold text-xl uppercase text-yellow-400">En estas ciudades</span>
        </p>
      </div>
      <div className="w-full sm:w-[70%] px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col px-5 py-3 w-[90%] justify-center items-center bg-transparent border-4 border-black rounded-full">
          <p className="text-blue-600 font-inter1 text-center font-bold flex flex-wrap">
            PIURA, TRUJILLO, LIMA, ICA, AREQUIPA, CHIMBOTE, HUANCAYO
          </p>
        </div>
        <div className="flex flex-col px-5 py-3 mt-2 w-[90%] justify-center items-center">
          <p className="text-black font-semibold text-center flex-wrap">
            Con los mejores precios cada vez&nbsp;
            <span className="text-blue-600">Mass</span>&nbsp;cerca de ti
          </p>
        </div>
      </div>
    </div>
  )
}

export default UbicameHeader