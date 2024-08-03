import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import MemoizeComputerCanvas from "../Canvas/Computer";
import useGSAP from "../Utility/useGSAPP";
import Navbar from "../Navbar";
import SocialLinks from "../UIComponents/SocialLinks";
function Home() {
  const SubHeadRef = useRef(null);
  const TextRef = useRef(null);
  const [animateText, setAnimateText] = useState("Web Developer!");
  const myAnimateText = useMemo(
    () => ["Problem Solver!", "Web Developer!"],
    []
  );

  const changeText = useCallback(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAnimateText(myAnimateText[i]);
      i++;
      if (i >= myAnimateText.length) {
        i = 0;
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [myAnimateText]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (TextRef.current) {
        TextRef.current.classList.add("text-animation");
        changeText();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [changeText]);

  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 2 },
      });
      tl.fromTo(
        "#name_text",
        { opacity: 0, y: -40 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
          duration: 2.2,
        }
      );
      tl.fromTo(
        "h6",
        { opacity: 0, y: -40 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
          duration: 2.2,
        },
        "-=2"
      );
      tl.fromTo(
        SubHeadRef.current,
        { opacity: 0, y: 20 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
        },
        "-=1.8"
      );
      tl.to(".social_links", { y: 0, stagger: 0.05, opacity: 1 }, "-=1.5");
    },
  });

  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative bg">
      <MemoizeComputerCanvas />
      <span className="self-start absolute top-32 select-none pointer-events-none">
        <h6 className="text-red-500 text-lg relative top-1 md:top-4 px-1 clip">
          Hi I'm
        </h6>
        <h1
          id="name_text"
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-color text-center text-shadow clip "
        >
          Nilesh Gautam
        </h1>
        <div className="flex justify-center">
          <div
            ref={SubHeadRef}
            className="flex overflow-hidden justify-start items-center clip text-md sm:text-xl md:text-3xl w-fit whitespace-nowrap gap-1"
          >
            <p className="text-red-500 inline-block">I'm a,</p>
            <p
              ref={TextRef}
              className="text-color inline border-r-2 border-yellow-500"
            >
              {animateText}
            </p>
          </div>
        </div>
        <SocialLinks />
      </span>
      <Navbar />
    </div>
  );
}

export default Home;
