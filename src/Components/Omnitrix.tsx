import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  SpeakerHighIcon,
  SpeakerSlashIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useGalvanic } from "../Context/GalvanicContext";
import Alien1 from "/aliens/alien1.svg";
import Alien3 from "/aliens/alien3.svg";
import Alien2 from "/aliens/alien2.svg";
import Alien4 from "/aliens/alien4.svg";
import Alien5 from "/aliens/alien5.svg";
import Alien6 from "/aliens/alien6.svg";
import Alien7 from "/aliens/alien7.svg";
import Alien8 from "/aliens/alien8.svg";
import Alien9 from "/aliens/alien9.svg";
import Alien10 from "/aliens/alien10.svg";

// ─────────────────────────────────────────────────────────────────────────────
// SOUND SYNTHESIZER (Pure Web Audio API — zero asset dependencies)
// ─────────────────────────────────────────────────────────────────────────────
const clickSound = new Audio("/audio/click.mp3");
const changeSound = new Audio("/audio/change.mp3");
const transformSound = new Audio("/audio/transform.mp3");

// ─────────────────────────────────────────────────────────────────────────────
// CLASSIC 10 ALIEN ROSTER (Original Series 2005)
// ─────────────────────────────────────────────────────────────────────────────
export interface ClassicAlien {
  id: string;
  name: string;
  species: string;
  homeWorld: string;
  power: string;
  devSkill: string;
  devDescription: string;
}

const CLASSIC_ALIENS: ClassicAlien[] = [
  {
    id: "heatblast",
    name: "HEATBLAST",
    species: "Pyronite",
    homeWorld: "Pyros",
    power: "Pyrokinesis & Solar Heat",
    devSkill: "React 19 & Interactive UI",
    devDescription:
      "Igniting blazing fast, reactive component architectures.",
  },

  {
    id: "wildmutt",
    name: "WILDMUTT",
    species: "Vulpimancer",
    homeWorld: "Vulpin",
    power: "Enhanced Senses & Agility",
    devSkill: "Component Architecture",
    devDescription:
      "Navigating complex interfaces through instinctive component design.",
  },

  {
    id: "diamondhead",
    name: "DIAMONDHEAD",
    species: "Petrosapien",
    homeWorld: "Petropia",
    power: "Crystal Shards & Indestructibility",
    devSkill: "TypeScript & Strict Types",
    devDescription:
      "Rock-solid, unbreakable type safety that never shatters.",
  },

  {
    id: "xlr8",
    name: "XLR8",
    species: "Kineceleran",
    homeWorld: "Kinet",
    power: "Hypersonic Velocity & Reflexes",
    devSkill: "Vite & Extreme Build Speeds",
    devDescription:
      "Instant hot module reloading at the speed of sound.",
  },

  {
    id: "greymatter",
    name: "GREY MATTER",
    species: "Galvan",
    homeWorld: "Galvan Prime",
    power: "Galactic Genius Intelligence",
    devSkill: "Algorithms & State Machines",
    devDescription:
      "Hyper-intelligent algorithmic logic and architectural problem solving.",
  },

  {
    id: "fourarms",
    name: "FOUR ARMS",
    species: "Tetramand",
    homeWorld: "Khoros",
    power: "Superhuman Strength & Shockwaves",
    devSkill: "Tailwind CSS & Heavy Styling",
    devDescription:
      "Heavyweight styling power to conquer any responsive layout.",
  },

  {
    id: "stinkfly",
    name: "STINKFLY",
    species: "Lepidopterran",
    homeWorld: "Lepidopterra",
    power: "Flight & Bio-Acid",
    devSkill: "Animation & Motion UI",
    devDescription:
      "Fluid motion and animated interactions that bring interfaces to life.",
  },

  {
    id: "ripjaws",
    name: "RIPJAWS",
    species: "Piscciss Volann",
    homeWorld: "Piscciss",
    power: "Underwater Adaptation & Super Strength",
    devSkill: "Backend & Data Systems",
    devDescription:
      "Deep-system architecture built to handle complex data environments.",
  },

  {
    id: "upgrade",
    name: "UPGRADE",
    species: "Galvanic Mechamorph",
    homeWorld: "Galvan B",
    power: "Technological Assimilation",
    devSkill: "Full-Stack & System Integration",
    devDescription:
      "Merging with legacy architectures and elevating them beyond limits.",
  },

  {
    id: "ghostfreak",
    name: "GHOSTFREAK",
    species: "Ectonurite",
    homeWorld: "Anur Phaetos",
    power: "Intangibility & Possession",
    devSkill: "Security & Authentication",
    devDescription:
      "Moving invisibly through complex systems while keeping every layer secure.",
  },
];

