import { useState, useEffect, useRef, useCallback } from "react";
import useGSAP from "./Utility/useGSAPP";
import useLenis from "./Utility/useLenis";
import useDebounce from "./Utility/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faToolbox } from "@fortawesome/free-solid-svg-icons/faToolbox";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

function Navbar() {
  const lenis = useLenis();
  const debounce = useDebounce();
  const [firstVisit, setFirstVisit] = useState(false);
  const [buttonChanged, setbuttonChanged] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ref = useRef();

  //checking user to visit app for first time
  useEffect(() => {
    // Check if the user has visited the page before
    const hasVisitedBefore = localStorage.getItem("visitedBefore");
    if (!hasVisitedBefore) {
      // If not visited before, set the flag and mark it as visited
      setFirstVisit(true);
      localStorage.setItem("visitedBefore", true);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const elId = "#" + element.id;
    element ? lenis.scrollTo(elId) : null;
  };

  const toggleActive = useCallback(() => {
    let currentActiveButton = null;
    const sections = document.querySelectorAll(".sections");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        currentActiveButton = section.id;
        return; // Exit the loop once the active section is found
      }
    });
    setActiveSection(currentActiveButton);
  }, []);

  const debouncedToggleActive = debounce(toggleActive, 10);
  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 2 },
      });
      tl.to(ref.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        y: 0,
        duration: 2.2,
      });
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", debouncedToggleActive, { passive: true });
    if (activeSection !== "home") setbuttonChanged(true);
    return () => {
      window.removeEventListener("scroll", debouncedToggleActive);
    };
  }, [debouncedToggleActive, activeSection]);

  return (
    <nav
      ref={ref}
      className="fixed bottom-2  z-50   xl:w-1/3 clip translate-y-20 opacity-0"
    >
      <ul className="flex gap-6 justify-center items-center  border-gray-600 py-2 px-4 rounded-full  glass xl:gap-12">
        <li
          onClick={() => scrollToSection("home")}
          className={`cursor-pointer transition-transform ${
            activeSection === "home" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faHouse}
            key={"home"}
            style={{ color: "#b9c7df", width: "24px" }}
          />
        </li>
        <li
          onClick={() => scrollToSection("about")}
          className={`cursor-pointer transition-transform ${
            activeSection === "about" ? "active" : ""
          }  ${
            activeSection === "home" &&
            firstVisit &&
            !buttonChanged &&
            "animate-bounce"
          }`}
        >
          <FontAwesomeIcon
            icon={faUser}
            key={"about"}
            style={{ color: "#b9c7df", width: "24px" }}
          />
        </li>
        <li
          onClick={() => scrollToSection("experience")}
          className={`cursor-pointer transition-transform ${
            activeSection === "experience" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faBook}
            key={"experience"}
            style={{ color: "#b9c7df", width: "24px" }}
          />
        </li>
        <li
          onClick={() => scrollToSection("project")}
          className={`cursor-pointer transition-transform ${
            activeSection === "project" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faToolbox}
            key={"project"}
            style={{ color: "#b9c7df", width: "24px" }}
          />
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer transition-transform ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            key={"contact"}
            style={{ color: "#b9c7df", width: "24px" }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
