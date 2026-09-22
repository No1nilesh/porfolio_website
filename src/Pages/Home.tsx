import { motion } from "motion/react";
import Card from "../Components/Card";
import { Icons } from "../Components/Icons/Icons";
import DeveloperCore from "../Components/DeveloperCore";
import FitnessFlexMockup from "../Components/FitnessFlexMockup";
import profileImg from "../assets/profile.jpg";
import { useGalvanic } from "../Context/GalvanicContext";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChartBarIcon,
  GraduationCapIcon,
  HeartIcon,
  LaptopIcon,
  LightningIcon,
  MapPinIcon,
  QuotesIcon,
  StarIcon,
  UserIcon,
} from "@phosphor-icons/react";

const infoItems = [
  { icon: MapPinIcon, text: "Vasco, Goa, India" },
  { icon: LaptopIcon, text: "Frontend Developer at Spintly" },
  { icon: GraduationCapIcon, text: "BCA Graduate" },
  { icon: HeartIcon, text: "Music • Cricket • Self-Improvement" },
];

const techStack = [
  { name: "React", icon: Icons.React },
  { name: "Next.js", icon: Icons.NextJs },
  { name: "TypeScript", icon: Icons.TypeScript },
  { name: "Node.js", icon: Icons.NodeJs },
  { name: "Tailwind CSS", icon: Icons.Tailwind },
  { name: "MongoDB", icon: Icons.MongoDB },
];

const numbers = [
  { val: "1+", label: "Years Experience", color: "text-purple-500", darkColor: "text-purple-400" },
  { val: "5+", label: "Projects Built", color: "text-[#0284c7]", darkColor: "text-sky-400" },
  { val: "1", label: "Amazing Team", color: "text-[#ea580c]", darkColor: "text-orange-400" },
  { val: "∞", label: "Things to Learn", color: "text-[#16a34a]", darkColor: "text-[#90db2d]" },
];

const fitnessTags = ["Next.js", "Node.js", "Redis", "Socket.io"];

