import {useRef, useEffect} from 'react'
import gsap from 'gsap'
function CustomCursor() {
    const cursor = useRef(null)
    const cursordot = useRef(null)

    const  Mousedata=(e)=>{
      //  setposition({x:event.clientX, y:event.clientY})
       gsap.to(cursor.current, {top:e.pageY, left:e.pageX, ease:'power3.out', duration:1})
       cursordot.current.style.top = e.pageY  + "px";
       cursordot.current.style.left = e.pageX  + "px";
       requestAnimationFrame(Mousedata)
    }

    useEffect(() => {
      
        window.addEventListener("mousemove", Mousedata);
        

        return()=>{
            window.removeEventListener("mousemove", Mousedata);
        }

    }, [])
    

  return (
    <>
    <div ref={cursor} className='w-12 h-12 border-white/80 border-2 absolute translate-y-[-50%] translate-x-[-50%] rounded-full z-[9999] pointer-events-none'>
    </div>
    <div ref={cursordot} className='w-3 h-3 bg-gray-50 rounded-full  absolute z-[9999] pointer-events-none '></div>

    </>
  )
}

export default CustomCursor