
function ResumeButtton() {
  return (
    <div className=" md:absolute right-0 w-16  h-[4.5rem] text-[0.7rem] bg-[hsla(219,32%,12%,1)] outline outline-1 outline-[rgba(255,255,255,0.2)] text-center p-2 rounded-lg scale-[0.6] pointer-events-auto resume_btn " > 
     <div className="pin w-2 h-2 rounded-full bg-red-600 absolute top-1 right-1 flex items-center justify-center">
        <div className='w-1 h-1 bg-slate-50 rounded-full'></div>
     </div>
    <h1>Resume</h1>
       
        <div className='flex flex-col gap-1 mt-2'>
        <div className='w-full h-1 bg-slate-300 rounded'></div>
        <div className='w-full h-1 bg-slate-300 rounded'></div>
        <div className='w-full h-1 bg-slate-300 rounded'></div>
        <div className='w-full h-1 bg-slate-300 rounded'></div>
        </div>
        </div>
  )
}

export default ResumeButtton