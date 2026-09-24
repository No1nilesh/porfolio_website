import { motion } from "motion/react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  CpuIcon,
  LightningIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ExpandedHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 sm:space-y-8 max-w-5xl mx-auto py-2"
    >
      {/* ── Top Hero Banner ── */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 glass-badge text-xs font-semibold text-primary">
            <SparkleIcon size={14} weight="fill" />
            <span>Frontend Developer & UI/UX Craftsman</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight">
            Nilesh Gautam
          </h1>

          <p className="text-base sm:text-lg text-primary font-semibold">
            Crafting scalable, aesthetic, and high-performance web applications.
          </p>

          <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
            Based in Goa, India. Currently focused on building intuitive, rock-solid
            frontend systems at <strong className="text-text font-semibold">Spintly</strong>,
            specializing in smart access control platforms and modern workplace solutions.
          </p>
        </div>

        {/* Quick CTA Actions */}
        <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
          <a
            href="mailto:gautamnilesh03@gmail.com"
            className="btn-theme-primary py-2.5! px-5! text-xs sm:text-sm font-semibold justify-center shadow-md hover:scale-102 transition-transform"
          >
            <span>Get in Touch</span>
            <ArrowRightIcon size={14} weight="bold" />
          </a>
          <a
            href="https://github.com/No1nilesh"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-badge py-2.5! px-5! text-xs sm:text-sm font-semibold text-text hover:text-primary transition-all justify-center text-center hover:scale-102"
          >
            <span>View GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* ── Core Focus Areas ── */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
          What I Focus On
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bento-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <CodeIcon size={22} weight="duotone" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text">Scalable Architecture</h4>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Building modular, clean, and reusable component architectures that grow smoothly with team and product requirements.
              </p>
            </div>
          </div>

          <div className="bento-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <LightningIcon size={22} weight="duotone" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text">Performance & UX</h4>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Obsessed with sub-second page loads, zero CLS, silky smooth animations, and fluid interactions across devices.
              </p>
            </div>
          </div>

          <div className="bento-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <CpuIcon size={22} weight="duotone" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text">Modern Ecosystem</h4>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Leveraging React 19, Next.js, TypeScript, Tailwind CSS v4, and cutting-edge frontend toolchains.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Custom Details & Placeholder Section ── */}
      <motion.div
        variants={itemVariants}
        className="p-4 sm:p-5 rounded-2xl border border-dashed border-border bg-surface/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-text">
            Custom Section Slot
          </h4>
          <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
            You can drop your additional widgets, video embeds, or detailed case studies right here.
          </p>
        </div>
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
        >
          <span>Explore Projects</span>
          <ArrowDownIcon size={12} weight="bold" />
        </a>
      </motion.div>
    </motion.div>
  );
}
