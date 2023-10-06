import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import { BrowserRouter } from "react-router-dom";
import useLenis from "./components/Utility/useLenis";

function App() {
  useLenis();
const aboutRef = useRef(null);
const homeRef = useRef(null);
const expref = useRef(null);
const proRef = useRef(null);
const conRef = useRef(null);
  return (
    <BrowserRouter>
    <div className="bg-color text-white scroll-smooth ">
     <div className="flex justify-center"><Header aboutRef={aboutRef} homeRef={homeRef} expref={expref} proRef={proRef} conRef={conRef} /></div>
      <div ref={homeRef} id="home"       className=" P_pages  h-[100vh]  sections  "> <Home/></div> 
      <div ref={aboutRef} id="about"      className=" P_pages  lg:h-[100vh] flex justify-center   sections relative"><About/></div>
      <div ref={expref} id="experience" className=" P_pages lg:h-[100vh] flex justify-center  sections 2xl:w-[80%] m-auto"><Experience/></div>
      <div ref={proRef} id="project"    className=" P_pages  sections flex justify-center m-auto"><Project/></div>
      <div ref={conRef} id="contact"    className=" P_pages lg:h-[100vh] flex justify-center items-center  sections 2xl:w-[80%] m-auto"><Contact/></div>
      <Footer/>
    </div>
    
      
    </BrowserRouter>
  );
}

export default App;
