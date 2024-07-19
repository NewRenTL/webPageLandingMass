const Sections = () => {
    const titleList = [
      "Abarrotes",
      "Bebidas",
      "Lacteos",
      "Confiteria",
      "Panaderia",
      "Piqueos",
      "Limpieza",
      "Cuidado Personal",
    ];
  
    return (
      <div className="w-full flex flex-row px-10 py-5 bg-transparent">
        <aside className="containBar w-[30%] flex flex-col bg-[#D6F8F4] rounded-lg">
          <header className="w-full m-1 px-5 py-5 rounded-lg justify-start">
            <h2 className="text-start text-[#082EB7] text-3xl font-inter1 font-bold">
              CATEGORÍAS
            </h2>
          </header>
          <ul className="list-none flex flex-col flex-grow justify-center flex-wrap px-1">
            {titleList.map((title, index) => (
              <li
                key={index}
                className="flex pl-5 pr-1 py-4 w-full justify-start items-center mb-1 hover:bg-gray-300 flex-grow bg-transparent"
              >
                <h2 className="font-inter1 font-medium sm:text-sm md:text-base lg:text-xl w-[90%] text-[#082EB7]">
                  {title}
                </h2>
                <svg
                  fill="#000000"
                  height="20px"
                  width="20px"
                  className="flex"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                >
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </aside>
        <div className="imgContain w-[70%] h-auto flex flex-row px-5 rounded-lg">
          <img
            src="/img/persona1.jpg"
            className="flex rounded-lg h-full w-[50%] cover"
          ></img>
          <img
            src="/img/persona2.png"
            className="flex rounded-lg h-full w-[50%] cover"
          ></img>
        </div>
      </div>
    );
  };
  
  export default Sections;
  