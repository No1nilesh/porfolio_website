import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon, faSuitcase, faGraduationCap, } from '@fortawesome/free-solid-svg-icons'
import devImg from '../assets/about.svg'

function About() {
  return (
    <div className='container px-4 2xl:p-0 pb-4 lg:pb-0  2xl:w-[80%] mx-auto'>


      <div className='flex flex-col lg:flex-row  justify-center items-center  lg:gap-4 gap-2 pt-16 sm:pt-[5rem]'>

        <div className='md:basis-1/2 self-start flex flex-col gap-1 md:gap-3'>
          <h1 className=' text-lg head_text_color  uppercase'>My Intro!</h1>
          <h1 className=' font-bold text-[hsl(207,90%,72%)] text-5xl sm:text-6xl md:text-7xl '>About Me.</h1>
          <p className='whitespace-normal mr-2  text-[hsla(219,4%,55%,1)] md:mt-5 '>I'm a passionate fullstack web developer with expertise in JavaScript, React, HTML, Tailwind, MongoDB, and Express. My coding journey is fueled by a fervent curiosity, driving me to continuously learn and evolve. Armed with a knack for creative problem-solving, I relish crafting seamless digital experiences. While I excel in building dynamic applications, I remain committed to being a perpetual student in the ever-evolving world of coding.</p>
          <button className='btn self-center'>Contact Me</button>
        </div>



        <div className="3d-element   md:basis-1/2 ">
          <img src={devImg} className='drop-shadow-[0_35px_35px_rgba(0,119,255,0.4)]' alt="" />
          <div className='flex gap-8 flex-col justify-start items-start sm:basis-1/2  '>
            <div className="about-cards flex   gap-4  flex-col md:flex-row w-full ">

              <div className='gradient-box custom_shadow basis-1/3 w-full rounded-xl drop-shadow-xl'>
                <div className="about-card   w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl  flex flex-col justify-center items-center ">
                  <FontAwesomeIcon icon={faRibbon} style={{ color: "hsl(207, 90%, 72%)", height: "26px" }} />
                  <h1 className='font-bold'>Experience</h1>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>Junior Devloper</p>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>Fresher</p>
                </div>
              </div>

              <div className='gradient-box custom_shadow basis-1/3 w-full rounded-xl drop-shadow-xl'>
                <div className="about-card  w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={faSuitcase} style={{ color: "hsl(207, 90%, 72%)", height: "26px" }} />
                  <h1 className='font-bold'>Projects</h1>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>Completed</p>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>5 Projects</p>
                </div>
              </div>

              <div className='gradient-box custom_shadow basis-1/3 w-full rounded-xl drop-shadow-xl'>
                <div className="about-card  w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={faGraduationCap} style={{ color: "hsl(207, 90%, 72%)", height: "26px" }} />
                  <h1 className='font-bold'>Undergraduate</h1>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>BCA</p>
                  <p className='text-[hsla(219,4%,55%,1)] text-xs'>Mes College</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About;