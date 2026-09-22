import { Icons } from "./Icons/Icons";
import { useGalvanic } from "../Context/GalvanicContext";

export default function Navbar() {
  const { isGalvanic } = useGalvanic();

  return (
    <header className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <span
          className={`text-base sm:text-lg font-bold tracking-wider uppercase transition-colors duration-500 ${
            isGalvanic
              ? "text-[#90db2d] drop-shadow-[0_0_8px_rgba(144,219,45,0.5)]"
              : "text-[#1e2030]"
          }`}
        >
          Nilesh Gautam
        </span>
        <span
          className={`size-1.5 rounded-full transition-colors duration-500 ${
            isGalvanic ? "bg-[#90db2d]" : "bg-primary/70"
          }`}
        />
        <span
          className={`text-xs sm:text-sm font-medium transition-colors duration-500 ${
            isGalvanic ? "text-slate-300" : "text-text-muted"
          }`}
        >
          Frontend Developer
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
        <a
          href="https://github.com/No1nilesh"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ${
            isGalvanic
              ? "bg-[#0c120c]/90 hover:bg-[#121c12] text-slate-200 border-[#90db2d]/30 hover:border-[#90db2d]/60"
              : "bg-white/90 hover:bg-white text-slate-800 border-border"
          }`}
        >
          <Icons.Github className="size-4" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nilesh-gautam"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ${
            isGalvanic
              ? "bg-[#0c120c]/90 hover:bg-[#121c12] text-slate-200 border-[#90db2d]/30 hover:border-[#90db2d]/60"
              : "bg-white/90 hover:bg-white text-slate-800 border-border"
          }`}
        >
          <Icons.LinkedIn className="size-4" />
          <span>LinkedIn</span>
        </a>

        {/* CTA Button: Line strip color (#90db2d) in Omnitrix / Dark mode */}
        <a
          href="mailto:gautamnilesh03@gmail.com"
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
            isGalvanic
              ? "bg-[#90db2d] hover:bg-[#a2f038] text-black font-bold shadow-[0_0_15px_rgba(144,219,45,0.4)]"
              : "bg-white/90 hover:bg-white text-slate-800 font-medium border border-border"
          }`}
        >
          <Icons.Gmail className="size-4" />
          <span>Let's Talk</span>
        </a>
      </div>
    </header>
  );
}
