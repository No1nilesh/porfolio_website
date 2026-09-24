import { motion } from "motion/react";
import profileImg from "../../../assets/profile.jpg";
import {
  GraduationCapIcon,
  HeartIcon,
  LaptopIcon,
  MapPinIcon,
  BookOpenIcon,
  CompassIcon,
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

export default function ExpandedAbout() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 sm:space-y-8 max-w-5xl mx-auto py-2"
    >
      {/* ── Top Header & Portrait Split ── */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-border-subtle"
      >
        {/* Left Column: Story */}
        <div className="md:col-span-8 space-y-4">
          <span className="glass-badge text-xs font-semibold text-primary">
            Get To Know Me
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
            Developer, Problem Solver & Lifelong Learner
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-text-muted">
            Originally from Jaunpur, Uttar Pradesh, and currently thriving in the coastal tech hub of Goa, India.
            My journey into software engineering started with curiosity about how pixels on a screen can solve real-world problems.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-text-muted">
            Today, I specialize in crafting clean, accessible, and resilient frontends. At Spintly, I build mission-critical access control web applications where reliability, security, and delightful user experience converge.
          </p>
        </div>

        {/* Right Column: Portrait Card */}
        <div className="md:col-span-4 flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative w-48 sm:w-56 aspect-3/4 rounded-3xl overflow-visible shadow-xl"
          >
            <img
              src={profileImg}
              alt="Nilesh Gautam"
              className="w-full h-full object-cover rounded-3xl border-2 border-border"
            />
            {/* Floating Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border bg-surface text-text border-border">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Key Highlights Grid ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bento-card p-4 rounded-2xl flex items-start gap-3 hover:border-primary/40 transition-colors">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <MapPinIcon size={20} weight="duotone" />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Location</h4>
            <p className="text-sm font-semibold text-text mt-0.5">Vasco, Goa, India</p>
            <p className="text-[11px] text-text-muted">From Jaunpur, UP</p>
          </div>
        </div>

        <div className="bento-card p-4 rounded-2xl flex items-start gap-3 hover:border-primary/40 transition-colors">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <LaptopIcon size={20} weight="duotone" />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Work</h4>
            <p className="text-sm font-semibold text-text mt-0.5">Spintly India</p>
            <p className="text-[11px] text-text-muted">Frontend Developer</p>
          </div>
        </div>

        <div className="bento-card p-4 rounded-2xl flex items-start gap-3 hover:border-primary/40 transition-colors">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <GraduationCapIcon size={20} weight="duotone" />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Education</h4>
            <p className="text-sm font-semibold text-text mt-0.5">BCA Graduate</p>
            <p className="text-[11px] text-text-muted">MES College, Goa (2021-2024)</p>
          </div>
        </div>

        <div className="bento-card p-4 rounded-2xl flex items-start gap-3 hover:border-primary/40 transition-colors">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
            <HeartIcon size={20} weight="duotone" />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Passions</h4>
            <p className="text-sm font-semibold text-text mt-0.5">Cricket & Technology</p>
            <p className="text-[11px] text-text-muted">UI design, gadgets, anime</p>
          </div>
        </div>
      </motion.div>

      {/* ── Journey & Values ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bento-card p-5 sm:p-6 rounded-2xl space-y-2 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <CompassIcon size={18} weight="duotone" />
            <span>My Philosophy</span>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple."
            I believe software should be fast, delightful, and respectful of the user's attention.
          </p>
        </div>

        <div className="bento-card p-5 sm:p-6 rounded-2xl space-y-2 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <BookOpenIcon size={18} weight="duotone" />
            <span>Continuous Growth</span>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Technology moves fast, and staying ahead means being eager to experiment.
            Whether diving into React compiler optimizations, Next.js App Router nuances, or creative UI canvas animations, learning is daily.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
