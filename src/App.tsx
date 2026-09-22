import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { GalvanicProvider, useGalvanic } from "./Context/GalvanicContext";
import GalvanicBackground from "./Components/GalvanicBackground";

function AppContent() {
  const { isGalvanic } = useGalvanic();

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-between relative overflow-hidden transition-colors duration-700 ${
        isGalvanic
          ? "galvanic-mode bg-[#000000] text-slate-100 selection:bg-[#90db2d] selection:text-black"
          : "bg-bg text-foreground selection:bg-purple-200 selection:text-purple-900"
      }`}
    >
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

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col p-0 sm:p-4 gap-4">
        <Navbar />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
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
