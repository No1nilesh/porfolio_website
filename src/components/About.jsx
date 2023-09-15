import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon , faSuitcase , faGraduationCap,} from '@fortawesome/free-solid-svg-icons'
import devImg from '../assets/dev.jpg'

function About() {
  return (
    <div className='container px-4'>
        <h1 className='text-center text-lg text-[hsla(219,4%,55%,1)] pt-16 sm:pt-[5rem]'>My Intro!</h1>
        <h1 className='text-center text-2xl font-bold text-[hsl(207,90%,72%)] '>About Me</h1>

        <div className='flex flex-col lg:flex-row  justify-center items-center sm:mt-4 lg:gap-4 gap-2'>


          <div className="3d-element  drop-shadow-lg md:basis-1/2  grid place-content-center cursor-pointer">
          <div className='overflow-hidden rounded-xl w-fit h-fit'>
            <img src={devImg} className=' py-2 md:p-0   m-auto lg:w-80 lg:aspect-auto aspect-video object-cover hover:scale-110 transition-transform rounded-xl' alt="" />
          </div>
          </div>
          
<div className='flex gap-8 flex-col justify-start items-start sm:basis-1/2  '>
<div className="about-cards flex   gap-4  flex-col md:flex-row w-full ">

            <div className="about-card basis-1/3  w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl flex flex-col justify-center items-center ">
            <FontAwesomeIcon icon={faRibbon} style={{color : "hsl(207, 90%, 72%)", height : "26px"}} />
            <h1 className='font-bold'>Experience</h1>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>Junior Devloper</p>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>Fresher</p>
            </div>

            <div className="about-card basis-1/3 w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faSuitcase} style={{color : "hsl(207, 90%, 72%)", height : "26px"}}/>
            <h1 className='font-bold'>Projects</h1>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>Completed</p>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>5 Projects</p>
            </div>
         
            <div className="about-card basis-1/3 w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faGraduationCap}  style={{color : "hsl(207, 90%, 72%)", height : "26px"}} />
            <h1 className='font-bold'>Undergraduate</h1>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>BCA</p>
            <p className='text-[hsla(219,4%,55%,1)] text-xs'>Mes College</p>
            </div>
         
 
          </div>
          <p className='whitespace-normal  md:mr-32 text-[hsla(219,4%,55%,1)]'>I'm a passionate fullstack web developer with expertise in JavaScript, React, HTML, Tailwind, MongoDB, and Express. My coding journey is fueled by a fervent curiosity, driving me to continuously learn and evolve. Armed with a knack for creative problem-solving, I relish crafting seamless digital experiences. While I excel in building dynamic applications, I remain committed to being a perpetual student in the ever-evolving world of coding.</p>
          <button className='btn self-end sm:self-center'>Contact Me</button>
</div>
         
        </div>
      
    </div>
  )
}

export default About;