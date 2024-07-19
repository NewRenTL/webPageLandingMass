
import "./App.css";
import Publicity from "./layouts/Publicity";
import Sections from "./layouts/Sections";
import Store from "./layouts/Store";
import TopBar from "./layouts/TopBar";

function App() {
  return (
    <>
      <div className="flex w-full flex-col bg-[#082EB7]">
        {/*Just here will appear different comoponent and TopBar*/}
        <TopBar></TopBar>
        <Sections/>
        <Store></Store>
      </div>
    </>
  );
}

export default App;
