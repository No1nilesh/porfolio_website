import { useState } from "react";

type StepKey = "build" | "learn" | "repeat" | "improve" | null;

interface StepConfig {
  key: "build" | "learn" | "repeat" | "improve";
  label: string;
  color: string;
  // Target rotation for 3D knot on hover
  rotTargetX: number;
  rotTargetY: number;
}

const steps: StepConfig[] = [
  {
    key: "build",
    label: "Build",
    color: "#7565e8",
    rotTargetX: 0.3,
    rotTargetY: -0.4,
  },
  {
    key: "learn",
    label: "Learn",
    color: "#6366f1",
    rotTargetX: 0.3,
    rotTargetY: 0.4,
  },
  {
    key: "repeat",
    label: "Repeat",
    color: "#8b5cf6",
    rotTargetX: -0.3,
    rotTargetY: 0.4,
  },
  {
    key: "improve",
    label: "Improve",
    color: "#ec4899",
    rotTargetX: -0.3,
    rotTargetY: -0.4,
  },
];

const RING_RADIUS = 180;
const CENTER = 200;
const LABEL_RADIUS = 220;
const satelliteAngle = 12;

const getPointOnRing = (angle: number, radius: number) => {
  const radians = (angle * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
};

export default function ThreeKnot() {
  const [activeStep, setActiveStep] = useState<StepKey>(null);
  const satellitePoint = getPointOnRing(satelliteAngle, RING_RADIUS);

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-full min-h-95 select-none">
      {/* 3D Visual & Interactive Ring Canvas Container */}
      <div className="relative w-full min-w-sm aspect-square flex items-center justify-center">
        {/* Soft Ambient Radial Glow Behind Knot */}
        <div className="size-full absolute rounded-full bg-linear-to-tr from-purple-400/20 via-pink-300/15 to-blue-300/20 blur-3xl pointer-events-none" />

        {/* ============================================================ */}
        {/* SVG INTERACTIVE ORBIT RING & LEADER LINES */}
        {/* ============================================================ */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
          <defs>
            <linearGradient
              id="ringGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <linearGradient
              id="comet-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#fff" stop-opacity="1" />
              <stop offset="100%" stop-color="#38ef7d" stop-opacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="200"
            cy="200"
            r={RING_RADIUS}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="1"
            className="transition-all duration-300"
          />

          <g className="animate-[spin_12s_linear_infinite] origin-center">
            <circle
              cx="200"
              cy="200"
              r={RING_RADIUS}
              fill="none"
              stroke="#7565e8"
              strokeWidth="1.75"
              strokeDasharray="40 780"
              strokeLinecap="round"
            />
            <circle
              cx={satellitePoint.x}
              cy={satellitePoint.y}
              r="3"
              fill="#7565e8"
            />

            <circle
              cx={satellitePoint.x}
              cy={satellitePoint.y}
              r="3"
              fill="#7565e8"
            />
          </g>

          {/* 3. Interactive Leader Lines & Ring Nodes for each Step */}
          {steps.map((step, index) => {
            const isActive = activeStep === step.key;
            const angle = -135 + (index * 360) / steps.length;

            const ringPoint = getPointOnRing(angle, RING_RADIUS);

            const labelPoint = getPointOnRing(angle, LABEL_RADIUS);
            return (
              <g key={step.key} className="transition-all duration-300">
                {/* Leader line connecting label to ring node */}
                <line
                  x1={labelPoint.x}
                  y1={labelPoint.y}
                  x2={ringPoint.x}
                  y2={ringPoint.y}
                  stroke={isActive ? step.color : "#b9c0ec"}
                  strokeWidth={isActive ? 1.75 : 0.85}
                  strokeLinecap="round"
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-200"
                />

                {/* Ring intersection node point */}
                <circle
                  cx={ringPoint.x}
                  cy={ringPoint.y}
                  r={2.5}
                  fill={step.color}
                  stroke={isActive ? step.color : "#a5b4fc"}
                  strokeWidth={isActive ? 2 : 1.25}
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-200"
                />

                <circle
                  cx={labelPoint.x}
                  cy={labelPoint.y}
                  r="3"
                  fill={step.color}
                  stroke={isActive ? step.color : "#a5b4fc"}
                  strokeWidth={isActive ? 2 : 1.25}
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-200"
                />

                {isActive && (
                  <circle
                    cx={ringPoint.x}
                    cy={ringPoint.y}
                    r="4"
                    fill="none"
                    stroke={step.color}
                    strokeWidth="1.5"
                  >
                    <animate
                      attributeName="r"
                      values="4;10;"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />

                    <animate
                      attributeName="stroke-opacity"
                      values="0.7;0;"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* ============================================================ */}
        {/* INTERACTIVE STEP LABELS OVERLAY */}
        {/* ============================================================ */}
        {steps.map((step, index) => {
          const isActive = activeStep === step.key;
          const angle = -135 + (index * 360) / steps.length;
          const labelPoint = getPointOnRing(angle, LABEL_RADIUS);
          const isLeft = Math.cos((angle * Math.PI) / 180) < 0;
          return (
            <button
              key={step.key}
              onMouseEnter={() => setActiveStep(step.key)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() =>
                setActiveStep((prev) => (prev === step.key ? null : step.key))
              }
              className={`absolute z-20 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-slate-900 scale-105 hover:text-slate-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{
                left: `${(labelPoint.x / 400) * 100}%`,
                top: `${(labelPoint.y / 400) * 100}%`,
                transform: isLeft
                  ? "translate(-100%, -50%)"
                  : "translate(0, -50%)",
              }}
            >
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Taglines matching reference */}
      <div className="text-center mt-1">
        <div className="flex items-center justify-center gap-2 text-[0.72rem] sm:text-xs font-bold tracking-[0.22em] text-slate-600 uppercase">
          <span>IDEAS</span>
          <span className="text-purple-400 font-normal">→</span>
          <span>CODE</span>
          <span className="text-purple-400 font-normal">→</span>
          <span>PRODUCTS</span>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-text-muted font-normal">
          Turning ideas into real experiences
        </p>
      </div>
    </div>
  );
}
