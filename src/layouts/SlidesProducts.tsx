// type Props = {}

import React from "react";
import Slider from "react-slick";
import CardProduct from "../components/Cards/CardProduct";

const SlidesProducts: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    Response:false
  };

  return (
    <Slider
      {...settings}
      className="opacity-0 h-0 md:h-auto md:w-full md:flex md:relative md:z-auto pointer-events-none md:opacity-100 md:pointer-events-auto  justify-center items-center py-2 px-2"
    >
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
    </Slider>
  );
};

export default SlidesProducts;
