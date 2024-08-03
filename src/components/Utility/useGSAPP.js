import { useLayoutEffect, useCallback } from "react";

function useGSAP(animationConfig) {
  const gsapAnimationCallback = useCallback(
    (gsap) => {
      if (!animationConfig) return null;
      return animationConfig.gsapAnimation(gsap);
    },
    [animationConfig]
  );

  useLayoutEffect(() => {
    let animation;

    // Dynamic import for GSAP and ScrollTrigger
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const animationFunction = gsapAnimationCallback(gsap);
        if (animationFunction) {
          animation = animationFunction;

          // Clean up the animation when the component unmounts
          return () => {
            if (animation) {
              animation.kill(); // This stops and removes the animation
            }
          };
        }
      });
    });
  }, []);
}

export default useGSAP;
