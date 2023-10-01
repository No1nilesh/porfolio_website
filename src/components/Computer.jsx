import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { Loader, OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

function Computer({ isMobile }) {
    const ref = useRef();
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
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={Loader}>
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