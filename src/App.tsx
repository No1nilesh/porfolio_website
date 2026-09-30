import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { GalvanicProvider, useGalvanic } from "./Context/GalvanicContext";
import GalvanicBackground from "./Components/GalvanicBackground";

function AppContent() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="relative flex min-h-svh w-full flex-col bg-bg text-text transition-colors duration-700">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <GalvanicBackground active={isGalvanic} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1920px] flex-1 flex-col p-4">
        <main className="w-full flex-1">
          <Home />
        </main>

        <Footer className="mt-2" />
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
