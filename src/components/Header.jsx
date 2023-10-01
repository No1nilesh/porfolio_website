import {useEffect} from 'react'
import DP from "../assets/dp.png"
const Header = () => {

  const addShadow=()=>{
    const bodyEl = document.querySelector("body");
    const headerEl = document.querySelector("header");
    const rect = bodyEl.getBoundingClientRect();
    if(rect.top < 0){
      headerEl.classList.add("header-shadow")
    }else{
      headerEl.classList.remove("header-shadow")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addShadow);
    return () => {
      window.removeEventListener('scroll', addShadow);
    };
  }, []);

  return (
    <header className=" w-full  fixed top-0 z-50 ">
      {/* top strip on the interface */}

      <div className=" container m-auto  top-strip  px-2 py-4 2xl:w-[80%]">
      <div className='flex items-center gap-2'>
      <div className="ppic w-8">
        <img src={DP} alt="" />
      </div>
        <div className="text-xl  text-color font-semibold">
          Nilesh Gautam
        </div>
      </div>
     
      </div>
    </header>
  )
}

export default Header
