import{_ as o}from"./index-ff5dc144.js";import{r as l,j as e,F as c,s as d}from"./vendor-e4b8abad.js";const x=l.lazy(()=>o(()=>import("./Button-a052799d.js"),["assets/Button-a052799d.js","assets/vendor-e4b8abad.js","assets/vendor-deb64cb7.css"])),m=l.lazy(()=>o(()=>import("./Slider-eee364f3.js"),["assets/Slider-eee364f3.js","assets/vendor-e4b8abad.js","assets/vendor-deb64cb7.css"]));function _({setModalState:r,setModalData:t,ModalData:a,ModalState:i}){const s=a,n=()=>{r(!1),t(""),console.log("close")};return e.jsxs("div",{className:"h-screen w-screen  fixed inset-0 z-50 modal_bg grid place-content-center",children:[e.jsx(c,{onClick:n,icon:d.faX,size:"xl",className:"absolute right-4 top-2 cursor-pointer"}),e.jsxs("div",{className:"modal max-w-4xl  card-glass px-4 py-6 rounded-xl flex flex-col gap-2 items-center",children:[e.jsx("h1",{className:"text-xl font-bold text-center text-white",children:s.name}),e.jsxs("div",{className:"slider flex overflow-x-hidden rounded-md max-w-2xl drop-shadow-xl relative z-10",children:[e.jsx(m,{data:s,ModalState:i}),e.jsx("div",{className:"absolute right-1 top-1 z-20",children:e.jsx("a",{rel:"noreferrer",href:s.github_link,children:e.jsx(x,{})})})]}),e.jsx("p",{className:"px-4",children:s.project_details})]})]})}export{_ as default};