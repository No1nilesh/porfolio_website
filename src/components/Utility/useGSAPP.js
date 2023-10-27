import { useLayoutEffect } from 'react';

function useGSAP(animationConfig) {
  useLayoutEffect(() => {
    if (!animationConfig) return;

    const { gsapAnimation } = animationConfig;

    let animation;

    // Dynamic import for GSAP and ScrollTrigger
    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Optionally, you can set ScrollTrigger as a global
        // gsap.core.globals("ScrollTrigger", ScrollTrigger);

        animation = gsapAnimation(gsap);

        // Clean up the animation when the component unmounts
        return () => {
          if (animation) {
            animation.kill(); // This stops and removes the animation
          }
        };
      });
    });
  }, []);
}

export default useGSAP;
