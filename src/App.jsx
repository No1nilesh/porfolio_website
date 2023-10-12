import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import useLenis from "./components/Utility/useLenis";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/src/components/CSS/utility.css'
import useDebounce from "./components/Utility/useDebounce";

// Lazy load components
const About = lazy(() => import("./components/Pages/About"));
const Contact = lazy(() => import("./components/Pages/Contact"));
const Experience = lazy(() => import("./components/Pages/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const PageReveal = lazy(() => import("./components/Pages/PageReveal"));
const CustomCursor = lazy(() => import("./components/UIComponents/CustomCursor"));

const Home = lazy(() => import("./components/Pages/Home"));
const Project = lazy(() => import("./components/Pages/Project/Project"));

function App() {
  useLenis();
  const debounce = useDebounce();
const aboutRef = useRef(null);
const homeRef = useRef(null);
const expref = useRef(null);
const proRef = useRef(null);
const conRef = useRef(null);
const [currentSection, setCurrentSection] = useState(null);


useEffect(() => {
  // Function to handle scroll and determine current section
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > aboutRef.current.offsetTop && scrollPosition <= expref.current.offsetTop) {
      setCurrentSection("about");
    } else if (scrollPosition >= expref.current.offsetTop && scrollPosition <= proRef.current.offsetTop) {
      setCurrentSection("experience");
    } else if (scrollPosition > proRef.current.offsetTop && scrollPosition <= conRef.current.offsetTop) {
      setCurrentSection("project");
    } else if (scrollPosition >= conRef.current.offsetTop) {
      setCurrentSection("contact");
    } else {
      setCurrentSection("home");
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 20);

  window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", debouncedHandleScroll, { passive: true });
  };
}, []);

  return (
    <BrowserRouter>
    <div className="bg-color text-white scroll-smooth ">
   
        <Suspense fallback={<PageReveal/>}>
          <ToastContainer />
          <div className="flex justify-center">
            <Header
              aboutRef={aboutRef}
              homeRef={homeRef}
              expref={expref}
              proRef={proRef}
              conRef={conRef}
            />
          </div>
          <div ref={homeRef} id="home" className=" P_pages  h-[100vh]  sections  ">
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          </div>
          <div>
            {/* {(currentSection === "about" || currentSection === "experience") && (
              <Suspense fallback={null}>
                <CustomCursor />
              </Suspense>
            )} */}
            <div
              ref={aboutRef}
              id="about"
              className=" P_pages  lg:h-[100vh] flex justify-center   sections relative"
            >
              <Suspense fallback={null}>
                <About />
              </Suspense>
            </div>
            <div
              ref={expref}
              id="experience"
              className=" P_pages lg:h-[100vh] flex justify-center  sections 2xl:w-[80%] m-auto"
            >
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </div>
          </div>
          <div
            ref={proRef}
            id="project"
            className=" P_pages  sections flex justify-center m-auto"
          >
            <Suspense fallback={null}>
              <Project />
            </Suspense>
          </div>
          <div
            ref={conRef}
            id="contact"
            className=" P_pages lg:h-[100vh] flex justify-center items-center  sections 2xl:w-[80%] m-auto"
          >
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Suspense>
    </div>
  </BrowserRouter>
  );
}

export default App;
