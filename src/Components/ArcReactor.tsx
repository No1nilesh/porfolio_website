import { motion, AnimatePresence } from "motion/react";
import energyCoreImg from "../assets/energy_core.jpg";
import { useEffect, useState, type ElementType } from "react";
import {
    SparkleIcon,
    CodeIcon,
    GaugeIcon,
    RocketLaunchIcon,
} from "@phosphor-icons/react";


// ─────────────────────────────────────────────────────────────────────────────
// SVG GEOMETRY
// viewBox 400×400, image disc fills inset 4% → disc radius ≈ 192px from center.
// Ring radii calibrated to match the aluminum image's visible ring grooves:
//   RA ≈ 155  (outermost visible ring groove)
//   RB ≈ 118  (second groove)
//   RC ≈ 84   (third groove)
//   RD ≈ 54   (innermost collar groove)
// ─────────────────────────────────────────────────────────────────────────────
const C = 200;
const RA = 155; // outer orbit
const NODE_R = 230; // label anchor dots (outside disc)
const START_A = -135;
const ORIGIN = `${C}px ${C}px`;

const pt = (deg: number, r: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
};

// ─────────────────────────────────────────────────────────────────────────────
// METEOR TAIL HELPER
// Creates a realistic fading comet tail using stacked strokeDashoffset arcs.
// The head is at the 3-o'clock position of the group (cx + R, cy).
// Each tail segment trails behind it with decreasing opacity and width.
// circ = 2π×R (circumference in SVG units — determines arc lengths)
// ─────────────────────────────────────────────────────────────────────────────


export type StageKey = "idea" | "build" | "improve" | "ship";

export interface StageConfig {
    key: StageKey;
    label: string;
    badge: string;
    statusText: string;
    color: string;
    accent: string;
    dA: number; // outer ring revolution seconds
    dB: number; // mid ring
    dC: number; // inner ring
    icon: ElementType;
}

const STAGES: StageConfig[] = [
    {
        key: "idea",
        label: "IDEA",
        badge: "IDEA.init()",
        statusText: "Forming an idea...",
        color: "#818cf8",
        accent: "#c7d2fe",
        dA: 48,
        dB: 72,
        dC: 100,
        icon: SparkleIcon,
    },
    {
        key: "build",
        label: "BUILD",
        badge: "<Build />",
        statusText: "Building components & bringing ideas to life...",
        color: "#7565e8",
        accent: "#a78bfa",
        dA: 6,
        dB: 10,
        dC: 16,
        icon: CodeIcon,
    },
    {
        key: "improve",
        label: "IMPROVE",
        badge: "Optimize()",
        statusText: "Optimizing performance, UX & accessibility...",
        color: "#10b981",
        accent: "#34d399",
        dA: 11,
        dB: 17,
        dC: 28,
        icon: GaugeIcon,
    },
    {
        key: "ship",
        label: "SHIP",
        badge: "Release.live()",
        statusText: "Shipping to production...",
        color: "#a855f7",
        accent: "#e879f9",
        dA: 3,
        dB: 5,
        dC: 8,
        icon: RocketLaunchIcon,
    },
];

