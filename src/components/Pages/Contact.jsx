import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useGsap from "../Utility/useGsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
const Contact = () => {
  const gsap = useGsap();
  const cRef = useRef(null);
  const askRef = useRef(null);
  const btnRef = useRef(null);
  const [Cform, setCform] = useState({ name: "", email: "", questions: "" });

  const onchange = (e) => {
    if (e.target.value.trim() != "") {
      e.target.classList.add("has-content");
    } else {
      e.target.classList.remove("has-content");
    }

    setCform({ ...Cform, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(Cform)
      const jsondata = JSON.stringify(Cform);
      btnRef.current.disabled = "true";
      setInterval(() => {
        btnRef.current.disabled = false;
      }, 5000);
      setCform({ name:"", email:"", questions:"" })

      const response = await fetch("https://nileshgautam.onrender.com/send-mail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsondata
      })
           const data = await response.json()


      console.log('Form submitted:', data);

      if (data) {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }

  }

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'Back.ease.config(2)' }, scrollTrigger: {
        trigger: '#contact',
        scrub: false,
        start: '150px center',
        end: '80% 600px',
        // markers:true
      }
    })

    tl.fromTo(cRef.current, { opacity: 0, y: -50 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, transformOrigin: 'center', y: 0, duration: 0.7 })
    tl.fromTo('.cbox', { opacity: 0, y: -40 }, { opacity: 1, stagger: 0.5, transformOrigin: 'center', y: 0, duration: .5 }, "-=.2")
    tl.fromTo(askRef.current, { opacity: 0, y: -10 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, transformOrigin: 'center', y: 0, duration: 0.7 }, "-=.5")
    tl.fromTo('.inp', { opacity: 0, scaleX: 0, }, { opacity: 1, stagger: 0.3, transformOrigin: 'center', scaleX: 1, duration: 0.7, }, "-=.5")
    tl.fromTo(btnRef.current, { opacity: 0, y: 20 }, { 'clipPath': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 0.4, }, "-=0.2")
    return () => {
      tl.revert();
    }

  }, [])


  return (


    <div className="main-box w-full flex flex-col md:flex-row  gap-16 sm:gap-8 px-4 md:p-0 relative z-10">

      {/* conatact-label box */}
      <div className="contact-box basis-1/2 flex flex-col justify-center  md:self-start gap-10 md:px-16 mt-16 sm:mt-0">
        <h1 className=' text-lg head_text_color   uppercase'>Ask your Queries</h1>
        <h1 ref={cRef} className='  text-5xl sm:text-6xl md:text-7xl font-bold text-color -mt-7 clip'>Contact Me.</h1>
        {/* watsapp */}
        <div className="gradient-box custom_shadow w-full rounded-xl cbox">
          <div className="watsapp  bg-[hsla(219,32%,12%,1)] w-full  py-10  rounded-xl relative flex justify-center items-center flex-col">
            <h1 className="text-lg text-center">Watsapp</h1>
            <h2 className="text-[hsla(219,4%,55%,1)]">+916386047729</h2>
            <span className="absolute top-[94px] bg-color  rounded-full w-20 h-20 grid place-content-center">
              <Link
                to={"https://api.whatsapp.com/send?phone=916386047729"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="xl"
                  className="bg-green-600 rounded-full w-[60px] h-[60px] hover:scale-110 transition-transform"
                />
              </Link>
            </span>
          </div>
        </div>


        {/* Email */}
        <div className="gradient-box custom_shadow w-full rounded-xl cbox">
          <div className="watsapp  bg-[hsla(219,32%,12%,1)] w-full py-10  rounded-xl relative flex justify-center items-center flex-col">
            <h1 className="text-lg text-center">Email</h1>
            <h2 className="text-[hsla(219,4%,55%,1)]">
              gautamnilesh084@gmail.com
            </h2>
            <span className="absolute top-[94px] bg-color  rounded-full w-20 h-20 grid place-content-center">
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
      </div>


      {/* contact-Form */}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex basis-1/2 gap-5 flex-col w-full md:px-6"
      >
        <h1 ref={askRef} className="text-2xl font-bold text-color clip">Ask Your Queries! </h1>
        <div className="flex flex-col justify-center relative inp">
          <input
            type="text"
            id="name"
            name="name"
            min={3}
            value={Cform.name}
            required
            onChange={onchange}
            className=" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none inner_shadow"
          />

          <div className="cut absolute w-[8ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"></div>
          <label
            htmlFor="name"
            className="absolute p-2 text-[hsla(219,4%,55%,1)] nlabel transition-transform"
          >
            Name
          </label>
        </div>

        <div className="flex flex-col justify-center relative inp">
          <input
            type="email"
            id="email"
            name="email"
            value={Cform.email}
            required
            onChange={onchange}
            className=" bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-3  focus:bg-[hsla(219,32%,12%,1)] outline-none inner_shadow"
          />

          <div className="cut absolute w-[8ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"></div>
          <label
            htmlFor="email"
            className="absolute p-2 text-[hsla(219,4%,55%,1)] elabel transition-transform"
          >
            Email
          </label>
        </div>

        <div className="flex flex-col justify-start relative inp">
          <textarea
            name="questions"
            id="questions"
            onChange={onchange}
            value={Cform.questions}
            required
            cols="30"
            rows="10"
            className="bg-[hsla(219,32%,12%,1)] rounded-lg px-2 py-5   outline-none inner_shadow resize-none "
          ></textarea>

          <div className="cut absolute w-[17ch]  bg-color py-2 rounded-b-lg top-0 left-3 shadow-2xl"></div>
          <label
            htmlFor="quest"
            className="absolute px-2 py-4 text-[hsla(219,4%,55%,1)] qlabel transition-transform"
          >
            Ask Your Questions
          </label>
        </div>

        <button ref={btnRef} className="send-btn self-end clip disabled:grayscale">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </div>

  );
};

export default Contact;
