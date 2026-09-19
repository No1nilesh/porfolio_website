import React from "react";
import { cn } from "../lib/utils";

type CardVariant = "default" | "lavender" | "lavender-gradient" | "blue" | "peach" | "mint" | "transparent";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
};

const variantStyles: Record<CardVariant, string> = {
  default: "bg-surface border-border",
  lavender: "bg-lavender/50 border-purple-200/60",
  "lavender-gradient": "bg-gradient-to-br from-[#f8f6ff] via-[#f2eeff] to-[#eae4ff] border-purple-200/50 shadow-sm",
  blue: "bg-blue/40 border-sky-100",
  peach: "bg-peach/40 border-orange-100",
  mint: "bg-mint/40 border-emerald-100",
  transparent: "bg-transparent border-none shadow-none",
};

const Card = ({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "bento-card relative",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

