import React from 'react'
import Footer from "../layouts/Footer";
import Publicity from "../layouts/Publicity";
import Sections from "../layouts/Sections";
//import Store from "./layouts/Store";
import TopBar from "../layouts/TopBar";
import SlidesProducts from '../layouts/SlidesProducts'
import ExtraSection from '../layouts/ExtraSection'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return <>
        <Sections/>
        <Publicity/>
        {/*<Store></Store>*/}
        <SlidesProducts/>
        <ExtraSection/>
        
        {/* <Footer/> */}
    </>
}

export default Home;