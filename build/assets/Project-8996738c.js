import{_ as a,u as p}from"./index-bcf987d2.js";import{r as t,j as e}from"./vendor-75170c33.js";import{d as x}from"./data-198fec9d.js";const d=t.lazy(()=>a(()=>import("./Modal-7075bf50.js"),["assets/Modal-7075bf50.js","assets/index-bcf987d2.js","assets/vendor-75170c33.js","assets/vendor-deb64cb7.css","assets/index-2b62d42e.css"])),m=t.lazy(()=>a(()=>import("./ProjectCard-2eae6062.js"),["assets/ProjectCard-2eae6062.js","assets/vendor-75170c33.js","assets/vendor-deb64cb7.css","assets/Button-d81baba9.js"])),f=t.lazy(()=>a(()=>import("./Star-11137216.js"),["assets/Star-11137216.js","assets/vendor-75170c33.js","assets/vendor-deb64cb7.css"])),g=()=>{p({gsapAnimation:o=>{const r=o.timeline({defaults:{ease:"Back.ease.config(2)"},scrollTrigger:{trigger:"#project",scrub:!1,start:"150px center",end:"80% 600px"}});r.fromTo(s.current,{opacity:0,y:-50},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,transformOrigin:"center",y:0,duration:1}),r.fromTo(".p-card",{opacity:0,x:-500},{stagger:.5,opacity:1,x:0,duration:1},"-=0.8")}});const s=t.useRef(null),[l,c]=t.useState(!1),[i,n]=t.useState("");return e.jsxs("div",{className:"container xl:h-screen 2xl:w-[80%]  overflow-x-hidden overflow-y-hidden",children:[e.jsx(t.Suspense,{fallback:null,children:l?e.jsx(d,{ModalState:l,setModalState:c,ModalData:i,setModalData:n}):null}),e.jsx(f,{}),e.jsx("h1",{className:" text-lg head_text_color pt-8 xl:pt-[5rem]  uppercase px-4",children:"My Portfolio!"}),e.jsx("h1",{ref:s,className:" text-5xl sm:text-6xl md:text-7xl font-bold text-color px-4 clip",children:"Recent Work."}),e.jsx("div",{className:"project-container z-10 relative mt-10 flex flex-col md:flex-row flex-wrap  gap-10 lg:gap-0 items-center justify-evenly",children:x?x.projects.map((o,r)=>e.jsx(m,{project:o,setModalState:c,ModalData:i,setModalData:n},r)):""})]})};export{g as default};