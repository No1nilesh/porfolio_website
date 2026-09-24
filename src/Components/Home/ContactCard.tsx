import Card from "../Card";
import { Icons } from "../Icons/Icons";
import { ArrowRightIcon, QuotesIcon } from "@phosphor-icons/react";
import ExpandedContact from "./Expanded/ExpandedContact";

interface ContactCardProps {
  onViewFull?: () => void;
  isExpanded: boolean
}

export default function ContactCard({ onViewFull, isExpanded = false }: ContactCardProps) {
  if (isExpanded) return <ExpandedContact />
  return (
    <Card
      variant="lavender-gradient"
      className="h-full p-4 sm:p-5 lg:p-5.5 flex flex-col justify-between"
    >
      {/* Quote Icon & Headline */}
      <div>
        <div className="flex items-center justify-between">
          <QuotesIcon
            size={28}
            weight="fill"
            className="leading-none rotate-180 text-primary/40"
          />
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

        <h2 className="mt-1.5 text-base sm:text-lg lg:text-3xl font-extrabold text-text tracking-tight leading-snug">
          Better interfaces for a simpler world.
        </h2>
      </div>

      {/* CTA Button & Social Icons */}
      <div className="mt-2.5 flex flex-col gap-2.5">
        <a
          href="mailto:gautamnilesh03@gmail.com"
          className="btn-theme-primary py-2! px-3! text-xs font-semibold cursor-pointer w-full text-center"
        >
          <span>Let's Work Together</span>
          <ArrowRightIcon size={12} weight="bold" />
        </a>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-3 pt-0.5 text-text-muted">
          <a
            href="https://github.com/No1nilesh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors p-1 hover:text-text"
            title="GitHub"
          >
            <Icons.Github className="size-4.5 sm:size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nilesh-gautam"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors p-1 hover:text-blue-500"
            title="LinkedIn"
          >
            <Icons.LinkedIn className="size-4.5 sm:size-5" />
          </a>
          <a
            href="mailto:gautamnilesh03@gmail.com"
            className="transition-colors p-1 hover:text-red-500"
            title="Email"
          >
            <Icons.Gmail className="size-4.5 sm:size-5" />
          </a>
        </div>
      </div>
    </Card>
  );
}
