import { motion } from "motion/react";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  FolderIcon,
  UsersIcon,
  InfinityIcon,
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

const keyMetrics = [
  {
    val: "1+",
    unit: "Years",
    title: "Professional Experience",
    desc: "Building production software at Spintly with React, TypeScript & REST APIs.",
    color: "text-primary",
    icon: BriefcaseIcon,
  },
  {
    val: "5+",
    unit: "Projects",
    title: "Shipped & Maintained",
    desc: "From full-stack gym management platforms to specialized UI libraries.",
    color: "text-primary",
    icon: FolderIcon,
  },
  {
    val: "1",
    unit: "Mission",
    title: "Dedicated Team Player",
    desc: "Collaborating with designers, backend engineers, and product managers.",
    color: "text-primary",
    icon: UsersIcon,
  },
  {
    val: "∞",
    unit: "Limitless",
    title: "Curiosity & Learning",
    desc: "Always experimenting with emerging web standards, animations, and frameworks.",
    color: "text-emerald-500",
    icon: InfinityIcon,
  },
];

const statsBreakdown = [
  { label: "Code Commits", val: "500+" },
  { label: "Hours of Debugging & Coding", val: "2,000+" },
  { label: "UI Components Built", val: "80+" },
  { label: "Lighthouse Performance Target", val: "95+" },
];

export default function ExpandedNumbers() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 sm:space-y-8 max-w-5xl mx-auto py-2"
    >
      {/* ── Header ── */}
      <motion.div
        variants={itemVariants}
        className="pb-6 border-b border-border-subtle space-y-2"
      >
        <span className="glass-badge text-xs font-semibold text-primary">
          Impact By The Numbers
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
          Quantifying Experience & Dedication
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          Numbers only tell part of the story, but they represent countless hours of problem-solving,
          refactoring, and turning concepts into robust user-facing applications.
        </p>
      </motion.div>

      {/* ── 4 Main Cards ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, i) => {
          const IconComp = metric.icon;
          return (
            <div
              key={i}
              className="bento-card p-5 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                  {metric.val}
                </span>
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <IconComp size={20} weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-text">{metric.title}</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* ── Additional Stats Strip ── */}
      <motion.div variants={itemVariants} className="bento-card p-5 sm:p-6 rounded-2xl">
        <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
          Development Breakdown
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
          {statsBreakdown.map((item, idx) => (
            <div key={idx} className="pt-3 sm:pt-0 sm:px-4 first:pl-0 flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-text">
                {item.val}
              </span>
              <span className="text-xs text-text-muted font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Quality Pledge ── */}
      <motion.div
        variants={itemVariants}
        className="bento-card p-5 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-colors"
      >
        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
          <CheckCircleIcon size={24} weight="duotone" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-text">Commitment to High Standards</h4>
          <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
            Every line of code is written with readability, performance, and future maintainability in mind.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