export default function Home() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="w-full mx-auto">
      <div className=" lg:grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* ============================================================ */}
        {/* ROW 1 & 2 TOP SECTION */}
        {/* ============================================================ */}

        {/* 1. TOP-LEFT: HERO CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 flex flex-col"
        >
          <Card className="flex-1 flex flex-col justify-between p-6 sm:p-7 min-h-80">
            <div>
              {/* Top Badge & Signal Icon */}
              <div className="flex items-center justify-between">
                <span className={`glass-badge text-xs font-semibold ${isGalvanic ? "text-[#d9f99d]" : "text-primary"}`}>
                  👋 Hey there!
                </span>
                <div
                  className="flex items-end gap-0.5 opacity-60"
                  title="Active"
                >
                  <span className={`w-1 h-2 rounded-xs ${isGalvanic ? "bg-[#90db2d]" : "bg-primary"}`} />
                  <span className={`w-1 h-3.5 rounded-xs ${isGalvanic ? "bg-[#90db2d]" : "bg-primary"}`} />
                  <span className={`w-1 h-5 rounded-xs ${isGalvanic ? "bg-[#90db2d]" : "bg-primary"}`} />
                </div>
              </div>

              {/* Headings */}
              <div className="mt-5">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  I'm Nilesh
                </h1>
                <p className={`text-xl sm:text-2xl font-bold mt-0.5 transition-colors ${
                  isGalvanic
                    ? "text-[#90db2d] drop-shadow-[0_0_8px_rgba(144,219,45,0.4)]"
                    : "text-primary"
                }`}>
                  Frontend Developer
                </p>
              </div>

              {/* Bio */}
              <p className={`mt-3 text-xs sm:text-base leading-relaxed ${
                isGalvanic ? "text-slate-300" : "text-slate-500"
              }`}>
                I build clean, practical and scalable web applications.
                Currently working at Spintly, building better access solutions
                for modern workplaces.
              </p>
            </div>

            {/* CTA & Scroll Guide */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  isGalvanic
                    ? "bg-[#90db2d] hover:bg-[#a2f038] text-black font-bold shadow-[0_0_20px_rgba(144,219,45,0.4)]"
                    : "bg-foreground hover:bg-foreground/90 text-white font-semibold"
                }`}
              >
                <span>View My Work</span>
                <ArrowRightIcon size={14} weight="bold" />
              </a>

              <a
                href="#projects"
                className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  isGalvanic
                    ? "text-slate-400 hover:text-[#90db2d]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <span>Scroll to explore</span>
                <ArrowDownIcon size={13} weight="bold" />
              </a>
            </div>
          </Card>
        </motion.div>

        {/* 2. TOP-CENTER: KINETIC DEVELOPER CORE (col-span-4, row-span-2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 lg:row-span-2 flex flex-col justify-center"
        >
          <div className="w-full h-full flex items-center justify-center">
            <DeveloperCore />
          </div>
        </motion.div>

        {/* 3. TOP-RIGHT: ABOUT ME CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col"
        >
          <Card className="flex-1 p-6 sm:p-7 min-h-80 flex flex-col justify-baseline">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="glass-badge p-2">
                <UserIcon
                  size={18}
                  weight="fill"
                  className={isGalvanic ? "text-[#90db2d]" : "text-indigo-800"}
                />
              </span>
              <h2 className="text-base font-bold text-slate-900">About Me</h2>
            </div>

            {/* Split Content: Text on left, Portrait on right */}
            <div className="mt-4 grid grid-cols-12 gap-3 items-center">
              {/* Left Column: Bio & Items */}
              <div className="col-span-7 sm:col-span-8 flex flex-col gap-2.5">
                <p className={`text-sm leading-relaxed ${
                  isGalvanic ? "text-slate-300" : "text-slate-500"
                }`}>
                  A curious developer from Jaunpur, UP currently in Goa. I enjoy
                  building interfaces, exploring new tech and turning complex
                  problems into simple solutions.
                </p>

                <div className="flex flex-col gap-2">
                  {infoItems.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="glass-badge p-1.5">
                          <IconComp
                            size={16}
                            weight="fill"
                            className={`shrink-0 ${
                              isGalvanic ? "text-[#90db2d]" : "text-indigo-800"
                            }`}
                          />
                        </span>
                        <span className={`text-xs sm:text-balance font-medium truncate ${
                          isGalvanic ? "text-slate-200" : "text-slate-600"
                        }`}>
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Portrait Photo with Available Badge */}
              <div className="col-span-5 sm:col-span-4 flex justify-center">
                <div className="relative w-full max-w-28 aspect-3/4 rounded-2xl overflow-visible shadow-md">
                  <img
                    src={profileImg}
                    alt="Nilesh Gautam"
                    className="w-full h-full object-cover rounded-2xl border border-slate-200/80"
                  />
                  {/* Floating Available Badge */}
                  <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold shadow-md whitespace-nowrap border ${
                    isGalvanic
                      ? "bg-[#0c140c]/95 text-slate-200 border-[#90db2d]/30"
                      : "bg-white text-slate-800 border-slate-100"
                  }`}>
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ============================================================ */}
        {/* ROW 2 MIDDLE SECTION */}
        {/* ============================================================ */}

        {/* 4. MID-LEFT: SOME NUMBERS CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col"
        >
          <Card className="p-6 sm:p-7 flex flex-col justify-between min-h-44">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="glass-badge p-2">
                <ChartBarIcon
                  size={18}
                  weight="fill"
                  className={isGalvanic ? "text-[#90db2d]" : "text-indigo-800"}
                />
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Some Numbers
              </h2>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-4 gap-2 mt-4 pt-1">
              {numbers.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left not-first:border-l-2 px-2 ${
                    isGalvanic ? "border-[#90db2d]/20" : "border-bg"
                  }`}
                >
                  <span
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isGalvanic ? stat.darkColor : stat.color
                    }`}
                  >
                    {stat.val}
                  </span>
                  <span className={`text-xs font-medium mt-1 leading-tight text-nowrap ${
                    isGalvanic ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 5. MID-RIGHT: TECH STACK CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="lg:col-span-4 flex flex-col"
        >
          <Card className="p-6 sm:p-7 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="glass-badge p-2">
                  <LightningIcon
                    size={18}
                    weight="fill"
                    className={isGalvanic ? "text-[#90db2d]" : "text-indigo-800"}
                  />
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Tech Stack
                </h2>
              </div>

              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                isGalvanic
                  ? "bg-[#90db2d]/10 text-[#d9f99d] border-[#90db2d]/30"
                  : "bg-purple-50 text-purple-600 border-purple-100/80"
              }`}>
                Always learning...
              </span>
            </div>

            {/* Tech Badges Grid */}
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="tech-badge cursor-default">
                    <IconComponent className="size-3.5 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* ============================================================ */}
        {/* ROW 3 BOTTOM SECTION */}
        {/* ============================================================ */}

        <div className="w-full col-span-12 grid grid-cols-1 lg:grid-cols-14 gap-4">
          {/* 6. BOTTOM-LEFT: FEATURED PROJECT (col-span-6) */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col"
          >
            <Card className="group flex-1 p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
              {/* Top Row: Badge & Link */}
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                  isGalvanic
                    ? "bg-amber-400/10 text-amber-300 border-amber-400/30"
                    : "bg-amber-50/80 text-amber-700 border-amber-200/50"
                }`}>
                  <StarIcon
                    size={13}
                    weight="fill"
                    className={isGalvanic ? "text-amber-400" : "text-amber-500"}
                  />
                  <span>Featured Project</span>
                </span>

                <a
                  href="https://github.com/No1nilesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors ${
                    isGalvanic
                      ? "text-slate-300 hover:text-[#90db2d]"
                      : "text-slate-500 hover:text-primary"
                  }`}
                >
                  <span>View Project</span>
                  <ArrowUpRightIcon size={14} weight="bold" />
                </a>
              </div>

              {/* Content & Dashboard Mockup Split */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Left Column: Project Info */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      FitnessFlex 2.0
                    </h2>
                    <p className={`text-sm font-semibold mt-0.5 ${
                      isGalvanic ? "text-[#90db2d]" : "text-slate-700"
                    }`}>
                      Gym Management Platform
                    </p>
                    <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      isGalvanic ? "text-slate-300" : "text-slate-500"
                    }`}>
                      A complete gym management solution with real-time features
                      including live classes, member management, and more.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {fitnessTags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                          isGalvanic
                            ? "bg-[#0c140c] text-slate-200 border-[#90db2d]/25"
                            : "bg-slate-100 text-slate-600 border-slate-200/60"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="md:col-span-6 flex justify-center pt-2 md:pt-0">
                  <FitnessFlexMockup />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 7. BOTTOM-MIDDLE: EXPERIENCE TIMELINE (col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="lg:col-span-4 flex flex-col"
          >
            <Card className="flex-1 p-6 sm:p-7 flex flex-col justify-baseline">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="glass-badge p-2">
                    <BriefcaseIcon
                      size={18}
                      weight="fill"
                      className={isGalvanic ? "text-[#90db2d]" : "text-indigo-800"}
                    />
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    Experience
                  </h2>
                </div>

                <a
                  href="https://www.linkedin.com/in/nilesh-gautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                    isGalvanic
                      ? "text-slate-300 hover:text-[#90db2d]"
                      : "text-slate-400 hover:text-primary"
                  }`}
                >
                  <span>View Full</span>
                  <ArrowRightIcon size={11} weight="bold" />
                </a>
              </div>

              {/* Timeline */}
              <div className={`mt-5 pl-2.5 space-y-4 relative before:absolute before:left-4.25 before:top-2 before:bottom-2 before:w-0.5 ${
                isGalvanic ? "before:bg-[#90db2d]/20" : "before:bg-slate-100"
              }`}>
                {/* Timeline Item 1 */}
                <div className="relative flex items-start gap-3">
                  <span className={`size-3.5 rounded-full shrink-0 mt-0.5 z-10 ${
                    isGalvanic
                      ? "bg-[#90db2d] ring-4 ring-[#90db2d]/20"
                      : "bg-primary ring-4 ring-purple-100"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        Frontend Developer
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        2025 - Present
                      </span>
                    </div>
                    <p className={`text-[11px] font-semibold mt-0.5 ${
                      isGalvanic ? "text-[#90db2d]" : "text-slate-600"
                    }`}>
                      Spintly India Private Limited
                    </p>
                    <p className={`text-[11px] leading-normal mt-1 ${
                      isGalvanic ? "text-slate-300" : "text-slate-500"
                    }`}>
                      Building and maintaining the Spintly Smart Access app.
                      Working with React, MUI and modern web technologies.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-start gap-3">
                  <span className={`size-3.5 rounded-full shrink-0 mt-0.5 z-10 ${
                    isGalvanic
                      ? "bg-[#90db2d]/70 ring-4 ring-[#90db2d]/15"
                      : "bg-primary/60 ring-4 ring-sky-100"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        BCA Graduate
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        2021 - 2024
                      </span>
                    </div>
                    <p className={`text-[11px] font-semibold mt-0.5 ${
                      isGalvanic ? "text-[#90db2d]" : "text-slate-600"
                    }`}>
                      MES College, Goa
                    </p>
                    <p className={`text-[11px] leading-normal mt-1 ${
                      isGalvanic ? "text-slate-300" : "text-slate-500"
                    }`}>
                      Built a strong foundation in computer applications and
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 8. BOTTOM-RIGHT: WORK TOGETHER CTA CARD (col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col"
          >
            <Card
              variant="lavender-gradient"
              className="flex-1 p-6 sm:p-7 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div>
                <QuotesIcon
                  size={34}
                  weight="fill"
                  className={`leading-none rotate-180 ${
                    isGalvanic ? "text-[#90db2d]/40" : "text-primary/30"
                  }`}
                />

                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Better interfaces for a simpler world.
                </h2>
              </div>

              {/* CTA Button & Social Icons */}
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:gautamnilesh03@gmail.com"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${
                    isGalvanic
                      ? "bg-[#90db2d] hover:bg-[#a2f038] text-black font-bold shadow-[0_0_20px_rgba(144,219,45,0.4)]"
                      : "bg-foreground hover:bg-foreground-muted text-white font-semibold"
                  }`}
                >
                  <span>Let's Work Together</span>
                  <ArrowRightIcon size={13} weight="bold" />
                </a>

                {/* Social icons row */}
                <div className={`flex items-center justify-center gap-4 pt-1 ${
                  isGalvanic ? "text-slate-300" : "text-slate-600"
                }`}>
                  <a
                    href="https://github.com/No1nilesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors p-1 ${
                      isGalvanic ? "hover:text-[#90db2d]" : "hover:text-slate-950"
                    }`}
                    title="GitHub"
                  >
                    <Icons.Github className="size-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nilesh-gautam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors p-1 ${
                      isGalvanic ? "hover:text-blue-400" : "hover:text-blue-600"
                    }`}
                    title="LinkedIn"
                  >
                    <Icons.LinkedIn className="size-6" />
                  </a>
                  <a
                    href="mailto:gautamnilesh03@gmail.com"
                    className={`transition-colors p-1 ${
                      isGalvanic ? "hover:text-red-400" : "hover:text-red-500"
                    }`}
                    title="Email"
                  >
                    <Icons.Gmail className="size-6" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
