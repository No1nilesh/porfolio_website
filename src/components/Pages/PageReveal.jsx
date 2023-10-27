import {useRef} from 'react'
import '../CSS/Reveal.css'
import useGSAP from '../Utility/useGSAPP';
function PageReveal() {
    const textEl = useRef(null);
useGSAP({
  gsapAnimation : (gsap)=>{
    gsap.fromTo('.char', {y:150, }, {y:0, stagger:0.05,delay:0.2,ease:"Power3.easeOut", repeat:-1, duration:0.5});
  }
});
     
  return (
    <div className="reveal">
    <div className='w-full h-full grid place-content-center'>
    <div ref={textEl} className=" text-blue-500 flex gap-1 text-7xl font-medium clip">
   <div className="words flex">
   <div className='char'>H</div>
   <div className='char'>e</div>
   <div className='char'>l</div>
   <div className='char'>l</div>
   <div className='char'>o</div>
   </div>
   
   <div className="words flex">
   <div className='char'>W</div>
   <div className='char'>o</div>
   <div className='char'>r</div>
   <div className='char'>l</div>
   <div className='char'>d</div>
   <div className='char'>!</div>
   </div>
   </div>
    </div>

  </div>
  )
}

export default PageReveal