import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { GalvanicProvider, useGalvanic } from "./Context/GalvanicContext";
import GalvanicBackground from "./Components/GalvanicBackground";

function AppContent() {
  const { isGalvanic } = useGalvanic();

  return (
    <div className="relative size-full transition-colors duration-700 bg-bg text-text p-4">
      <GalvanicBackground active={isGalvanic} />
      <main className="size-full max-w-[1920px] mx-auto">
        <Home />
      </main>
      <div className="mt-4">
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
