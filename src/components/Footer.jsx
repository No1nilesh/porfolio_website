import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter} from '@fortawesome/free-brands-svg-icons/faXTwitter'



function Footer() {

  const [date, setDate] = useState(null)
  useEffect(() => {
  let time = new Date();
  const currentYear = time.getFullYear();
  setDate(currentYear)
  }, [])
  
  return (
    <footer className=" pt-8  bg-[hsla(219,32%,12%,1)] h-60">
 <h1 className="text-center text-4xl font-bold text-color py-4"> Nilesh Gautam</h1>
 <div className="   flex  gap-2 self-center justify-center">
      <a rel='noreferrer' href={"https://www.linkedin.com/in/nilesh-gautam10/"} aria-label='linkedin' target='_blank' className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><FontAwesomeIcon icon={faLinkedinIn} size="xl"/></a>
      <a rel='noreferrer' href={"https://github.com/No1nilesh"} target='_blank' aria-label='github' className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
      <a rel='noreferrer' href={"https://twitter.com/Nilesh__g1"} target='_blank' aria-label='twitter' className="w-8 h-8 cursor-pointer bg-[hsla(219,32%,12%)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><FontAwesomeIcon icon={faXTwitter} size="xl"/></a>
      </div>
      <div className='text-center text-lg font-semibold text-color py-4'>{date}</div>
    </footer>
  )
}

export default Footer