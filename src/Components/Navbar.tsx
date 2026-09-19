import { Icons } from "./Icons/Icons";

export default function Navbar() {
  return (
    <header className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <span className="text-base sm:text-lg font-bold tracking-wider text-[#1e2030] uppercase">
          Nilesh Gautam
        </span>
        <span className="size-1.5 rounded-full bg-primary/70" />
        <span className="text-xs sm:text-sm font-medium text-text-muted">
          Frontend Developer
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <a
          href="https://github.com/No1nilesh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs sm:text-sm font-medium border border-border shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icons.Github className="size-4" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nilesh-gautam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs sm:text-sm font-medium border border-border shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icons.LinkedIn className="size-4" />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:gautamnilesh03@gmail.com"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs sm:text-sm font-medium border border-border shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icons.Gmail className="size-4" />
          <span>Let's Talk</span>
        </a>
      </div>
    </header>
  );
}
