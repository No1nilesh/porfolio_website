/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../UIComponents/Button";

function ProjectCard({project, setModalData, setModalState}) {
  return (
      <div  className="relative flex w-80 xl:w-[22rem] flex-col rounded-xl card-glass bg-clip-border  shadow-md p-card   z-20">
            <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
              <img
              
                className=" object-cover hover:scale-110 transition-transform "
                src={`/assets/${project.main_image}`}
                width={'100%'}
                height={'100%'}
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
                <Button/>
                </Link>
              </div>

            </div>
          </div>
  )
}

export default ProjectCard