import { motion } from "motion/react";
import DeveloperCore from "../../DeveloperCore";
import { CpuIcon, LightningIcon, SparkleIcon } from "@phosphor-icons/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ExpandedCore() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 sm:space-y-8 max-w-5xl mx-auto py-2"
    >
      {/* ── Top Header ── */}
      <motion.div
        variants={itemVariants}
        className="pb-6 border-b border-border-subtle space-y-2"
      >
        <div className="inline-flex items-center gap-1.5 glass-badge text-xs font-semibold text-primary">
          <SparkleIcon size={14} weight="fill" />
          <span>Interactive Kinetic Core</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
          Arc Reactor & Omnitrix Galvanic Interface
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          An interactive laboratory widget featuring dynamic SVG morphing, galvanic mechamorph styling,
          and tactile state transformations.
        </p>
      </motion.div>

      {/* ── Center Stage Core ── */}
      <motion.div
        variants={itemVariants}
        className="bento-card p-6 sm:p-12 rounded-3xl flex flex-col items-center justify-center min-h-[420px] hover:border-primary/40 transition-colors"
      >
        <DeveloperCore />
      </motion.div>

      {/* ── Details & Controls ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bento-card p-5 rounded-2xl space-y-2 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <LightningIcon size={18} weight="duotone" />
            <span>Arc Reactor Mode</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Clean, high-precision concentric rings with glowing pulse physics. Simulates Tony Stark's palladium and vibranium core energy dynamics.
          </p>
        </div>

        <div className="bento-card p-5 rounded-2xl space-y-2 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <CpuIcon size={18} weight="duotone" />
            <span>Omnitrix Galvanic Mechamorph</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Galvanic circuitry transformation that morphs the entire site's ambient canvas into Upgrade's alien circuitry matrix.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
