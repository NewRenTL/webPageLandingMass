import React from "react";
import SectionsProducts from "../layouts/SectionsProducts";
import SectionLacteos from "../layouts/SectionLacteos";
import SectionBebidas from "../layouts/SectionsBebidas";
import SectionAbarrotes from "../layouts/SectionAbarrotes";
import SectionPiqueos from "../layouts/SectionPiqueos";
import SectionLimpieza from "../layouts/SectionLimpieza";
import SectionCuidadoPersonal from "../layouts/SectionCuidadoPersonal";



import SectionsConfiteria from "../layouts/SectionsConfiteria";
import SectionCuidado_Personal from "../layouts/SectionCuidadoPersonal";
const ProductsPage = () => {
  return (
    <>
      <SectionsProducts></SectionsProducts>
      <SectionAbarrotes></SectionAbarrotes>

      <SectionBebidas></SectionBebidas>
      <SectionLacteos></SectionLacteos>
      <SectionsConfiteria></SectionsConfiteria>
      <SectionPiqueos></SectionPiqueos>
      <SectionLimpieza></SectionLimpieza>
      <SectionCuidadoPersonal></SectionCuidadoPersonal>
    </>
  );
};

export default ProductsPage;
