import { motion } from "motion/react";
import {
  ArrowSquareOutIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  MapPinIcon,
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

export default function ExpandedExperience() {
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
        <span className="glass-badge text-xs font-semibold text-primary">
          Career Timeline
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
          Work Experience & Education
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          A track record of shipping production-grade interfaces, solving complex UI challenges, and
          building maintainable software solutions.
        </p>
      </motion.div>

      {/* ── Experience Entries ── */}
      <div className="space-y-6">
        {/* Experience 1: Spintly */}
        <motion.div
          variants={itemVariants}
          className="bento-card p-6 sm:p-7 rounded-2xl space-y-4 hover:border-primary/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                <BriefcaseIcon size={14} weight="duotone" />
                <span>Current Position</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text">
                Frontend Developer
              </h2>
              <p className="text-sm font-semibold text-primary mt-0.5">
                Spintly India Private Limited
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-text-muted gap-1">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CalendarIcon size={14} />
                <span>2025 - Present</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon size={14} />
                <span>Goa, India</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Leading and contributing to frontend initiatives across Spintly's smart access platform.
            Developing responsive, real-time control panels that allow enterprises and modern workplaces to manage physical door locks, biometric access, attendance records, and visitor flows securely.
          </p>

          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Key Contributions & Highlights:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted">
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={15} weight="fill" className="text-primary shrink-0 mt-0.5" />
                <span>Architecting reusable component libraries in React & TypeScript.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={15} weight="fill" className="text-primary shrink-0 mt-0.5" />
                <span>Integrating real-time WebSocket events for device status notifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={15} weight="fill" className="text-primary shrink-0 mt-0.5" />
                <span>Optimizing page load metrics and eliminating unnecessary re-renders.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon size={15} weight="fill" className="text-primary shrink-0 mt-0.5" />
                <span>Collaborating directly with backend, firmware, and UX designers.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Education: MES College */}
        <motion.div
          variants={itemVariants}
          className="bento-card p-6 sm:p-7 rounded-2xl space-y-4 hover:border-primary/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-border text-text-muted mb-2">
                <GraduationCapIcon size={14} weight="duotone" />
                <span>Academic Degree</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text">
                Bachelor of Computer Applications (BCA)
              </h2>
              <p className="text-sm font-semibold text-primary mt-0.5">
                MES College of Arts and Commerce, Goa
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-text-muted gap-1">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CalendarIcon size={14} />
                <span>2021 - 2024</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon size={14} />
                <span>Zuarinagar, Goa</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Graduated with comprehensive coursework spanning Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Web Technologies, and Software Engineering methodologies.
          </p>
        </motion.div>
      </div>

      {/* External Profile Link */}
      <motion.div variants={itemVariants} className="flex justify-end pt-2">
        <a
          href="https://www.linkedin.com/in/nilesh-gautam"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-theme-primary py-2! px-4! text-xs font-semibold hover:scale-102 transition-transform shadow-md"
        >
          <span>Connect on LinkedIn</span>
          <ArrowSquareOutIcon size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
}
