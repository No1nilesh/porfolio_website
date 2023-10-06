import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
function useLenis() {

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        // Custom scroll event logic goes here
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    useEffect(() => {
        return () => {
            lenis.destroy();
        }
    }, []);

    return lenis;
}

export default useLenis;