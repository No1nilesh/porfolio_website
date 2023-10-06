import { useEffect } from "react";
import useGsap from "../Utility/useGsap";


const Abchar = (props) => {

	const gsap = useGsap();

	useEffect(() => {
		const tl = gsap.timeline({defaults:{ease: 'Back.ease.config(2)'} ,scrollTrigger:{
			trigger: '#about',
			scrub: false,
			start: '150px center',
			end: '80% 600px',
			// markers:true
		}})

		tl.fromTo('.cirlcepulse', {scale:0.4, transformOrigin: "center", }, {scale:1.1, repeat:-1, yoyo:true, duration:1.5, delay:3})
		tl.fromTo('.timeline', {scaleX:0.2, transformOrigin: "right", }, {scaleX:3.5, yoyo:true, duration:1}, "-=0.5")
		tl.fromTo('.pageload', {scale:1, opacity:1, transformOrigin: "right", }, {scale:1.1, opacity:0.7, yoyo:true, duration:1, repeat:-1}, "-=0.5")

		return()=>{
			tl.revert();
		}

	}, [])
	
	
return (
  <svg xmlns="http://www.w3.org/2000/svg" width={1200} height={800}  viewBox="0 0 1200 800" {...props} className=" w-[100%] h-[100%]">
    <title>{"2211"}</title>
    <defs>
      <linearGradient
        id="g1"
        x2={1}
        gradientTransform="matrix(0 -136.674 84.946 0 786.486 489.364)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#dbccff" />
        <stop offset={1} stopColor="#d1bbff" />
      </linearGradient>
      <linearGradient
        id="g2"
        x2={1}
        gradientTransform="matrix(0 -136.674 84.946 0 784.135 494.397)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b5a6e7" />
        <stop offset={1} stopColor="#7760bf" />
      </linearGradient>
      <linearGradient
        id="g3"
        x2={1}
        gradientTransform="matrix(0 -57.537 36.74 0 845.248 462.035)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b5a6e7" />
        <stop offset={1} stopColor="#7760bf" />
      </linearGradient>
      <linearGradient
        id="g4"
        x2={1}
        gradientTransform="matrix(-15.432 -7.21 1.017 -2.177 909.494 409.96)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8b8be0" />
        <stop offset={1} stopColor="#a177b7" />
      </linearGradient>
      <linearGradient
        id="g5"
        x2={1}
        gradientTransform="matrix(4.365 -9.342 23.302 10.887 901.468 411.901)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#a177b7" />
      </linearGradient>
      <linearGradient
        id="g6"
        x2={1}
        gradientTransform="matrix(28.006 -59.942 6.238 2.915 1153.589 597.011)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="g7"
        x2={1}
        gradientTransform="matrix(0 -178.42 263.728 0 699.754 800)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.011} stopColor="#4b1567" />
        <stop offset={1} stopColor="#4f3885" />
      </linearGradient>
      <linearGradient
        id="g10"
        x2={1}
        gradientTransform="matrix(0 -178.42 183.4 0 732.468 800)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccf" />
        <stop offset={1} stopColor="#755cbb" />
      </linearGradient>
      <linearGradient
        id="g11"
        x2={1}
        gradientTransform="matrix(0 -48.664 18.702 0 688.221 710.79)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccf" />
        <stop offset={1} stopColor="#755cbb" />
      </linearGradient>
      <linearGradient
        id="g12"
        x2={1}
        gradientTransform="matrix(0 -47.677 61.187 0 699.849 692.895)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccf" />
        <stop offset={1} stopColor="#755cbb" />
      </linearGradient>
      <linearGradient
        id="g13"
        x2={1}
        gradientTransform="matrix(0 -44.247 36.219 0 869.181 323.636)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#ffc2a9" />
        <stop offset={1} stopColor="#ff9595" />
      </linearGradient>
      <linearGradient
        id="g14"
        x2={1}
        gradientTransform="matrix(0 -73.246 33.02 0 895.529 322.589)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#c27cb6" />
      </linearGradient>
      <linearGradient
        id="g15"
        x2={1}
        gradientTransform="matrix(0 -112.92 67.09 0 911.695 372.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#ffc2a9" />
        <stop offset={1} stopColor="#ff9595" />
      </linearGradient>
      <linearGradient
        id="g16"
        x2={1}
        gradientTransform="matrix(-35.504 0 0 -35.243 836.86 337.177)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#d1a1d6" />
        <stop offset={0.994} stopColor="#bd89c4" />
      </linearGradient>
      <linearGradient
        id="g17"
        x2={1}
        gradientTransform="matrix(0 -151.002 117.456 0 499.073 441.2)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#ffc2a9" />
        <stop offset={1} stopColor="#ff9595" />
      </linearGradient>
      <linearGradient
        id="g18"
        x2={1}
        gradientTransform="matrix(0 -75.02 72.463 0 423.002 392.82)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#c27cb6" />
      </linearGradient>
      <linearGradient
        id="g19"
        x2={1}
        gradientTransform="matrix(0 -33.63 35.621 0 385.243 366.926)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffb0b0" />
        <stop offset={0.984} stopColor="#ffc2a9" />
      </linearGradient>
      <linearGradient
        id="g20"
        x2={1}
        gradientTransform="matrix(0 -18.442 17.032 0 359.847 372.105)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffb0b0" />
        <stop offset={0.984} stopColor="#ffc2a9" />
      </linearGradient>
      <linearGradient
        id="g21"
        x2={1}
        gradientTransform="matrix(-34.3 0 0 -35.605 428.74 391.06)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#d1a1d6" />
        <stop offset={0.994} stopColor="#bd89c4" />
      </linearGradient>
      <linearGradient
        id="g22"
        x2={1}
        gradientTransform="matrix(0 -71.22 73.328 0 667.503 352.9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b4cdf8" />
        <stop offset={1} stopColor="#d3d6fb" />
      </linearGradient>
      <linearGradient
        id="g23"
        x2={1}
        gradientTransform="matrix(-73.328 0 0 -71.08 669.58 281.68)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g24"
        x2={1}
        gradientTransform="matrix(0 -358.879 340.359 0 843.086 637.459)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#74a1ef" />
        <stop offset={1} stopColor="#979dee" />
      </linearGradient>
      <linearGradient
        id="g25"
        x2={1}
        gradientTransform="matrix(-87.4 0 0 -172.38 802.82 327.64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g26"
        x2={1}
        gradientTransform="matrix(0 -167.82 86.204 0 968.876 514.34)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#74a1ef" />
        <stop offset={1} stopColor="#aeb3f3" />
      </linearGradient>
      <linearGradient
        id="g27"
        x2={1}
        gradientTransform="matrix(-112.607 0 0 -122.496 516.936 404.724)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#81aaf1" />
        <stop offset={1} stopColor="#aeb3f3" />
      </linearGradient>
      <linearGradient
        id="g28"
        x2={1}
        gradientTransform="matrix(0 -169.02 144.291 0 575.468 527.24)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g29"
        x2={1}
        gradientTransform="matrix(-282.7 0 0 -288.539 848.62 348.92)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g30"
        x2={1}
        gradientTransform="matrix(-54.036 0 0 -24.271 599.389 433.747)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g31"
        x2={1}
        gradientTransform="matrix(-79.412 0 0 -34.58 648.4 523.425)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g32"
        x2={1}
        gradientTransform="matrix(-84.84 0 0 -30.887 644.72 561.18)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g33"
        x2={1}
        gradientTransform="matrix(0 -95.22 111.68 0 758.333 487.72)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g34"
        x2={1}
        gradientTransform="matrix(0 -72.18 48.932 0 763.311 495.724)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g35"
        x2={1}
        gradientTransform="matrix(0 -54.52 43.94 0 857.974 403.44)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g36"
        x2={1}
        gradientTransform="matrix(-21.978 0 0 -55.581 780.02 327.64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g37"
        x2={1}
        gradientTransform="matrix(0 -101.08 14.869 0 884.674 487.72)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g38"
        x2={1}
        gradientTransform="matrix(0 -52.82 18.921 0 501.188 465.98)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g39"
        x2={1}
        gradientTransform="matrix(0 -40.38 40.337 0 507.58 463.62)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g40"
        x2={1}
        gradientTransform="matrix(0 -14.995 26.204 0 839.855 406.935)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g41"
        x2={1}
        gradientTransform="matrix(0 -81.954 27.257 0 918.714 452.654)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g42"
        x2={1}
        gradientTransform="matrix(0 -61.672 43.604 0 628.275 394.968)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g43"
        x2={1}
        gradientTransform="matrix(0 -85.119 65.087 0 721.115 386.632)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2ffd5" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g44"
        x2={1}
        gradientTransform="matrix(-142.169 0 0 -33.168 694.198 385.616)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4634a0" />
        <stop offset={1} stopColor="#427cc0" />
      </linearGradient>
      <linearGradient
        id="g45"
        x2={1}
        gradientTransform="matrix(-92.52 0 0 -83.16 681.94 278.58)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g46"
        x2={1}
        gradientTransform="matrix(0 -53.543 16.552 0 530.699 459.958)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g47"
        x2={1}
        gradientTransform="matrix(0 -162.14 57.52 0 748.304 520.36)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g48"
        x2={1}
        gradientTransform="matrix(0 -46.48 72.52 0 708.995 596.52)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g49"
        x2={1}
        gradientTransform="matrix(0 -22.571 81.82 0 606.923 583.751)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b2e8ff" />
        <stop offset={1} stopColor="#4964bb" />
      </linearGradient>
      <linearGradient
        id="g50"
        x2={1}
        gradientTransform="matrix(0 -154.408 105.55 0 717.746 293.624)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#ffc2a9" />
        <stop offset={1} stopColor="#ff9595" />
      </linearGradient>
      <linearGradient
        id="g51"
        x2={1}
        gradientTransform="matrix(0 -45.525 26.501 0 701.472 231.314)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#ffc2a9" />
        <stop offset={1} stopColor="#ff9595" />
      </linearGradient>
      <linearGradient
        id="g52"
        x2={1}
        gradientTransform="matrix(-3.715 -19.345 79.841 -15.334 586.831 252.396)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e1616a" />
        <stop offset={1} stopColor="#ff8883" />
      </linearGradient>
      <linearGradient
        id="g53"
        x2={1}
        gradientTransform="matrix(0 -99.474 97.088 0 651.532 240.926)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#c27cb6" />
      </linearGradient>
      <linearGradient
        id="g54"
        x2={1}
        gradientTransform="matrix(-39.079 0 0 -16.55 621.203 162.578)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.006} stopColor="#651d4f" />
        <stop offset={1} stopColor="#93364f" />
      </linearGradient>
      <linearGradient
        id="g55"
        x2={1}
        gradientTransform="matrix(-12.841 0 0 -18.553 568.284 169.131)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.006} stopColor="#651d4f" />
        <stop offset={1} stopColor="#93364f" />
      </linearGradient>
      <linearGradient
        id="g56"
        x2={1}
        gradientTransform="matrix(0 -19.705 22.168 0 614.179 200.189)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cf6074" />
        <stop offset={1} stopColor="#f37270" />
      </linearGradient>
      <linearGradient
        id="g57"
        x2={1}
        gradientTransform="matrix(0 -17.147 12.861 0 577.548 206.442)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cf6074" />
        <stop offset={1} stopColor="#ff817f" />
      </linearGradient>
      <linearGradient
        id="g58"
        x2={1}
        gradientTransform="matrix(0 -187.265 114.758 0 449.939 295.565)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.006} stopColor="#651d4f" />
        <stop offset={1} stopColor="#93364f" />
      </linearGradient>
      <linearGradient
        id="g59"
        x2={1}
        gradientTransform="matrix(0 -43.2 16.386 0 610.492 177.64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#8860c7" />
      </linearGradient>
      <linearGradient
        id="g60"
        x2={1}
        gradientTransform="matrix(0 -187.265 95.391 0 796.229 295.565)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccc2db" />
        <stop offset={0.994} stopColor="#8860c7" />
      </linearGradient>
      <linearGradient
        id="g61"
        x2={1}
        gradientTransform="matrix(0 -8.045 43.521 0 600.603 295.521)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#776d7e" />
        <stop offset={1} stopColor="#9d68c2" />
      </linearGradient>
      <linearGradient
        id="g62"
        x2={1}
        gradientTransform="matrix(25.622 -31.39 22.436 18.313 674.67 246.364)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#b060f4" />
      </linearGradient>
      <linearGradient
        id="g63"
        x2={1}
        gradientTransform="matrix(14.518 -17.787 17.394 14.198 669.202 234.337)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffeadb" />
        <stop offset={0.994} stopColor="#b060f4" />
      </linearGradient>
      <linearGradient
        id="g64"
        x2={1}
        gradientTransform="matrix(-10.474 0 0 -19.424 566.805 236.565)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.006} stopColor="#651d4f" />
        <stop offset={1} stopColor="#c46376" />
      </linearGradient>
      <linearGradient
        id="g65"
        x2={1}
        gradientTransform="matrix(-11.297 0 0 -7.278 579.737 234.85)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.006} stopColor="#651d4f" />
        <stop offset={1} stopColor="#c46376" />
      </linearGradient>
      <linearGradient
        id="g66"
        x2={1}
        gradientTransform="matrix(-354.113 0 0 -25.375 496.406 253.205)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9d68c2" />
        <stop offset={1} stopColor="#aec2ff" />
      </linearGradient>
      <linearGradient
        id="g67"
        x2={1}
        gradientTransform="matrix(0 -106.804 108.152 0 477.109 399.639)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccedff" />
        <stop offset={1} stopColor="#9d68c2" />
      </linearGradient>
      <linearGradient
        id="g68"
        x2={1}
        gradientTransform="rotate(-90 306.672 40.895) scale(47.045)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccedff" />
        <stop offset={1} stopColor="#9d68c2" />
      </linearGradient>
      <linearGradient
        id="g69"
        x2={1}
        gradientTransform="rotate(-90 278.918 68.648) scale(47.045)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccedff" />
        <stop offset={1} stopColor="#9d68c2" />
      </linearGradient>
      <linearGradient
        id="g70"
        x2={1}
        gradientTransform="rotate(-90 334.889 12.678) scale(47.045)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ccedff" />
        <stop offset={1} stopColor="#9d68c2" />
      </linearGradient>
      <linearGradient
        id="g71"
        x2={1}
        gradientTransform="matrix(0 -49.244 57.274 0 825.834 231.975)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d93de3" />
        <stop offset={1} stopColor="#ff6dba" />
      </linearGradient>
      <linearGradient
        id="g72"
        x2={1}
        gradientTransform="matrix(0 -49.244 4.451 0 1046.996 231.975)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#a242ea" />
        <stop offset={1} stopColor="#fe117e" />
      </linearGradient>
      <linearGradient
        id="g73"
        x2={1}
        gradientTransform="matrix(-27.146 -216.142 249.719 -31.364 899.609 742.205)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ff06da" />
        <stop offset={1} stopColor="#7837a0" />
      </linearGradient>
      <linearGradient
        id="g74"
        x2={1}
        gradientTransform="matrix(0 -17.874 17.875 0 200.439 226.617)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#459fff" />
        <stop offset={1} stopColor="#a96dff" />
      </linearGradient>
      <linearGradient
        id="g75"
        x2={1}
        gradientTransform="rotate(-90 739.345 -303.268) scale(22.247)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#459fff" />
        <stop offset={1} stopColor="#a96dff" />
      </linearGradient>
      <linearGradient
        id="g76"
        x2={1}
        gradientTransform="rotate(-90 200.403 26.214) scale(17.874)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b31a8f" />
        <stop offset={1} stopColor="#fe117e" />
      </linearGradient>
      <linearGradient
        id="g77"
        x2={1}
        gradientTransform="rotate(-90 516.682 -231.231) scale(12.639)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b31a8f" />
        <stop offset={1} stopColor="#fe117e" />
      </linearGradient>
      <linearGradient
        id="g78"
        x2={1}
        gradientTransform="matrix(0 -12.639 12.639 0 324.6 564.326)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8642a0" />
        <stop offset={1} stopColor="#6456c0" />
      </linearGradient>
      <linearGradient
        id="g79"
        x2={1}
        gradientTransform="rotate(-90 803.819 -177.154) scale(11.299)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8642a0" />
        <stop offset={1} stopColor="#6456c0" />
      </linearGradient>
      <linearGradient
        id="g80"
        x2={1}
        gradientTransform="matrix(0 -93.325 130.859 0 961.193 565.543)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0683e3" />
        <stop offset={1} stopColor="#6de2ff" />
      </linearGradient>
      <linearGradient
        id="g81"
        x2={1}
        gradientTransform="matrix(0 -116.748 163.703 0 325.163 697.643)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0683e3" />
        <stop offset={1} stopColor="#6de2ff" />
      </linearGradient>
      <linearGradient
        id="g82"
        x2={1}
        gradientTransform="matrix(-10.48 -89.949 59.928 -6.982 370.383 642.214)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1852a0" />
        <stop offset={1} stopColor="#067ed3" />
      </linearGradient>
      <linearGradient
        id="g83"
        x2={1}
        gradientTransform="matrix(0 -89.766 70.768 0 378.148 631.949)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1852a0" />
        <stop offset={1} stopColor="#067ed3" />
      </linearGradient>
      <linearGradient
        id="g84"
        x2={1}
        gradientTransform="matrix(-10.551 -90.563 59.895 -6.978 384.616 637.394)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#188dc1" />
        <stop offset={1} stopColor="#06bfe7" />
      </linearGradient>
      <linearGradient
        id="g85"
        x2={1}
        gradientTransform="matrix(-22.859 -84.893 96.482 -25.979 406.198 168.654)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#188dc1" />
        <stop offset={1} stopColor="#06bfe7" />
      </linearGradient>
      <linearGradient
        id="g86"
        x2={1}
        gradientTransform="matrix(-17.274 -64.154 21.53 -5.797 805.086 61.958)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1852a0" />
        <stop offset={1} stopColor="#067ed3" />
      </linearGradient>
      <linearGradient
        id="g87"
        x2={1}
        gradientTransform="matrix(15.583 -57.874 65.774 17.711 1009.472 316.001)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#188dc1" />
        <stop offset={1} stopColor="#06bfe7" />
      </linearGradient>
      <linearGradient
        id="g88"
        x2={1}
        gradientTransform="matrix(11.776 -43.735 14.678 3.952 737.546 243.265)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1852a0" />
        <stop offset={1} stopColor="#067ed3" />
      </linearGradient>
      <radialGradient
        id="g8"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(167.006 321.245 409.27) scale(35.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4b474b" />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="g9"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="scale(-35.85) rotate(15.659 66.736 -67.04)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4b474b" />
        <stop offset={1} />
      </radialGradient>
    </defs>
    <style>
      {
        ".s0{fill:#f1f1f4}.s3{fill:#e5e2ff}.s8{fill:#fff}.s12{fill:#6130a1}.s22{fill:#e28183}.s29{fill:#ffbcaf}.s58{fill:#d1fffc}.s68{fill:#ffebed}.s69{fill:#914343}.s70{fill:#451414}.s71{fill:#571d0f}.s72{fill:#c6659c}.s80{fill:#b55b6d}.s92{mix-blend-mode:multiply;fill:#d1d4fb}.s93{fill:#e0ffff}.s105{fill:#403da2}.s110{opacity:.5;mix-blend-mode:multiply;fill:#601734}.s114{fill:#4f31e0}.s119{fill:#744ca2}"
      }
    </style>
    <g id="Layer 3">
      <g id="&lt;Clip Group&gt;">
        <g id="&lt;Group&gt;">
          <path
            id="&lt;Compound Path&gt;"
            fillRule="evenodd"
            d="m904.1 409.3-5.1.2-.1-4.2h-.2l-1.5 4.3-7.2.2q-2 0-3.4-.4-1.4-.5-2.3-1.4-.9-.9-1.3-2.2-.5-1.3-.5-2.9l-.1-3.7q-.1-1.6.3-2.9.3-1.4 1.2-2.3.8-1 2.2-1.5 1.4-.6 3.4-.6l13.4-.4q.7 0 .7.7zm-5.5-12.9q0-.1-.1-.3-.1-.1-.3-.1l-8.2.3q-1.4 0-2 .7-.6.6-.6 2.2l.1 3q.1 1.7.7 2.3.6.6 2.1.6l8.6-.3z"
            className="s0"
          />
          <path
            d="m874 403.1-7 .2-.1-3.7 8.4-.2-.1-2.3q0-.1-.1-.2 0-.1-.2-.1l-10.2.3q-.2 0-.2.3l.1 2.4h-.2l-4.8-1.6-.1-4.7q0-.7.7-.7l19.2-.6q.7 0 .7.7l.5 16.4q.1.8-.7.8l-19.7.6-.2-4.7 15.1-.4q.4 0 .3-.4l-.1-5.3h-.2zM836.8 398l-.1-3.7q0-.8.8-.8l15.9-.5q2.4-.1 3.4.9 1.1 1.1 1.2 3v1.3q0 1-.2 1.7t-.7 1.2q-.4.5-1.2.8-.8.3-1.8.5l-10.7 1.7q-.5.1-.6.3-.2.1-.2.6v.5q.1.6.3.8.2.2.8.2l14.3-.4.1 4.6-15.9.5q-1.4.1-2.5-.2-1-.3-1.6-.8-.6-.6-.9-1.4-.3-.9-.4-2v-1.4q0-1 .1-1.7.2-.8.7-1.3.4-.5 1.1-.8.8-.4 1.8-.6l11.1-1.8q.5-.1.6-.3.2-.1.2-.7v-.4q0-.4-.2-.6-.2-.2-.8-.2l-9.4.3q-.3 0-.3.3l.1 1.9h-.2zM829.8 411.6l-.5-17.9 5-.1.6 17.8zM811.1 407.2q0 .3.3.3l8.5-.2q1.4-.1 2-.7.6-.7.5-2.3l-.1-3.2q0-.8-.1-1.3-.2-.6-.5-.9-.4-.3-.9-.4-.5-.2-1.2-.1l-8.6.2q-.2 0-.2.3l.1 1.7h-.2l-4.8-1.6-.1-3.8q0-.8.7-.8l13.4-.4q2-.1 3.4.4t2.3 1.4q.9.8 1.3 2.1.5 1.4.5 3l.1 3.7q.1 1.6-.3 2.9-.3 1.3-1.2 2.3-.8.9-2.2 1.5-1.4.5-3.4.6l-13.4.4q-.6 0-.7-.7l-.2-8.8 5-.1v.2q-.1.3-.1.8v.8zM802.9 394.5q.7 0 .7.7l.5 17.2-4.6.1-.4-13.4q0-.4-.4-.4h-.2q-.4 0-.5.3l-6.6 13.1q-.2.4-.5.5-.2.2-.8.2l-7.2.2q-.7 0-.7-.7l-.6-17.1 4.6-.2.4 13.5q.1.4.4.4h.3q.3-.1.5-.4l6.4-13q.1-.4.4-.6.2-.1.8-.2z"
            className="s0"
          />
        </g>
        <path
          fillRule="evenodd"
          d="M889.8 371.2c7.6-13.1 21.1-18.5 21.1-18.5l4.7 2.2-10.6 19.2c1.4 7.4 6.5 11.4 6.5 11.4s6.4 1.3 13-2.4l7.9-20.4 4.7 2.2s4.5 13.8-.7 28.1c0 0-2 4.6-2.3 5-1.9 2.2-6.7 4.7-16.1 4.1l-32.4 61.8c2.6 4.7 3.1 10.5.7 15.7-4 8.5-14.1 12.1-22.6 8.2-8.4-4-12.1-14.1-8.1-22.6 2.4-5.2 7.2-8.6 12.4-9.5l26.6-64.5c-6.3-6.6-7.6-11.9-7.1-14.9.1-.7 2.3-5.1 2.3-5.1zm-26.6 106.6 8.5 4 7.8-5.4-.8-9.4-8.6-4-7.8 5.4z"
          style={{
            fill: "url(#g1)",
          }}
        />
        <path
          fillRule="evenodd"
          d="M887.5 376.3c7.6-13.2 21.1-18.6 21.1-18.6l4.7 2.2-10.6 19.2c1.4 7.4 6.5 11.5 6.5 11.5v-.1s6.3 1.3 12.9-2.3l7.9-20.5 4.7 2.2s4.5 13.8-.6 28.1c0 0-7.4 9.8-18.5 9.1L883.2 469c2.7 4.6 3.2 10.4.7 15.6-3.9 8.5-14 12.2-22.5 8.2s-12.2-14-8.2-22.5c2.4-5.2 7.2-8.6 12.5-9.5l26.6-64.5c-7.7-8.1-4.8-20-4.8-20zm-26.7 106.6 8.6 4 7.7-5.4-.8-9.5-8.6-4-7.7 5.4z"
          style={{
            fill: "url(#g2)",
          }}
        />
        <path
          id="&lt;Path&gt;"
          d="m937.1 364.9-2.4 5-4.7-2.2 2.4-5z"
          className="s3"
        />
        <path
          d="m915.6 354.9-2.3 5-4.7-2.2 2.3-5zM871.7 481.8l-2.3 5.1-8.6-4 2.4-5.1z"
          className="s3"
        />
        <path
          fillRule="evenodd"
          d="M908.7 411.7 882.5 462c-6.9.3-10.6-4.9-10.6-4.9l21.3-52.6c9.6-.3 15.5 7.2 15.5 7.2zM874 457.5c.7.7 1.9 1.5 3.3 2.2q1.8.8 3.7 1.1l26.2-49.3c-1.3-1.1-3.5-2.8-6.3-4.1q-3.2-1.5-6.5-1.9z"
          style={{
            fill: "url(#g3)",
          }}
        />
        <path
          d="m874 457.5-2.1-.4s3 5.3 10.6 4.9l-1.5-1.2s-3.8-.4-7-3.3z"
          className="s3"
        />
        <path
          d="m908.7 411.7-1.5-.2s-4.5-4.6-12.8-6l-1.2-1s3.4-.6 8.6 1.9c5.2 2.4 6.9 5.3 6.9 5.3z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g4)",
          }}
        />
        <path
          d="M915.6 407.1s-12.6-2.2-23.3-10.8l-3.4 8.2s3.9-3.8 12.3-.3c9.9 4 9.4 12 9.4 12z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g5)",
          }}
        />
        <path
          d="M888.9 404.5c2.4-1.7 5.2-1.8 5.2-1.8l-25.4 61.2-3-3.1z"
          style={{
            opacity: 0.5,
            mixBlendMode: "screen",
            fill: "url(#g6)",
          }}
        />
        <path d="M888.9 404.5s2.6 8.2-5 12.1z" className="s8" />
        <path
          d="M507.5 800h94c9.9-54.6 32.8-125.7 32.8-125.7 5.5-3.3 16.4.7 16.4.7L685 800h85.9c4.6-77.1-37.6-164.7-37.6-164.7.1-.3 1.5-3 1.1-4.8-.1-.7-1.6-2.2-3.2-3.7-2.3-2.1-5.1-4.2-5.1-4.2l-160.2-1s-1.6.8-3.7 2c-3.5 2.2-8.2 5.4-8.2 7.8 0 3.3 1.3 5.5 1.6 6l.1.1C521.3 702.3 507.5 800 507.5 800z"
          style={{
            fill: "url(#g7)",
          }}
        />
        <path
          d="M691.3 743.9c11.5 49.8 36.5 86.6 55.8 82.2 19.3-4.5 25.6-48.5 14.1-98.3-11.5-49.9-36.4-86.7-55.7-82.2-19.3 4.4-25.6 48.4-14.2 98.3z"
          style={{
            opacity: 0.5,
            mixBlendMode: "screen",
            fill: "url(#g8)",
          }}
        />
        <path
          d="M525.4 725.3c-13.8 49.2-9.6 93.5 9.5 98.8 19.1 5.4 45.7-30.2 59.5-79.5 13.8-49.2 9.5-93.5-9.5-98.9-19.1-5.3-45.7 30.3-59.5 79.6z"
          style={{
            opacity: 0.5,
            mixBlendMode: "screen",
            fill: "url(#g9)",
          }}
        />
        <path
          d="m696.2 800.1.9-.2c-10.9-64.4-38.6-118.4-38.9-118.9l-.1-.2-7.1-6.2-.6.8 6.9 6.1c1.3 2.4 28.2 55.5 38.9 118.6zM588.8 800.1c10.7-63.1 38.3-116.7 39.5-119.1l6.3-5.6-.7-.8-6.4 5.9c-.3.5-28.8 55-39.7 119.4z"
          className="s12"
        />
        <path
          d="M554 631.4c0 3.3 1.3 5.5 1.6 6l.1.1c33.3 7.5 58.7 38.6 58.7 38.6C596.2 711 565.9 800 565.9 800h35.6c9.9-54.6 32.8-125.7 32.8-125.7 5.5-3.3 16.4.7 16.4.7L685 800h22.3c-8-52.4-31.5-116.3-31.5-116.3 23.1-26.9 57.5-48.4 57.5-48.4l4.1-2.5-3-2.3c-14.8 14.3-62.8 32.9-64.2 33.5l61-37.2c-2.3-2.1-5.1-4.2-5.1-4.2l-160.2-1s-1.6.8-3.7 2l43.8 24.1z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g10)",
          }}
        />
        <path
          d="m634.3 674.3-18.7-12.2 4.4 12.2 3.3 36.5z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g11)",
          }}
        />
        <path
          d="m650.7 675 19.5-11 41.7-18.8-53.1 35.1-3.2 12.6z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g12)",
          }}
        />
        <path
          d="M597.1 299.3c-.1.9-.2 1.3-.2 1.3q1.4 6.1 3.3 11.3c3.9 11.3 8.8 19.3 12.4 24.3 3.2 4.3 5.5 6.3 5.5 6.3 29.2-9.1 43.5-37.7 49.1-51.9v-.2c1.1-2.7 1.8-4.8 2.2-6.2.4-1.2.5-1.8.5-1.8q-.1-.4-.3-.7l-.1-.1c-.5-1-.9-2-1.4-3-3.8-8.4-6.3-16.2-8-22.4-1.4-5.2-2.2-9.2-2.5-11.4-.2-1.1-.3-1.7-.3-1.7l-13.6 7.2-46.8 24.8c.7 4.3.9 8.3 1 11.9 0 2.5-.1 4.7-.2 6.6-.2 2.3-.4 4.2-.6 5.4v.3z"
          style={{
            fill: "#fe9083",
          }}
        />
        <path
          d="M597 298.5q0 .4.1.8.1.8.4 1.6c2.4 8.9 12 17.9 24.1 13.5 13.3-4.7 38.5-58.2 38.5-58.2l-2.5-11.4-59.9 48.8-.7 4.6z"
          style={{
            fill: "#cb4d7a",
          }}
        />
        <path
          d="M796.4 288.7s3.7-20.2 2.1-35.1c-1.7-14.9.4-31.8.4-31.8s3.6-1.5 6.3 0c2.6 1.5 8.8 16.9 6 29.3-2.8 12.4-.6 42.1-.6 42.1h4.2l9.1-12.5 4.4-1.3s25.4 24 25 38.3l-3.3 12.7-31.3-1.1-20.5-23.4z"
          style={{
            fill: "#ee8183",
          }}
        />
        <path
          d="M828.3 279.4s-.7 15.9-4.3 29.5c0 0 .6 5.6 7.2 6l1.6-1.8s1.1 6.4 6.9 6.8l5.5-5.5-1.4 4.6s2 4.8 7.2 4.6c0 0 8.7-6.8 9.3-15.7l-8.7-7.3V295l-10.2-7.2-.2-4.1s-6-4.4-12.9-4.3z"
          style={{
            fill: "url(#g13)",
          }}
        />
        <path
          d="M798.1 249.3s1.5 3.9 3.7 5.5c2.2 1.5 8.5 2.6 8.5 2.6l.3 35.8h4.2l9.1-12.5s-4.7 7.1-4.9 12.5l3.6 1.7 3.1-10.7 1.5 7.7-1.5 9.6s-5.4-4.6-15.2-4.8l-1.4 2.6s17.6 14.7 21.7 23.3c0 0-8.7-11.1-28.6-23.3l-1.9-5.9-2.5-14s2.4-20.2.3-30.1z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g14)",
          }}
        />
        <path
          d="M783.3 311.6c1.6 4.9 18.8 25.4 20.7 29.8 1.9 4.4 3.1 10.2 3.1 10.2 8.4 18.3 28.8 20.8 28.8 20.8l1-16.5s10.9-6.3 12.8-9.7v-.1l.2-.6c.6-3.2.1-15.1.1-15.1l-19.2-7.8c-8.3-10.8-28.6-23.3-28.6-23.3l-1-5.7c14.6-7.1 12.2-28.8 9.7-31.5-2.5-2.6-7-2.6-7-2.6s-5.3 17.4-8.7 25.6c-3.4 8.1-13.5 21.6-11.9 26.5z"
          style={{
            fill: "url(#g15)",
          }}
        />
        <path
          d="M841.2 283.7s-2.1 19.9-8.4 29.4c0 0 8-9.9 8.6-25.3zM851.6 295s-2 16-11.9 24.9c0 0 8.7-4.3 11.9-19.3z"
          className="s22"
        />
        <path
          d="M801.4 337.2s21.6 21 35.5 18.7l-1 16.5s-22.7-2-30.1-25.9c0 0-2.7-6.9-4.4-9.3z"
          style={{
            opacity: 0.9,
            mixBlendMode: "multiply",
            fill: "url(#g16)",
          }}
        />
        <path
          d="M343.3 365.8s19.9 36.4 43.2 47.5h7.9l18.4 27.9s11.9-7.5 12.8-32c0 0-4.2-4.3-5.2-9.2 0 0 6.6-5.2 8.3-8.9 1.8-3.8 2.4-15.2 3.7-19.9 1.3-4.7 12-14.4 14.4-15.6 2.4-1.3 13.3-1.9 13.3-1.9s1.5-4 0-5.8c-1.6-1.9-18.5-8.5-27.7-2.2 0 0-.6 4.8-1.6 7.3-1.1 2.6-9.1 11.5-10.4 11.5-1.3 0-6.7-4.5-9.1-8.1-2.3-3.4-14.5-29.7-17.5-38.6q0-.1-.1-.3 0-.2-.1-.4 0-.1-.1-.2v-.1c-2.3-7.7-15.5-22.5-22.6-26.5 0 0-3-.8-4.7 3 0 0 5.7 16.2 11.6 25.8 1 1.6 2.1 3.5 3.2 5.5h.1c5 9.3 10.7 21.5 11.5 23.3l.1.2-3.1 1.6-8.6-8.1-8.7-8.3-20.1 21.2 2 2.6 6.2 8-3.1.6-7.4-8.2z"
          style={{
            fill: "url(#g17)",
          }}
        />
        <path
          d="m347.9 373.5 6.4 9.4s34.9-27 42.5-29.2c7.6-2.3 10.3-.8 10.3-.8l7.9 10s-14.4 12.7-15.7 29.9c0 0 4.8-21.7 21.1-28.3-1.3 0-6.7-4.5-9.1-8.1-2.3-3.4-14.5-29.7-17.5-38.6.4 1.5.9 4.5-.3 6.8-1.7 3.2-11.8.2-12.4 0h-.1l11.6 23.3.1.2-3.1 1.6-8.6-8.1 4.3 10-31.1 5.5 6.2 8-3.1.6z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g18)",
          }}
        />
        <path
          d="M372.3 333.3s-6.1-.9-10 7l.9 2.5s-5.9 1.2-11.6 10.7c0 0 5 9.3 17.5 13.4 0 0 5.8-1.6 6.8-6.5l-1.1-3.2 4.5 3.4s5.5 1.7 7.9-6.4z"
          style={{
            fill: "url(#g19)",
          }}
        />
        <path
          d="M341.5 363.3s-1.3-5.8 4.9-9.6l12 13.2s-.4 4.3-5.6 5.2c0 0-8.2-2.8-11.3-8.8z"
          style={{
            fill: "url(#g20)",
          }}
        />
        <path
          d="M428.7 391.1s-13.9 15.5-34.3 22.2l8.8 13.4 18.4-23.3-1.2-3.4s7.3-5.5 8.3-8.9z"
          style={{
            opacity: 0.9,
            mixBlendMode: "multiply",
            fill: "url(#g21)",
          }}
        />
        <path
          d="M363.2 342.8s5.8 9.6 11.6 14.4l1.1 3.2s-11.2-7.7-15.4-16.4c0 0 1.4-1 2.7-1.2z"
          className="s22"
        />
        <path
          d="M783.3 311.6s9.3-2 13.1-10.1c3.9-8.1 1.4-19.8 1.4-19.8s-7.3 13.9-10.9 18.7c-3.6 4.8-4.6 10.2-3.6 11.2z"
          className="s29"
        />
        <path
          d="M610.1 345.7c2.7 2.7 5.9 5.1 9.7 7.1q.1 0 .2.1l.3-.2c1-.6 4.5-2.7 9.2-6.3 12.2-9.2 32.7-27.8 38.5-52.9v-.1c.7-3 1.2-6.1 1.4-9.2q.1-1.3.2-2.5s-4.1 9.5-11.1 19.8c-8.3 12.1-20.7 25.4-35.6 25.4-12.8.1-19.4-8.7-22.7-16.8-1.4-3.4-2.3-6.7-2.7-9.2q-.2-1.1-.4-1.9 0-.4-.1-.8c-.1-.9-.1-1.4-.1-1.4s-5 30.7 13.2 48.9z"
          style={{
            fill: "url(#g22)",
          }}
        />
        <path
          d="M610.1 345.7c2.7 2.7 5.9 5.1 9.7 7.1h.2l.3-.1c1-.6 4.5-2.7 9.2-6.3 12.2-9.2 32.7-27.8 38.5-52.9v-.1c.7-3 1.2-6.1 1.4-9.2q.1-1.3.2-2.5s-4.1 9.5-11.1 19.8c0 0-8.1 22.2-25.6 33.2-8.7 5.5-15.4 4.7-20.3 1.5-4.8-3.2-8-8.9-9.9-13.1-1.8-4.3-2.4-8.2-2.5-11.2v-1.8c-1.4-3.4-2.3-6.7-2.7-9.2q-.2-1.1-.4-1.9 0-.4-.1-.8c-.1-.9-.1-1.4-.1-1.4s-5 30.7 13.2 48.9z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g23)",
          }}
        />
        <path
          d="m497.8 527.1.3.1c1.6.2 6.7-.9 13.4-6.7l.1-.1h.1c5.6-4.9 12.3-13.1 19-26.5 13.4-26.8 17.2-44.7 17.8-47.8l.1-.5 7.8 12.4c5.3 16 15.4 81.9 15.2 84.8-.2 2.8-8.9 16.6-8.7 18.3v.1c.2 1.7 4.2 5.5 5.3 9.6.7 2.7-4.6 11.4-8.3 17.8v.1c-2 3.3-3.5 6.1-3.5 7.1 0 3 9.5 17.8 9.5 17.8v8l.2.1.4.4.4.3c3.6 2.9 18.8 12.2 66.5 14.7 56.5 3 94.1-15.1 94.1-15.1l-2.8-7.8s2.6-2.3 2.8-3.4c.2-1.2-2-3.8-2-3.8s5.6-3 5.6-6.8-11.3-15.6-11-25.6c.4-10.1 9.1-19 10.3-24.6 1.1-5.7-14.8-19.7-14.8-19.7 13.6-43.2 16.3-101.2 16.3-101.2l2.6-3.1s16.3 37.2 31.1 55.4c1.8 2.1 3.6 4.3 5.6 6.3 4.1 4.5 8.5 8.7 12.7 12.3 10.2 8.9 19.5 14.8 21.9 14.3 3.8-.7 18.9-30.7 18.2-61.4-.3-14.6-9.1-30.9-18.2-44q-1.5-2.1-3-4.1c-6.5-8.8-12.7-15.8-15.7-18.9-1.1-1.3-1.8-1.9-1.8-1.9s2.1-6.7 3.5-12.5q.1-.3.1-.5 0-.1.1-.2v-.1c.8-3.6 1.4-6.7.9-7.4-1.3-2.1-8.6-4.3-9.9-5.8-1.2-1.6-6.5-27.1-10.6-29.9-3.9-2.6-10.7-4.6-33.4-13.5q-1.7-.6-3.5-1.4C707 302.6 682 290.4 682 290.4l-9.6-11.8h-4.3l1.4 3 .1.1q-1 4.5-2.4 8.7v.2C654 332.3 620 345.7 620 345.7c-23.6-17.4-23.1-45.1-23.1-45.1v-3.8l-4.5 1.3-3 7.2s-5.1 8-25.4 16.9c-3.5 1.6-7.2 3.5-11.1 5.7-18.6 10.6-39.2 26.9-40.8 30.3q-.2.5-.5 1.7v.1c-2.2 8.5-6.7 40.6-10.9 52-2.6 7.2-6.7 11.1-9.7 13.1v.1c-2.3 1.5-3.9 2-3.9 2q-.5 2.6-.9 5.2c-8.7 54.8 7.8 92.1 11.6 94.7z"
          style={{
            fill: "url(#g24)",
          }}
        />
        <path
          d="m715.4 423.5 16.5 5.6 2.6-3.1s16.3 37.2 31.1 55.4c1.8 2.1 3.6 4.3 5.6 6.3 4.1 4.5 8.5 8.7 12.7 12.3l12.5-54.1 6.4-41.1c-6.5-8.8-12.7-15.8-15.7-18.9-1.1-1.3-1.8-1.9-1.8-1.9s2.1-6.7 3.5-12.5q.1-.2.1-.5 0-.1.1-.2v-.1c.8-3.6 1.4-6.7.9-7.4-1.3-2.1-8.6-4.3-9.9-5.8-1.2-1.6-6.5-27.1-10.6-29.9 0 0 2.7 24.5-11.4 55.6l-6.8 9.6-19.9 16.1s-7.6 10-15.9 14.6z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g25)",
          }}
        />
        <path
          d="M763.1 467.9c3.5 26.2 42.7 46.4 42.7 46.4 8.7 0 18.4-15.1 27.3-33.8 8.8-18.7 9.4-72.4 9.8-75.8.5-3.3 5.4-9.9 5.7-12.8.3-2.8-7.9-8.7-7.9-8.7v-.1l.1-.2c.8-1.8 5.7-12.2 5.3-14.1-.3-2.1-9.6-6.6-9.6-6.6l-.6 10.2s-21.5-4.1-28.8-20.8l-1.3-5.1-3.6 2.4v22s-.8 3.4-1.9 3.4c-1.1 0-9.5-4.2-11.3-3.6-1.8.6-3.5 12.3-5.9 13.8-2.3 1.6-8.6 5.9-9.5 8-.4.9-.5 4.3-.5 8.3-.1 4.9-.1 10.6-.8 13.9-1.4 5.8-12.7 26.9-9.2 53.2z"
          style={{
            fill: "url(#g26)",
          }}
        />
        <path
          d="M405.1 445.4c1.8 2.7 10.6 8.6 12.9 10.8 2.3 2.3 0 9.8 0 9.8 37.1 39.4 75.9 59.1 79.8 61.1l.3.1c23.3-15.7 21.3-41.5 13.6-63.2-7.4-20.9-20.1-38.1-20.7-38.8-.4-.2-7.1-3-11.9-3.3-1.5-.1-3 .5-4.3 1.3-2.9 1.8-5.3 4.6-7.6 3.4-3.4-1.7-11.1-19.8-16.2-20.3-3.7-.3-8.7 3.4-12 5.5-1.5.9-2.6 1.5-3.2 1.4-1.9-.5-8.3-8.3-8.8-8.5-.5-.2-3.5 2-3.5 2l2.1 2.5c-3.2 18.2-13.5 30.5-13.5 30.5l-7-10.2s-1.8 13.1 0 15.9z"
          style={{
            fill: "url(#g27)",
          }}
        />
        <path
          d="M405.1 445.4c1.8 2.7 10.6 8.6 12.9 10.8 2.3 2.3 0 9.8 0 9.8 37.1 39.4 75.9 59.1 79.8 61.1l.3.1c3 .4 17.8-3.8 32.6-33.3 13.4-26.8 17.2-44.7 17.8-47.8l.1-.5-3.2-4.4-4.9-54.6-3.4 11c-12.9-15.5-25-39.4-25-39.4l-.5 1.7v.1c-2.2 8.5-6.7 40.6-10.9 52-2.6 7.2-6.7 11.1-9.7 13.1v.1c11.9 10.8 17.8 26.4 20.7 38.8 2.6 11.3 2.8 20 2.8 20s-3.3-15.4-13.6-33.9c-3.8-6.7-9.3-12.8-14.7-17.7-4.1-3.7-8.1-6.8-11.4-9.2-2.9 1.8-5.3 4.6-7.6 3.4 15.6 23.4 15.2 69.8.6 61-14.7-8.9-18-27.6-18-27.6 3.4-22.9 2.4-48.7-.4-53.6-3.4.1-13 6.9-13.6 6.8.9 26.9-11.7 44.8-11.7 44.8l-8.4-12.9c12.2-20.4 11.3-40.4 11.3-40.4-.5-.2-3.5 2-3.5 2l2.1 2.5c-3.2 18.2-13.5 30.5-13.5 30.5l-7-10.2s-1.8 13.1 0 15.9z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g28)",
          }}
        />
        <path
          d="M565.9 613.6v8l.2.1.4.4.4.3c3.6 2.9 18.8 12.2 66.5 14.7 56.5 3 94.1-15.1 94.1-15.1l-2.8-7.8s2.6-2.3 2.8-3.4c.2-1.2-2-3.8-2-3.8s5.6-3 5.6-6.8c0-3.5-9.2-13.4-10.7-22.7q-.3-1.5-.3-2.9c.4-10 9.1-18.9 10.3-24.6 1.1-5.7-14.8-19.7-14.8-19.7 13.6-43.2 16.3-101.2 16.3-101.2l2.6-3.1s16.3 37.2 31.1 55.4c14.8 18.2 36.4 33.7 40.2 32.9 8.7 0 18.4-15.1 27.3-33.8 8.8-18.7 9.4-72.4 9.8-75.8.5-3.3 5.4-9.9 5.7-12.8-9.5 16.3-24.6 11.5-24.6 11.5 11 .3 16.7-20.2 16.7-20.2v-.1l.1-.2 5.3-14.1c-.6.7-13.1 14.7-25.2 6.1-12.3-8.9-18.7-26-18.7-26v22s-.8 3.4-1.9 3.4c.7 10.1 2.9 22.5 5.5 34.6 5.6 26.3 13.3 51.6 13.3 51.6s-20.9-11.3-28.2-40.1c-3.5-13.8-4.1-25.8-3.8-34.5.3-7.5 1.3-12.6 1.7-14.4q.1-.3.1-.5 0-.1.1-.2v-.1l-2 4.3-3.9 9.5c-4.4 37 4.8 92.7 4.8 92.7-13.4-16.7-16.2-53.6-15.6-62.5.2-4.3.6-9.6.8-13.9.3-4.7.5-8.3.5-8.3l-27.4 16.4 5-16.1-19.9 16.1s-18 21.6-36.4 24.1c-18.5 2.5-86.2 1-86.2 1s58.9 3.8 76.1 8.8c17.2 5.1 20.4 10.9 20.4 10.9-12.4 63.2-81.1 84.5-83.3 85.1 62.4-9.3 91.4-62.4 91.4-62.4s1 29.9-3.8 41.2c-4.8 11.4-33.1 39.2-69.4 45q-4.6.7-9.1.9c-30.7 1.4-56.1-14.2-58.7-15.9l-.2-.2.1.1c.9 1.5 13.5 19.2 64.3 21.2q4.6.1 9-.1h.1c47-1.9 71-33.3 71-33.3s17.4 9.4 6.3 23.2q-.2.3-.3.5c-3.3 3.8-10.5 8.4-19.1 13.1q-.3.3-.7.4c-10.3 5.7-22.4 11.6-31.8 16.5h-.1c-5.7 3-10.4 5.6-13 7.5h-.1c-2.6 1.9-3.1 3.2-.6 3.5 13.2 1.5 62.9-9.4 65-6.3 2 3-2.5 10.8-2.5 10.8-45.7 22.7-143.4 11.5-146.5 11.2 81.8 20.9 148.7-5.6 148.7-5.6l-2.2 7.8s-36.4 12.6-79.4 13.7c-42.9 1-69.7-10-69.7-10z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g29)",
          }}
        />
        <path
          d="M599.4 433.7s-32.5 1.8-54 7.5l11 16.8s16.7-14.7 43-24.3z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g30)",
          }}
        />
        <path
          d="M569 523.4s20.3 17 40.2 24.8c20 7.8 39.2 8.6 39.2 8.6s-11.5 3.4-39.7-1.2c-28.2-4.5-37.9-19.8-37.9-19.8z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g31)",
          }}
        />
        <path
          d="M559.9 588.6v.1c37.5 9.7 85.2-4.3 84.8-6-.4-1.7-13 .8-42.4-5.1-28.5-5.7-38.8-15.8-39.4-16.4.2 1.7 4.2 5.5 5.3 9.6.7 2.7-4.6 11.4-8.3 17.8z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g32)",
          }}
        />
        <path
          d="M661.9 438.8c32.1 3.3 40.7 12.2 40.7 12.2 9 1.2 29.3-21.9 29.3-21.9l2.6-3.1s16.3 37.2 31.1 55.4c1.8 2.1 3.6 4.3 5.6 6.3l-2.1-4.7s-3.5-1.6-4.5-19.7c-1-18 7.6-45 7.7-48.6 0-3.7 1.3-22.2 1.3-22.2l-27.4 16.4 5-16.1-19.9 16.1s-7.9 11.7-27.6 21.5c-18.6 9.3-39.5 8.5-41.8 8.4z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g33)",
          }}
        />
        <path
          d="m734.5 426-19.1-2.5s-7.6 5.1-22.9 11.3l12.7 18.9s-5 26.9-19.6 42c0 0 38.6-21.4 44.1-39.5z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g34)",
          }}
        />
        <path
          d="m846.1 368.8-5.4 14.4s-5.6 19.4-16.7 20.2c-11 .9-21.8-32.5-21.8-32.5v-22s11.7 25.2 24.4 28.1c12.7 2.8 19.5-8.2 19.5-8.2z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g35)",
          }}
        />
        <path
          d="M780 357.5s-9.8 19.7-22 25.7c0 0 14.5-35 11.4-55.6 0 0 5.3 3.3 10.6 29.9z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g36)",
          }}
        />
        <path
          d="m540.5 386.6-3.4 11-3.4 90.1s8.7-17.1 14.8-41.6l-3.1-4.9s-5.4-34-4.9-54.6z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g37)",
          }}
        />
        <path
          d="M435.8 413.2s1.9 44.2-16.9 48l-.9 4.8s24.3-.9 17.8-52.8z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g38)",
          }}
        />
        <path
          d="M467.2 426.6s.7 1.6 7.6-3.4c0 0 23.6 16.8 32.7 40.4 0 0-14.5-21.7-22.3-24-7.8-2.4-9.6 6.3-9.6 6.3s-3.1-12.2-8.4-19.3z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g39)",
          }}
        />
        <path
          d="M848.6 391.9s-9.1 16.8-26.1 11.6c0 0 10.2 6.8 20.4 1.2 0 0 6.4-10.9 5.7-12.8z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g40)",
          }}
        />
        <path
          d="M789 370.7s-12.5 46.8 20.1 82c0 0-21.2-10.9-26-36.1-4.8-25.2 5.9-45.9 5.9-45.9z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g41)",
          }}
        />
        <path
          d="M564.7 333.3s1.4 21.1 11.6 36.3c10.1 15.1 30.2 25.4 30.2 25.4s-25.2-9.3-36.8-22.4c-11.6-13.1-5-39.3-5-39.3z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g42)",
          }}
        />
        <path
          d="M693.6 301.5s0 17.7-5.7 35.7c-5.6 18-55 49.4-55 49.4s50.9-21.1 60.7-40.1c9.9-19 0-45 0-45z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g43)",
          }}
        />
        <path
          d="M694.2 385.6v28.8s-66.2-.5-140.5 4.4l-1.7-25.9s64.6-7.7 142.2-7.3z"
          style={{
            fill: "url(#g44)",
          }}
        />
        <path
          d="M589.4 305.3c1.6 18.6 7.2 31.6 13.3 40.3 8.3 12 17.3 16.1 17.3 16.1 9-3.9 16.8-8.8 23.5-14.1 28.5-22.8 37.7-54.4 38.4-57-12 29-29.7 46.7-43.1 56.6-10.8 8-18.8 11-18.8 11v-9.3q3.2-1.2 6.2-2.7c23.6-11.9 36-36.7 41.8-52.7v-.1c3.2-8.7 4.4-14.8 4.4-14.8h-4.3l1.4 3 .1.1q-1 4.5-2.4 8.7v.2C654 332.3 620 345.7 620 345.7c-23.6-17.4-23.1-45.1-23.1-45.1v-3.8l-4.5 1.3z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g45)",
          }}
        />
        <path
          d="M449.4 406.4s6.4 21 .4 53.6c0 0-3.1-41.3-5.3-44.9-2.3-3.6-8.7-1.9-8.7-1.9s10-5.6 13.6-6.8z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g46)",
          }}
        />
        <path
          d="M511.7 520.4c5.6-4.9 12.3-13.1 19-26.5 13.4-26.8 17.2-44.7 17.8-47.8l-3.1-4.9-4.3-41.2-4-2.4s-14.2-15.7-25-39.4q-.2.6-.5 1.7v.1c-2.2 8.5-6.7 40.6-10.9 52-2.6 7.2-6.7 11.1-9.7 13.1 0 0 24.6 36.6 25.8 62.6 1.1 23.7-4.2 31.5-5.1 32.7z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g47)",
          }}
        />
        <path
          d="M657.8 596.5s44.4-7.3 62.5-18.9l.1-.1q-.3-1.5-.3-2.9c.4-10 9.1-18.9 10.3-24.6-.2.6-1.5 3.6-7.8 9-4 3.4-10 7.8-19.1 13.1q-.3.3-.7.4C690 580.1 679 585.2 671 589h-.1c-7.2 3.4-11.8 5.6-13 7.5h-.1z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g48)",
          }}
        />
        <path
          d="M562.9 561.2c.2 1.7 4.2 5.5 5.3 9.6 0 0 16.3 17.2 76.5 11.9-.4-1.7-13 .8-42.4-5.1-28.5-5.7-38.8-15.8-39.4-16.4z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g49)",
          }}
        />
        <path
          fillRule="evenodd"
          d="M572.2 402.1c.3 3.9-2.5 6.6-7.2 6.9l-2.4.2q.1 2.1.3 4.1-2.8.3-5.7.5-.7-8.4-1.3-16.7 4-.4 8.1-.7c4.7-.4 7.9 1.9 8.2 5.7zm-5.7.5c-.1-1.2-.9-1.9-2.5-1.8q-1 .1-2.1.1.2 2 .3 4 1.1-.1 2.1-.2c1.6-.1 2.2-.9 2.2-2.1zM581.7 407.7q-.8.1-1.5.1.1 2.1.3 4.2-2.9.2-5.7.4-.6-8.3-1.2-16.7 4.1-.3 8.1-.6c4.8-.3 7.9 1.9 8.2 5.8.1 2.4-.9 4.3-2.9 5.5q2 2.5 3.9 4.9l-6 .4-3.2-4zm0-8.2q-1.1.1-2.1.1.1 2 .3 4l2-.2c1.6-.1 2.3-.9 2.2-2.1-.1-1.2-.9-1.9-2.4-1.8zM591.5 402.9c-.4-5.1 3.4-9 9-9.4 5.5-.3 9.7 3.2 10 8.2.3 5.1-3.5 9-9 9.4-5.5.3-9.7-3.1-10-8.2zm13.3-.8c-.2-2.6-2-4.1-4.1-4-2.1.1-3.7 1.8-3.5 4.4.2 2.6 1.9 4.1 4 4 2.1-.1 3.7-1.8 3.6-4.4z"
          className="s58"
        />
        <path
          d="M610.6 408q1.4-1.8 2.9-3.7c.9 1 1.8 1.5 2.7 1.5 1.2-.1 1.8-.8 1.7-2.2q-.1-3.2-.3-6.4-2.9.2-5.7.3-.1-2.1-.3-4.2l11.4-.6q.3 5.1.5 10.3c.3 4.6-2.1 7-6.6 7.2-2.6.1-4.8-.6-6.3-2.2zM640.2 404.4q.1 2.2.2 4.3l-14 .6q-.4-8.4-.8-16.7 6.9-.4 13.8-.7.1 2.2.2 4.3l-8.2.4q.1.9.1 1.9 3.6-.1 7.2-.3.1 2 .1 4.1-3.5.1-7.1.3.1 1.1.1 2.2l8.4-.4zM641.6 400.3c-.2-5.2 3.6-9 9.1-9.2 3.3-.1 5.9 1 7.7 3.1q-1.8 1.7-3.5 3.3c-1.1-1.2-2.3-1.9-3.8-1.8-2.3.1-3.9 1.8-3.8 4.3.1 2.6 1.8 4.2 4.1 4.1 1.5-.1 2.7-.8 3.6-2.1q1.9 1.5 3.7 3c-1.6 2.3-4.1 3.5-7.4 3.7-5.4.2-9.5-3.3-9.7-8.4zM663.6 395.5q-2.5 0-4.9.1l-.2-4.4 15.6-.4.2 4.4q-2.5 0-5 .1.2 6.2.3 12.4l-5.6.2-.4-12.4zM674.9 406.2l1.8-4.2c1.6.9 3.7 1.5 5.6 1.4 1.6 0 2.1-.3 2.1-.9 0-2.1-9.3-.2-9.4-6.5-.1-3.1 2.5-5.7 7.7-5.8 2.3-.1 4.6.4 6.4 1.3l-1.6 4.2q-2.5-1.2-4.8-1.2c-1.6 0-2.1.5-2.1 1.1 0 2 9.3.2 9.4 6.4.1 3-2.5 5.7-7.7 5.8-2.8 0-5.6-.6-7.4-1.6z"
          className="s58"
        />
        <path
          d="m552.9 327.9 38.5 12.5 11.3 5.2v.1H620l6.2.5 3.3.2 9.3.8 4.7.4 46.2-16.8 8.3-2.9 38-13.8q-1.7-.6-3.5-1.4C707 302.6 682 290.4 682 290.4l-9.6-11.8h-4.3c-3.8-8.4-6.3-16.2-8-22.4l-2.5-11.4c-.2-1.1-.3-1.7-.3-1.7l-13.6 7.2-45.8 36.7c0 2.5-.1 4.7-.2 6.6l-.7 4.6c-.1-.9-.1-1.4-.1-1.4l-4.5 1.3-3 7.2s-5.1 8-25.4 16.9c-3.5 1.6-7.2 3.5-11.1 5.7z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "#7a4ac0",
          }}
        />
        <path
          d="M582.2 292.8s18 4 37.8-5.6c19.8-9.6 36.5-37.9 37.5-44.9 1-7.1-7.6-25.6-7.6-40 0-14.4 7.1-39.1-4.8-52.5-11.9-13.4-66.4-15.4-84.1 1.8 0 0-5.5 13.7-5.5 21.5 0 1.9.3 4.6.8 7.8.2 1.2.4 2.5.6 3.8 1.6 9.4 3.8 20.9 2.8 25.9-.4 1.8-1 3.4-1.6 4.9v.1c-2.2 5-5.4 9-6 13.4-.8 5.7 6.9 46.1 30.1 63.8z"
          style={{
            fill: "url(#g50)",
          }}
        />
        <path
          d="M650.1 198.3s4.9-12.3 17.2-12.5c0 0 7.2 2.8 8.3 8.3 0 0-2.6 19.9-5.7 29.2-3 9.3-14.1 7.9-14.1 7.9s-9.7-14.8-5.7-32.9z"
          style={{
            fill: "url(#g51)",
          }}
        />
        <path
          d="M602.7 238.8s-4.1-.3-5.8 1c-1.8 1.3-8.2 7.6-16.4 9.3-8.1 1.7-13.6-5.3-15.3-5.6-1.8-.4-3.7 2.1-3.7 2.1s.8-2.9 5-4.1c0 0 1.7 6.5 13.5 4.3 11.8-2.3 16.9-7.5 16.9-7.5l.6-1.1s3.3.7 5.2 1.6z"
          style={{
            fill: "url(#g52)",
          }}
        />
        <path
          d="m620.2 177.6-.2-1.3s-11.8-20.6-35.1-21.2c-23.3-.6-28.6 14-28.6 14l-4.3-6.5 9.9-20 68.4-1.1 16.7 13.4 2.1 32.9-7.4 43.5-18 9.6-5.1-4.5c1.9-14.5 12.7-27.8 12.7-27.8l-7.9-5.5s-20.3 9.8-32 6.8c0 0-8.8-25.7-8.3-44.7 0 0 30 4.4 37.1 12.4z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g53)",
          }}
        />
        <path
          d="M621.2 179.1s-1.1-7.4-13.7-10.4c-14-3.3-25.4-6.1-25.4-6.1s2.5 8.1 7.2 11.2c0 0 14.8-.5 22.3 1.2s9.6 4.1 9.6 4.1z"
          style={{
            fill: "url(#g54)",
          }}
        />
        <path
          d="M556.3 169.1s7.2 5.5 12 18.6c0 0-4.7-6.1-8.9-6-2.9.1-2.5 3-2.5 3s-2.9-7.8-.6-15.6z"
          style={{
            fill: "url(#g55)",
          }}
        />
        <path
          d="M616.5 200.2s-.8-15.7-16.1-19.7c0 0-5.5 7.1-6.1 15.1 0 0 8.2-1.5 22.2 4.6z"
          style={{
            fill: "url(#g56)",
          }}
        />
        <path
          d="M572.5 206.4s-1.2-12.5-8.4-17.1c0 0-4.9 3.7-4.4 14.1 0 0 4.3-1.5 12.8 3z"
          style={{
            fill: "url(#g57)",
          }}
        />
        <path
          d="M616.5 200.2s-5 6.1-18.9 7.3c0 0-2.7-4-2.4-12 0 0 12.8-1.2 21.3 4.7zM572.5 206.4v1.9s-2.1 4.5-9.8 5.2c0 0-2.5-3.9-2.7-10.1 0 0 4.9-1.3 12.5 3z"
          className="s68"
        />
        <path
          d="M601.6 195.2s3.5 4.3 3.2 11.1c0 0-4.6 1.1-7.2 1.2 0 0-3.1-4.2-2.4-12 0 0 4-.8 6.4-.3zM565.2 203.6s2 2.1 2.4 8.7c0 0-2.7 1.2-4.9 1.2 0 0-2.8-4-2.7-10.1 0 0 2-.8 5.2.2z"
          className="s69"
        />
        <path
          d="M602.7 206.8s1.3-8.5-3.6-11.8l-3.9.5s-1.4 6.8 2.4 12c0 0 3.9-.4 5.1-.7zM563.5 203.2s1.8 3.8 2.6 9.7c0 0-1.4.5-3.4.6 0 0-2.7-3.3-2.7-10.1 0 0 2.1-.6 3.5-.2z"
          className="s70"
        />
        <path
          d="M616.5 200.2s-9.3-5.4-25.1-2.3l2.9-2.3s11.3-3.5 22.2 4.6zM572.5 206.4s-7.4-3.9-16.1-1.8l3.6-2.7s5.8-.9 12.5 4.5z"
          className="s71"
        />
        <path
          d="M606.5 200.2s-2.6-.6-4.8 1.7c0 0 3.1.9 4.8-1.7zM569.1 207.5s-3.9-.8-5.3 1.1c0 0 2.1 1.4 5.3-1.1z"
          className="s8"
        />
        <path
          d="M615.6 201.1s-7.2 7.1-18.8 8.8l-.3-4.2 1.1 1.8s11.1-.6 18-6.4zM572.5 208.3s-1.2 4.6-10.6 6.7l.3-2.3.5.8s6.7-.8 9.8-5.2z"
          className="s72"
        />
        <path
          d="M591.4 226.7s-3.5-.7-9.9 0c-6.5.8-13.7 2.5-17.7 0 0 0 5.3 5.3 9.8 6.1 4.6.8 11.5-3.2 11.5-3.2h3s2.4-1.1 3.3-2.9z"
          style={{
            fill: "#cb5f7d",
          }}
        />
        <path
          d="M587.7 229.6s-1.6-1-2.9-.7c-1.3.2-2.7 2.1-2.7 2.1s2.8-1.4 5.6-1.4z"
          style={{
            fill: "#9f4a8b",
          }}
        />
        <path
          d="M563.8 226.7c-1.7-1.6 7-17.2 11.2-17.7 4.2-.6 8.1 17.4 8.1 17.4s-5.8.8-11.4 1.5c-5.6.8-7.9-1.2-7.9-1.2z"
          className="s29"
        />
        <path
          fillRule="evenodd"
          d="M558 244.5c2.6-5.5 1-8.4 24.1-11.5 32.7-4.3 35.5 5.7 41 4.2q.4-.1.7-.2c6-2.4 20.2-16.3 20.6-35.1.3-19.5-12.7-33.4-12.7-33.4 4.7-3.9 6.6-15.5 1.5-20.4-5.1-4.9-13.9-3.8-35.3-1.5-21.4 2.2-21.4.9-21.4.9-6.8 1.8-10.7 8.1-11.8 10.2l-.3.6-2.7-2.4c-7.2 10.4-5.8 21.7-5.8 21.7s-11.8-23.8-10.4-27.2c2.4-6.3 9.2-15.4 9.6-15.9v-.1s1.9-18.1 7.6-18.1c5.7 0 29.9 5.4 29.9 5.4-2.6-6.2-2.2-13.4-2.2-13.4l.1.1c7.9 7.1 15.6 7.9 26.6 13 5.5 2.5 8.1 4.9 10.2 7.4l.8.9.8.9c.7 1 1.5 2 2.4 3q.1.1.2.1c.9 1 1.9 2 3.2 3 7.2 5.9 23 9.8 24.9 16 1.9 6.2-2.4 14.6-4.6 23.4-2.3 8.7-1.3 16.4-1.3 16.4s-7.5 9.7-5 23.9c2.2 12.8 7.1 14.8 7.1 14.8 3.4 7.1 1.8 13.6 1.8 13.6-7 27.9-36 44.4-36 44.4-25.7 9.6-42.7 5.5-42.7 5.5v-.1c-18.7-12.2-25.2-52.6-25.4-54.5.3.5 3.8 5.9 4.5 4.4zm11.5 25.8c4.6-.8 5.5-12.3 7-13.8s9.8-.9 9.8-.9 7.5 8.6 10.6 8.9c3 .2 19.2-6.3 15.7-16.2-3.5-9.8-15.7-11.1-15.7-11.1s-6.4 5.3-15.8 5.9c-9.5.6-12.9-1.1-14-1.6-1.2-.5-7.3 2.3-7.1 10.9.1 5.9 5 18.7 9.5 17.9z"
          style={{
            fill: "url(#g58)",
          }}
        />
        <path
          d="M570.7 212.4s-8.2 10.2-7.4 14c.9 4.2 10.3 6.4 10.3 6.4s-7.6-2.6-9.1-6.4c0 0 1.9-7.7 6.2-14z"
          style={{
            fill: "#d2726c",
          }}
        />
        <path
          d="M555.9 177.6s-1.4-11.3 5.8-21.7c-5.7-10.4-6.6-21.5-6.6-21.5v.1c-2 4.8-3.1 14.2-3.1 14.2l-6.5 1.7c-1.4 3.4 10.4 27.2 10.4 27.2z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g59)",
          }}
        />
        <path
          d="M564.7 157.7c1.1-2.1 5-8.4 11.8-10.2 0 0 0 1.3 21.4-.9 21.4-2.3 30.2-3.4 35.3 1.5 5.1 4.9 3.2 16.5-1.5 20.4 0 0 13 13.9 12.7 33.4-.4 18.8-14.6 32.7-20.6 35.1l.3 2s-1.1 43-11.5 46.5c-10.5 3.4-32.2 1.6-34.2 3.6-1.9 1.9.3 5.2.5 5.5v.1s17 4.1 42.7-5.5c0 0 29-16.5 36-44.4 0 0 1.6-6.5-1.8-13.6 0 0-4.9-2-7.1-14.8-2.5-14.2 5-23.9 5-23.9s-1-7.7 1.3-16.4c2.2-8.8 6.5-17.2 4.6-23.4-12.1 1.9-20-4.4-20-4.4s-2.2-3-11.5-4.5c-9.4-1.5-47.1 2.3-47.1 2.3s3.8-3.1 11.7-5.2c7.5-2 33.2.3 36 .5-3-.5-32.1-5.5-35.4-4.5-3.5 1-16.1 6.8-16.1 6.8 1.1-5.8 12.4-19.7 12.4-19.7s15.9.3 26.3 2.5c9.3 1.9 14.4 6.2 15.4 7.1l-2.4-3-.8-.9-.8-.9-3.6-.6-18.3-7.4c-6.1-3.3-14-11.4-14.9-12.4l-.1-.1s-.4 7.2 2.2 13.4c-15.4-1.9-20.6-.9-20.6-.9-7 9.9-7.3 36.9-7.3 36.9z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g60)",
          }}
        />
        <path
          d="M621.6 289.2s-9.4-2.2-23.7-1.6c-14.3.5-22.5.6-19 7.1 0 0 18 4 42.7-5.5z"
          style={{
            opacity: 0.5,
            mixBlendMode: "multiply",
            fill: "url(#g61)",
          }}
        />
        <path
          d="M572 120.8s-8.7-3.4-12.1-2.8c0 0 1.3-1.8 2.7-2.2 1.5-.4 30 5.9 30 5.9s-17.8-2-20.6-.9zM589.6 124s.7 9.5 3.7 12.9l35.4 4.5 10.4-1.8s-4.1-1.7-8.5-6.9c-4.4-5.1-27.5-10.2-41-8.7zM555.1 134.4s-2.9 9.3-3.1 14.3l-6.5 1.7s2-7.1 9.6-16z"
          className="s80"
        />
        <path
          d="M651.5 215s2.5-12 8.6-17.9c6.1-5.9 13.1-4 13.1-4s-1.9 22.2-3.9 27.6c-2 5.4-5 6.8-5 6.8s4.2-3.8 4.8-11.1c.6-7.3.7-17.6-.9-18.9-1.6-1.2-8.1 3.6-8.1 3.6s2.1 2.5 3.3 9c1.2 6.6-3.3 11.3-5 11.2-1.7-.1.1-7.5-.2-9.7-.3-2.1-4.1-1.7-6.7 3.4z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g62)",
          }}
        />
        <path
          d="M657.6 200.1s6.7 4.4 6 13.4c-.8 9-5.9 8.6-5.9 6.7 0-1.9 1-6.8.4-9.5-.5-2.7-4.9-1.5-4.9-1.5s2.9-7.1 4.4-9.1z"
          style={{
            opacity: 0.8,
            mixBlendMode: "multiply",
            fill: "url(#g63)",
          }}
        />
        <path
          d="M615.5 140.5s-10.1 3.4-21.2 4.4c-11 1-13.3 1.2-13.3 1.2s4.4-4.3 13.9-5.6c9.5-1.3 20.6 0 20.6 0z"
          className="s80"
        />
        <path
          d="M566.7 240.9s-4.8 0-6.7 6.1c-1.5 4.8-2 9-2 9l-1.7-6.7s2.3-8.4 4.6-10.3c1.7-1.3 4.5-2.7 5.9-2.4z"
          style={{
            fill: "url(#g64)",
          }}
        />
        <path
          d="m579.7 234.9-.8 7.2s-5.9.4-9.8-1.2l-.7-4.3s7.5-1.9 11.3-1.7z"
          style={{
            fill: "url(#g65)",
          }}
        />
        <path
          d="m496.7 269.2-6.5 183.6c-.2 7.3-6.2 13.1-13.5 13.1H160.5c-7.4 0-13.4-5.9-13.6-13.2l-4.4-185.8c-.2-7.6 6-13.9 13.6-13.8l327.2 2.1c7.6.1 13.7 6.4 13.4 14z"
          style={{
            opacity: 0.6,
            fill: "#d26df7",
          }}
        />
        <path
          fillRule="evenodd"
          d="M146.4 452.7 142 266.9c-.1-3.8 1.3-7.4 4-10.1 2.7-2.8 6.3-4.2 10.1-4.2l327.2 2.1c3.8.1 7.3 1.6 10 4.3 2.6 2.8 4 6.4 3.9 10.2l-6.5 183.6c-.2 7.6-6.4 13.6-14 13.6H160.5c-7.7 0-13.9-6-14.1-13.7zm.3-195.2c-2.5 2.5-3.8 5.9-3.7 9.4l4.4 185.8c.2 7 6 12.7 13.1 12.7h316.2c7.1 0 12.8-5.5 13-12.6l6.5-183.6c.1-3.5-1.2-6.9-3.6-9.5-2.5-2.5-5.8-3.9-9.3-4l-327.2-2.1h-.1c-3.5 0-6.8 1.4-9.3 3.9z"
          style={{
            fill: "#9b4ca2",
          }}
        />
        <path
          d="M496.2 278.6H142.9l-.6-9.7c-.5-8.6 6.4-15.8 14.9-15.7l327 2.6c6.9 0 12.3 5.7 12.2 12.5z"
          style={{
            opacity: 0.6,
            mixBlendMode: "multiply",
            fill: "url(#g66)",
          }}
        />
        <path
          d="M478.4 293.4v106.2H370.3V292.8z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g67)",
          }}
        />
        <path
          d="M218.7 347.6h47.1v-47.1h-47.1z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g68)",
          }}
        />
        <path
          d="M163.2 347.6h47.1v-47.1h-47.1z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g69)",
          }}
        />
        <path
          d="M275.2 347.6h47v-47.1h-47z"
          style={{
            opacity: 0.3,
            mixBlendMode: "multiply",
            fill: "url(#g70)",
          }}
        />
        <path
          d="M163.2 386.3h120.3V375H163.2zM163.2 395.6h150.4v-3.5H163.2zM283.4 357.1h28.8v-3.5h-28.8zM227.9 357.1h28.7v-3.5h-28.7zM172.4 357.1h28.7v-3.5h-28.7zM273.8 401.3h48.4v-3.5h-48.4zM163.2 406.9h150.4v-3.5H163.2zM163.2 412.5h159V409h-159zM163.2 418.1h159v-3.5h-159zM163.2 440.8h150.4v-3.5H163.2zM163.2 446.4h159v-3.5h-159zM163.2 452h159v-3.5h-159zM169.6 423.7h152.6v-3.5H169.6zM163.2 429.3h150.4v-3.5H163.2zM193.4 434.9h128.8v-3.5H193.4z"
          className="s92"
        />
        <path
          fillRule="evenodd"
          d="M417.4 347.6c0-17 13.8-30.8 30.7-30.8 17 0 30.8 13.8 30.8 30.8 0 16.9-13.8 30.7-30.8 30.7-16.9 0-30.7-13.8-30.7-30.7zm2 0c0 15.8 12.9 28.7 28.7 28.7 15.9 0 28.8-12.9 28.8-28.7 0-15.9-12.9-28.8-28.8-28.8-15.8 0-28.7 12.9-28.7 28.8z"
          className="s93 cirlcepulse"
          style={{
            mixBlendMode: "soft-light",
          }}
        />
        <path
          d="M431.4 347.6c0 9.2 7.5 16.7 16.7 16.7 9.3 0 16.8-7.5 16.8-16.7 0-9.3-7.5-16.8-16.8-16.8-9.2 0-16.7 7.5-16.7 16.8z"
          className="s8"
        />
        <path
          fillRule="evenodd"
          d="M339.5 292.8c0-16.9 13.8-30.7 30.8-30.7s30.8 13.8 30.8 30.7c0 17-13.8 30.8-30.8 30.8s-30.8-13.8-30.8-30.8zm2 0c0 15.9 12.9 28.8 28.8 28.8s28.8-12.9 28.8-28.8c0-15.8-12.9-28.7-28.8-28.7s-28.8 12.9-28.8 28.7z"
          className="s93 cirlcepulse"
          style={{
            mixBlendMode: "soft-light",
          }}
        />
        <path
          d="M354.6 292.8c0 8.7 7 15.8 15.7 15.8s15.7-7.1 15.7-15.8c0-8.7-7-15.7-15.7-15.7s-15.7 7-15.7 15.7z"
          className="s8"
        />
        <g
          style={{
            mixBlendMode: "soft-light",
          }}
        >
          <path d="m483.8 264.2-2.2-3.4-12.2 10.6 1.9 2.6z" className="s8" />
          <path d="m469.1 264.2 2.3-3.4 12.1 10.6-1.8 2.6z" className="s8" />
        </g>
        <path d="M151.4 268.5h108.9v-5.4H151.4z" className="s8" />
        <path
          d="M833.3 184.2v47.3l-56.5.5-.8-49.3z"
          style={{
            fill: "url(#g71)",
          }}
        />
        <path
          d="m776 182.7-3.7 6.2 1.9 43 2.6.1z"
          style={{
            fill: "url(#g72)",
          }}
        />
        <path d="m823.2 200.2-5.2-7.6-28.2 23.7 4.3 5.8z" className="s8" />
        <path d="m789 200.2 5.3-7.6 28.2 23.7-4.3 5.8z" className="s8" />
        <path
          d="M701.5 740.4h193.3c8.6 0 15.7-6.9 15.9-15.5l3.6-158.6c.2-8.9-7-16.2-15.9-16.2H697.1c-8.9 0-16.1 7.3-15.8 16.2l4.3 158.7c.3 8.5 7.3 15.4 15.9 15.4z"
          style={{
            opacity: 0.8,
            fill: "url(#g73)",
          }}
        />
        <path
          fillRule="evenodd"
          d="m685.1 725-4.3-158.6c-.1-4.5 1.5-8.7 4.6-11.9 3.1-3.2 7.3-4.9 11.7-4.9h201.3c4.5 0 8.6 1.7 11.7 4.9 3.1 3.2 4.8 7.4 4.7 11.8l-3.6 158.6c-.2 8.8-7.6 16-16.4 16H701.5c-9 0-16.1-7-16.4-15.9zm12-174.4c-4.2 0-8.1 1.6-11 4.6-2.9 3-4.4 7-4.3 11.1l4.3 158.6c.3 8.4 7 15 15.4 15h193.3c8.3 0 15.2-6.8 15.4-15l3.6-158.6c.1-4.2-1.5-8.1-4.4-11.1-2.9-3-6.8-4.6-11-4.6z"
          style={{
            fill: "#713da2",
          }}
        />
        <path
          d="M760.5 586.9h101.7v-4.4H760.5zM811.3 597.5h50.9v-4.4h-50.9zM811.3 606.3h50.9V602h-50.9zM765.1 606.3h40.5V602h-40.5zM780.2 615.1h82v-4.3h-82zM833 624h29.2v-4.4H833zM776.5 650.5H827v-4.3h-50.5zM770.7 632.8h91.5v-4.3h-91.5zM791.8 641.7h70.4v-4.4h-70.4zM829.1 650.5h33.1v-4.3h-33.1zM811.3 659.4h50.9V655h-50.9zM847.6 668.2h14.6v-4.4h-14.6zM788.6 668.2h53v-4.4h-53zM776.5 676.8H827v-4.4h-50.5zM829.1 676.8h33.1v-4.4h-33.1zM811.3 685.6h50.9v-4.3h-50.9zM847.6 694.5h14.6v-4.4h-14.6zM788.6 694.5h53v-4.4h-53z"
          className="s8 pageload"
        />
        <path
          d="M182.6 217.7c0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9c0-5-4-9-8.9-9s-8.9 4-8.9 9z"
          style={{
            fill: "url(#g74)",
          }}
        />
        <path
          d="M1020.4 425c0 6.1 4.9 11.1 11.1 11.1 6.1 0 11.1-5 11.1-11.1 0-6.2-5-11.2-11.1-11.2-6.2 0-11.1 5-11.1 11.2z"
          style={{
            fill: "url(#g75)",
          }}
        />
        <path
          d="M156.3 217.7c0 4.9 4 8.9 9 8.9 4.9 0 8.9-4 8.9-8.9 0-5-4-9-8.9-9-5 0-9 4-9 9z"
          style={{
            fill: "url(#g76)",
          }}
        />
        <path
          d="M735.3 279.1c0 3.5 2.8 6.4 6.3 6.4s6.3-2.9 6.3-6.4c0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3z"
          style={{
            fill: "url(#g77)",
          }}
        />
        <path
          d="M312 558c0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3-2.8-6.3-6.3-6.3-6.3 2.8-6.3 6.3z"
          style={{
            fill: "url(#g78)",
          }}
        />
        <path
          d="M969.7 621c0 3.1 2.5 5.7 5.6 5.7 3.1 0 5.7-2.6 5.7-5.7s-2.6-5.6-5.7-5.6-5.6 2.5-5.6 5.6z"
          style={{
            fill: "url(#g79)",
          }}
        />
        <path
          d="M879 565.5h97.6c7.9 0 14.3-6.2 14.6-14l2.1-64.2c.3-8.3-6.3-15.1-14.5-15.1H877c-8.2 0-14.8 6.8-14.5 15l2 64.2c.2 7.9 6.6 14.1 14.5 14.1z"
          style={{
            opacity: 0.7,
            fill: "url(#g80)",
          }}
        />
        <path
          fillRule="evenodd"
          d="m864 551.4-2-64.2c-.1-4.1 1.4-8 4.2-10.9 2.9-3 6.7-4.6 10.8-4.6h101.8c4.1 0 7.9 1.6 10.8 4.6 2.9 3 4.4 6.9 4.2 11l-2.1 64.2c-.3 8.1-6.9 14.5-15.1 14.5H879c-8.2 0-14.8-6.4-15-14.6zm13-78.7c-3.8 0-7.4 1.5-10 4.3-2.7 2.7-4.1 6.4-4 10.2l2 64.2c.2 7.7 6.4 13.6 14 13.6h97.6c7.6 0 13.8-5.9 14.1-13.6l2.1-64.1c.2-3.9-1.2-7.5-3.9-10.3-2.7-2.8-6.3-4.3-10.1-4.3z"
          className="s105"
        />
        <path
          d="m950.6 495.3 24.1 27.9-24.6 20.8v-10.8l14.2-12.2-13.1-14.9zM908.3 496.5l-24.1 27.9 24.5 20.8v-10.7l-14.1-12.3 15.7-16.7zM945.3 544l-20.9-46.2h-9.9l23.8 46.2z"
          className="s8"
        />
        <path
          d="M222.4 697.6h122.1c9.8 0 17.8-7.7 18.2-17.6l2.7-80.3c.3-10.3-7.9-18.8-18.2-18.8H219.9c-10.3 0-18.5 8.5-18.2 18.8l2.4 80.3c.3 9.8 8.4 17.6 18.3 17.6z"
          style={{
            opacity: 0.7,
            fill: "url(#g81)",
          }}
        />
        <path
          fillRule="evenodd"
          d="m203.6 680-2.4-80.3c-.2-5.1 1.7-10 5.3-13.6 3.5-3.7 8.3-5.7 13.4-5.7h127.3c5.1 0 9.9 2 13.4 5.7 3.6 3.7 5.4 8.5 5.3 13.6l-2.7 80.4c-.4 10.1-8.6 18-18.7 18H222.4c-10.2 0-18.4-7.9-18.8-18.1zm16.3-98.6c-4.8 0-9.4 1.9-12.7 5.4-3.4 3.4-5.2 8-5 12.9l2.4 80.3c.3 9.6 8.1 17.1 17.8 17.1h122.1c9.6 0 17.3-7.5 17.7-17.1l2.7-80.3c.1-4.8-1.6-9.4-5-12.9s-7.9-5.4-12.7-5.4z"
          className="s105"
        />
        <path d="M229.1 660.2h111.8v-66.4H229.1z" className="s92" />
        <path d="M294.9 610.3v33.5l-28.6-18.3z" className="s8" />
        <path d="M229.1 678.5h111.8v-6H229.1z" className="s92" />
        <path d="M312 672.5v6h28.9v-6z" className="s8 timeline" />
        <path
          fillRule="evenodd"
          d="m411.8 604-5.7 3.2-6.1-16.7 6.6-1.1q-.2-.9-.3-1.8c-.5-2.9-.7-5.7-.6-8.4l-6.8-4.3 3.1-14.7 6.6 6.3q1.3-2.8 3.3-4.9.6-.6 1.2-1.1l-4.1-9.3 10.7-3.5 2.6 9.4c2.4 0 4.8.6 7.2 1.7l1.2-8.9 11.8 8.9-2.7 7.9c2.1 2.4 4 5.2 5.7 8.3l5.7-3.2 6.1 16.7-6.5 1.1c.7 3.6.9 7 .8 10.2l6.9 4.3-3.1 14.7-6.6-6.2c-1.2 2.4-2.7 4.4-4.5 5.9l4 9.3-10.5 4.1-1.6-5.9-1.2-4c-2.3 0-4.8-.6-7.2-1.7l-1.2 8.8-11.8-8.9 2.8-7.8q-2.5-2.9-4.7-6.4-.5-1-1.1-2zm16.9-14.5zm0 0c-3.3-9.2-7.9-15.2-5.9-16.7zm5.9 16.8-5.8-16.6c3.2 9.1 4.3 16.1 5.8 16.6z"
		  className="nut"
          style={{
            fill: "url(#g82)",
          }}
        />
        <path
          fillRule="evenodd"
          d="m406.1 607.2-6.1-16.7 6.3-2.9 1-.5-.7-9.2-6.9-3.4 2.3-14.3 9.9-3.2-2.9-5.8 10.7-3.5 4.4-1.4 10.6-4.1 1.9 7.2 9.2-4.4 11.8 8.9-3.6 9.7 11 30.5 5.5 19.8-10.5 1.2 3.4 7.8-10.5 4.1-15.1 4.9 2.4-4.8 1.5-2.9-5.5 1.8-9.6 3.1-11.8-8.9 7.3-8.6-9.2-5.6zm8.2-45.3 2.8-6.6-5.2 1.6zm24.9 23.9c-3.2-9.2-10.6-15-16.4-12.9l5.8 16.6 5.9 16.7c5.8-2 8-11.2 4.7-20.4z"
		  className="nut"
          style={{
            fill: "url(#g83)",
          }}
        />
        <path
          fillRule="evenodd"
          d="m421.2 602.3-6.1-16.7 6.6-1.1c-.7-3.5-1-7-.9-10.2l-6.9-4.3 3.2-14.7 6.6 6.3c1.1-2.4 2.6-4.5 4.5-6l-4.1-9.3 10.6-4.1 2.7 10c2.4 0 4.8.6 7.2 1.6l1.2-8.8 11.8 8.9-2.7 7.9c2.1 2.4 4 5.2 5.7 8.3l5.7-3.2 6.1 16.7-6.6 1.1c.7 3.5 1 7 .9 10.2l6.9 4.3-3.1 14.7-6.6-6.3c-1.2 2.4-2.7 4.5-4.5 6l4 9.3-10.5 4.1-2.8-9.9c-2.4-.1-4.8-.6-7.2-1.7l-1.2 8.8-11.8-8.9 2.8-7.8c-2.2-2.5-4.1-5.3-5.8-8.4zm28.4-1c5.8-2.1 8-11.2 4.7-20.4-3.2-9.2-10.5-15-16.4-13-5.9 2.1-8 11.2-4.8 20.4 3.3 9.2 10.6 15 16.5 13z"
		  className="nut"
          style={{
            fill: "url(#g84)",
          }}
        />
        <path d="m398.9 574.9 15-4.9 6.9 4.3-15.1 4.9z" className="s110" />
        <path
          d="m414.8 620.2 15.1-4.9 2.8-7.8-15.1 4.9z"
          style={{
            mixBlendMode: "soft-light",
            fill: "#b3d9ff",
          }}
        />
        <path
          d="m428.2 555.6-8.3 2.4-2.8-2.7-5.5 1.8-2.6-5.9 15.1-4.9zM450.1 617.1l-7.9 3.2.7-4.9s4.2 2.2 7.2 1.7zM448.9 571.8l-13.3 7s-1.9-2.5-3.4-3.6c0 0 3.5-14.7 16.7-3.4z"
          className="s110 nut"
        />
        <path
          d="m754.4 73.9-12.8 25.7 8.6 3.9 12-23.6z"
          style={{
            fill: "#ff1d9c",
          }}
        />
        <path
          d="m1043.3 672.6-11.9 13-4.6-5.3 11.2-12.4z"
          style={{
            fill: "#6877ff",
          }}
        />
        <path
          d="m439.8 230.7 11.9 7.3 4.8-9.1-13.1-7.6zM380.9 690.2l17.1 12.1 4.8-9-16.6-9.8z"
          className="s114"
        />
        <path
          d="m403.5 168.6 2.9-67.3h-88.1l3.6 67.1z"
          style={{
            fill: "url(#g85)",
          }}
        />
        <path
          d="m406.4 101.3 2.7 3.9-2.7 63.4h-2.9z"
          style={{
            fill: "url(#g86)",
          }}
        />
        <path
          d="m377.2 114.7 13.8-1.5-1.9 46.2-11.9-1.2v-4.8l6.9.2.8-35.6-7.7.2zM348.8 114.7l-13.8-1.5 1.9 46.2 11.9-1.2v-4.8l-6.9.2-.8-35.6 7.7.2z"
          className="s8"
        />
        <path
          d="m1011.3 316-2-45.9h60.1l-2.5 45.7z"
          style={{
            fill: "url(#g87)",
          }}
        />
        <path
          d="m1009.3 270.1-1.8 2.7 1.8 43.2h2z"
          style={{
            fill: "url(#g88)",
          }}
        />
        <path
          d="M1032.5 279.3s-6.6-.2-7.8.3c-1.1.5.3 11.3.3 11.3l-2.6 2.4 2.4 2.3s-.1 10.9 1.5 11.8c1.5.9 6.8 0 6.8 0v-2.7s-4.3.3-5-.3c-.7-.6-.7-10.1-.7-10.1l-1.1-1.2 1.1-1.4s-.2-6.8-.1-8.7c.1-1.2 5.2-1.3 5.2-1.3zM1047.6 279.3s6.5-.2 7.7.3c1.2.5-.3 11.3-.3 11.3l2.6 2.4-2.4 2.3s.1 10.9-1.4 11.8c-1.6.9-6.9 0-6.9 0v-2.7s4.3.3 5-.3c.8-.6.7-10.1.7-10.1l1.2-1.2-1.2-1.4s.2-6.8.1-8.7c-.1-1.2-5.1-1.3-5.1-1.3z"
          className="s8"
        />
        <path
          fillRule="evenodd"
          d="m480.8 144.1 38.2-8-14.7 38.6zm1.7.6 21.4 27.9 13.5-35.2z"
          className="s119"
        />
        <path
          d="m398.8 721 .8-.6-13-17.6-.8.6zM520.2 558.3l13.9-17.3-.8-.6-13.9 17.3zM948.8 679.8l27.8-20.2-.6-.8-27.8 20.2z"
          className="s119"
        />
        <path
          d="m972.4 683.2.8-.6-20.8-27.2-.8.6zM993.6 384.7l17.9-9.4-.4-.9-18 9.5zM303.9 142.7l.7-.6-20.7-23.7-.7.7zM698.4 219l9.3-18.6-.9-.4-9.2 18.6zM853.8 534.3l.6-.7-23.8-20-.6.8z"
          className="s119"
        />
        <path
          d="M104 677.7c0 7.6-6.2 13.8-13.8 13.8-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8 7.6 0 13.8 6.2 13.8 13.8z"
          style={{
            fill: "#cbd1ff",
          }}
        />
      </g>
    </g>
  </svg>
)}
export default Abchar
