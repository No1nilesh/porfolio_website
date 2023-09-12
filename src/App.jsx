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
    <div className="bg-[hsl(219,48%,8%)] text-white ">
      <Header/>
      <div id="home" className=" md:h-[100vh]  sections  "> <Home/></div>
      <div id="about" className=" md:h-[100vh]   sections 2xl:w-[70%] m-auto"><About/></div>
      <div id="experience" className="md:h-[100vh]   sections 2xl:w-[70%] m-auto"><Experience/></div>
      <div id="project" className=" sections 2xl:w-[70%] m-auto"><Project/></div>
      <div id="contact" className="md:h-[100vh]  sections 2xl:w-[70%] m-auto"><Contact/></div>
      <Footer/>
    </div>
    
      
    </BrowserRouter>
  );
}

export default App;
