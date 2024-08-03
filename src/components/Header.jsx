/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DP from "/dp.webp";
import useDebounce from "./Utility/useDebounce";

const Header = ({ aboutRef, homeRef, expRef, proRef, conRef }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef(null);
  const headText = useRef(null);
  const debounce = useDebounce();

  const addShadow = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add("header-shadow");
    } else {
      headerRef.current.classList.remove("header-shadow");
      setIsExpanded(true);
    }
  };
  const debouncedAddShadow = debounce(addShadow, 45);

  const expandHeader = () => {
    setIsExpanded(true);
  };

  const shrinkHeader = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      if (isExpanded) {
        gsap.to(headText.current, {
          opacity: 1,
          duration: 1,
          display: "block",
          ease: "power4.out",
        });
      } else {
        gsap.to(headText.current, {
          duration: 0.9,
          display: "none",
          ease: "power4.out",
        });
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });
    tl.to(headerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      y: 0,
      duration: 2,
      delay: 0.4,
    });
    //
    window.addEventListener("scroll", debouncedAddShadow, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          expandHeader(); // Page is in viewport, expand the navbar
        } else {
          shrinkHeader(); // Page is not in viewport, shrink the navbar
        }
      },
      { threshold: 0.9 }
    ); // Trigger when at least 50% of the page is in viewport

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(expRef.current);
    observer.observe(proRef.current);
    observer.observe(conRef.current);

    return () => {
      window.removeEventListener("scroll", debouncedAddShadow);
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className=" w-full  absolute top-0 z-50 clip opacity-0  m-auto 2xl:w-[80%] p-4"
    >
      {/* top strip on the interface */}

      <div className=" container   top-strip   ">
        <div className="flex items-center gap-2">
          <div className="ppic w-10">
            <img
              src={DP}
              alt="Nilesh Gautam"
              height={"40px"}
              width={"40px"}
              loading="eager"
            />
          </div>{" "}
          <div
            ref={headText}
            className="scale-1 text-xl  text-color font-semibold htext max-w-full"
          >
            Nilesh Gautam
          </div>
          {/* <div className="text-xl  text-color font-semibold transition-transform  md:hidden">
            Nilesh Gautam
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
