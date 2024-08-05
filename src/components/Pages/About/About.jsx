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
              className="whitespace-normal mr-2 para-color  clip text-base"
            >
              Meet{" "}
              <span className="text-xl font-semibold text-gray-400">
                Nilesh Kumar Gautam
              </span>
              , a dynamic software developer with a passion for pushing
              boundaries in the digital realm. Armed with expertise in{" "}
              <span className="text-md font-semibold text-gray-400">
                JavaScript, React.js, and MongoDB
              </span>
              , Nilesh crafts innovative solutions that redefine industry
              standards. From the sleek and intuitive{" "}
              <span className="text-md font-semibold text-gray-400">
                Fitness Flex gym management app
              </span>{" "}
              to the dynamic{" "}
              <span className="text-md font-semibold text-gray-400">
                Genesis 5.0 college event website
              </span>
              , Nilesh&lsquo;s portfolio showcases his prowess and creativity in
              equal measure. But Nilesh is more than just a code virtuoso – he's
              a natural leader. As a team lead for his final year project,
              Nilesh orchestrated seamless collaboration, ensuring his team
              surpassed all expectations. Ready to embark on a journey of
              technological excellence with Nilesh? Let's create something
              extraordinary together.
            </article>
            <div className="flex gap-8 flex-col justify-start items-start sm:basis-1/2">
              <div className="about-cards flex gap-4 flex-col md:flex-row w-full">
                {data?.sections.map((details, index) => (
                  <AboutCard details={details} index={index} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex  gap-4 self-center justify-center">
              <a
                rel="noreferrer"
                href={"https://www.linkedin.com/in/nilesh-gautam10/"}
                aria-label="linkedin"
                target="_blank"
                className="cursor-pointer relative group socials"
              >
                <div className="absolute inset-0 group-hover:bg-white/30 opacity-0 group-hover:opacity-80 group-hover:blur-lg transition-all ease-in-out duration-100"></div>
                <FontAwesomeIcon
                  className="group-hover:text-blue-500 ease-in-out duration-100 transition-colors"
                  icon={faLinkedinIn}
                  size="3x"
                />
              </a>
              <a
                rel="noreferrer"
                href={"https://github.com/No1nilesh"}
                target="_blank"
                aria-label="github"
                className="cursor-pointer relative group socials"
              >
                <div className="absolute inset-0 group-hover:bg-white/30 opacity-0 group-hover:opacity-80 group-hover:blur-lg transition-all ease-in-out duration-100"></div>
                <FontAwesomeIcon
                  className="group-hover:text-gray-400 ease-in-out duration-100 transition-colors"
                  icon={faGithub}
                  size="3x"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://twitter.com/Nilesh__g1"
                target="_blank"
                aria-label="twitter"
                className="cursor-pointer relative group socials"
              >
                <div className="absolute inset-0 group-hover:bg-white/30 opacity-0 group-hover:opacity-80 group-hover:blur-lg transition-all ease-in-out duration-100"></div>
                <FontAwesomeIcon
                  className="relative z-10 transition-colors ease-in-out duration-100 group-hover:invert"
                  icon={faXTwitter}
                  size="3x"
                />
              </a>
            </div>
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
