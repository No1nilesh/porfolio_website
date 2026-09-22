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
  }, [isGalvanic]);

  const toggleGalvanic = () => setIsGalvanic((prev) => !prev);
  const setGalvanic = (active: boolean) => setIsGalvanic(active);

  return (
    <GalvanicContext.Provider value={{ isGalvanic, setGalvanic, toggleGalvanic }}>
      {children}
    </GalvanicContext.Provider>
  );
}

export function useGalvanic(): GalvanicContextType {
  const context = useContext(GalvanicContext);
  if (!context) {
    throw new Error("useGalvanic must be used within a GalvanicProvider");
  }
  return context;
}
