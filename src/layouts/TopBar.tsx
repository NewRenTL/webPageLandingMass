const TopBar = () => {
  let listValuesList: string[] = [
    "Conóceme",
    "Productos",
    "Precios Mass",
    "Contáctame",
    "Ubícame",
    "Trabaja conmigo",
  ];

  return (
    <>
      <div className="bg-transparent w-full sticky flex flex-col items-center px-5 py-10">
        <nav className="w-[95%] h-15 flex flex-row rounded-3xl items-center justify-center px-4 py-2 bg-[#FFBC00]">
          <div className="w-[10%] h-[100%] items-center cursor-pointer flex flex-row">
            <img
              className="w-full h-[80%] rounded-xl"
              src="./img/logomass.png"
            ></img>
          </div>
          {listValuesList.map((x: string, index: number) => (
            <div
              key={index}
              className="px-1 py-4 w-[12%] text-xl font-extrabold transition-all duration-300 cursor-pointer font-inter1 flex h-full hover:bg-yellow-300 items-center justify-center text-center rounded-lg"
            >
              {x}
            </div>
          ))}
          <div className="w-[15%] flex justify-center items-center">
            <button className=" flex text-center transition-all duration-200 font-inter1 font-bold px-5 py-4 text-[#FFFFFF]  rounded-2xl border-2 bg-[#082EB7] hover:bg-blue-500">
              Alquila tu local aqui
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
