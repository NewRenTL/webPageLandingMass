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
          <div className="w-[10%] h-[100%] items-center flex flex-row">
            <img
              className="w-full h-[80%] rounded-xl"
              src="./img/logomass.png"
            ></img>
          </div>
          {listValuesList.map((x: string, index: number) => (
            <div
              key={index}
              className="p-1 w-[12%] font-inter1 flex h-full items-center justify-center text-center"
            >
              {x}
            </div>
          ))}
          <div className="w-[15%] flex justify-center items-center">
            <button className=" flex text-center font-inter1 font-bold px-5 py-2 text-[#FFFFFF]  rounded-2xl border-2 bg-[#082EB7]">
              Alquila tu local aqui
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
