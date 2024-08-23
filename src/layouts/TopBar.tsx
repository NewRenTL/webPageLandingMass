import MenuSvgIcon from "../assets/svg/MenuSvgIcon";
import IconUserSvgIcon from "../assets/svg/IconUserSvgIcon.jsx";
import { useState } from "react";
import CrossIconSvg from "../assets/svg/CrossIconSvg.jsx";
import { useNavigate } from "react-router-dom";

interface listValue {
  name: string;
  route: string;
}

const TopBar = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const listValuesList: listValue[] = [
    { name: "Conóceme", route: "/second" },
    { name: "Productos", route: "/productos" }, // Puedes agregar más rutas en el futuro
    { name: "Contáctame", route: "/contact" },
    { name: "Ubícame", route: "/ubicame" }, // Placeholder para futuras rutas
    { name: "Trabaja conmigo", route: "/trabajo" }, // Placeholder para futuras rutas
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (route) => {
    navigate(route);
    setIsMenuOpen(false); // Cierra el menú después de la navegación
  };

  return (
    <>
      <div className="bg-transparent w-full sticky hidden top-0 lg:flex flex-col items-center px-5 py-10">
        <nav className="w-[95%] h-15 flex flex-row rounded-3xl items-center justify-center px-4 py-2 bg-[#FFBC00]">
          <div className="w-[10%] h-[100%] items-center cursor-pointer flex flex-row">
            <img
              className="w-full h-[80%] rounded-xl"
              src="./img/logomass.png"
            ></img>
          </div>
          {listValuesList.map((x: listValue, index: number) => (
            <div
              key={index}
              className="px-1 py-4 w-[12%] text-xl font-extrabold transition-all text-[#082EB7] duration-300 cursor-pointer font-inter1 flex h-full hover:bg-yellow-300 items-center justify-center text-center rounded-lg"
              onClick={() => handleNavigation(x.route)}
            >
              {x.name}
            </div>
          ))}
          <div className="w-[15%] flex justify-center items-center">
            <button className=" flex text-center transition-all duration-200 font-inter1 font-bold px-5 py-4 text-[#FFFFFF]  rounded-2xl border-2 bg-[#082EB7] hover:bg-blue-500">
              Alquila tu local aqui
            </button>
          </div>
        </nav>
      </div>
      <div className="w-full sticky top-0 h-[50px] bg-[#082EB7] flex lg:hidden flex-row items-center px-2 py-2">
        <div
          className="flex h-[100%] w-[10%] hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuSvgIcon></MenuSvgIcon>
          <div
            className={`absolute ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } top-0 left-0 w-[80%] bg-[#082EB7] text-white z-50 flex flex-col items-center justify-center transition duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex flex-row justify-between items-center pl-3">
              <h2 className="w-[82%] flex text-xl font-inter1 font-bold uppercase">
                Menú
              </h2>
              <div
                className="w-[10%] md:w-[7%] flex flex-col"
                onClick={toggleMenu}
              >
                <CrossIconSvg></CrossIconSvg>
              </div>
            </div>

            <div className="w-full flex flex-col px-2">
              <ul className="text-xl">
                {listValuesList.map((x: listValue, index: number) => (
                  <li
                    key={index}
                    tabIndex={index}
                    className="my-2 px-4 py-3 text-xl font-extrabold transition-all text-white duration-300 cursor-pointer font-inter1 flex h-full hover:bg-yellow-300 items-center justify-start text-start rounded-lg"
                    onClick={() => handleNavigation(x.route)}
                  >
                    {x.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="title flex flex-col justify-center items-center w-[75%] px-2">
          <h2 className="text-center font-bold font-inter1 text-3xl text-[#FFBC00] w-full">
            MASS
          </h2>
        </div>
        <div className="iconUser flex flex-col justify-center items-center w-[15%] h-[60%] px-1">
          <IconUserSvgIcon></IconUserSvgIcon>
        </div>
      </div>
    </>
  );
};

export default TopBar;
