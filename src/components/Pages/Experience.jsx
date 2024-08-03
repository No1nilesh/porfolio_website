import { lazy, useRef } from "react";
const Badge = lazy(() => import("../UIComponents/Badge"));
import tree from "/assets/tree.svg";
import useGSAP from "../Utility/useGSAPP";

function Experience() {
  const expRef = useRef(null);
  const headcntnrRef = useRef(null);

  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({
        defaults: { ease: "Back.ease.config(2)" },
        scrollTrigger: {
          trigger: "#experience",
          scrub: false,
          start: "150px center",
          end: "80% 600px",
          // markers:true
        },
      });

      tl.fromTo(
        headcntnrRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.7 }
      );
      tl.fromTo(
        expRef.current,
        { opacity: 0, y: -50 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          transformOrigin: "center",
          y: 0,
          duration: 0.5,
        }
      );
      tl.fromTo(
        ".skill",
        { opacity: 0, y: 20, transformOrigin: "top" },
        { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
      );
    },
  });

  const expData = {
    expData: {
      frontend: {
        techStacks: [
          { tech: "JavaScript", level: "Advanced" },
          { tech: "React", level: "Advanced" },
          { tech: "Next.js", level: "Intermediate" },
          { tech: "CSS", level: "Intermediate" },
          { tech: "Tailwind", level: "Intermediate" },
          { tech: "Three.js", level: "Basic" },
        ],
      },
      backend: {
        techStacks: [
          { tech: "Node.js", level: "Intermediate" },
          { tech: "Redis", level: "Basic" },
          { tech: "Express.js", level: "Intermediate" },
          { tech: "Git", level: "intermediate" },
          { tech: "Java", level: "Basic" },
          { tech: "MongoDB", level: "Intermediate" },
          { tech: "Socket.io", level: "Intermediate" },
        ],
      },
    },
  };
  const { frontend, backend } = expData.expData;

  return (
    <div className="container flex flex-col justify-center items-center gap-2 p-0 md:px-3 2xl:p-0 h-full">
      <div className="w-full bg-[#100d25] rounded-b-2xl  sm:rounded-2xl flex flex-col items-center drop-shadow-md sm:mt-4  lg:mt-0 ">
        <div
          ref={headcntnrRef}
          className="min-h-[300px] bg-[rgb(21,16,48)] w-full rounded-b-2xl  sm:rounded-2xl relative z-10"
        >
          <h1 className=" text-lg head_text_color px-4 sm:px-10 pt-10 uppercase">
            My Abilities!
          </h1>
          <h1
            ref={expRef}
            className="px-4 sm:px-10 text-5xl sm:text-6xl md:text-7xl font-bold text-color clip"
          >
            Experience.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row  gap-12 -mt-40 sm:-mt-24 pb-24 relative z-20">
          <div className="bg-[#090325] flex flex-col items-center rounded-2xl shadow-md w-screen md:w-96 h-96 relative skill">
            <img
              src={tree}
              className="absolute bottom-0 h-[95%] opacity-10"
              alt="Binary Tree"
            />
            <h1 className="text-center text-color text-xl font-semibold mt-14">
              Frontend Developer
            </h1>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
              {frontend.techStacks.map((stack, index) => (
                <div key={`frontend-${index}`}>
                  {" "}
                  <Badge /> {stack.tech}
                  <span className="text-[hsla(219,4%,55%,1)] text-xs block text-center">
                    {stack.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#090325] flex flex-col items-center rounded-2xl shadow-md w-screen md:w-96 h-96 relative skill">
            <img
              src={tree}
              className="absolute bottom-0 h-[95%] opacity-10"
              alt=""
            />

            <h1 className="text-center text-color text-xl mt-14 font-semibold">
              Backend Developer{" "}
            </h1>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4 ">
              {backend.techStacks.map((stack, index) => (
                <div key={`backend-${index}`}>
                  {" "}
                  <Badge /> {stack.tech}
                  <span className="text-[hsla(219,4%,55%,1)] text-xs block text-center">
                    {stack.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
