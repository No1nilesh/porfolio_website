import React, { createContext, useContext, useState, useEffect } from "react";

interface GalvanicContextType {
  isGalvanic: boolean;
  setGalvanic: (active: boolean) => void;
  toggleGalvanic: () => void;
}

const GalvanicContext = createContext<GalvanicContextType | undefined>(undefined);

export function GalvanicProvider({ children }: { children: React.ReactNode }) {
  const [isGalvanic, setIsGalvanic] = useState<boolean>(() => {
    try {
      return localStorage.getItem("galvanic_theme") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("galvanic_theme", String(isGalvanic));
    } catch {
      // ignore
    }

    const themeName = isGalvanic ? "galvanic" : "light";
    document.documentElement.setAttribute("data-theme", themeName);
    document.body.setAttribute("data-mode", themeName);
    document.documentElement.classList.toggle("galvanic-mode", isGalvanic);
    document.body.classList.toggle("galvanic-mode", isGalvanic);
  }, [isGalvanic]);

  const toggleGalvanic = () => setIsGalvanic((prev) => !prev);
  const setGalvanic = (active: boolean) => setIsGalvanic(active);

  return (
    <GalvanicContext.Provider value={{ isGalvanic, setGalvanic, toggleGalvanic }}>
      {children}
    </GalvanicContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGalvanic(): GalvanicContextType {
  const context = useContext(GalvanicContext);
  if (!context) {
    throw new Error("useGalvanic must be used within a GalvanicProvider");
  }
  return context;
}
