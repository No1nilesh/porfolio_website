
import { motion, AnimatePresence } from "motion/react";
import OmnitrixCore from "./Omnitrix";
import ArcRecator from "./ArcReactor";
import { useGalvanic } from "../Context/GalvanicContext";



export default function DeveloperCore() {

  const { isGalvanic, setGalvanic } = useGalvanic()

  return (
    <div className="relative flex flex-col items-center w-full h-full min-h-105 py-2 select-none">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          id="real-omnitrix-slot"
          key={isGalvanic ? 'om' : 'ar'}
          className="w-full h-full flex justify-center items-center flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {isGalvanic ?
            <OmnitrixCore />
            : <ArcRecator />
          }
        </motion.div>

      </AnimatePresence>
      <div className="mt-2.5">
        <button
          onClick={() => setGalvanic(!isGalvanic)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 text-emerald-700"
        >
          <span>{!isGalvanic ? '[ OMNITRIX MODE ]' : '[ ARC REACTOR]'}</span>
        </button>
      </div>
    </div>
  );
}
