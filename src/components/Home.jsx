import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Resume from "../assets/Resume.pdf"
import ComputerCanvas from "./Canvas/Computer";
import ResumeButtton from './ResumeButtton';
function Home() {


  const SubHeadRef = useRef();

  useEffect(() => {
    

    setInterval(() => { SubHeadRef.current.classList.add("text-animation")}, 5000);


    const tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});
    tl.fromTo('#name_text',{opacity:0, y:-40}, {'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y:0, duration:2.2 })
    tl.fromTo(SubHeadRef.current,{opacity:0, y:20}, {'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y:0,}, "-=1.8")
    tl.to('.social_links', {y:0,stagger:0.05, opacity:1}, "-=1.5")
    

    return () => {
      tl.kill(); // Kill the animation
    };

  }, [])



  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative bg">
      <ComputerCanvas /> 
      <span className="self-start absolute top-32  select-none pointer-events-none ">
        <h1 id="name_text" className=" text-5xl sm:text-6xl md:text-8xl  font-extrabold text-color text-center text-shadow clip ">Nilesh Gautam</h1>
        <div className="flex overflow-hidden justify-center">
          <p ref={SubHeadRef} className=" text-md sm:text-xl md:text-3xl text-color border-r-4 border-yellow-500 clip">Web Developer | Problem Solver</p>
        </div>
        <span className="  flex flex-row sm:flex-col  gap-2  justify-center md:absolute pointer-events-auto">
          <div className="social_links opacity-0  translate-y-10 md:translate-y-0 w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
          <div className="social_links opacity-0  translate-y-10 md:translate-y-[-40px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
          <div className="social_links opacity-0  translate-y-10 md:translate-y-[-80px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] "><a href="https://twitter.com/Nilesh__g1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
        </span>
        {/* <Link className=''  to={Resume} download target="_blank"><ResumeButtton/></Link> */}
      </span>
      <Navbar />
    </div>
  );
}

export default Home;
