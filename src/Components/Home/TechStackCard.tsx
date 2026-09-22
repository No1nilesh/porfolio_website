import Card from "../Card";
import CardHeader from "./CardHeader";
import { Icons } from "../Icons/Icons";
import { LightningIcon } from "@phosphor-icons/react";

const techStack = [
  { name: "React", icon: Icons.React },
  { name: "Next.js", icon: Icons.NextJs },
  { name: "TypeScript", icon: Icons.TypeScript },
  { name: "Node.js", icon: Icons.NodeJs },
  { name: "Tailwind CSS", icon: Icons.Tailwind },
  { name: "MongoDB", icon: Icons.MongoDB },
];

export default function TechStackCard() {
  return (
    <Card className="h-full flex flex-col justify-between p-4 sm:p-5 lg:p-5.5">
      <CardHeader
        icon={LightningIcon}
        title="Tech Stack"
        action={
          <span className="glass-badge !py-0.5 !px-2 text-[10px] sm:text-[11px] font-semibold text-primary">
            Always learning...
          </span>
        }
      />

      {/* Tech Badges Grid */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div key={tech.name} className="tech-badge !py-1 !px-2.5 cursor-default">
              <IconComponent className="size-3.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-inherit">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
