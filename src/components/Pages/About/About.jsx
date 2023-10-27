/* eslint-disable react/prop-types */
import { lazy, useRef } from 'react';
import data from '../../../data.json';
import useGSAP from '../../Utility/useGSAPP';
const Abchar = lazy(()=> import('../../Canvas/Abchar'))
const AboutCard = lazy(()=>import('./AboutCard'));

function About() {


  const aboutHeadRef = useRef(null);
  const paraRef = useRef(null);
  const svgBox = useRef(null);


  useGSAP({
    gsapAnimation : (gsap)=>{
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" }, scrollTrigger: {
          trigger: '#about',
          scrub: false,
          start: '150px center',
          end: '80% 600px',
          markers: false
        }
      })
  
      tl.fromTo(aboutHeadRef.current, { opacity: 0, y: -50 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, transformOrigin: 'center', y: 0, duration: 0.7, })
      tl.fromTo(paraRef.current, { opacity: 0, y: 50 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 1, }, "-=0.7")
      tl.fromTo(svgBox.current, { opacity: 0, x: 500 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, x: 0, duration: 1, }, "-=0.7")
      tl.fromTo('#info1', { opacity: 0, }, { opacity: 1, duration: 2, }, "-=0.8")
      tl.fromTo('#info0', { x: 200, opacity: 0 }, { x: 0, duration: 1, opacity: 1 }, "-=1")
      tl.fromTo('#info2', { x: -200, opacity: 0 }, { x: 0, duration: 1, opacity: 1 }, "-=1")
  
    }
  })

  return (
    <>
      <img className='absolute  lg:h-2/3 opacity-20 right-0 rotate-180 top-0' loading='lazy' src={'/assets/tech2.svg'} alt="" />
      <img className='absolute  lg:h-2/3 bottom-0 left-0 opacity-20 ' loading='lazy' src={'/assets/tech2.svg'} alt="" />
      <div className='container px-4 2xl:p-0 pb-20 lg:pb-0  2xl:w-[80%] m-auto overflow-hidden'>

        <div className='flex flex-col lg:flex-row  justify-center items-center  lg:gap-4 gap-2 pt-16 sm:pt-[2rem]'>

          <div className='md:basis-1/2 self-start flex flex-col gap-1 md:gap-3'>
            <h1 className=' text-lg head_text_color  uppercase'>My Intro!</h1>
            <h1 ref={aboutHeadRef} className=' font-bold text-color text-5xl sm:text-6xl md:text-7xl clip'>About Me.</h1>
            <p ref={paraRef} className='whitespace-normal mr-2  para-color md:mt-5 clip text-base'>I'm a passionate fullstack web developer with expertise in JavaScript, React, HTML, Tailwind, MongoDB, and Express. My coding journey is fueled by a fervent curiosity, driving me to continuously learn and evolve. Armed with a knack for creative problem-solving, I relish crafting seamless digital experiences. While I excel in building dynamic applications, I remain committed to being a perpetual student in the ever-evolving world of coding.</p>
           
          </div>



          <div ref={svgBox} className="3d-element   md:basis-1/2 clip ">

            <Abchar />

            <div className='flex gap-8 flex-col justify-start items-start sm:basis-1/2  '>
              <div className="about-cards flex   gap-4  flex-col md:flex-row w-full ">
                {data ? data.sections.map((details, index) => (
                  <AboutCard details={details} index={index} key={index} />
                )) : null}
              </div>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default About;