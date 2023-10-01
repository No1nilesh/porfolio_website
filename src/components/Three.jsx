import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import sprite from "../assets/sprite1.png";
const ThreeScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let isMouseDown = false;
    document.addEventListener("mousedown", () => {
      isMouseDown = true;
      console.log("mouse down");
    });
    document.addEventListener("mouseup", () => {
      isMouseDown = false;
      console.log("mouseup");
    });

    let targetPosition = new THREE.Vector3();
    //CREATING SCENE
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    //RAYCASTER
    const raycaster = new THREE.Raycaster();

    //MOUSE
    const mouse = new THREE.Vector2();
    camera.position.set(20, 3, 5);

    renderer.setPixelRatio(2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.debug.checkShaderErrors = false;


    const light = new THREE.HemisphereLight(0xffffff, 0x080820, 0.50);
    light.position.set(0, 20, 0);
    scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-2, 4, 5);


    scene.add(pointLight);
    const spotLight = new THREE.SpotLight(0xffffff, 100);
    spotLight.position.set(10, 40, -2);
    spotLight.angle = 0.12;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 0;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.focus = 1;
    scene.add(spotLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 18;

    // controls.enableZoom = false;
    controls.update(); // Call update once to set initial camera position

    // RESIZE
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      console.log("resize");
    };

    window.addEventListener("resize", resize);

    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
    loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
      // resource URL
      "src/assets/computerr.gltf",
      // called when the resource is loaded
      function (gltf) {
        const model = scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
        model.position.set(0, -3.25, -1.5);
        model.rotation.set(-0.01, -0.2, -0.1);
        model.scale.set(0.75, 0.75, 0.75);
        model.receiveShadow = true;
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened" + error);
      }
    );

    // Add the text mesh to

    document.addEventListener("mousemove", moveEarth);

    function moveEarth(event) {
      // Update mouse coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);

      // Intersect ray with objects in the scene
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        // Assuming the earth object is part of the scene
        const intersection = intersects[0];
        targetPosition.copy(intersection.point);
      }
    }

    //PARTICLES
    const Bgeometry = new THREE.BufferGeometry();
    const vertices = [];
    const materials = [];
    let parameters;
    for (let i = 0; i < 350; i++) {
      const x = Math.random() * 60 - 30;
      const y = Math.random() * 60 - 30;
      const z = Math.random() * 60 - 30;
      vertices.push(x, y, z);
    }
    Bgeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const textureLoader = new THREE.TextureLoader();

    const sprite1 = textureLoader.load(sprite);
    parameters = [
      [[0.3, 0.7, 0.9], sprite1, 0.3],
      [[0.3, 0.3, 0.8], sprite1, 0.3],
    ];
    for (let i = 0; i < parameters.length; i++) {
      const color = parameters[i][0];
      const sprite = parameters[i][1];
      const size = parameters[i][2];
      materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.35,
      });
      materials[i].color.setRGB(color[0], color[1], color[2]);
      var particles = new THREE.Points(Bgeometry, materials[i]);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      // scene.add(particles);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // ico.rotation.y += 0.005;
      // if (!isMouseDown) {
      //   camera.position.x += (-mouse.x * 0.5 - camera.position.x) * 0.05;
      //   camera.position.y += (mouse.y * 0.1 - camera.position.y) * 0.05;
      // }

      controls.update();
      // console.log(camera.position)
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

  return <canvas ref={canvasRef} className="absolute top-0 " />;
};

export default ThreeScene;
