import Card from "../Card";
import CardHeader from "./CardHeader";
import profileImg from "../../assets/profile.jpg";
import {
  GraduationCapIcon,
  HeartIcon,
  LaptopIcon,
  MapPinIcon,
  UserIcon,
} from "@phosphor-icons/react";

const infoItems = [
  { icon: MapPinIcon, text: "Vasco, Goa, India" },
  { icon: LaptopIcon, text: "Spintly (Frontend)" },
  { icon: GraduationCapIcon, text: "BCA Graduate" },
  { icon: HeartIcon, text: "Cricket & Tech" },
];

export default function AboutCard() {
  return (
    <Card className="h-full flex flex-col justify-between p-4 sm:p-5 lg:p-5.5">
      <CardHeader icon={UserIcon} title="About Me" />

      {/* Split Content: Text on left, Portrait on right */}
      <div className="mt-2.5 lg:mt-3 grid grid-cols-12 gap-3 items-center flex-1">
        {/* Left Column: Bio & Items */}
        <div className="col-span-7 sm:col-span-8 flex flex-col justify-between h-full gap-2">
          <p className="text-xs sm:text-xs lg:text-sm leading-relaxed text-text-muted">
            A curious developer from Jaunpur, UP currently in Goa. I enjoy
            building interfaces and turning complex problems into simple
            solutions.
          </p>

          <div className="flex flex-col gap-2.5">
            {infoItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
             
                    <IconComp
                      size={18}
                      weight="duotone"
                      className="shrink-0 text-primary"
                    />
           
                  <span className="text-xs font-normal leading-tight truncate text-text-muted/90">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Portrait Photo with Available Badge */}
        <div className="col-span-5 sm:col-span-4 flex justify-center">
          <div className="relative w-full max-w-24 lg:max-w-26 aspect-3/4 rounded-2xl overflow-visible shadow-md">
            <img
              src={profileImg}
              alt="Nilesh Gautam"
              className="w-full h-full object-cover rounded-2xl border border-border"
            />
            {/* Floating Available Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold shadow-md whitespace-nowrap border bg-surface text-text border-border">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
