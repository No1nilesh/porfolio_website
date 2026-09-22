import { motion } from "motion/react";
import HeroCard from "../Components/Home/HeroCard";
import DeveloperCore from "../Components/DeveloperCore";
import AboutCard from "../Components/Home/AboutCard";
import NumbersCard from "../Components/Home/NumbersCard";
import TechStackCard from "../Components/Home/TechStackCard";
import FeaturedProjectCard from "../Components/Home/FeaturedProjectCard";
import ExperienceCard from "../Components/Home/ExperienceCard";
import ContactCard from "../Components/Home/ContactCard";

export default function Home() {
  return (
    <div className="w-full h-full min-h-0 flex flex-col justify-between gap-3">
      {/* ============================================================ */}
      {/* ROW 1 & 2 TOP SECTION (12 COLS - EXACT ORIGINAL WIDTHS) */}
      {/* ============================================================ */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 flex-[1.8] min-h-0">
        {/* 1. TOP-LEFT: HERO CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 flex flex-col min-h-0"
        >
          <HeroCard />
        </motion.div>

        {/* 2. TOP-CENTER: KINETIC DEVELOPER CORE (col-span-4, row-span-2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 lg:row-span-2 flex flex-col justify-center min-h-0"
        >
          <DeveloperCore />
        </motion.div>

        {/* 3. TOP-RIGHT: ABOUT ME CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col min-h-0"
        >
          <AboutCard />
        </motion.div>

        {/* 4. MID-LEFT: SOME NUMBERS CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col min-h-0"
        >
          <NumbersCard />
        </motion.div>

        {/* 5. MID-RIGHT: TECH STACK CARD (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="lg:col-span-4 flex flex-col min-h-0"
        >
          <TechStackCard />
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* ROW 3 BOTTOM SECTION (14 COLS - EXACT ORIGINAL WIDTHS) */}
      {/* ============================================================ */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-14 gap-4 flex-1 min-h-0">
        {/* 6. BOTTOM-LEFT: FEATURED PROJECT (col-span-7) */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-7 flex flex-col min-h-0"
        >
          <FeaturedProjectCard />
        </motion.div>

        {/* 7. BOTTOM-MIDDLE: EXPERIENCE TIMELINE (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="lg:col-span-4 flex flex-col min-h-0"
        >
          <ExperienceCard />
        </motion.div>

        {/* 8. BOTTOM-RIGHT: WORK TOGETHER CTA CARD (col-span-3) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col min-h-0"
        >
          <ContactCard />
        </motion.div>
      </div>
    </div>
  );
}
