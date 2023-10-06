import { useEffect } from 'react';
import '../components/CSS/Ticker.css'; // Create a CSS file named Ticker.css and adjust the path as per your project structure
import useGsap from './Utility/useGsap';
const Ticker = () => {

    const gsap = useGsap();
    useEffect(()=>{
        const tl = gsap.timeline({defaults:{ease: "Power0.easeNone"},  scrollTrigger:{
            trigger: '#about',
            scrub: false,
            start: '150px center',
            end: '80% 600px',
            markers:false
          }})

          tl.to('.ticker-text',{x:-1000,repeat:-1, duration:8, yoyo:true})

          return()=>{
            tl.revert();
          }
    },[])

  return (
    <div className=" strip w-screen h-11 gradient-box drop-shadow-xl  absolute left-0 rotate-3 bottom-[5rem]  items-center hidden lg:flex overflow-hidden">
      <div className="ticker-text text-lg text-[#fff]">
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
        <span>JavaScript React Tailwind MondoDb Express Java - </span>
      </div>
    </div>
  );
};

export default Ticker;
