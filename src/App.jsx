import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="bg-color text-white ">
      <Header/>
      <div id="home" className=" h-[100vh]  sections  "> <Home/></div>
      <div id="about" className=" lg:h-[100vh] flex justify-center   sections bg-[#0c0611]"><About/></div>
      <div id="experience" className="lg:h-[100vh] flex justify-center  sections 2xl:w-[80%] m-auto"><Experience/></div>
      <div id="project" className=" sections flex justify-center m-auto"><Project/></div>
      <div id="contact" className="lg:h-[100vh] flex justify-center items-center  sections 2xl:w-[80%] m-auto"><Contact/></div>
      <Footer/>
    </div>
    
      
    </BrowserRouter>
  );
}

export default App;
