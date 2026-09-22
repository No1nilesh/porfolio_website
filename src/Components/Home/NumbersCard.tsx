import Card from "../Card";
import CardHeader from "./CardHeader";
import { ChartBarIcon } from "@phosphor-icons/react";

const numbers = [
  { val: "1+", label: "Years Exp", color: "text-primary" },
  { val: "5+", label: "Projects", color: "text-primary" },
  { val: "1", label: "Team", color: "text-primary" },
  { val: "∞", label: "Learning", color: "text-success" },
];

export default function NumbersCard() {
  return (
    <Card className="h-full flex flex-col justify-between p-4 sm:p-5 lg:p-5.5">
      <CardHeader icon={ChartBarIcon} title="Some Numbers" />

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-4 gap-1.5 mt-2 pt-1 items-center">
        {numbers.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center sm:text-left not-first:border-l not-first:border-border-subtle px-1 sm:px-2"
          >
            <span
              className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${stat.color}`}
            >
              {stat.val}
            </span>
            <span className="text-[10px] sm:text-xs font-medium mt-0.5 leading-tight text-nowrap text-text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
