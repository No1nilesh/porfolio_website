import ThreeScene from "./Three";
import "./utility.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn , faGithub , faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Resume from "../assets/Resume.pdf"

function Home() {

  const scrollToAbout=()=>{
    const element = document.getElementById("about");

    element.scrollIntoView({
      behavior : "smooth"
    })
  }

  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative">
      <ThreeScene />

      <div className="md:hidden  absolute w-full rounded-md  h-48 z-50 -bottom-8 sh"></div>

      <span className="absolute self-center -translate-y-20 sm:translate-y-0 md:top-auto">
        <div className="text-container text-slate-100 text-center text-shadow">
          <h1 className="text-xl  drop-shadow-md">Hello I'm</h1>
          <h1 className="text-4xl font-bold drop-shadow-2xl">Nilesh Gautam</h1>
          <h1 className="text-2xl font-bold drop-shadow-2xl">Web Developer | Full Stack</h1>
        <Link  to={Resume} download target="_blank"><button className="btn mt-2">Download Resume</button></Link>
        </div>
      </span>

      <span onClick={scrollToAbout} className=" self-center right-[-28px]  text-[hsl(207,90%,72%)] text-lg absolute rotate-[-90deg] md:right-1/4 flex justify-center items-center gap-2 cursor-pointer"> <p className="text-md">scroll down</p><button className="mouse">
      <div className="scroll"></div>
      </button></span>

      <span className="absolute left-[5%] md:left-1/4 flex flex-col gap-2 self-center justify-self-start">
      <div className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
      <div className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
      <div className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] after:absolute md:after:w-[2px] md:after:h-8 after:bg-[hsl(207,90%,72%)] after:top-9"><a href="https://twitter.com/Nilesh__g1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
      </span>

      

      {/* <ThreeScene/> */}

      <Navbar />
    </div>
  );
}

export default Home;
