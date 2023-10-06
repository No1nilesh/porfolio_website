import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./utility.css";
import Star from "./Canvas/Star";
import Button from "./Button";
import data from "../data.json"
import Modal from "./Modal";
import useGsap from "./Utility/useGsap";


const Project = () => {
const gsap = useGsap();
const rworkRef = useRef(null);
  const [ModalState, setModalState] = useState(false);
  const [ModalData, setModalData] = useState("")

  useEffect(() => {
  const tl = gsap.timeline({defaults:{ease: 'Back.ease.config(2)'} ,scrollTrigger:{
    trigger: '#project',
    scrub: false,
    start: '150px center',
    end: '80% 600px',
    // markers:true
  }})

   tl.fromTo(rworkRef.current,{opacity: 0 , y:-50}, {'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1,transformOrigin:'center', y:0, duration:1 })
   tl.fromTo('.p-card',{opacity: 0 , x:-500}, {stagger:0.5, opacity: 1, x:0, duration:1 }, "-=0.8")
   
  return()=>{
    tl.revert();
  }
}, [])


  return (
    <div className="container xl:h-screen 2xl:w-[80%]  overflow-x-hidden overflow-y-hidden">
      {ModalState ? <Modal setModalState={setModalState} ModalData={ModalData} setModalData={setModalData}/> : null}
      <Star />
      <h1 className=" text-lg head_text_color pt-8 xl:pt-[5rem]  uppercase px-4">
        My Portfolio!
      </h1>
      <h1 ref={rworkRef} className=" text-5xl sm:text-6xl md:text-7xl font-bold text-color px-4 clip">
        Recent Work.
      </h1>

      <div className="project-container z-10 relative mt-10 flex flex-col md:flex-row flex-wrap  gap-10 lg:gap-0 items-center justify-evenly">

        { data ? data.projects.map((project, index)=>(
          <div key={index} className="relative flex w-80 xl:w-[22rem] flex-col rounded-xl card-glass bg-clip-border  shadow-md p-card   z-20">
            <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
              <img
                className=" object-cover hover:scale-110 transition-transform "
                src={`src/assets/${project.main_image}`}
                alt=""
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block  text-xl font-semibold leading-snug ">
                {project.name}
              </h5>
              <p className="block  text-base  leading-relaxed text-inherit  text-ellipsis">
                {project.project_details? project.project_details.slice(0, 130)+ "...": ""}
              </p>
            </div>
            <div className="p-6 pt-0">

              <div className="flex justify-between">
                <button className="read_more_btn py-2 px-4" onClick={()=>{setModalData(project); setModalState(true)}}>
                  Read More
                </button>
                <Link to={project.github_link} target="_blank">
                <Button />
                </Link>
              </div>

            </div>
          </div>
        )) : "" }

      </div>

    </div>
  );
};

export default Project;
