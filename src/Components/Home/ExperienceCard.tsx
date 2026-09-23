import Card from "../Card";
import CardHeader from "./CardHeader";
import { ArrowRightIcon, BriefcaseIcon } from "@phosphor-icons/react";

export default function ExperienceCard() {
  return (
    <Card className="h-full p-4 sm:p-5 lg:p-5.5 flex flex-col justify-between">
      <CardHeader
        icon={BriefcaseIcon}
        title="Experience"
        action={
          <a
            href="https://www.linkedin.com/in/nilesh-gautam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-primary transition-colors"
          >
            <span>View Full</span>
            <ArrowRightIcon size={12} weight="bold" />
          </a>
        }
      />

      {/* Timeline */}
      <div className="mt-3 lg:mt-4 pl-2 space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-border-subtle flex-1 flex flex-col justify-around">

        {/* Current Experience */}
        <div className="relative flex items-start gap-2.5">
          <span className="size-3 rounded-full shrink-0 mt-1 z-10 bg-primary ring-4 ring-primary/20" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm lg:text-base font-bold text-text truncate">
                Frontend Developer
              </h4>

              <span className="text-[11px] lg:text-xs text-text-muted font-medium shrink-0">
                2025 – Present
              </span>
            </div>

            <p className="text-xs lg:text-sm font-semibold text-primary truncate mt-0.5">
              Spintly India Private Limited
            </p>

            <p className="text-xs lg:text-sm leading-relaxed mt-1 text-text-muted line-clamp-2">
              Building and improving the Smart Access platform with React,
              focusing on reusable UI, performance and scalable frontend
              architecture.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="relative flex items-start gap-2.5">
          <span className="size-3 rounded-full shrink-0 mt-1 z-10 bg-primary/70 ring-4 ring-primary/10" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm lg:text-base font-bold text-text truncate">
                BCA Graduate
              </h4>

              <span className="text-[11px] lg:text-xs text-text-muted font-medium shrink-0">
                2021 – 2024
              </span>
            </div>

            <p className="text-xs lg:text-sm font-semibold text-primary truncate mt-0.5">
              MES College, Goa
            </p>

            <p className="text-xs lg:text-sm leading-relaxed mt-1 text-text-muted line-clamp-2">
              Built a strong foundation in computer applications, programming
              and software development.
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
}