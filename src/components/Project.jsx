import { useState } from "react";
import { Link } from "react-router-dom";
import "./utility.css";
import Star from "./Star";
import Button from "./Button";
import data from "../data.json"
import Modal from "./Modal";


const Project = () => {

  const [ModalState, setModalState] = useState(false);
  const [ModalData, setModalData] = useState("")



  return (
    <div className="container xl:h-screen 2xl:w-[80%]  overflow-x-hidden overflow-y-hidden">
      {ModalState ? <Modal setModalState={setModalState} ModalData={ModalData} setModalData={setModalData}/> : null}
      <Star />
      <h1 className=" text-lg head_text_color pt-16 md:pt-[5rem] uppercase px-4">
        My Portfolio!
      </h1>
      <h1 className=" text-5xl sm:text-6xl md:text-7xl font-bold text-color px-4 ">
        Recent Work.
      </h1>

      <div className="project-container z-10 relative mt-10 flex flex-col md:flex-row flex-wrap  gap-10 lg:gap-0 items-center justify-evenly">

        { data ? data.projects.map((project, index)=>(
          <div key={index} className="relative flex w-80 xl:w-[22rem] flex-col rounded-xl card-glass bg-clip-border  shadow-md">
            <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
              <img
                className=" object-cover hover:scale-110 transition-transform "
                src={`src/assets/${project.main_image}`}
                alt=""
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal  antialiased">
                {project.name}
              </h5>
              <p className="block  text-base  leading-relaxed text-inherit  text-ellipsis">
                {project.project_details? project.project_details.slice(0, 140)+ "...": ""}
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
