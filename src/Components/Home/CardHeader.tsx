import type { ElementType, ReactNode } from "react";

interface CardHeaderProps {
  icon: ElementType;
  title: string;
  action?: ReactNode;
  className?: string;
}

export default function CardHeader({
  icon: Icon,
  title,
  action,
  className = "",
}: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <div className="flex items-center gap-2">

        <Icon size={24} weight="duotone" className="text-primary" />

        <h2 className="text-xs sm:text-sm lg:text-xl font-semibold text-text truncate">
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
