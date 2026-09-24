import { motion } from "motion/react";
import FitnessFlexMockup from "../../FitnessFlexMockup";
import {
  ArrowSquareOutIcon,
  CheckCircleIcon,
  GithubLogoIcon,
  StarIcon,
} from "@phosphor-icons/react";

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

const keyFeatures = [
  "Real-time live workout classes with instant attendance sync",
  "Member management portal with subscription billing & tier tracking",
  "Trainer scheduling dashboard with automated reminder notifications",
  "Optimized for high-concurrency with Redis pub/sub and Socket.io",
  "Fully responsive UI with dark/light mode and accessible components",
];

const techBadges = [
  "Next.js 14",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Redis",
  "Socket.io",
  "MongoDB",
];

export default function ExpandedProject() {
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
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 glass-badge text-xs font-semibold text-primary">
            <StarIcon size={14} weight="fill" className="text-amber-500" />
            <span>Featured Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-text tracking-tight">
            FitnessFlex 2.0
          </h1>

          <p className="text-base text-primary font-semibold">
            Next-Generation Gym & Fitness Facility Management Platform
          </p>

          <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
            FitnessFlex simplifies daily gym operations by combining class scheduling, member engagement,
            staff management, and real-time biometric access tracking into a single unified cloud dashboard.
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
          <a
            href="https://github.com/No1nilesh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theme-primary py-2.5! px-5! text-xs sm:text-sm font-semibold justify-center hover:scale-102 transition-transform shadow-md"
          >
            <GithubLogoIcon size={16} weight="bold" />
            <span>Source Code</span>
          </a>
          <a
            href="https://github.com/No1nilesh"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-badge py-2.5! px-5! text-xs sm:text-sm font-semibold text-text hover:text-primary transition-all justify-center text-center hover:scale-102"
          >
            <span>Live Demo</span>
            <ArrowSquareOutIcon size={14} />
          </a>
        </div>
      </motion.div>

      {/* ── Visual Mockup Preview Showcase ── */}
      <motion.div
        variants={itemVariants}
        className="bento-card p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center overflow-hidden hover:border-primary/30 transition-colors"
      >
        <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4 self-start">
          Interactive Platform UI Preview
        </h3>
        <div className="w-full flex justify-center py-4">
          <FitnessFlexMockup />
        </div>
      </motion.div>

      {/* ── Architecture & Features Split ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Highlights */}
        <div className="bento-card p-5 sm:p-6 rounded-2xl space-y-3 hover:border-primary/40 transition-colors">
          <h3 className="text-sm font-bold text-text">Key Features & Innovations</h3>
          <ul className="space-y-2.5">
            {keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                <CheckCircleIcon size={16} weight="fill" className="text-primary shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Behind the Project */}
        <div className="bento-card p-5 sm:p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-text mb-2">Technology Architecture</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Designed with a decoupled frontend and backend. WebSocket channels keep schedule changes
              and check-ins synchronized in real time, with Redis buffering high-frequency telemetry.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-full text-xs font-medium border bg-surface text-text border-border"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
