import {useEffect, useRef} from 'react';
import useGsap from '../Utility/useGsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon as fasFaRibbon, faSuitcase as fasFaSuitcase, faGraduationCap as fasFaGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Abchar from '../Canvas/Abchar';
import useLenis from '../Utility/useLenis';
import Ticker from '../UIComponents/Ticker';
import data from '../../data.json';

function About() {
  const iconMap = {
    faRibbon: fasFaRibbon,
    faSuitcase: fasFaSuitcase,
    faGraduationCap: fasFaGraduationCap
  };
  const gsap = useGsap();
  const lenis = useLenis();

  const aboutRef = useRef(null);
  const paraRef = useRef(null);
  const svgBox = useRef(null);
  const btnRef = useRef(null);
  const toContact=()=>{
lenis.scrollTo("#contact")
  }

    useEffect(()=>{

      const tl = gsap.timeline({defaults: {ease: "power4.inOut"} , scrollTrigger:{
        trigger: '#about',
        scrub: false,
        start: '150px center',
        end: '80% 600px',
        markers:false
      }})
      
      tl.fromTo(aboutRef.current,{opacity: 0 , y:-50}, {'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1,transformOrigin:'center', y:0, duration:0.7, })
      tl.fromTo(paraRef.current,{opacity:0, y:50},{'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y:0, duration:1, }, "-=0.7" )
      tl.fromTo(btnRef.current,{opacity:0, y:20},{'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y:0, duration:0.9, }, "-=0.2" )
      tl.fromTo(svgBox.current,{opacity:0, x:500},{'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, x:0, duration:1, },"-=0.7" )
      tl.fromTo('#info1', {opacity:0, },{ opacity: 1, duration:2, },"-=0.3" )
      tl.fromTo('#info0', {x:200, opacity:0 },{ x:0, duration:1,opacity:1 },"-=1" )
      tl.fromTo('#info2', {x:-200,opacity:0 },{ x:0, duration:1,opacity:1 },"-=1" )
      

      return()=>{
        tl.revert();
      }

    },[])


  

  return (
    <div className='container px-4 2xl:p-0 pb-8 lg:pb-0  2xl:w-[80%] mx-auto overflow-hidden'>


      <div className='flex flex-col lg:flex-row  justify-center items-center  lg:gap-4 gap-2 pt-16 sm:pt-[2rem]'>

        <div className='md:basis-1/2 self-start flex flex-col gap-1 md:gap-3'>
          <h1 className=' text-lg head_text_color  uppercase'>My Intro!</h1>
          <h1 ref={aboutRef} className=' font-bold text-color text-5xl sm:text-6xl md:text-7xl clip'>About Me.</h1>
          <p ref={paraRef} className='whitespace-normal mr-2  para-color md:mt-5 clip text-base'>I'm a passionate fullstack web developer with expertise in JavaScript, React, HTML, Tailwind, MongoDB, and Express. My coding journey is fueled by a fervent curiosity, driving me to continuously learn and evolve. Armed with a knack for creative problem-solving, I relish crafting seamless digital experiences. While I excel in building dynamic applications, I remain committed to being a perpetual student in the ever-evolving world of coding.</p>
          <button ref={btnRef} className='btn self-center clip' onClick={toContact}>Contact Me</button>
        </div>



        <div ref={svgBox} className="3d-element   md:basis-1/2 clip ">
  
         <Abchar/>
    
          <div className='flex gap-8 flex-col justify-start items-start sm:basis-1/2  '>
            <div className="about-cards flex   gap-4  flex-col md:flex-row w-full ">
            {data ? data.sections.map((details, index)=>(
              <div key={index} id={"info" + index} className='gradient-box custom_shadow basis-1/3 w-full rounded-xl drop-shadow-xl info'>
                <div className="about-card h-full  w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl  flex flex-col justify-center items-center ">
                  <FontAwesomeIcon icon={iconMap[details.icon]} style={{ color: "hsl(207, 90%, 72%)", height: "26px" }} />
                  <h1 className='font-bold text-base'>{details.title}</h1>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>{details.paragraphs[0]}</p>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>{details.paragraphs[1]}</p>
                </div>
              </div>
            )) : ""}
            </div>

          </div>
        </div>
      </div>
      
          {/* <Ticker/> */}
     

    </div>
  )
}

export default About;