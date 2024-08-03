import { useRef, lazy, useState, useEffect, Suspense } from "react";
import useLenis from "./components/Utility/useLenis";
import "./components/CSS/utility.css";

// Lazy load components
import PageReveal from "./components/Pages/PageReveal";
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
  const expRef = useRef(null);
  const proRef = useRef(null);
  const conRef = useRef(null);

  const [Page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPage(false);
    }, 2000);
  }, []);

  if (Page) {
    return <PageReveal />;
  }

  return (
    <div className="bg-color text-white scroll-smooth">
      <div className="flex justify-center">
        <Header
          aboutRef={aboutRef}
          homeRef={homeRef}
          expRef={expRef}
          proRef={proRef}
          conRef={conRef}
        />
      </div>

      <div ref={homeRef} id="home" className="P_pages h-[100dvh] sections">
        <Suspense fallback={<>loading...</>}>
          <Home />
        </Suspense>
      </div>

      <div
        ref={aboutRef}
        id="about"
        className="P_pages lg:h-[100dvh] flex justify-center sections relative"
      >
        <Suspense fallback={<>loading...</>}>
          <About lenis={lenis} />
        </Suspense>
      </div>

      <div
        ref={expRef}
        id="experience"
        className="P_pages lg:h-[100dvh] flex justify-center sections 2xl:w-[80%] m-auto"
      >
        <Suspense fallback={<>loading...</>}>
          <Experience />
        </Suspense>
      </div>

      <div
        ref={proRef}
        id="project"
        className="P_pages sections flex justify-center m-auto"
      >
        <Suspense fallback={<>loading...</>}>
          <Project />
        </Suspense>
      </div>

      <div
        ref={conRef}
        id="contact"
        className="P_pages lg:h-[100dvh] flex justify-center items-center sections m-auto relative"
      >
        <Suspense fallback={<>loading...</>}>
          <Contact />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
