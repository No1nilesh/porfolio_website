import { useState } from "react";
import { motion } from "motion/react";
import { Icons } from "../../Icons/Icons";
import {
  CheckIcon,
  CopyIcon,
  EnvelopeSimpleIcon,
  PaperPlaneTiltIcon,
  QuotesIcon,
  SparkleIcon,
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

export default function ExpandedContact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = "gautamnilesh03@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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
          <span>Let's Connect</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
          Have an Idea or Looking to Collaborate?
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          I'm always open to discussing new projects, creative engineering challenges, or opportunities to be part of your vision.
        </p>
      </motion.div>

      {/* ── Contact Split: Form & Info ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: Contact Info & Quote */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-5 space-y-4 flex flex-col justify-between"
        >
          <div className="bento-card p-5 sm:p-6 rounded-2xl space-y-3 hover:border-primary/40 transition-colors">
            <QuotesIcon size={28} weight="fill" className="text-primary/40 rotate-180" />
            <h3 className="text-base sm:text-lg font-bold text-text">
              "Better interfaces for a simpler world."
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Whether you need a performant single-page app, custom design system implementation, or full-stack web solution, I'd love to hear from you.
            </p>
          </div>

          {/* Email Quick-Copy Card */}
          <div className="bento-card p-5 rounded-2xl space-y-2.5 hover:border-primary/40 transition-colors">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-surface border border-border">
              <span className="text-xs sm:text-sm font-medium text-text truncate">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="shrink-0 p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <CheckIcon size={14} weight="bold" />
                    <span className="text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={14} weight="bold" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="bento-card p-4 rounded-2xl flex items-center justify-around text-text-muted hover:border-primary/40 transition-colors">
            <a
              href="https://github.com/No1nilesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-text transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Icons.Github className="size-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nilesh-gautam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-500 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Icons.LinkedIn className="size-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 hover:text-red-500 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <EnvelopeSimpleIcon size={18} weight="bold" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Message Form */}
        <motion.div variants={itemVariants} className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bento-card p-6 sm:p-7 rounded-2xl space-y-4 hover:border-primary/40 transition-colors"
          >
            <h3 className="text-base font-bold text-text">
              Send a Direct Message
            </h3>

            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted/60 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted/60 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted/60 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about what you are looking to build..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted/60 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-theme-primary py-2.5! px-5! text-xs sm:text-sm font-semibold w-full justify-center cursor-pointer shadow-md hover:scale-101 transition-transform"
            >
              {submitted ? (
                <>
                  <CheckIcon size={16} weight="bold" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <PaperPlaneTiltIcon size={15} weight="bold" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
