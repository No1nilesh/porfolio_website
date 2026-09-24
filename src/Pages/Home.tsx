import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { XIcon } from "@phosphor-icons/react";

// Standard Grid Cards
import HeroCard from "../Components/Home/HeroCard";
import DeveloperCore from "../Components/DeveloperCore";
import AboutCard from "../Components/Home/AboutCard";
import NumbersCard from "../Components/Home/NumbersCard";
import TechStackCard from "../Components/Home/TechStackCard";
import FeaturedProjectCard from "../Components/Home/FeaturedProjectCard";
import ExperienceCard from "../Components/Home/ExperienceCard";
import ContactCard from "../Components/Home/ContactCard";


type ActiveType =
  | "hero"
  | "developer-core"
  | "about"
  | "numbers"
  | "tech-stack"
  | "projects"
  | "experience"
  | "contact"
  | null;

const TOP_CARDS = [
  {
    id: "hero" as const,
    component: HeroCard,
    title: "About Nilesh",
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4 },
    },
  },
  {
    id: "developer-core" as const,
    component: DeveloperCore,
    title: "Kinetic Developer Core",
    className: "lg:col-span-4 lg:row-span-2 justify-center",
    animation: {
      initial: { opacity: 0, scale: 0.96 },
      transition: { duration: 0.5, delay: 0.1 },
    },
  },
  {
    id: "about" as const,
    component: AboutCard,
    title: "About Me",
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.15 },
    },
  },
  {
    id: "numbers" as const,
    component: NumbersCard,
    title: "Some Numbers",
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.2 },
    },
  },
  {
    id: "tech-stack" as const,
    component: TechStackCard,
    title: "Tech Stack",
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.25 },
    },
  },
];

const BOTTOM_CARDS = [
  {
    id: "projects" as const,
    component: FeaturedProjectCard,
    title: "Featured Project",
    className: "lg:col-span-7",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.3 },
    },
  },
  {
    id: "experience" as const,
    component: ExperienceCard,
    title: "Experience",
    className: "lg:col-span-4",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.35 },
    },
  },
  {
    id: "contact" as const,
    component: ContactCard,
    title: "Work Together",
    className: "lg:col-span-3",
    animation: {
      initial: { opacity: 0, y: 15 },
      transition: { duration: 0.4, delay: 0.4 },
    },
  },
];

const ALL_CARDS = [...TOP_CARDS, ...BOTTOM_CARDS];

function CardGrid({
  cards,
  gridClassName,
  active,
  setActive,
}: {
  cards: typeof TOP_CARDS | typeof BOTTOM_CARDS;
  gridClassName: string;
  active: ActiveType;
  setActive: Dispatch<SetStateAction<ActiveType>>;
}) {
  return (
    <div className={gridClassName}>
      {cards.map((card) => {
        const Component = card.component;
        const isActive = active === card.id;
        const anyCardActive = active !== null;
        return (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            id={card.id}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
            }}
            animate={{
              scale: anyCardActive && !isActive ? 0.75 : 1,
              opacity: anyCardActive && !isActive ? 0.2 : 1,
            }}
            className={`${card.className} flex flex-col min-h-0`}
          >
            <Component isExpanded={false} onViewFull={() => setActive(card.id as ActiveType)} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [active, setActiveCard] = useState<ActiveType>(null);
  const activeCard = ALL_CARDS.find((card) => card.id === active);
  const ActiveExpandedComponent = activeCard?.component;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active !== null) {
        setActiveCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  return (
    <div className="w-full h-full min-h-0 flex flex-col justify-between gap-3 relative">
      {/* TOP SECTION */}
      <CardGrid
        active={active}
        setActive={setActiveCard}
        cards={TOP_CARDS}
        gridClassName="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 flex-[1.8] min-h-0"
      />

      {/* BOTTOM SECTION */}
      <CardGrid
        active={active}
        setActive={setActiveCard}
        cards={BOTTOM_CARDS}
        gridClassName="w-full grid grid-cols-1 lg:grid-cols-14 gap-4 flex-1 min-h-0"
      />

      {/* EXPANDED CARD MODAL VIEW */}
      <AnimatePresence>
        {activeCard && ActiveExpandedComponent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            onClick={() => setActiveCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-md"
          >
            <motion.div
              layoutId={`card-container-${active}`}
              onClick={(e) => e.stopPropagation()}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.8,
              }}
              className="size-full flex flex-col shadow-2xl border border-border overflow-hidden relative"
            >
              {/* Scrollable Expanded Content */}
              <div className="flex-1 min-h-0 overflow-y-auto pr-1 sm:pr-2 pt-4 scrollbar-thin">
                <div className="flex items-center justify-end bg-transparent">
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveCard(null)}
                    className="size-9 text-text-muted hover:text-text flex items-center justify-center transition-all cursor-pointer group"
                    title="Close (Esc)"
                  >
                    <XIcon
                      size={24}
                      className="group-hover:rotate-90 transition-transform duration-200"
                    />
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.25, ease: "easeOut" }}
                >
                  <ActiveExpandedComponent isExpanded={true} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
