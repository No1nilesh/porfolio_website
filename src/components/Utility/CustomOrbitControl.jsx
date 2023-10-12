import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

const CustomOrbitControls = (props) => {
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;

    if (controls) {
      const domElement = controls.domElement;

      const existingMouseWheel = controls.onMouseWheel;

      // Override the mouseWheel function to add { passive: true }
      controls.onMouseWheel = function (event) {
        existingMouseWheel.call(controls, { ...event, ...{ passive: true } });
      };
    }
  }, []);

  return <OrbitControls ref={controlsRef} {...props} />;
};

export default CustomOrbitControls;
