import { Icons } from "./Icons/Icons";

export default function Navbar() {
  return (
    <header className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-inherit">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <span className="brand-text text-base sm:text-lg font-bold tracking-wider uppercase">
          Nilesh Gautam
        </span>
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="text-xs sm:text-sm font-medium text-text-muted">
          Frontend Developer
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
        <a
          href="https://github.com/No1nilesh"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
        >
          <Icons.Github className="size-4" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nilesh-gautam"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
        >
          <Icons.LinkedIn className="size-4" />
          <span>LinkedIn</span>
        </a>

        {/* CTA Button: Primary theme button */}
        <a
          href="mailto:gautamnilesh03@gmail.com"
          className="btn-theme-primary !py-1.5 !px-4 text-xs sm:text-sm cursor-pointer"
        >
          <Icons.Gmail className="size-4" />
          <span>Let's Talk</span>
        </a>
      </div>
    </header>
  );
}
