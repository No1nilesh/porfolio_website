import { useGalvanic } from "../Context/GalvanicContext";

export default function Footer() {
  const { isGalvanic } = useGalvanic();

  return (
    <footer
      className={`w-full mx-auto px-4 pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm transition-colors duration-300 ${
        isGalvanic ? "text-slate-400" : "text-text-muted"
      }`}
    >
      <p className="flex items-center gap-1.5 text-center sm:text-left">
        <span>© 2026 Nilesh Gautam. Built with React and lots of ☕</span>
      </p>

      <div className="flex items-center gap-2">
        <span className={isGalvanic ? "text-slate-300 font-medium" : ""}>
          Stay curious. Keep building.
        </span>
        <span
          className={`size-2 rounded-full animate-pulse ${
            isGalvanic ? "bg-[#90db2d]" : "bg-emerald-500"
          }`}
        />
      </div>
    </footer>
  );
}
