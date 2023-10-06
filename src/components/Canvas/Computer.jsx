import { Suspense, useRef, useState, useEffect } from 'react';
import useGsap from '../Utility/useGsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import Loader from '../Loader';


function Computer({ isMobile }) {
    const gsap = useGsap();
    const ref = useRef();
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "Circ.easeOut", duration: 2 } });
        isMobile ? tl.fromTo(ref.current.scale,{x:0.4, y:0.4, z:0.4, opacity:0}, { x: 0.7, y: 0.7, z: 0.7, opacity: 1, duration: 1 }) : tl.fromTo(ref.current.scale,{x:0.5, y:0.5, z:0.5}, { x: 0.75, y: 0.75, z: 0.75, opacity: 1, duration: 1 })
       
       

    }, [])


    
   
      

    const computer = useGLTF("src/assets/computerr.gltf")
    return (
        <mesh>
            <hemisphereLight intensity={0.50} groundColor='black' />
            <SpotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
            className="opacity-0"
                ref={ref}
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas = () => {

    const [isMobile, setisMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)")
        setisMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setisMobile(event.matches);
        }
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    }, [])


    return <div className='absolute inset-0'>
        <Canvas
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    </div>
}

export default ComputerCanvas