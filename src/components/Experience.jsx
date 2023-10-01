import Badge from '../assets/Badge'

function Experience() {
  return (
    <div className='container flex flex-col justify-center items-center gap-2 p-0 md:px-3 2xl:p-0 h-full'>



    <div className='w-full bg-[#100d25] rounded-b-2xl  sm:rounded-2xl flex flex-col items-center drop-shadow-md sm:mt-4  lg:mt-0 '>
    <div className='min-h-[300px] bg-[rgb(21,16,48)] w-full rounded-b-2xl  sm:rounded-2xl '>
  <h1 className=' text-lg head_text_color px-4 sm:px-10 pt-10 uppercase'>My Abilities!</h1>
    <h1 className='px-4 sm:px-10 text-5xl sm:text-6xl md:text-7xl font-bold text-color '>Experience.</h1>
    </div>

    <div className='flex flex-col md:flex-row  gap-12 -mt-40 sm:-mt-24 pb-24'>
        <div className="skill-1 bg-[#090325] rounded-2xl py-12 px-16 md:px-8 lg:px-16 shadow-md">
        <h1 className='text-center text-color text-lg'>Frontend Developer </h1>

          <div className=' skill_sets flex gap-12  md:gap-16 pt-6'>

          <div className='skil_data flex flex-col gap-6'>
            <div> <Badge/> JavaScript 
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Intermediate</span>
            </div>
            <div> <Badge/> React
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Intermediate</span>
            </div>
            <div> <Badge/> HTML
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Advance</span>
            </div>
          </div>


          <div className='skil_data flex flex-col gap-6'>
            <div> <Badge/> Tailwind
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Basic</span>
            </div>
            <div> <Badge/> CSS
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Intermediate</span>
            </div>
            <div> <Badge/> Three.js
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Basic</span>
            </div>
          </div>
          </div>
        </div>

        <div className="skill-2 bg-[#090325] rounded-2xl py-12 px-16 md:px-8 lg:px-16 shadow-md">
        <h1 className='text-center text-color text-lg'>Backend Developer </h1>

          <div className=' skill_sets flex  gap-12 md:gap-16 pt-6'>

          <div className='skil_data flex flex-col gap-6'>

          <div> <Badge/> Express.js
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Intermediate</span>
            </div>
            <div> <Badge/> Java
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Basic</span>
            </div>
          
            <div> <Badge/> Mongodb
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Basic</span>
            </div>
          </div>


          <div className='skil_data flex flex-col gap-6'>
            <div> <Badge/> Git
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Intermediate</span>
            </div>
            <div> <Badge/> Node.js
            <span className='text-[hsla(219,4%,55%,1)] text-xs block text-center'>Basic</span>
            </div>
          </div>
          </div>
        </div>

     
    </div>

    </div>
    


   
    </div>
  )
}

export default Experience