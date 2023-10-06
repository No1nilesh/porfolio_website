import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'
import useLenis from './Utility/useLenis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faToolbox, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'

// Most Imp fuction to run after the given wait this makes the toggle function to run less time which makes the load less on the website.
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}


function Navbar() {
  
  const lenis = useLenis();
  
  const [activeSection, setActiveSection] = useState('home');
  const ref = useRef();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const elId = "#" + element.id;
    element ? lenis.scrollTo(elId) : null;
  }

  const toggleActive = debounce(() => {
    let currectActiveButton = null;
    const sections = document.querySelectorAll(".sections");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      rect.top <= window.innerHeight / 2 ? currectActiveButton = section.id : null;
    });
    setActiveSection(currectActiveButton);
  }, 10); // Adjust the debounce delay as needed (50ms in this example)



  useEffect(() => {

    const tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});
    tl.to(ref.current, {'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y:0, duration:2.2 })

    window.addEventListener('scroll', toggleActive);
    return () => {
      window.removeEventListener('scroll', toggleActive);
    };
  }, []);

  return (
    <nav ref={ref} className='fixed bottom-2  z-50   xl:w-1/3 clip translate-y-20 opacity-0'>
      <ul className='flex gap-6 justify-center items-center  border-gray-600 py-2 px-4 rounded-full  glass xl:gap-12'>
        <li onClick={() => scrollToSection('home')} className={`cursor-pointer transition-transform ${activeSection === 'home' ? "active" : ''}`}><FontAwesomeIcon icon={faHouse} key={"home"}  style={{ color: "#b9c7df", width: "24px" }} /></li>
        <li onClick={() => scrollToSection('about')} className={`cursor-pointer transition-transform ${activeSection === 'about' ? "active" : ''}`}><FontAwesomeIcon icon={faUser} key={"about"}  style={{ color: "#b9c7df", width: "24px" }} /></li>
        <li onClick={() => scrollToSection('experience')} className={`cursor-pointer transition-transform ${activeSection === 'experience' ? "active" : ''}`}><FontAwesomeIcon icon={faBook} key={"experience"}  style={{ color: "#b9c7df", width: "24px" }} /></li>
        <li onClick={() => scrollToSection('project')} className={`cursor-pointer transition-transform ${activeSection === 'project' ? "active" : ''}`}><FontAwesomeIcon icon={faToolbox} key={"project"}  style={{ color: "#b9c7df", width: "24px" }} /></li>
        <li onClick={() => scrollToSection('contact')} className={`cursor-pointer transition-transform ${activeSection === 'contact' ? "active" : ''}`}><FontAwesomeIcon icon={faEnvelope} key={"contact"}  style={{ color: "#b9c7df", width: "24px" }} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
