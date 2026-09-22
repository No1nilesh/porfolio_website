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
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-text-muted hover:text-primary transition-colors"
          >
            <span>View Full</span>
            <ArrowRightIcon size={11} weight="bold" />
          </a>
        }
      />

      {/* Timeline */}
      <div className="mt-2.5 lg:mt-3 pl-2 space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-border-subtle flex-1 flex flex-col justify-around">
        {/* Timeline Item 1 */}
        <div className="relative flex items-start gap-2.5">
          <span className="size-3 rounded-full shrink-0 mt-0.5 z-10 bg-primary ring-4 ring-primary/20" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h4 className="text-xs sm:text-sm font-bold text-text truncate">
                Frontend Developer
              </h4>
              <span className="text-[10px] text-text-muted font-medium shrink-0">
                2025 - Present
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-semibold text-primary truncate">
              Spintly India Private Limited
            </p>
            <p className="text-[10px] sm:text-[11px] leading-tight mt-0.5 text-text-muted line-clamp-2">
              Building and maintaining the Spintly Smart Access app with React.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative flex items-start gap-2.5">
          <span className="size-3 rounded-full shrink-0 mt-0.5 z-10 bg-primary/70 ring-4 ring-primary/10" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h4 className="text-xs sm:text-sm font-bold text-text truncate">
                BCA Graduate
              </h4>
              <span className="text-[10px] text-text-muted font-medium shrink-0">
                2021 - 2024
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-semibold text-primary truncate">
              MES College, Goa
            </p>
            <p className="text-[10px] sm:text-[11px] leading-tight mt-0.5 text-text-muted line-clamp-2">
              Built a strong foundation in computer applications and development.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
