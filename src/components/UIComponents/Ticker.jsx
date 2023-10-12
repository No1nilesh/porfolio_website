import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import useDebounce from '../Utility/useDebounce';
import '../CSS/Ticker.css'; // Adjust the path as per your project structure

const Marquee = () => {
  const debounce = useDebounce();
  // const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {

    let tween = gsap.to(".marquee__part", { xPercent: -100, ease: "linear", duration: 10, repeat: -1 })
    gsap.set(".marquee__inner", { xPercent: -50 });

    let isScrollingDown = true;
    let currentScroll = 0;


    const handleTickerScroll = () => {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      if (isScrollingDown) {
        tween.timeScale(1); // Play forward
      } else {
        tween.timeScale(-1); // Play in reverse
      }

      currentScroll = window.scrollY;

    }

    const debouncedhandleTickerScroll = debounce(handleTickerScroll, 15);

    window.addEventListener("scroll", debouncedhandleTickerScroll, { passive: true });


    return () => {
      window.removeEventListener("scroll", debouncedhandleTickerScroll);
    }

  }, []);

  return (
    <>
      <section className="spacer"></section>
      <section className="marquee bg-slate-800 md:rotate-3 ">
        <div className="marquee__inner" aria-hidden="true">
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
          <div className="marquee__part">
            JavaScript React Tailwind MondoDb Express Java -
          </div>
        </div>
      </section>
      <section className="spacer"></section>
    </>
  );
};

export default Marquee;
