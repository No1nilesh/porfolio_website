import { useEffect, useState, useCallback } from 'react';

function useLenis() {
    const [lenisInstance, setLenisInstance] = useState(null);

    const initializeLenis = useCallback(() => {
        import('@studio-freight/lenis').then(({ default: Lenis }) => {
            const lenis = new Lenis();

            lenis.on('scroll', (e) => {
                // Custom scroll event logic goes here
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            setLenisInstance(lenis);
        });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(initializeLenis, 2000);

        return () => clearTimeout(timeout);
    }, [initializeLenis]);

    return lenisInstance;
}

export default useLenis;
