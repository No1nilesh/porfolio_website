import React from "react";
import { cn } from "../lib/utils";

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

const variantClassMap: Record<CardVariant, string> = {
  default: "card-variant-default",
  lavender: "card-variant-lavender",
  "lavender-gradient": "card-variant-gradient",
  blue: "card-variant-blue",
  peach: "card-variant-peach",
  mint: "card-variant-mint",
  transparent: "card-variant-transparent",
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
        "bento-card relative transition-all duration-300",
        variantClassMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
