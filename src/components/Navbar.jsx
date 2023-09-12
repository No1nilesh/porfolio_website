import { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faUser , faToolbox , faEnvelope, faBook} from '@fortawesome/free-solid-svg-icons'
import './utility.css'

function Navbar() {


 const scrollToSection = (id)=>{

  const element = document.getElementById(id);

  if(element){
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
  }

  const [activeSection, setActiveSection] = useState(null);
  
   const toggleActive=()=>{
    let currectActiveButton = null;

   

    const sections = document.querySelectorAll(".sections");

    sections.forEach((section)=>{
      const rect = section.getBoundingClientRect();
      if(rect.top <= window.innerHeight/2){
        currectActiveButton = section.id; 
      }

      setActiveSection(currectActiveButton);
    })


  }


  useEffect(() => {
    window.addEventListener('scroll', toggleActive);
    return () => {
      window.removeEventListener('scroll', toggleActive);
    };
  }, []);

  return (
   <nav className='fixed bottom-2  z-50   xl:w-1/3 '>
    <ul className='flex gap-6 justify-center items-center  border-gray-600 py-2 px-4 rounded-full  glass xl:gap-12'>
        <li className={activeSection=== 'home' ? "active" : ''}><FontAwesomeIcon icon={faHouse} onClick={()=>scrollToSection('home')} style={{color: "#b9c7df", width: "24px"}} /></li>
        <li  className={activeSection=== 'about' ? "active" : ''}><FontAwesomeIcon icon={faUser} onClick={()=>scrollToSection('about')} style={{color: "#b9c7df", width: "24px"}} /></li>
        <li  className={activeSection=== 'experience' ? "active" : ''}><FontAwesomeIcon icon={faBook} onClick={()=>scrollToSection('experience')} style={{color: "#b9c7df", width: "24px"}} /></li>
        <li  className={activeSection=== 'project' ? "active" : ''}><FontAwesomeIcon icon={faToolbox} onClick={()=>scrollToSection('project')} style={{color: "#b9c7df", width: "24px"}} /></li>
        <li  className={activeSection=== 'contact' ? "active" : ''}><FontAwesomeIcon icon={faEnvelope} onClick={()=>scrollToSection('contact')}  style={{color: "#b9c7df", width: "24px"}} /></li>
    </ul>
   </nav>
  );
}

export default Navbar;
