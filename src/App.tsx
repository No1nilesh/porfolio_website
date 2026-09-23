import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { GalvanicProvider, useGalvanic } from "./Context/GalvanicContext";
import GalvanicBackground from "./Components/GalvanicBackground";

function AppContent() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="relative min-h-screen w-full transition-colors duration-700 bg-bg text-text">
      <GalvanicBackground active={isGalvanic} />

      {!isGalvanic && (
        <>
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />
        </>
      )}

      <div className="relative z-10 w-full px-0 sm:p-4">
        <main className="w-full max-w-[1920px] mx-auto">
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
