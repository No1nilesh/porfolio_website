import React from "react";
import { cn } from "../lib/utils";
import { useGalvanic } from "../Context/GalvanicContext";

type CardVariant =
  | "default"
  | "lavender"
  | "lavender-gradient"
  | "blue"
  | "peach"
  | "mint"
  | "transparent";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
};

const lightVariantStyles: Record<CardVariant, string> = {
  default: "bg-surface border-border",
  lavender: "bg-lavender/50 border-purple-200/60",
  "lavender-gradient":
    "bg-gradient-to-br from-[#f8f6ff] via-[#f2eeff] to-[#eae4ff] border-purple-200/50 shadow-sm",
  blue: "bg-blue/40 border-sky-100",
  peach: "bg-peach/40 border-orange-100",
  mint: "bg-mint/40 border-emerald-100",
  transparent: "bg-transparent border-none shadow-none",
};

const darkVariantStyles: Record<CardVariant, string> = {
  default:
    "bg-[#090e09]/85 backdrop-blur-md border-[#90db2d]/20 text-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.85)] hover:border-[#90db2d]/50",
  lavender:
    "bg-[#0c130c]/85 backdrop-blur-md border-[#90db2d]/25 text-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.85)] hover:border-[#90db2d]/50",
  "lavender-gradient":
    "bg-gradient-to-br from-[#0e160e]/90 via-[#090f09]/90 to-[#030603]/90 border-[#90db2d]/30 text-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.85)] hover:border-[#90db2d]/55",
  blue: "bg-[#090e09]/85 backdrop-blur-md border-[#90db2d]/20 text-slate-100 hover:border-[#90db2d]/50",
  peach: "bg-[#090e09]/85 backdrop-blur-md border-[#90db2d]/20 text-slate-100 hover:border-[#90db2d]/50",
  mint: "bg-[#090e09]/85 backdrop-blur-md border-[#90db2d]/20 text-slate-100 hover:border-[#90db2d]/50",
  transparent: "bg-transparent border-none shadow-none text-slate-100",
};

const Card = ({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) => {
  const { isGalvanic } = useGalvanic();
  const activeStyles = isGalvanic ? darkVariantStyles[variant] : lightVariantStyles[variant];

  return (
    <div
      className={cn(
        "bento-card relative transition-all duration-500",
        activeStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
