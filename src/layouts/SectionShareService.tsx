import React from "react";

type Props = {};

const SectionShareService = (props: Props) => {
  return (
    <div className="w-full flex flex-col bg-[#D6F8F6] items-center justify-center px-6">
      <div className="w-[90%] flex flex-col my-5  bg-slate-100 rounded-full py-5 px-10 sm:px-40">
        <h2 className="text-center font-extrabold text-2xl sm:text-4xl font-inter1 text-[#082EB7]">
          Gracias por tomarte este tiempo para compartirnos tu experiencia de
          servicio
        </h2>
      </div>
      <div className="w-[90%] flex flex-col my-5 py-5 px-5 sm:px-14">
        <p className="inline text-start font-inter1">
          Para nosotros son muy importantes tus comentarios. Esto nos ayuda a
          mejorar nuestros servicios.
          <br />
          <br />
          Te invitamos dentro del horario de atención de<span className="text-[#FFBC00] font-bold"> lunes a domingo de 7 AM
          a 10 PM </span>a llamar a nuestra línea de atención a clientes al <span className="font-bold text-black">teléfono 05
          232 5252</span> sin costo o escríbenos un correo a <br/> <span className="font-bold text-black">
          servicioalcliente@tiendasmass.pe</span> o bien, a llenar los <span className="font-bold text-black">siguientes
          campos</span> para poder darle atención puntual a tu comentario.
        </p>
      </div>
      
    </div>
  );
};

export default SectionShareService;
