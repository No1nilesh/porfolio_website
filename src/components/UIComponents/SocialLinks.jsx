import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'

const SocialLinks = () => {
  return (
    <span className="hidden sm:flex flex-row sm:flex-col  gap-2  justify-center md:absolute pointer-events-auto">
    <div className="social_links opacity-0  translate-y-10 md:translate-y-0 w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://www.linkedin.com/in/nilesh-gautam10/" aria-label='linkedin' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
    <div className="social_links opacity-0  translate-y-10 md:translate-y-[-40px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1"><a href="https://github.com/No1nilesh/" target="_blank" aria-label='github' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
    <div className="social_links opacity-0  translate-y-10 md:translate-y-[-80px]  w-8 h-8 cursor-pointer outline outline-1 outline-[rgba(255,255,255,0.2)]  bg-[hsla(219,32%,12%,1)] hover:bg-[hsl(207,90%,72%)] transition-colors drop-shadow-xl flex justify-center items-center rounded-md p-1 md:after:content-[''] "><a href="https://twitter.com/Nilesh__g1" aria-label='twitter' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></div>
   </span>
  )
}

export default SocialLinks
