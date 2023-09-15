import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonimg from "../../src/assets/earthh.jpg";
import earthtexture from "../../src/assets/earthbump.jpg";

const ThreeScene = () => {
  // const MAX_POINTS = 500;

  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    //Raycaster
    const raycaster = new THREE.Raycaster();
    //mouse
    const mouse = new THREE.Vector2();
    camera.position.setZ(7)
    renderer.setPixelRatio(2);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // const object = new THREE.Object3D();
    // object.position.set(0, 0, 0);
    // scene.add(object);

    // const geometry = new THREE.BufferGeometry();

    // // attributes
    // const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
    // geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    renderer.autoClear = false;
    renderer.debug.checkShaderErrors = false

    // const target = new THREE.Object3D();
    // target.position.set(0,0,0);

    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Sunlight
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update(); // Call update once to set initial camera position

    controls.enableZoom = false;

    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;

      if (newWidth < 550) {
        camera.position.z = 8;
        earthmesh.position.y = -5;
      } else if (newWidth < 450) {
        camera.position.z = 7;
        earthmesh.position.y = -5;
      } else {
        camera.position.z = 7;
        earthmesh.position.y = 0;
      }

      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });


    const earthImg = new THREE.TextureLoader().load(moonimg);
    const earthTexture = new THREE.TextureLoader().load(earthtexture);

    const earthgeometry = new THREE.SphereGeometry(3.2, 32, 32);

    const eatrhmaterial = new THREE.MeshPhongMaterial({
      roughness: 1,
      metalness: 0,
      map: earthImg,
      bumpMap: earthTexture,
      bumpScale: 0.5,
    });

    const earthmesh = new THREE.Mesh(earthgeometry, eatrhmaterial);

    scene.add(earthmesh);



  document.addEventListener("mousemove", moveEarth);

    // document.addEventListener("mousedown" , document.removeEventListener("mousemove", moveEarth))

    let targetPosition = new THREE.Vector3();

    function moveEarth(event) {
      // Update mouse coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
    
      // Intersect ray with objects in the scene
      // earthmesh.position.z = 0;
      const intersects = raycaster.intersectObjects(scene.children, true);
    
      if (intersects.length > 0) {
        // Assuming the earth object is part of the scene
        const intersection = intersects[0];
        targetPosition.copy(intersection.point);
        targetPosition.z = earthmesh.position.z
        
    // Adjust target position here if needed
    targetPosition.multiplyScalar(0.5); // Example adjustment

    
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if(window.innerWidth > 550){
      earthmesh.position.lerp(targetPosition, 0.05)}

      earthmesh.rotation.y += 0.005;

      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up the scene on unmount
    return () => {
      controls.dispose();
      renderer.dispose();
    
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 pointer-events-none sm:pointer-events-auto"
    />
  );
};

export default ThreeScene;
