import { ArrowRightIcon } from "@phosphor-icons/react";
import { useGalvanic } from "../Context/GalvanicContext";

export default function FitnessFlexMockup() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="relative w-full max-w-90 h-52.5 select-none">
      {/* Skewed/Tilted Dashboard Screen Container */}
      <div className="relative w-full h-full rounded-2xl bg-[#0e0f19] border border-[#23263b] shadow-2xl overflow-hidden p-3 flex flex-col justify-between transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              FitnessFlex
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Dashboard Body Grid */}
        <div className="grid grid-cols-12 gap-2 my-auto">
          {/* Left Mini Sidebar */}
          <div className="col-span-3 flex flex-col gap-1.5 border-r border-white/5 pr-1.5">
            <div className="h-2 w-full rounded bg-primary/40" />
            <div className="h-1.5 w-3/4 rounded bg-white/10" />
            <div className="h-1.5 w-4/5 rounded bg-white/10" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
            <div className="h-1.5 w-3/4 rounded bg-white/10 mt-2" />
          </div>

          {/* Right Chart & Metrics Area */}
          <div className="col-span-9 flex flex-col gap-2 pl-1">
            {/* Metric widgets */}
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex-1 bg-white/4 p-1.5 rounded-lg border border-white/5">
                <p className="text-[8px] text-white/40">Active Members</p>
                <p className="text-xs font-bold text-white">1,248</p>
              </div>
              <div className="flex-1 bg-white/4 p-1.5 rounded-lg border border-white/5">
                <p className="text-[8px] text-white/40">Live Sessions</p>
                <p className="text-xs font-bold text-emerald-400">18 Live</p>
              </div>
            </div>

            {/* Stylized Purple Bar Chart */}
            <div className="bg-white/2 p-2 rounded-lg border border-white/5 flex items-end justify-between gap-1 h-16">
              {[35, 55, 40, 80, 60, 95, 70, 85, 45, 90, 75, 100, 65, 80, 50].map(
                (val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-xs transition-all duration-300"
                    style={{
                      height: `${val}%`,
                      backgroundColor:
                        idx % 3 === 0
                          ? "#8b5cf6"
                          : idx % 2 === 0
                          ? "#6366f1"
                          : "#a855f7",
                      opacity: 0.85,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Sub-indicator */}
        <div className="flex items-center justify-between text-[8px] text-white/30 border-t border-white/5 pt-1.5">
          <span>Realtime Sync: Active</span>
          <span>Latency: 18ms</span>
        </div>
      </div>

      {/* Circular Floating Arrow Button matching reference */}
      <div
        className={`absolute -bottom-3 -right-2 sm:-right-3 size-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:scale-105 ${
          isGalvanic
            ? "bg-[#90db2d] text-black border border-[#a2f038] shadow-[0_0_15px_rgba(144,219,45,0.4)]"
            : "bg-white text-slate-900 border border-slate-100"
        }`}
      >
        <ArrowRightIcon size={16} weight="bold" />
      </div>
    </div>
  );
}

