import dataCategories from "../../data/categories";
import Slider from "react-slick";

const ConfiteriaSlider = () => {
  const lacteosItems = dataCategories.filter(
    (item) => item.categorie === "Confiteria"
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    Response: false,
  };
  console.log(lacteosItems);
  return (
    <Slider
      {...settings}
      className="opacity-0 h-0 md:h-auto md:w-full mt-10 sm:flex sm:relative sm:z-auto pointer-events-none sm:opacity-100 md:pointer-events-auto justify-center items-center py-2 px-10"
    >
      {lacteosItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]" // Ajusta las alturas según sea necesario
        >
          <img
            className="object-contain h-full w-full" // Asegura que la imagen se ajuste sin cubrir todo el contenedor
            src={item.imgSrc}
            alt={item.categorie}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ConfiteriaSlider;