const aliens = [
  Alien1,
  Alien2,
  Alien3,
  Alien4,
  Alien5,
  Alien6,
  Alien7,
  Alien8,
  Alien9,
  Alien10,
];


// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT PROPS & STATE
// ─────────────────────────────────────────────────────────────────────────────
interface OmnitrixCoreProps {
  onExit?: () => void;
}

type OmnitrixState = "standby" | "active" | "transformed";

export default function OmnitrixCore({ onExit }: OmnitrixCoreProps) {
  const [state, setState] = useState<OmnitrixState>("standby");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dialAngle, setDialAngle] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [shockwaveTrigger, setShockwaveTrigger] = useState(0);
  const { isGalvanic } = useGalvanic();

  const filterId = useId();
  const screenGlowId = `omni-glow-${filterId}`;
  const casingShineId = `casing-shine-${filterId}`;
  const shadowId = `omni-shadow-${filterId}`;

  const currentAlien = CLASSIC_ALIENS[currentIndex];
  const selectedAlien = aliens[currentIndex]

  console.log({ selectedAlien })


  const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    if (!isMuted) {
      audio.play().catch(() => { });
    }
  };

  // Turn dial right (next alien)
  const handleNext = () => {
    if (state === "transformed") {
      setState("active");
    }
    playSound(changeSound);
    setDialAngle((prev) => prev + 90);
    setCurrentIndex((prev) => (prev + 1) % CLASSIC_ALIENS.length);
  };

  // Turn dial left (prev alien)
  const handlePrev = () => {
    if (state === "transformed") {
      setState("active");
    }
    playSound(changeSound);
    setDialAngle((prev) => prev - 90);
    setCurrentIndex(
      (prev) => (prev - 1 + CLASSIC_ALIENS.length) % CLASSIC_ALIENS.length,
    );
  };

  // Pop up dial (Enter selection mode)
  const handlePopUp = () => {
    playSound(clickSound);
    setState("active");
  };

  // Slam down dial (Transformation sequence)
  const handleSlamDown = () => {
    playSound(transformSound);
    setShockwaveTrigger((k) => k + 1);
    setState("transformed");
  };


  return (
    <div className="relative flex flex-col items-center justify-baseline w-full h-full min-h-110 select-none">
      {/* ── TOP ACTION BAR: BEN 10 STATUS & AUDIO CONTROLS ── */}
      <div className="w-full flex items-center justify-between px-3 max-w-105 z-30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${state === "transformed" ? "bg-emerald-400" : state === "active" ? "bg-green-400" : "bg-emerald-600"}`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${state === "transformed" ? "bg-emerald-300" : state === "active" ? "bg-green-400" : "bg-emerald-500"}`}
            />
          </span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
            {state === "standby" && "OMNITRIX · STANDBY"}
            {state === "active" && "DIAL POPPED · SELECT ALIEN"}
            {state === "transformed" && "HERO MODE · DEPLOYED"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-md bg-slate-900/80 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <SpeakerSlashIcon size={14} weight="bold" />
            ) : (
              <SpeakerHighIcon size={14} weight="bold" />
            )}
          </button>
          {onExit && (
            <button
              onClick={onExit}
              className="p-1.5 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Return to Core"
            >
              <XIcon size={14} weight="bold" />
            </button>
          )}
        </div>
      </div>

      {/* ── MAIN OMNITRIX PHYSICAL GAUNTLET & FACEPLATE ── */}
      <div className="relative w-full max-w-105 aspect-square flex items-center justify-center">
        {/* Dark Theme / Galvanic Mechamorph Outer Glow Ring */}
        {isGalvanic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.85, 1, 0.85],
              scale: [1, 1.01, 1],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none z-0"
            style={{
              inset: "12.5%",
              boxShadow:
                "0 0 16px #90db2d, 0 0 32px rgba(144, 219, 45, 0.65), inset 0 0 12px rgba(144, 219, 45, 0.35)",
              border: "2px solid rgba(144, 219, 45, 0.85)",
            }}
          />
        )}


        {/* Ambient Toxic Radiation Bloom */}
        <motion.div
          animate={{
            opacity:
              state === "transformed"
                ? [0.8, 1, 0.8]
                : state === "active"
                  ? [0.5, 0.8, 0.5]
                  : [0.25, 0.45, 0.25],
            scale: state === "transformed" ? [1, 1.06, 1] : 1,
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: "4%",
            background:
              state === "transformed"
                ? "radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(16,185,129,0.15) 50%, transparent 75%)"
                : "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(5,46,22,0.1) 60%, transparent 80%)",
            filter: "blur(28px)",
          }}
        />

        {/* ── SVG REALISTIC OMNITRIX FACEPLATE ── */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full overflow-visible z-10 select-none"
        >
          <defs>
            {/* Outer Drop Shadow */}
            <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="12"
                floodColor="#000000"
                floodOpacity="0.8"
              />
            </filter>

            {/* Toxic Green Energy Glow Filters */}
            <filter
              id={screenGlowId}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Heavy Gunmetal Radial Gradient for Outer Casing */}
            <radialGradient id={casingShineId} cx="32%" cy="24%" r="82%">
              <stop offset="0%" stopColor="#66717d" />
              <stop offset="18%" stopColor="#3f4a55" />
              <stop offset="42%" stopColor="#222b34" />
              <stop offset="72%" stopColor="#10161d" />
              <stop offset="92%" stopColor="#05090d" />
              <stop offset="100%" stopColor="#010204" />
            </radialGradient>

            {/* Machined metal bevels */}
            <linearGradient id="metalEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#aeb8c2" />
              <stop offset="8%" stopColor="#59636d" />
              <stop offset="28%" stopColor="#1b232b" />
              <stop offset="70%" stopColor="#080c11" />
              <stop offset="92%" stopColor="#5b6670" />
              <stop offset="100%" stopColor="#11171d" />
            </linearGradient>

            <linearGradient id="darkMetal" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#4b5560" />
              <stop offset="12%" stopColor="#252d35" />
              <stop offset="48%" stopColor="#0c1218" />
              <stop offset="82%" stopColor="#020509" />
              <stop offset="100%" stopColor="#36404a" />
            </linearGradient>

            <radialGradient id="dialFace" cx="38%" cy="28%" r="80%">
              <stop offset="0%" stopColor="#3a4650" />
              <stop offset="32%" stopColor="#202a33" />
              <stop offset="68%" stopColor="#0b1117" />
              <stop offset="100%" stopColor="#020508" />
            </radialGradient>

            <linearGradient id="greenGlass" x1="25%" y1="10%" x2="75%" y2="90%">
              <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.95" />
              <stop offset="12%" stopColor="#4ade80" stopOpacity="0.95" />
              <stop offset="42%" stopColor="#16a34a" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#064e2b" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#02170c" />
            </linearGradient>

            <filter
              id="bevelShadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset dy="5" result="offset" />
              <feComposite
                in="offset"
                in2="SourceAlpha"
                operator="out"
                result="shadow"
              />
              <feFlood floodColor="#000000" floodOpacity="0.9" result="dark" />
              <feComposite
                in="dark"
                in2="shadow"
                operator="in"
                result="shadowColor"
              />
              <feMerge>
                <feMergeNode in="shadowColor" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="softGreenGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing Toxic Core Radial Gradient */}
            <radialGradient id="neonGreenCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="35%" stopColor="#22c55e" />
              <stop offset="70%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#052e16" />
            </radialGradient>

            {/* High Contrast Screen Background */}
            <radialGradient id="screenHudBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#062812" />
              <stop offset="65%" stopColor="#031409" />
              <stop offset="100%" stopColor="#010803" />
            </radialGradient>

            {/* Screen Boundary Clip Path */}
            <clipPath id="omniLensClip">
              <circle cx="200" cy="200" r="118" />
            </clipPath>
          </defs>

          {/* Side ventilation / mechanical seam details */}
          <g opacity="0.8">
            <path d="M78 154 L92 150" stroke="#78838d" strokeWidth="2" />
            <path d="M75 161 L90 157" stroke="#11171d" strokeWidth="3" />
            <path d="M308 150 L322 154" stroke="#78838d" strokeWidth="2" />
            <path d="M310 157 L325 161" stroke="#11171d" strokeWidth="3" />
          </g>

          {/* ── 4. POP-UP CYLINDER / MACHINED OUTER CASING ── */}
          <circle cx="200" cy="200" r="146" fill="#020406" stroke="#000" strokeWidth="5" filter={`url(#${shadowId})`} />
          <circle cx="200" cy="200" r="144" fill="url(#metalEdge)" stroke="#05080b" strokeWidth="2" />

          {/* ── 5. ROTATING MECHANICAL KNURLED DIAL RING ── */}
          <motion.g
            animate={{ rotate: dialAngle }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.8,
            }}
            style={{ transformOrigin: "200px 200px" }}
          >
            <circle
              cx="200"
              cy="200"
              r="126"
              fill="#000"
              opacity="0.9"
              transform="translate(0 4)"
            />

            <circle
              cx="200"
              cy="200"
              r="128"
              fill="url(#dialFace)"
              stroke="#69747e"
              strokeOpacity="0.45"
              strokeWidth="2"
              filter={`url(#bevelShadow)`}
            />
            <circle
              cx="200"
              cy="200"
              r="123"
              fill="none"
              stroke="#05080b"
              strokeWidth="5"
            />
            <circle
              cx="200"
              cy="200"
              r="119"
              fill="none"
              stroke="#5e6872"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="200"
              r="113"
              fill="none"
              stroke="#000"
              strokeOpacity="0.7"
              strokeWidth="3"
            />
            <g>
              {[
                [200, 70],
                [330, 200],
                [200, 330],
                [70, 200],
              ].map(([x, y], i) => (
                <g key={`bolt-${i}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r="5"
                    fill="#080c10"
                    stroke="#66717b"
                    strokeWidth="1"
                  />
                  <circle cx={x} cy={y} r="3" fill="#4ade80" />
                </g>
              ))}
            </g>
          </motion.g>

          {/* Real physical fasteners */}

          {/* ── 6. INNER SCREEN CORE (POP-UP ELEVATION EFFECT) ── */}
          <motion.g
            animate={{
              scale:
                state === "active"
                  ? 1.045
                  : state === "transformed"
                    ? 1.015
                    : 0.985,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ transformOrigin: "200px 200px" }}
          >
            {/* ─────────────────────────────────────────────────────────────
                MODE A: STANDBY — THE ICONIC BEN 10 HOURGLASS EMBLEM
               ───────────────────────────────────────────────────────────── */}
            {["standby", "transformed"].includes(state) && (
              <g clipPath="url(#omniLensClip)">
                <circle cx="200" cy="200" r="130" fill="url(#greenGlass)" />
                <circle cx="200" cy="200" r="128" fill="none" strokeWidth={50} stroke="#000" />
                <path
                  d="
                      M 92 200
                      C 92 166, 111 124, 129 124
                      L 171 200
                      L 129 276
                      C 111 276, 92 234, 92 200
                      Z
                    "
                  fill="#030804"
                />

                <path
                  d="
                      M 308 200
                      C 308 234, 289 276, 271 276
                      L 229 200
                      L 271 124
                      C 289 124, 308 166, 308 200
                      Z
                    "
                  fill="#030804"
                />
              </g>
            )}

            {/* ─────────────────────────────────────────────────────────────
                MODE B & C: ACTIVE / TRANSFORMED — HOLOGRAPHIC ALIEN SILHOUETTE
               ───────────────────────────────────────────────────────────── */}
            {state === "active" && (
              <g clipPath="url(#omniLensClip)">
                <AnimatePresence mode="wait">
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <g clipPath="url(#omniLensClip)">
                      {/* GREEN DIAMOND SCREEN */}
                      {/* <circle cx={200} cy={200} fill="url(#greenGlass)" r={130}></circle> */}
                      <circle cx="200" cy="200" r="128" fill="none" strokeWidth={50} stroke="#000" />
                      <motion.g
                        initial={{ opacity: 0, scale: 0, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], }}
                        style={{ transformOrigin: "200px 200px", }}
                      >
                        {/* LEFT HOURGLASS HALF */}
                        <motion.path
                          d="M 92 200 C 92 166, 111 124, 129 124 L 171 200 L 129 276 C 111 276, 92 234, 92 200 Z"
                          fill="#030804"
                          initial={{ scale: 1, }}
                          animate={{ scale: 4, }}
                          transition={{
                            duration: 1,
                            ease: [0.65, 0, 0.35, 1],
                          }}
                        />

                        {/* RIGHT HOURGLASS HALF */}
                        <motion.path
                          d="M 308 200 C 308 234, 289 276, 271 276 L 229 200 L 271 124 C 289 124, 308 166, 308 200 Z"
                          fill="#030804"
                          initial={{ scale: 1, }}
                          animate={{ scale: 4, }}
                          transition={{
                            duration: 1,
                            ease: [0.65, 0, 0.35, 1],
                          }}
                        />

                        <motion.g
                          mode={"wait"}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          {/* GREEN SCREEN */}
                          <polygon points="200,78 272,200 200,322 128,200" fill="url(#greenGlass)" />

                          {/* BLACK DIAMOND FRAME */}
                          <polygon points="200,78 272,200 200,322 128,200" fill="none" strokeWidth="8" />
                        </motion.g>

                        <AnimatePresence mode="wait">
                          <motion.g
                            key={currentIndex}
                            style={{ transformOrigin: "200px 200px", }}
                          >
                            <image
                              href={selectedAlien}
                              x="150"
                              y="130"
                              width="100"
                              height="140"
                              preserveAspectRatio="xMidYMid meet"
                            />
                          </motion.g>
                        </AnimatePresence>
                      </motion.g>
                    </g>
                  </motion.g>
                </AnimatePresence>
              </g>
            )}
          </motion.g>

          {/* ── 7. TRANSFORMATION BLAST / SHOCKWAVE EFFECT ── */}
          {shockwaveTrigger > 0 && (
            <g key={shockwaveTrigger} className="pointer-events-none">
              <circle
                cx="200"
                cy="200"
                r="10"
                fill="none"
                stroke="#86efac"
                strokeWidth="12"
                filter={`url(#${screenGlowId})`}
              >
                <animate
                  attributeName="r"
                  values="10;240"
                  dur="0.65s"
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="1;0"
                  dur="0.65s"
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-width"
                  values="14;1"
                  dur="0.65s"
                  fill="freeze"
                />
              </circle>
              <circle cx="200" cy="200" r="10" fill="#22c55e" opacity="0.85">
                <animate
                  attributeName="r"
                  values="10;190"
                  dur="0.45s"
                  fill="freeze"
                />
                <animate
                  attributeName="opacity"
                  values="0.85;0"
                  dur="0.45s"
                  fill="freeze"
                />
              </circle>
            </g>
          )}

          {/* ── 8. INVISIBLE TOUCH/CLICK HITBOX ON THE CENTER DIAL ── */}
          {/* Clicking the center emblem activates pop-up or triggers transformation */}
          <circle
            cx="200"
            cy="200"
            r="94"
            fill="transparent"
            className="cursor-pointer z-40"
            onClick={
              state === "standby"
                ? handlePopUp
                : state === "active"
                  ? handleSlamDown
                  : handlePopUp
            }
          >
            <title>
              {state === "standby"
                ? "Click to Pop Up Dial!"
                : state === "active"
                  ? "SLAM DOWN TO TRANSFORM!"
                  : "Click to Re-select Alien"}
            </title>
          </circle>
        </svg>

        {/* ── FLOATING DIAL ROTATION CONTROLS (Only visible when popped up) ── */}
        {state === "active" && (
          <>
            {/* Left Dial Turn Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title="Turn Dial Left"
            >
              <CaretLeftIcon size={20} weight="bold" />
            </button>

            {/* Right Dial Turn Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title="Turn Dial Right"
            >
              <CaretRightIcon size={20} weight="bold" />
            </button>
          </>
        )}
      </div>

      {/* ── BOTTOM HUD & TACTILE INTERACTION PANEL ── */}
      <div className="w-full max-w-sm flex flex-col items-center text-center px-4 z-20">
        {/* ACTIVE SELECTION STATE */}
        {state === "active" && (
          <div className="flex flex-col items-center w-full">
            {/* Alien Stats Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40">
              <span className="text-[11px] font-mono font-bold text-emerald-400 tracking-wider">
                {currentAlien.name}
              </span>
              <span className="text-[10px] text-slate-500">•</span>
              <span className="text-[10px] font-mono text-slate-300">
                {currentAlien.devSkill}
              </span>
            </div>
            <p className="text-[10px] font-mono text-emerald-500/80 tracking-wide">
              {currentAlien.power} · {currentAlien.species} (
              {currentAlien.homeWorld})
            </p>
          </div>
        )}
        {onExit && (
          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 text-emerald-700"
          >
            <span>
              <span className="w-1.5 h-1.5 rounded-Ifull bg-emerald-500 aniImate-pulse" />
              [ ARC RECTOR MODE ]
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
