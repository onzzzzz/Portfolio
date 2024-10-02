// import { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas} from '@react-three/fiber';
// import { Float, OrbitControls , Preload, useGLTF} from "@react-three/drei";
// import CanvasLoader from '../Loader';


// import * as THREE from 'three';


// // import { useRef } from 'react';
// // import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // gsap.registerPlugin(useGSAP,ScrollTrigger);




// const ComputersCanvas = () => {
  
//   const refContainer2 = useRef(null);
//   useEffect(() => {
//     // === THREE.JS CODE START ===
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // document.body.appendChild( renderer.domElement );
//     // use ref as a mount point of the Three.js scene instead of the document.body
//     refContainer2.current && refContainer2.current.appendChild( renderer.domElement );
//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     camera.position.z = 5;
//     var animate = function () {
//       requestAnimationFrame(animate);
//       // cube.rotation.x += 0.01;
//       // cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };
//     animate();
//   }, []);
//   return (
//     <div ref={refContainer2}></div>

//   );
// }

// export default ComputersCanvas;