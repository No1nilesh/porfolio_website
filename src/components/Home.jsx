import ThreeScene from "./Three";
import "./utility.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Resume from "../assets/Resume.pdf"

function Home() {

  const scrollToAbout = () => {
    const element = document.getElementById("about");

    element.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative bg">
      <ThreeScene />

      <div className="md:hidden  absolute w-full rounded-md  h-48 z-50 -bottom-8 sh"></div>
      <span className="self-start absolute top-32  select-none pointer-events-none">
        <h1 className="text-8xl font-extrabold text-color">Nilesh Gautam</h1>
        <p className="text-3xl text-color text-center">Web Developement | Problem Solving</p>
        {/* <Link  to={Resume} download target="_blank"><button className="btn mt-2 mx-auto" >Download Resume</button></Link> */}
      </span>

      
      {/* header */}
      <span className="  flex flex-col  gap-2  justify-center right-[10%] absolute">
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
        <div className="w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] "><a href="https://twitter.com/Nilesh__g1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
      </span>

      <div className="absolute top-44 left-[10%] flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full secondary-color "></div>
        <div className="line w-1 h-[76vh] secondary-color line-gradient"></div>
      </div>

      {/* <ThreeScene/> */}

      <Navbar />
    </div>
  );
}

export default Home;
