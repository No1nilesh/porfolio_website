import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./utility.css";

const Project = () => {
  return (
    <div className="container px-4">
      <h1 className="text-center text-lg text-[hsla(219,4%,55%,1)] pt-16 md:pt-[5rem]">
        My Portfolio!
      </h1>
      <h1 className="text-center text-2xl font-bold text-[hsl(207,90%,72%)] ">
        Recent Work
      </h1>

      <div className=" md:px-2 roject-box pt-3 flex flex-col gap-8 sm:gap-4">
        <div className="project-1 flex justify-center items-center gap-8 flex-wrap">
          <div className="  md:w-40 md:basis-1/4 bg-inherit rounded-xl  overflow-hidden">
            <img
              className="  hover:scale-110 transition-transform"
              src="https://images.unsplash.com/photo-1574340328716-7f09d58917d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              alt=""
            />
          </div>

          <article className=" md:p-4 md:basis-1/2">
            <h1 className="text-4xl font-bold ">Fitness Flex</h1>

            <p className="text-[hsla(219,4%,55%,1)] text-md ">
              Gym Management Web App (React, MongoDB, Express, Tailwind, Stripe)
              Developed a user-friendly fitness management web application using
              React, MongoDB, Express, and Tailwind CSS. Integrated Stripe for
              seamless payment processing. Users can register, schedule training
              sessions, and access personalized workout and diet plans. Trainers
              manage availability, track progress, and provide guidance. Admin
              dashboard tracks payments and manages member details. Streamlined
              operations and enhanced user engagement{" "}
            </p>
            <Link to={"https://github.com/No1nilesh/TY_PROJECT_BACKEND"} target="_blank"  className="text-[hsl(207,90%,72%)] flex items-center gap-3 cursor-pointer checkout py-2">
              <span>Chect out</span>{" "}
              <FontAwesomeIcon
                icon={faArrowUpLong}
                className="rotate-90  font-thin  transition-transform arrow"
                size="lg"
              /> 
            </Link>
          </article>
        </div>

        {/* Project 2 */}

        <div className="project-2 flex flex-row-reverse justify-center items-center gap-8 flex-wrap">
          <div className="md:w-40 md:basis-1/4 bg-inherit rounded-xl  overflow-hidden">
            <img
              className="  hover:scale-110 transition-transform"
              src="https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
              alt=""
            />
          </div>

          <article className=" md:p-4 md:basis-1/2">
            <h1 className="text-4xl font-bold ">Apna News</h1>

            <p className="text-[hsla(219,4%,55%,1)] text-md ">
              News Application (React. News API) Created a news application
              using React that fetches and displays the latest news from India
              across various categories. Utilized the News API to retrieve
              real-time news data and implemented a user-friendly interface to
              present the information in an organized manner..
            </p>
            <Link to={"https://github.com/No1nilesh/Apna-News"} target="_blank" className="text-[hsl(207,90%,72%)] flex items-center gap-3 cursor-pointer checkout py-2">
              <span>Chect out</span>{" "}
              <FontAwesomeIcon
                icon={faArrowUpLong}
                className="rotate-90  font-thin  transition-transform arrow"
                size="lg"
              />
            </Link>
          </article>
        </div>

        {/* Project 3 */}

        <div className="project-2 flex  justify-center items-center gap-8 flex-wrap">
          <div className="md:w-40 md:basis-1/4 bg-inherit rounded-xl  overflow-hidden">
            <img
              className="  hover:scale-110 transition-transform"
              src="https://images.unsplash.com/photo-1635225507121-49ca3e7d533d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
          </div>

          <article className=" md:p-4 md:basis-1/2">
            <h1 className="text-4xl font-bold ">Genesis 5.0</h1>

            <p className="text-[hsla(219,4%,55%,1)] text-md ">
              College Event Website (HTML, CSS, JavaScript, Express.js, MongoDB
              Developed a user-friendly college event website for Genesis 5.0
              using HTML, CSS, JavaScript. Express.js, and MongoDB. Implemented
              a visually appealing design to showcase events and a registration
              form.connected to a database for seamless
              participant registration.
            </p>
            <Link to={"https://genesis2023.onrender.com/"} target="_blank" className="text-[hsl(207,90%,72%)] flex items-center gap-3 cursor-pointer checkout py-2">
              <span>Chect out</span>{" "}
              <FontAwesomeIcon
                icon={faArrowUpLong}
                className="rotate-90  font-thin  transition-transform arrow"
                size="lg"
              />
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Project;
