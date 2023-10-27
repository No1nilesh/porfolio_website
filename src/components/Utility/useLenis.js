import { useEffect, useState } from 'react';

function useLenis() {
    const [lenisInstance, setLenisInstance] = useState(null);

setTimeout(
    useEffect(() => {
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
}, [])
     ,2000);
    

    return lenisInstance;
}

export default useLenis;
