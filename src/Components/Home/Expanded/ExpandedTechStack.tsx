import { motion } from "motion/react";
import { Icons } from "../../Icons/Icons";
import {
  CodeIcon,
  DatabaseIcon,
  GearIcon,
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

interface SkillItem {
  name: string;
  desc?: string;
  icon?: (props: { className?: string }) => React.JSX.Element;
}

const frontendSkills: SkillItem[] = [
  { name: "React 19", desc: "Hooks, Context, Fiber, Concurrent Mode", icon: Icons.React },
  { name: "Next.js", desc: "App Router, SSR, SSG, Server Actions", icon: Icons.NextJs },
  { name: "TypeScript", desc: "Type safety, Generics, Utility Types", icon: Icons.TypeScript },
  { name: "Tailwind CSS v4", desc: "Modern utility-first CSS, @theme tokens", icon: Icons.Tailwind },
  { name: "HTML5 / CSS3", desc: "Semantic markup, modern layout, animations" },
  { name: "Framer Motion", desc: "Fluid UI transitions & physics gestures" },
];

const backendSkills: SkillItem[] = [
  { name: "Node.js", desc: "Asynchronous runtime, Event loops", icon: Icons.NodeJs },
  { name: "MongoDB", desc: "NoSQL, Mongoose Schemas, Aggregations", icon: Icons.MongoDB },
  { name: "REST APIs", desc: "API architecture, CRUD, JWT authentication" },
  { name: "Redis", desc: "In-memory caching, pub/sub" },
  { name: "Socket.io", desc: "Bi-directional real-time communication" },
];

const toolsSkills: SkillItem[] = [
  { name: "Git & GitHub", desc: "Version control, branching, PR reviews" },
  { name: "Vite", desc: "Next-gen lightning fast bundler & HMR" },
  { name: "Postman", desc: "API testing, collections, documentation" },
  { name: "VS Code", desc: "Primary development IDE & power workflows" },
  { name: "Vercel / Netlify", desc: "Continuous deployment & edge hosting" },
];

export default function ExpandedTechStack() {
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
        <div className="inline-flex items-center gap-1.5 glass-badge text-xs font-semibold text-primary">
          <SparkleIcon size={14} weight="fill" />
          <span>Technical Arsenal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
          Tools, Languages & Frameworks
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
          I choose modern, battle-tested technologies tailored to deliver top-tier performance,
          developer velocity, and smooth user experiences.
        </p>
      </motion.div>

      {/* ── Frontend Category ── */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <CodeIcon size={18} weight="duotone" />
          <span>Frontend Technologies</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {frontendSkills.map((skill) => {
            const IconComp = skill.icon;
            return (
              <div
                key={skill.name}
                className="bento-card p-4 rounded-xl flex items-start gap-3 hover:border-primary/40 transition-colors"
              >
                {IconComp && (
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <IconComp className="size-4" />
                  </div>
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text">
                    {skill.name}
                  </h4>
                  {skill.desc && (
                    <p className="text-[11px] text-text-muted mt-0.5 leading-tight">
                      {skill.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Backend Category ── */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <DatabaseIcon size={18} weight="duotone" />
          <span>Backend & Databases</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {backendSkills.map((skill) => {
            const IconComp = skill.icon;
            return (
              <div
                key={skill.name}
                className="bento-card p-4 rounded-xl flex items-start gap-3 hover:border-primary/40 transition-colors"
              >
                {IconComp && (
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <IconComp className="size-4" />
                  </div>
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text">
                    {skill.name}
                  </h4>
                  {skill.desc && (
                    <p className="text-[11px] text-text-muted mt-0.5 leading-tight">
                      {skill.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Tools & Workflow ── */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <GearIcon size={18} weight="duotone" />
          <span>DevOps, Tooling & Workflow</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {toolsSkills.map((skill) => (
            <div
              key={skill.name}
              className="bento-card p-4 rounded-xl flex items-start gap-3 hover:border-primary/40 transition-colors"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-text">
                  {skill.name}
                </h4>
                {skill.desc && (
                  <p className="text-[11px] text-text-muted mt-0.5 leading-tight">
                    {skill.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
