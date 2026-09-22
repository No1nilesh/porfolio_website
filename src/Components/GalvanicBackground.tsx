import { motion, AnimatePresence } from "motion/react";

interface GalvanicBackgroundProps {
  active: boolean;
}

export default function GalvanicBackground({ active }: GalvanicBackgroundProps) {
  return (
    <AnimatePresence key={active ? 1 : 0}>
      {active && (
        <motion.div
          key="galvanic-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
          style={{ backgroundColor: "#000000" }}
        >
          {/* ── EXPANDING NANOTECH SPREAD (Slowly covers the background) ── */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 48%)" }}
            animate={{ clipPath: "circle(150% at 50% 48%)" }}
            exit={{ clipPath: "circle(0% at 50% 48%)" }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <svg
              viewBox="0 0 1000 1600"
              preserveAspectRatio="xMidYMid slice"
              className="w-full h-full absolute inset-0 pointer-events-none"
            >
              {/* ─────────────────────────────────────────────────────────────
                  SUBTLE ARMOR PANEL SEAMS (Futuristic body contour grooves)
                 ───────────────────────────────────────────────────────────── */}
              <g
                fill="none"
                stroke="#081404"
                strokeWidth={4}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={3}
              >
                {/* Upper chest V-contour */}
                <path d="M 370,430 L 500,530 L 630,430" />
                {/* Upper side contours */}
                <path d="M 310,690 L 390,750 L 390,870" />
                <path d="M 690,690 L 610,750 L 610,870" />
                {/* Lower flank contours */}
                <path d="M 350,990 L 350,1190 L 210,1330" />
                <path d="M 650,990 L 650,1190 L 790,1330" />
                <path d="M 430,1370 L 500,1430 L 570,1370" />
              </g>

              {/* ─────────────────────────────────────────────────────────────
                  FUTURISTIC GALVANIC MECHAMORPH CIRCUITS
                  Exact match to wallpaper reference:
                  - Stroke width ~ 10
                  - Same iconic geometry
                  - Smooth miter joins, flat butt ends, non-rounded
                 ───────────────────────────────────────────────────────────── */}
              <g
                fill="none"
                stroke="#90db2d"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={4}
              >
                {/* ── TOP: DUAL INNER VERTICAL CIRCUITS (Straight up to top edge) ── */}
                <motion.path
                  d="M 445,590 L 445,0"
                  strokeWidth={10}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 555,590 L 555,0"
                  strokeWidth={10}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
                />

                {/* ── TOP: OUTER SHOULDER CIRCUITS (Diagonal 45° jog then straight up) ── */}
                <motion.path
                  d="M 350,520 L 260,420 L 220,310 L 220,160 L 190,100 L 190,0"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.0, delay: 0.35, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 650,520 L 740,420 L 780,310 L 780,160 L 810,100 L 810,0"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.0, delay: 0.35, ease: "easeInOut" }}
                />

                {/* ── MID: LATERAL CHEST RIBS (Smooth angled wings to screen borders) ── */}
                <motion.path
                  d="M 0,500 L 200,500 L 270,530 L 340,530 L 370,570"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.45, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 1000,500 L 800,500 L 730,530 L 660,530 L 630,570"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.45, ease: "easeInOut" }}
                />

                {/* ── BOTTOM: MAIN VERTICAL SPINE (Centered straight down to bottom) ── */}
                <motion.path
                  d="M 500,930 L 500,1600"
                  strokeWidth={10}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.25, ease: "easeInOut" }}
                />

                {/* ── BOTTOM: INNER FORKING FLANKS (Signature 45° step-down forks) ── */}
                <motion.path
                  d="M 425,940 L 300,1070 L 300,1200 L 330,1250 L 330,1340 L 330,1600"
                  strokeWidth={9.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.1, delay: 0.4, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 575,940 L 700,1070 L 700,1200 L 670,1250 L 670,1340 L 670,1600"
                  strokeWidth={9.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.1, delay: 0.4, ease: "easeInOut" }}
                />

                {/* ── BOTTOM: OUTER FLANK TRACKS (Stepping down to lower borders) ── */}
                <motion.path
                  d="M 120,770 L 240,890 L 240,1030 L 140,1150 L 140,1290 L 0,1430"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.3, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 880,770 L 760,890 L 760,1030 L 860,1150 L 860,1290 L 1000,1430"
                  strokeWidth={9}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.3, delay: 0.5, ease: "easeInOut" }}
                />

                {/* ── BOTTOM: LOWER CORNER DIAGONAL ACCENTS ── */}
                <motion.path
                  d="M 380,1490 L 410,1550 L 410,1600"
                  strokeWidth={9.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, delay: 0.7, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 620,1490 L 590,1550 L 590,1600"
                  strokeWidth={9.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, delay: 0.7, ease: "easeInOut" }}
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
