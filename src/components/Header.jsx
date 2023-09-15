import {useEffect} from 'react'

const Header = () => {

  const addShadow=()=>{
    const bodyEl = document.querySelector("body");
    const headerEl = document.querySelector("header");
    const rect = bodyEl.getBoundingClientRect();
    if(rect.top < 0){
      headerEl.classList.add("drop-shadow-lg")
    }else{
      headerEl.classList.remove("drop-shadow-lg")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addShadow);
    return () => {
      window.removeEventListener('scroll', addShadow);
    };
  }, []);

  return (
    <header className=" w-full bg-[hsl(219,48%,8%)] fixed top-0 z-50 ">
      {/* top strip on the interface */}

      <div className=" container m-auto  top-strip  px-2 py-4 2xl:w-[70%]">
        <div className="text-xl  text-[hsl(207,90%,72%)] font-semibold">
          Nilesh Gautam
        </div>
      </div>
    </header>
  )
}

export default Header