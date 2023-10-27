import { useRef, useEffect, useState } from 'react';
import ComputerCanvas from "../Canvas/Computer";
import useGSAP from '../Utility/useGSAPP';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import Navbar from "../Navbar";
import ResumeButtton from '../UIComponents/ResumeButtton';
function Home() {


  const SubHeadRef = useRef(null);
  const DownloadRef = useRef(null);
  const TextRef = useRef(null);
  const [animateText, setanimateText] = useState('Web Developer!');

  const mynaimateText = ['Problem Solver!', 'Web Developer!'];

  const changeText=()=>{
    let i = 0;
    setInterval(() => {
      setanimateText(mynaimateText[i])
      i++
      if(i >= mynaimateText.length){
        i = 0;
      }
    }, 8000);
  }
  


  useEffect(() => {
    const interval = setTimeout(() => {
      if (TextRef.current) {
        TextRef.current.classList.add("text-animation");
        changeText();
      }
    }, 5000);

  

    return () => {
      clearInterval(interval);
    }
  }, [])






  useGSAP({
    gsapAnimation: (gsap) => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
      tl.fromTo('#name_text', { opacity: 0, y: -40 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 2.2 })
      tl.fromTo('h6', { opacity: 0, y: -40 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 2.2 }, "-=2")
      tl.fromTo(SubHeadRef.current, { opacity: 0, y: 20 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, }, "-=1.8")
      tl.to('.social_links', { y: 0, stagger: 0.05, opacity: 1 }, "-=1.5")
      tl.fromTo('.resume_btn', { opacity: 0, y: -20, }, { y: 0, opacity: 1 }, "-=2")

    }
  })

  const handleDownload = () => {
    import('/assets/Resume.pdf').then(({ default: Resume }) => {
      DownloadRef.current.href = Resume
    })
  }



  return (
    <div className="h-[100vh] flex justify-evenly md:items-center overflow-hidden relative bg">
      <ComputerCanvas />
      <span className="self-start absolute top-32  select-none pointer-events-none ">
        <h6 className='text-red-500 text-lg relative top-1 md:top-4  px-1 clip'>Hii I'm</h6>
        <h1 id="name_text" className=" text-5xl sm:text-6xl md:text-8xl  font-extrabold text-color text-center text-shadow clip">Nilesh Gautam</h1>

        {/* Type writer */}
        <div className='flex justify-center'>
          <div ref={SubHeadRef} className="flex overflow-hidden justify-start items-center clip text-md sm:text-xl md:text-3xl w-fit whitespace-nowrap gap-1">
            <p className="text-red-500 inline-block">I'm a,</p>
            <p ref={TextRef} className='text-color  inline-block border-r-2 border-yellow-500' >{animateText}</p>
          </div>
        </div>


        <span className="  flex flex-row sm:flex-col  gap-2  justify-center md:absolute pointer-events-auto">
          <div className="social_links opacity-0  translate-y-10 md:translate-y-0 w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" aria-label='linkedin' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
          <div className="social_links opacity-0  translate-y-10 md:translate-y-[-40px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" aria-label='github' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
          <div className="social_links opacity-0  translate-y-10 md:translate-y-[-80px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] "><a href="https://twitter.com/Nilesh__g1" aria-label='twitter' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
        </span>
        <div className='flex justify-center sm:inline-block'>
          <a className='pointer-events-auto cursor-pointer' aria-label='Resume Download' ref={DownloadRef} onClick={handleDownload} rel='noreferrer' download target="_blank"><ResumeButtton /></a>
        </div>
      </span>
      <Navbar />
    </div>
  );
}

export default Home;
