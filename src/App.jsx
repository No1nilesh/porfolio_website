import { useRef, lazy, Suspense} from "react";
import useLenis from "./components/Utility/useLenis";
import "/src/components/CSS/utility.css";

// Lazy load components
import PageReveal from './components/Pages/PageReveal'
import Home from "./components/Pages/Home";
const About = lazy(() => import("./components/Pages/About/About"));
const Contact = lazy(() => import("./components/Pages/Contact"));
const Experience = lazy(() => import("./components/Pages/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Project = lazy(() => import("./components/Pages/Project/Project"));


function App() {
  const lenis = useLenis();
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const expref = useRef(null);
  const proRef = useRef(null);
  const conRef = useRef(null);



  return (
      <div className="bg-color text-white scroll-smooth">
        <Suspense fallback={<PageReveal />}>
          <div className="flex justify-center">
            <Header
              aboutRef={aboutRef}
              homeRef={homeRef}
              expref={expref}
              proRef={proRef}
              conRef={conRef}
            />
          </div>
  
          <div ref={homeRef} id="home" className="P_pages h-[100vh] sections">

            <Home />

          </div>

          <div
            ref={aboutRef}
            id="about"
            className="P_pages lg:h-[100vh] flex justify-center sections relative"
          >

            <About lenis={lenis} />

          </div>

          <div
            ref={expref}
            id="experience"
            className="P_pages lg:h-[100vh] flex justify-center sections 2xl:w-[80%] m-auto"
          >

            <Experience />

          </div>

          <div
            ref={proRef}
            id="project"
            className="P_pages sections flex justify-center m-auto"
          >

            <Project />

          </div>

          <div
            ref={conRef}
            id="contact"
            className="P_pages lg:h-[100vh] flex justify-center items-center sections m-auto relative"
          >

            <Contact />

          </div>


          <Footer />

        </Suspense>
      </div>
  );
}

export default App;
