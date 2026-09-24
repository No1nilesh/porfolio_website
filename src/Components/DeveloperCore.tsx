import { motion, AnimatePresence } from "motion/react";
import OmnitrixCore from "./Omnitrix";
import ArcRecator from "./ArcReactor";
import { useGalvanic } from "../Context/GalvanicContext";

export default function DeveloperCore() {
  const { isGalvanic, setGalvanic } = useGalvanic();

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-135 select-none">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          id="real-omnitrix-slot"
          key={isGalvanic ? "om" : "ar"}
          className="w-full flex-1 min-h-0 flex justify-center items-center flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {isGalvanic ? <OmnitrixCore /> : <ArcRecator />}
        </motion.div>
      </AnimatePresence>
      <div className="mt-1.5 shrink-0 flex items-center gap-2">
        <button
          onClick={() => setGalvanic(!isGalvanic)}
          className="glass-badge px-3! py-0.5! text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 text-primary"
        >
          <span>{!isGalvanic ? "[ OMNITRIX MODE ]" : "[ ARC REACTOR ]"}</span>
        </button>
      </div>
    </div>
  );
}
