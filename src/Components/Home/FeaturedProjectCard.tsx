import Card from "../Card";
import FitnessFlexMockup from "../FitnessFlexMockup";
import { ArrowRightIcon, ArrowUpRightIcon, StarIcon } from "@phosphor-icons/react";
import ExpandedProject from "./Expanded/ExpandedProject";

const fitnessTags = ["Next.js", "Node.js", "Redis", "Socket.io"];

interface FeaturedProjectCardProps {
  onViewFull?: () => void;
  isExpanded?: boolean
}

export default function FeaturedProjectCard({ onViewFull, isExpanded = false }: FeaturedProjectCardProps) {
  if(isExpanded) return <ExpandedProject/>
  return (
    <Card className="group h-full p-4 sm:p-5 lg:p-5.5 flex flex-col justify-between overflow-hidden">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span className="glass-badge py-0.5! px-2.5! text-[11px] font-semibold text-primary">
          <StarIcon size={13} weight="fill" className="text-amber-500" />
          <span>Featured Project</span>
        </span>

        <div className="flex items-center gap-2">
          {onViewFull && (
            <button
              onClick={onViewFull}
              className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <span>View Full</span>
              <ArrowRightIcon size={12} weight="bold" />
            </button>
          )}

          <a
            href="https://github.com/No1nilesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-primary transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRightIcon size={13} weight="bold" />
          </a>
        </div>
      </div>

      {/* Content & Mockup */}
      <div className="mt-2.5 lg:mt-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-center flex-1">
        {/* Project Info */}
        <div className="md:col-span-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-extrabold text-text tracking-tight">
              FitnessFlex 2.0
            </h2>

            <p className="text-xs sm:text-sm font-semibold mt-0.5 text-primary">
              Gym Management Platform
            </p>

            <p className="mt-1.5 text-sm lg:text-base leading-relaxed text-text-muted line-clamp-3">
              A full-stack gym management platform built to handle members,
              classes and real-time interactions, with Redis and Socket.io
              powering live updates across the application.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2 lg:mt-3">
            {fitnessTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border bg-surface text-text-muted border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="md:col-span-6 flex justify-center items-center">
          <FitnessFlexMockup />
        </div>
      </div>
    </Card>
  );
}