import Card from "../Card";
import { ArrowDownIcon, ArrowRightIcon } from "@phosphor-icons/react";
import ExpandedHero from "./Expanded/ExpandedHero";

interface HeroCardProps {
  onViewFull?: () => void;
  isExpanded?: boolean
}

export default function HeroCard({ onViewFull, isExpanded = false }: HeroCardProps) {

  if (isExpanded) return <ExpandedHero />
  return (
    <Card className="h-full flex flex-col justify-between p-4 sm:p-5 lg:p-5.5">
      <div>
        {/* Top Badge & Signal Icon */}
        <div className="flex items-center justify-between">
          <span className="glass-badge text-xs font-semibold text-primary">
            👋 Hey there!
          </span>
          {onViewFull && (
            <button
              onClick={onViewFull}
              className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <span>View Full</span>
              <ArrowRightIcon size={12} weight="bold" />
            </button>
          )}
        </div>

        {/* Headings */}
        <div className="mt-3 lg:mt-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
            I'm Nilesh
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold mt-0.5 text-primary transition-colors">
            Frontend Developer
          </p>
        </div>

        {/* Bio */}
        <p className="mt-2 lg:mt-2.5 text-sm lg:text-base leading-relaxed text-text-muted">
          I'm a frontend developer who enjoys turning complex ideas into simple,
          intuitive interfaces. I work primarily with React, focusing on clean UI,
          performance and maintainable architecture. Currently at Spintly, building
          smart access solutions for modern workplaces.
        </p>
      </div>

      {/* CTA & Scroll Guide */}
      <div className="mt-3 lg:mt-4 flex flex-wrap items-center justify-between gap-2 pt-1">
        <a href="#projects" className="btn-theme-primary py-2! px-4! text-sm">
          <span>View My Work</span>
          <ArrowRightIcon size={14} weight="bold" />
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-primary transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDownIcon size={13} weight="bold" />
        </a>
      </div>
    </Card>
  );
}
