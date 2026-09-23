import { AnimatePresence, motion } from "motion/react";

import HeroCard from "../Components/Home/HeroCard";
import DeveloperCore from "../Components/DeveloperCore";
import AboutCard from "../Components/Home/AboutCard";
import NumbersCard from "../Components/Home/NumbersCard";
import TechStackCard from "../Components/Home/TechStackCard";
import FeaturedProjectCard from "../Components/Home/FeaturedProjectCard";
import ExperienceCard from "../Components/Home/ExperienceCard";
import ContactCard from "../Components/Home/ContactCard";
import { useState, type Dispatch, type SetStateAction, } from "react";

const TOP_CARDS = [
  {
    id: "hero",
    component: HeroCard,
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4 },
    },
  },
  {
    id: "developer-core",
    component: DeveloperCore,
    className:
      "lg:col-span-4 lg:row-span-2 justify-center",
    animation: {
      initial: { opacity: 0, scale: 0.96 },
      transition: { duration: 0.5, delay: 0.1 },
    },
  },
  {
    id: "about",
    component: AboutCard,
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.15 },
    },
  },
  {
    id: "numbers",
    component: NumbersCard,
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.2 },
    },
  },
  {
    id: "tech-stack",
    component: TechStackCard,
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.25 },
    },
  },
];

const BOTTOM_CARDS = [
  {
    id: "projects",
    component: FeaturedProjectCard,
    className: "lg:col-span-7",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.3 },
    },
  },
  {
    id: "experience",
    component: ExperienceCard,
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.35 },
    },
  },
  {
    id: "contact",
    component: ContactCard,
    className: "lg:col-span-3",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.4 },
    },
  },
];

type ActiveType = 'hero' | 'about' | 'numbers' | 'tech-stack' | 'projects' | 'experience' | 'contact' | null

function CardGrid({ cards, gridClassName, active, setActive }: { cards: typeof TOP_CARDS; gridClassName: string; active: ActiveType; setActive: Dispatch<SetStateAction<ActiveType>>; }) {
  return (
    <div className={gridClassName}>
      {cards.map((card) => {
        const Component = card.component;
        const isActive = active === card.id;
        const anyCardActive = active !== null
        return (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            onClick={() => !anyCardActive && setActive(card.id)}
            id={card.id === "projects" ? "projects" : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            animate={{
              scale: anyCardActive && !isActive ? 0.96 : 1,
              opacity: anyCardActive && !isActive ? 0.45 : 1,
            }}
            className={`${card.className} flex flex-col min-h-0`}
          >
            <Component />
          </motion.div>
        );
      })}

    </div >
  );
}

export default function Home() {
  const [active, setActiveCard] = useState<ActiveType>(null);
  const activeCard = [...BOTTOM_CARDS, ...TOP_CARDS].find(card => card.id === active)

  const ActiveComponent = activeCard?.component
  return (
    <div className="w-full h-full min-h-0 flex flex-col justify-between gap-3">

      {/* TOP SECTION */}
      <CardGrid active={active} setActive={setActiveCard} cards={TOP_CARDS} gridClassName="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 flex-[1.8] min-h-0" />

      {/* BOTTOM SECTION */}
      <CardGrid active={active} setActive={setActiveCard} cards={BOTTOM_CARDS} gridClassName="w-full grid grid-cols-1 lg:grid-cols-14 gap-4 flex-1 min-h-0" />

      <AnimatePresence>
        {activeCard && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-bg/10 backdrop-blur-md">
            <motion.div
              layoutId={`card-container-${active}`}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

