import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-bg text-foreground flex flex-col justify-between relative overflow-hidden selection:bg-purple-200 selection:text-purple-900">
      {/* Ambient background soft glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

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

export default App;
