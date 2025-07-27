/* eslint-disable react/prop-types */
import { lazy, memo, useRef } from "react";
import data from "../../../data.json";
import useGSAP from "../../Utility/useGSAPP";
import ResumeButton from "../../UIComponents/ResumeButton";
const Abchar = lazy(() => import("../../Canvas/Abchar"));
const AboutCard = lazy(() => import("./AboutCard"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

function About() {
  const aboutHeadRef = useRef(null);
  const paraRef = useRef(null);
  const svgBox = useRef(null);

  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        scrollTrigger: {
          trigger: "#about",
          scrub: false,
          start: "150px center",
          end: "80% 600px",
          markers: false,
        },
      });

      tl.fromTo(
        aboutHeadRef.current,
        { opacity: 0, y: -50 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          transformOrigin: "center",
          y: 0,
          duration: 0.7,
        }
      );
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.7"
      );
      tl.fromTo(
        svgBox.current,
        { opacity: 0, x: 500 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          x: 0,
          duration: 1,
        },
        "-=0.7"
      );
      tl.fromTo(
        ".info",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, opacity: 1, stagger: 0.4 },
        "-=0.5"
      );
      tl.fromTo(
        ".resume_btn",
        { opacity: 0, y: -20 },
        { y: 0, opacity: 1 },
        "-=2"
      );
      tl.fromTo(
        ".socials",
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.3, ease: "elastic.out(1,0.3)" },
        "-=0.5"
      );
      tl.fromTo(
        ".resume",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, ease: "elastic.out(1,0.4)" },
        "-=0.5"
      );
    },
  });

  return (
    <>
      <img
        className="absolute z-10 h-96 lg:h-2/3 opacity-20 right-0 rotate-180 top-0"
        loading="lazy"
        src={"/assets/tech2.svg"}
        alt="tech"
      />
      <img
        className="absolute z-10 h-96 lg:h-2/3 bottom-0 left-0 opacity-20"
        loading="lazy"
        src={"/assets/tech2.svg"}
        alt="tech"
      />
      <div className="relative z-20 px-4 2xl:p-0 pb-20 lg:pb-0  2xl:w-[80%] m-auto ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-4 gap-2 pt-16 sm:pt-[2rem]">
          <div className="md:basis-1/2 self-start flex flex-col gap-1 md:gap-3">
            <h5 className="text-lg head_text_color uppercase">My Intro!</h5>
            <h1
              ref={aboutHeadRef}
              className="font-bold text-color text-5xl sm:text-6xl md:text-7xl clip"
            >
              About Me.
            </h1>
            <article
              ref={paraRef}
              className="whitespace-normal mr-2 para-color clip text-base mt-10"
            >
              Meet{" "}
              <span className="text-xl font-semibold text-gray-400">
                Nilesh Kumar Gautam
              </span>
              — a passionate full-stack JavaScript developer with real-world experience building scalable and interactive web applications. Nilesh has hands-on expertise in{" "}
              <span className="text-md font-semibold text-gray-400">
                React.js, Next.js, Node.js, Express, MongoDB, Redis, and Socket.io
              </span>
              , with a growing command over real-time communication and scalable backend architectures. One of his notable projects is{" "}
              <span className="text-md font-semibold text-gray-400">
                Fitness Flex 2.0
              </span>
              — a comprehensive gym management platform that features live group training using{" "}
              <span className="text-md font-semibold text-gray-400">
                MediaSoup
              </span>{" "}
              for video sessions, real-time messaging, and dynamic user interactions. Nilesh brings not only technical depth but also a strong sense of ownership, problem-solving, and collaborative spirit. Whether improving existing systems or architecting new ones from scratch, he’s always looking to learn, iterate, and build solutions that make a real impact.
            </article>

            <div className="flex gap-8 flex-col justify-start items-start sm:basis-1/2 mt-4">
              <div className="about-cards flex gap-4 flex-col md:flex-row w-full">
                {data?.sections.map((details, index) => (
                  <AboutCard details={details} index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
