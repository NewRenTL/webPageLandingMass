import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
// import Publicity from "./layouts/Publicity";
// import Sections from "./layouts/Sections";

import Home from "../src/pages/Home.jsx";
import ContactPage from "../src/pages/ContactPage"
//import Store from "./layouts/Store";
import TopBar from "./layouts/TopBar";

import SecondPage from '../src/pages/SecondPage'

function App() {
  return (
    <>
      <div className="flex w-full flex-col bg-[#082EB7] overflow-x-hidden">
        {/*Just here will appear different comoponent and TopBar*/}
        {/* <Sections />
        <Publicity /> */}
        {/*<Store></Store>*/}
        {/* <Footer /> */}
        <BrowserRouter>
          <TopBar></TopBar>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/second" element={<SecondPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="*" element={<Home></Home>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
