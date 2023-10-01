import "./utility.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Resume from "../assets/Resume.pdf"
import ComputerCanvas from "./Computer";
import Loader from "./Loader";
function Home() {

  const scrollToAbout = () => {
    const element = document.getElementById("about");

    element.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative bg">
      {<ComputerCanvas/> ? <ComputerCanvas/> : <Loader/>}

      {/* <div className="md:hidden  absolute w-full rounded-md  h-48 z-50 -bottom-8 sh"></div> */}
      <span className="self-start absolute top-32  select-none pointer-events-none ">
        <h1 className=" text-5xl sm:text-6xl md:text-8xl  font-extrabold text-color text-center name_text">Nilesh Gautam</h1>
        <div className="flex overflow-hidden justify-center">
        <p className=" text-md sm:text-xl md:text-3xl text-color  text-animation">Web Developement | Problem Solving</p>
        </div>
        <span className="  flex flex-row sm:flex-col  gap-2  justify-center md:absolute pointer-events-auto">
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] "><a href="https://twitter.com/Nilesh__g1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
      </span>
        {/* <Link  to={Resume} download target="_blank"><button className="btn mt-2 mx-auto" >Download Resume</button></Link> */}
      </span>

      
      {/* header */}
 
{/* 
      <div className="absolute top-44 left-[10%] flex flex-col justify-center items-center">
        <div className="w-3 h-3 rounded-full secondary-color "></div>
        <div className="line w-[3px] h-[76vh] secondary-color line-gradient"></div>
      </div> */}

      {/* <ThreeScene/> */}

      <Navbar />
    </div>
  );
}

export default Home;
