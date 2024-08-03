import{_ as n,u as c}from"./index-bcf987d2.js";import{j as e,r as o}from"./vendor-75170c33.js";import{d as i}from"./data-198fec9d.js";function d(){const r=async()=>{try{const l=await(await fetch("/assets/Nilesh_Gautam_Resume.pdf")).blob(),a=URL.createObjectURL(l),t=document.createElement("a");t.href=a,t.download="Resume.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(a)}catch(s){console.error("Error downloading PDF:",s)}};return e.jsx("button",{className:"btn w-fit self-end mr-8",onClick:r,children:"Download Resume"})}const m=o.lazy(()=>n(()=>import("./Abchar-5bff9130.js"),["assets/Abchar-5bff9130.js","assets/vendor-75170c33.js","assets/vendor-deb64cb7.css","assets/index-bcf987d2.js","assets/index-2b62d42e.css"])),p=o.lazy(()=>n(()=>import("./AboutCard-adeb23e3.js"),["assets/AboutCard-adeb23e3.js","assets/vendor-75170c33.js","assets/vendor-deb64cb7.css"]));function h(){const r=o.useRef(null),s=o.useRef(null),l=o.useRef(null);return c({gsapAnimation:a=>{const t=a.timeline({defaults:{ease:"power4.inOut"},scrollTrigger:{trigger:"#about",scrub:!1,start:"150px center",end:"80% 600px",markers:!1}});t.fromTo(r.current,{opacity:0,y:-50},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,transformOrigin:"center",y:0,duration:.7}),t.fromTo(s.current,{opacity:0,y:50},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,y:0,duration:1},"-=0.7"),t.fromTo(l.current,{opacity:0,x:500},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,x:0,duration:1},"-=0.7"),t.fromTo("#info1",{opacity:0},{opacity:1,duration:2},"-=0.8"),t.fromTo("#info0",{x:200,opacity:0},{x:0,duration:1,opacity:1},"-=1"),t.fromTo("#info2",{x:-200,opacity:0},{x:0,duration:1,opacity:1},"-=1"),t.fromTo(".resume_btn",{opacity:0,y:-20},{y:0,opacity:1},"-=2")}}),e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"absolute  lg:h-2/3 opacity-20 right-0 rotate-180 top-0",loading:"lazy",src:"/assets/tech2.svg",alt:""}),e.jsx("img",{className:"absolute  lg:h-2/3 bottom-0 left-0 opacity-20 ",loading:"lazy",src:"/assets/tech2.svg",alt:""}),e.jsx("div",{className:"container px-4 2xl:p-0 pb-20 lg:pb-0  2xl:w-[80%] m-auto overflow-hidden",children:e.jsxs("div",{className:"flex flex-col lg:flex-row  justify-center items-center  lg:gap-4 gap-2 pt-16 sm:pt-[2rem]",children:[e.jsxs("div",{className:"md:basis-1/2 self-start flex flex-col gap-1 md:gap-3",children:[e.jsx("h1",{className:" text-lg head_text_color  uppercase",children:"My Intro!"}),e.jsx("h1",{ref:r,className:" font-bold text-color text-5xl sm:text-6xl md:text-7xl clip",children:"About Me."}),e.jsxs("p",{ref:s,className:"whitespace-normal mr-2  para-color md:mt-5 clip text-base",children:["Meet"," ",e.jsx("span",{className:"text-xl font-semibold text-gray-400",children:"Nilesh Kumar Gautam"}),", a dynamic software developer with a passion for pushing boundaries in the digital realm. Armed with expertise in"," ",e.jsx("span",{className:"text-md font-semibold text-gray-400",children:"JavaScript, React.js, and MongoDB"}),", Nilesh crafts innovative solutions that redefine industry standards. From the sleek and intuitive ",e.jsx("span",{className:"text-md font-semibold text-gray-400",children:"Fitness Flex gym management app "}),"to the dynamic ",e.jsx("span",{className:"text-md font-semibold text-gray-400",children:"Genesis 5.0 "}),"college event website, Nilesh's portfolio showcases his prowess and creativity in equal measure. But Nilesh is more than just a code virtuoso – he's a natural leader. As a team lead for his final year project, Nilesh orchestrated seamless collaboration, ensuring his team surpassed all expectations. Ready to embark on a journey of technological excellence with Nilesh? Let's create something extraordinary together."]}),e.jsx(d,{})]}),e.jsxs("div",{ref:l,className:"3d-element   md:basis-1/2 clip ",children:[e.jsx(m,{}),e.jsx("div",{className:"flex gap-8 flex-col justify-start items-start sm:basis-1/2  ",children:e.jsx("div",{className:"about-cards flex   gap-4  flex-col md:flex-row w-full ",children:i?i.sections.map((a,t)=>e.jsx(p,{details:a,index:t},t)):null})})]})]})})]})}export{h as default};