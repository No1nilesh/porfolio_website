import  { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import img from '../../src/assets/space.jpg'
import moonimg from '../../src/assets/earthh.jpg'
import earthtexture from '../../src/assets/earthbump.jpg'

const ThreeScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.autoClear = false;

  

    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Sunlight
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper , gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update(); // Call update once to set initial camera position

    controls.enableZoom = false;
    // controls.enableRotate =false
controls.autoRotate = false;
    camera.position.z = 7;

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
  
      camera.aspect = newWidth / newHeight;

      if(newWidth < 550){
        camera.position.z = 8
        earthmesh.position.y = -5
      }else if(newWidth < 450){
        camera.position.z = 7
        earthmesh.position.y = -5
      } else{
        camera.position.z = 7
        earthmesh.position.y = 0
      }
 

      camera.updateProjectionMatrix();
  
      renderer.setSize(newWidth , newHeight);

  });
  

    // Generate stars
    // function addStar() {
    //   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    //   const material = new THREE.MeshStandardMaterial({color: 0xFF6347})
    //   const star = new THREE.Mesh(geometry, material);
    
    //   const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
    
    //   star.position.set(x,y,z);
    
    //   scene.add(star)
    // }

 
    
    // Array(200).fill().forEach(addStar)

    // const spaceTexture = new THREE.TextureLoader().load(img)
    // scene.background = spaceTexture;
 

    //Avatar

    // const jeffTexture = new THREE.TextureLoader().load(jeffimg);

    // const jeff = new THREE.Mesh(
    //   new THREE.BoxGeometry(3,3,3),
    //   new THREE.MeshBasicMaterial({map: jeffTexture})
    // );

    // scene.add(jeff);

    //Moon 

    const earthImg = new THREE.TextureLoader().load(moonimg);
    const earthTexture = new THREE.TextureLoader().load(earthtexture);

    const earthgeometry = new THREE.SphereGeometry(3.2, 32, 32)
  

    const eatrhmaterial = new THREE.MeshPhongMaterial({
      roughness : 1,
      metalness:0,
      map: earthImg,
      bumpMap: earthTexture,
      bumpScale: 0.5,
  });

  const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);
    
    // moon.position.y = -4
    scene.add(earthmesh)
    // moon.position.setX(3)


// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   moon.rotation.x += 0.05;
//   moon.rotation.y += 0.075;
//   moon.rotation.z += 0.05;

//   jeff.rotation.y += 0.01;
//   jeff.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();
   

   
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the torus
      // torus.rotation.x += 0.01;
      // torus.rotation.y += 0.005;
      // torus.rotation.z += 0.01;

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
      // scene.remove(torus);
      // Array(200).forEach(star => scene.remove(star));
    };
  }, []);



  return <canvas ref={canvasRef} className='absolute top-0 pointer-events-none sm:pointer-events-auto' />;
};

export default ThreeScene;
