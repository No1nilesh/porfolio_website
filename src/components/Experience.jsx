import Badge from '../assets/Badge'

function Experience() {
  return (
    <div className='container flex flex-col justify-center items-center gap-2 px-3'>
  <h1 className='text-center text-lg text-[hsla(219,4%,55%,1)] pt-16 md:pt-[5rem]'>My Abilities!</h1>
    <h1 className='text-center text-2xl font-bold text-[hsl(207,90%,72%)] '>Experience</h1>

    <div className='flex flex-col md:flex-row gap-12 pt-8'>
        <div className="skill-1 bg-[hsla(219,32%,12%,1)] rounded-2xl py-12 px-16 shadow-md">
        <h1 className='text-center text-[hsl(207,90%,72%)] text-lg'>Frontend Developer </h1>

          <div className=' skill_sets flex gap-12 md:gap-16 pt-6'>

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

        <div className="skill-2 bg-[hsla(219,32%,12%,1)] rounded-2xl py-12 px-16 shadow-md">
        <h1 className='text-center text-[hsl(207,90%,72%)] text-lg'>Backend Developer </h1>

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
  )
}

export default Experience