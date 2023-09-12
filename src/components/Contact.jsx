import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div className="container px-4 pb-6">
      <h1 className="text-center text-lg text-[hsla(219,4%,55%,1)] pt-16 md:pt-[5rem]">
        Get In Touch!
      </h1>
      <h1 className="text-center text-2xl font-bold text-[hsl(207,90%,72%)] ">
        Contact Me
      </h1>

      <div className="main-box flex flex-col md:flex-row gap-16 sm:gap-4">

      {/* conatact-label box */}
        <div className="contact-box basis-1/2 flex flex-col justify-center items-center md:self-start gap-10 md:px-16">
          <h1 className="text-xl font-bold -mb-6">Talk to me! </h1>

                                {/* watsapp */}
          <div className="watsapp  bg-[hsla(219,32%,12%,1)] w-full  py-10  rounded-xl relative flex justify-center items-center flex-col">
            <h1 className="text-lg text-center">Watsapp</h1>
            <h2 className="text-[hsla(219,4%,55%,1)]">+916386047729</h2>
            <span className="absolute top-[94px] bg-[hsl(219,48%,8%)]  rounded-full w-20 h-20 grid place-content-center">
              <Link to={"https://api.whatsapp.com/send?phone=916386047729"} target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="xl"
                className="bg-green-600 rounded-full w-[60px] h-[60px] hover:scale-110 transition-transform"
              />
              </Link>
            </span>
          </div>

          {/* Email */}
          <div className="watsapp  bg-[hsla(219,32%,12%,1)] w-full py-10  rounded-xl relative flex justify-center items-center flex-col">
            <h1 className="text-lg text-center">Email</h1>
            <h2 className="text-[hsla(219,4%,55%,1)]">gautamnilesh084@gmail.com</h2>
            <span className="absolute top-[94px] bg-[hsl(219,48%,8%)]  rounded-full w-20 h-20 grid place-content-center">
            <Link to={"mailto:gautamnilesh084@gmail.com"} target="_blank">
            <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="bg-red-500 rounded-full w-[46px] h-[46px] p-2 hover:scale-110 transition-transform"
              />
            </Link>
          
            </span>
          </div>

        </div>

        {/* contact-Form */}

        <form action="" autoComplete="off" className="flex basis-1/2 gap-4 flex-col w-full md:px-6">
        <h1 className="text-xl font-bold text-center">Ask Your Queries! </h1>
        <div className="flex flex-col justify-center relative">
          <input type="text" id="name"  className=" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none" />
          <div className="cut absolute w-[8ch] h-[2ch] bg-[hsl(219,48%,8%)] py-2 rounded-b-lg top-0 left-3 transition-transform duration-200"></div>
          <label htmlFor="name" className="absolute p-2 text-[hsla(219,4%,55%,1)] nlabel transition-transform">Name</label>
        </div>

        <div className="flex flex-col justify-center relative">
          <input type="email" id="email"  className=" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none" />
          <div className="cut absolute w-[8ch] h-[2ch] bg-[hsl(219,48%,8%)] py-2 rounded-b-lg top-0 left-3 transition-transform"></div>
          <label htmlFor="email" className="absolute p-2 text-[hsla(219,4%,55%,1)] elabel transition-transform">Email</label>
        </div>

        <div className="flex flex-col justify-start relative">
        <textarea  name="quest" id="quest" cols="30" rows="10" className="bg-[hsla(219,32%,12%,1)] rounded-lg px-2   outline-none" ></textarea>
          <div className="cut absolute w-[17ch] h-[2ch] bg-[hsl(219,48%,8%)] py-2 rounded-b-lg top-0 left-3 transition-transform"></div>
          <label htmlFor="quest" className="absolute px-2 py-4 text-[hsla(219,4%,55%,1)] qlabel transition-transform">Ask Your Questions</label>
        </div>

         
       
        <button className="send-btn self-end">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
