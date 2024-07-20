

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#FFFFFF] px-2 py-12 flex flex-row">
        <div className="window-1 w-[33%] px-10 flex flex-col">
          <div className="flex flex-col w-full">
            <div className="titleConoceme justify-start w-full">
              <h2 className="font-inter1 uppercase text-[#FFBC00] text-2xl font-bold">Conóceme</h2>
            </div>
            <div className="enlaces text-[#082EB7] font-inter1 font-normal flex flex-wrap  flex-row">
              <div className="w-[50%] py-2 x-1">
                <a className="cursor-pointer">Conóceme</a>
              </div>
              <div className="w-[50%] py-2 x-1">
                <a className="cursor-pointer">Productos</a>
              </div>
              <div className="w-[50%] py-2 x-1">
                <a className="cursor-pointer">Precios Mass</a>
              </div>
              <div className="w-[50%] py-2 x-1">
                <a className="cursor-pointer">Contáctame</a>
              </div>
              <div className="w-[50%] py-4 x-1">
                <a className="cursor-pointer">Trabaja Conmigo</a>
              </div>
              <div className="w-[50%] py-4 x-1">
                <a className="cursor-pointer">Ubicame</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="titleConoceme mb-4 justify-start w-full">
              <h2 className="font-inter1 text-[#FFBC00] uppercase  font-bold text-2xl">Sigueme en:</h2>
            </div>
            <div className="flex flex-row">
              <div className="w-10 h-10 mx-2 flex">
                <img src="/img/facebook.png" alt="" className="cursor-pointer hover:bg-gray-500 rounded-full" />
              </div>
              <div className="w-10 h-10 mx-2 flex">
                <img src="/img/instagram.png" alt="" className="cursor-pointer hover:bg-gray-500 rounded-full" />
              </div>
              <div className="w-10 h-10 mx-2 flex">
                <img src="/img/youtube.png" alt="" className="cursor-pointer hover:bg-gray-500 rounded-full" />
              </div>
              <div className="w-10 h-10  mx-2 flex">
                <img src="/img/tiktok.png" alt="" className="cursor-pointer hover:bg-gray-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="window-2 w-[33%] flex flex-col">
          <div className="flex flex-col w-full">
            <div className="titleConoceme justify-center items-center text-center w-full">
              <h2 className="font-inter1 text-[#FFBC00] uppercase text-2xl text-center font-bold">Metodos de pago</h2>
            </div>
            <div className="flex flex-col">
              <div className="efectivo w-full flex flex-row justify-center items-center">
                <img src="/img/Efectivo.jpg" alt="" className="h-12" />
              </div>
              <div className="debito w-full flex flex-row justify-center items-center">
                <img src="/img/debito.jpg" alt="" className="h-12" />
              </div>
              <div className="credito w-full flex justify-center items-center">
                <img src="/img/credito.jpg" alt="" className="h-12" />
              </div>
              <div className="ohpay w-full flex justify-center items-center">
                <img src="/img/ohpay.jpg" alt="" className="h-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="window-3 px-5 w-[33%] flex flex-col">
          <div className="titleConoceme justify-start items-center text-center w-full">
            <h2 className="font-inter1 uppercase text-[#FFBC00] text-2xl text-start font-bold">
              Servicio al cliente
            </h2>
          </div>
          <div className="datosextra text-[#082EB7] flex flex-col">
            <div className="flex w-full py-2 justify-start">
              <p className="flex w-full">
                Horario de ateción:
                <br />
                De lunes a domingo de 7 AM a 10 PM
              </p>
            </div>
            <div className="flex w-full py-2 justify-start">
              <p className="flex w-full">servicioscliente@tiendamass.pe</p>
            </div>
            <div className="flex w-full  py-2 justify-start">
              <p className="flex w-full">
                Políticas de cambios y devoluciones
                <br />
                Términos y condiciones

                <br />
                Comprobante electrónico
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