const ArcRecator = () => {

    const [activeIdx, setActiveIdx] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);

    const stage = STAGES[activeIdx];

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActiveIdx((prev) => {
                const next = (prev + 1) % STAGES.length;
                if (next === 3) setPulseKey((k) => k + 1);
                return next;
            });
        }, 4500);
        return () => clearInterval(id);
    }, [isPaused]);

    const select = (i: number) => {
        setActiveIdx(i);
        setIsPaused(true);
        if (i === 3) setPulseKey((k) => k + 1);
    };

    return (
        <>
            <div className="relative w-full max-w-105 aspect-square flex items-center justify-center">
                {/* ── CSS stage glow ring — sits BEHIND the disc ────────────────── */}
                {/* This is the only glow — the image itself has no glow styling   */}
                <motion.div
                    key={`bloom-${stage.key}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        inset: "2%",
                        boxShadow: `0 0 0 1.5px ${stage.color}40,
                        0 0 45px ${stage.color}55,
                        0 0 90px ${stage.color}25`,
                        transition: "box-shadow 0.8s ease",
                        borderRadius: "50%",
                    }}
                />

                {/* ── ALUMINUM BASE IMAGE — no glow on this element ─────────────── */}
                <div className="absolute rounded-full overflow-hidden">
                    <img
                        src={energyCoreImg}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    {/* Suppress baked-in white center glow from the image */}
                    {/* Dark radial overlay kills the static white bloom at center   */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 48%, rgba(15,12,40,0.72) 0%, rgba(15,12,40,0.18) 28%, transparent 48%)",
                            mixBlendMode: "multiply",
                        }}
                    />

                    {/* Stage hue tint — screen blend, keeps aluminum ring detail */}
                    <motion.div
                        key={`tint-${stage.key}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.18 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9 }}
                        className="absolute inset-0"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, ${stage.color} 0%, transparent 55%)`,
                            mixBlendMode: "screen",
                        }}
                    />
                </div>

                {/* ================================================================
            SVG OVERLAY — meteors + geometry
        ================================================================ */}
                <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                >
                    <defs>
                        <filter
                            id="glowXl"
                            x="-100%"
                            y="-100%"
                            width="300%"
                            height="300%"
                        >
                            <feGaussianBlur stdDeviation="9" result="b1" />
                            <feGaussianBlur stdDeviation="3.5" result="b2" />
                            <feMerge>
                                <feMergeNode in="b1" />
                                <feMergeNode in="b2" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter
                            id="glowLg"
                            x="-65%"
                            y="-65%"
                            width="230%"
                            height="230%"
                        >
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter
                            id="glowMd"
                            x="-40%"
                            y="-40%"
                            width="180%"
                            height="180%"
                        >
                            <feGaussianBlur stdDeviation="3.5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter
                            id="glowSm"
                            x="-25%"
                            y="-25%"
                            width="150%"
                            height="150%"
                        >
                            <feGaussianBlur stdDeviation="1.8" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Core centre gradient */}
                        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                            <stop
                                offset="24%"
                                stopColor={stage.color}
                                stopOpacity="0.95"
                            />
                            <stop
                                offset="58%"
                                stopColor={stage.color}
                                stopOpacity="0.28"
                            />
                            <stop
                                offset="100%"
                                stopColor={stage.color}
                                stopOpacity="0"
                            />
                        </radialGradient>

                        {/* Stage inner fill bloom */}
                        <radialGradient id="stageBloom" cx="50%" cy="50%" r="50%">
                            <stop
                                offset="0%"
                                stopColor={stage.color}
                                stopOpacity="0.3"
                            />
                            <stop
                                offset="100%"
                                stopColor={stage.color}
                                stopOpacity="0"
                            />
                        </radialGradient>

                        <filter
                            id="ambientShadow"
                            x="-40%"
                            y="-40%"
                            width="180%"
                            height="180%"
                        >
                            <feDropShadow
                                dx="0"
                                dy="8"
                                stdDeviation="10"
                                floodColor="#3730A3"
                                floodOpacity="0.16"
                            />
                        </filter>
                    </defs>

                    {/* ── SHIP shockwave pulse ─────────────────────────────────────── */}
                    {pulseKey > 0 && (
                        <g key={pulseKey}>
                            <circle
                                cx={C}
                                cy={C}
                                r="20"
                                fill="none"
                                stroke={stage.color}
                                strokeWidth="4.5"
                                filter="url(#glowLg)"
                            >
                                <animate
                                    attributeName="r"
                                    values="20;172"
                                    dur="1.05s"
                                    fill="freeze"
                                />
                                <animate
                                    attributeName="stroke-opacity"
                                    values="1;0"
                                    dur="1.05s"
                                    fill="freeze"
                                />
                            </circle>
                            <circle
                                cx={C}
                                cy={C}
                                r="13"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="3"
                            >
                                <animate
                                    attributeName="r"
                                    values="13;162"
                                    dur="0.88s"
                                    fill="freeze"
                                />
                                <animate
                                    attributeName="stroke-opacity"
                                    values="0.9;0"
                                    dur="0.88s"
                                    fill="freeze"
                                />
                            </circle>
                            <circle
                                cx={C}
                                cy={C}
                                r="36"
                                fill="none"
                                stroke={stage.color}
                                strokeWidth="1.5"
                            >
                                <animate
                                    attributeName="r"
                                    values="36;180"
                                    dur="1.38s"
                                    fill="freeze"
                                />
                                <animate
                                    attributeName="stroke-opacity"
                                    values="0.35;0"
                                    dur="1.38s"
                                    fill="freeze"
                                />
                            </circle>
                        </g>
                    )}

                    {/* ── Stage inner geometry ───────────────────────────────────────── */}

                    {/* IDEA — soft breathing */}
                    <AnimatePresence>
                        {stage.key === "idea" && (
                            <motion.g
                                key="geo-idea"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="52"
                                    stroke="#818cf8"
                                    fill="url(#stageBloom)"
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="42"
                                    fill="none"
                                    stroke="#818cf8"
                                    strokeWidth="1.5"
                                >
                                    <animate
                                        attributeName="r"
                                        values="20;52;"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.8;0"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                {[0, 90, 180, 270].map((a) => {
                                    const n = pt(a, 14);
                                    const f = pt(a, 46);
                                    return (
                                        <line
                                            key={a}
                                            x1={n.x}
                                            y1={n.y}
                                            x2={f.x}
                                            y2={f.y}
                                            stroke="#818cf8"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            opacity="0.75"
                                            filter="url(#glowSm)"
                                        />
                                    );
                                })}
                                {[45, 135, 225, 315].map((a) => {
                                    const n = pt(a, 18);
                                    const f = pt(a, 36);
                                    return (
                                        <line
                                            key={a}
                                            x1={n.x}
                                            y1={n.y}
                                            x2={f.x}
                                            y2={f.y}
                                            stroke="#c7d2fe"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            opacity="0.45"
                                        />
                                    );
                                })}
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="13"
                                    fill="none"
                                    stroke="#818cf8"
                                    strokeWidth="1.25"
                                >
                                    <animate
                                        attributeName="r"
                                        values="0;20;"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0.8;0;"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* BUILD — spinning hex assembly */}
                    <AnimatePresence>
                        {stage.key === "build" && (
                            <motion.g
                                key="geo-build"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <circle
                                    cx={C}
                                    cy={C}
                                    r={NODE_R}
                                    fill="url(#stageBloom)"
                                />
                                <motion.g
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{ transformOrigin: ORIGIN }}
                                >
                                    <circle
                                        cx={C}
                                        cy={C}
                                        r="126"
                                        fill="none"
                                        stroke="#6366F1"
                                        strokeWidth="10"
                                        strokeDasharray={"14 20 2"}
                                        opacity="0.25"
                                        filter="url(#ambientShadow)"
                                    />
                                </motion.g>
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* IMPROVE — precision radar sweep */}
                    <AnimatePresence>
                        {stage.key === "improve" && (
                            <motion.g
                                key="geo-improve"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <circle
                                    cx={C}
                                    cy={C}
                                    r={NODE_R}
                                    fill="url(#stageBloom)"
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="48"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    opacity="0.6"
                                    filter="url(#glowSm)"
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="34"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="1.25"
                                    opacity="0.4"
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="22"
                                    fill="none"
                                    stroke="#34d399"
                                    strokeWidth="0.75"
                                    opacity="0.35"
                                />
                                {/* Fast sweep */}
                                <motion.g
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1.3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{ transformOrigin: ORIGIN }}
                                >
                                    <circle
                                        cx={C}
                                        cy={C}
                                        r="48"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeDasharray="60 360"
                                        filter="url(#glowLg)"
                                    >
                                        <animate
                                            attributeName="stroke-dasharray"
                                            values="60 360;180 360;30 360;60 360"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </motion.g>
                                {[0, 90, 180, 270].map((a) => {
                                    const n = pt(a, 52);
                                    const f = pt(a, 66);
                                    return (
                                        <line
                                            key={a}
                                            x1={n.x}
                                            y1={n.y}
                                            x2={f.x}
                                            y2={f.y}
                                            stroke="#10b981"
                                            strokeWidth="2.5"
                                            opacity="0.9"
                                            filter="url(#glowSm)"
                                        />
                                    );
                                })}
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* SHIP — pulsing beacon */}
                    <AnimatePresence>
                        {stage.key === "ship" && (
                            <motion.g
                                key="geo-ship"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <circle
                                    cx={C}
                                    cy={C}
                                    r={NODE_R}
                                    fill="url(#stageBloom)"
                                />
                                <motion.circle
                                    cx={C}
                                    cy={C}
                                    r="52"
                                    fill="none"
                                    stroke="#a855f7"
                                    strokeWidth="3"
                                    filter="url(#glowMd)"
                                    animate={{ opacity: [0.35, 1, 0.35] }}
                                    transition={{
                                        duration: 1.3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="38"
                                    fill="none"
                                    stroke="#c084fc"
                                    strokeWidth="1.75"
                                    opacity="0.65"
                                />
                                <circle
                                    cx={C}
                                    cy={C}
                                    r="24"
                                    fill="none"
                                    stroke="#e879f9"
                                    strokeWidth="1"
                                    opacity="0.45"
                                />
                                {[0, 60, 120, 180, 240, 300].map((a) => {
                                    const n = pt(a, 18);
                                    const f = pt(a, 48);
                                    return (
                                        <line
                                            key={a}
                                            x1={n.x}
                                            y1={n.y}
                                            x2={f.x}
                                            y2={f.y}
                                            stroke="#a855f7"
                                            strokeWidth="1"
                                            opacity="0.85"
                                            filter="url(#glowSm)"
                                        />
                                    );
                                })}
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* ── Central singularity ───────────────────────────────────────── */}
                    <motion.g
                        key={`core-${stage.key}`}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        style={{ transformOrigin: ORIGIN }}
                    >
                        <circle
                            cx={C}
                            cy={C}
                            r={
                                stage.key === "idea"
                                    ? 20
                                    : stage.key === "build"
                                        ? 26
                                        : stage.key === "improve"
                                            ? 17
                                            : 32
                            }
                            fill="url(#coreGrad)"
                        />
                        <circle cx={C} cy={C} r="1.5" fill="#ffffff" />
                    </motion.g>

                    {/* ── Leader lines + orbit nodes + anchor dots ─────────────────── */}
                    {STAGES.map((s, i) => {
                        const isActive = stage.key === s.key;
                        const angle = START_A + (i * 360) / STAGES.length;
                        const ringPt = pt(angle, RA);
                        const nodePt = pt(angle, NODE_R);
                        const tickPt = pt(angle + 90, 7);

                        return (
                            <g key={s.key}>
                                <line
                                    x1={ringPt.x}
                                    y1={ringPt.y}
                                    x2={nodePt.x}
                                    y2={nodePt.y}
                                    stroke={isActive ? s.color : "#94a3b8"}
                                    strokeWidth={isActive ? 2 : 1}
                                    strokeLinecap="round"
                                    filter={isActive ? "url(#glowSm)" : undefined}
                                    opacity={isActive ? 1 : 0.45}
                                    className="transition-all duration-300"
                                />
                                {/* Perpendicular tick at orbit intersection */}
                                <line
                                    x1={ringPt.x + tickPt.x - C}
                                    y1={ringPt.y + tickPt.y - C}
                                    x2={ringPt.x - (tickPt.x - C)}
                                    y2={ringPt.y - (tickPt.y - C)}
                                    stroke={isActive ? s.color : "#a5b4fc"}
                                    strokeWidth={isActive ? 2.5 : 1}
                                    strokeLinecap="round"
                                    opacity={isActive ? 1 : 0.35}
                                />
                                {/* Ring node */}
                                <circle
                                    cx={ringPt.x}
                                    cy={ringPt.y}
                                    r={isActive ? 6 : 3.5}
                                    fill={isActive ? s.color : "#e0e7ff"}
                                    stroke={isActive ? "#ffffff" : s.color}
                                    strokeWidth={isActive ? 1 : 1}
                                    filter={isActive ? "url(#glowMd)" : undefined}
                                    className="transition-all duration-300"
                                />
                                {isActive && (
                                    <circle
                                        cx={ringPt.x}
                                        cy={ringPt.y}
                                        r="6"
                                        fill="none"
                                        stroke={s.color}
                                        strokeWidth="1.5"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="6;15"
                                            dur="1.3s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="stroke-opacity"
                                            values="1;0"
                                            dur="1.3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}
                                {/* Anchor dot */}
                                <circle
                                    cx={nodePt.x}
                                    cy={nodePt.y}
                                    r={isActive ? 4.5 : 2.5}
                                    fill={isActive ? s.color : "#c7d2fe"}
                                    stroke={isActive ? "#ffffff" : "none"}
                                    strokeWidth="1.5"
                                    filter={isActive ? "url(#glowSm)" : undefined}
                                    className="transition-all duration-300"
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* ================================================================
            STAGE LABELS
        ================================================================ */}
                {STAGES.map((s, i) => {
                    const isActive = stage.key === s.key;
                    const angle = START_A + (i * 360) / STAGES.length;
                    const nodePt = pt(angle, NODE_R);
                    const isLeft = Math.cos((angle * Math.PI) / 180) < 0;
                    const StageIcon = s.icon;

                    return (
                        <button
                            key={s.key}
                            onMouseEnter={() => select(i)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => select(i)}
                            className="absolute z-20 flex items-center gap-1.5 cursor-pointer"
                            style={{
                                left: `${(nodePt.x / 400) * 100}%`,
                                top: `${(nodePt.y / 400) * 100}%`,
                                transform: isLeft
                                    ? "translate(calc(-100% - 10px), -50%)"
                                    : "translate(10px, -50%)",
                            }}
                            title={s.statusText}
                        >
                            <StageIcon
                                size={isActive ? 13 : 11}
                                weight={isActive ? "fill" : "regular"}
                                style={{
                                    color: s.color,
                                    opacity: isActive ? 1 : 0.5,
                                    filter: isActive
                                        ? `drop-shadow(0 0 6px ${s.color})`
                                        : "none",
                                    transition: "all 0.25s",
                                    flexShrink: 0,
                                }}
                            />
                            <span
                                className="font-mono font-bold uppercase"
                                style={{
                                    fontSize: "0.58rem",
                                    letterSpacing: "0.2em",
                                    color: isActive ? "#1e293b" : "#94a3b8",
                                    transition: "color 0.25s",
                                }}
                            >
                                {s.label}
                            </span>
                        </button>
                    );
                })}

                {/* Centre click hitbox */}
                <div
                    onClick={() => setPulseKey((k) => k + 1)}
                    className="absolute z-100 rounded-full cursor-pointer size-4"
                    title="Click to pulse"
                />
            </div>

            {/* STATUS + TAGLINE */}
            {/* <div className="text-center mt-1 px-2 max-w-sm">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stage.key}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.22 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5"
                        style={{
                            background: "rgba(255,255,255,0.96)",
                            border: `1px solid ${stage.color}30`,
                            boxShadow: `0 0 0 3px ${stage.color}0e, 0 2px 10px rgba(0,0,0,0.05)`,
                        }}
                    >
                        <span
                            className="size-1.5 rounded-full shrink-0 animate-pulse"
                            style={{
                                backgroundColor: stage.color,
                                boxShadow: `0 0 6px ${stage.color}`,
                            }}
                        />
                        <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight"
                            style={{
                                backgroundColor: `${stage.color}18`,
                                color: stage.color,
                            }}
                        >
                            {stage.badge}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                            {stage.statusText}
                        </span>
                    </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-center gap-2.5 text-[0.68rem] font-bold tracking-[0.25em] text-slate-600 uppercase">
                    <span>IDEAS</span>
                    <motion.span
                        animate={{ color: stage.color }}
                        transition={{ duration: 0.5 }}
                        className="font-light text-base leading-none"
                    >
                        →
                    </motion.span>
                    <span>CODE</span>
                    <motion.span
                        animate={{ color: stage.color }}
                        transition={{ duration: 0.5 }}
                        className="font-light text-base leading-none"
                    >
                        →
                    </motion.span>
                    <span>PRODUCTS</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400 font-normal">
                    Turning ideas into real experiences
                </p>
            </div> */}
        </>
    )
}

export default ArcRecator;