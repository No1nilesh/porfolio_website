import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { GalvanicProvider, useGalvanic } from "./Context/GalvanicContext";
import GalvanicBackground from "./Components/GalvanicBackground";

function AppContent() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="h-full min-h-screen w-full flex flex-col justify-between relative overflow-hidden transition-colors duration-700 bg-bg text-text">
      {/* ── GALVANIC MECHAMORPH SVG BACKGROUND ── */}
      <GalvanicBackground active={isGalvanic} />

      {/* Ambient background soft glow orbs (hidden in Galvanic mode) */}
      {!isGalvanic && (
        <>
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Main Content Container: exact full width and padding without max-w constraint */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col p-0 sm:p-4 gap-3 w-full overflow-hidden">
        <main className="flex-1 min-h-0 w-full overflow-hidden flex flex-col">
          <Home />
        </main>
        <div className="shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <GalvanicProvider>
      <AppContent />
    </GalvanicProvider>
  );
}
