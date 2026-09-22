export default function Footer() {
  return (
    <footer className="w-full mx-auto px-2 pt-1.5 pb-0.5 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-text-muted transition-colors duration-300">
      <p className="flex items-center gap-1.5 text-center sm:text-left">
        <span>© 2026 Nilesh Gautam. Built with React and lots of ☕</span>
      </p>

      <div className="flex items-center gap-2">
        <span className="text-text font-medium">
          Stay curious. Keep building.
        </span>
        <span className="size-2 rounded-full animate-pulse bg-success" />
      </div>
    </footer>
  );
}
