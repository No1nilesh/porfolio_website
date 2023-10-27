/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon as fasFaRibbon, } from '@fortawesome/free-solid-svg-icons/faRibbon';
import { faSuitcase as fasFaSuitcase } from '@fortawesome/free-solid-svg-icons/faSuitcase';
import {  faGraduationCap as fasFaGraduationCap} from '@fortawesome/free-solid-svg-icons/faGraduationCap';
function AboutCard({index, details}) {
    const iconMap = {
        faRibbon: fasFaRibbon,
        faSuitcase: fasFaSuitcase,
        faGraduationCap: fasFaGraduationCap
      };
    return (
        <div  id={"info" + index} className='gradient-box custom_shadow basis-1/3 w-full rounded-xl drop-shadow-xl info'>
            <div className="about-card h-full  w-full p-6 bg-[hsla(219,32%,12%,1)] rounded-xl  flex flex-col justify-center items-center ">
                <FontAwesomeIcon icon={iconMap[details.icon]} style={{ color: "hsl(207, 90%, 72%)", height: "26px" }} />
                <h1 className='font-bold text-base'>{details.title}</h1>
                <p className='text-[hsla(219,4%,55%,1)] text-xs'>{details.paragraphs[0]}</p>
                <p className='text-[hsla(219,4%,55%,1)] text-xs'>{details.paragraphs[1]}</p>
            </div>
        </div>
    )
}

export default AboutCard