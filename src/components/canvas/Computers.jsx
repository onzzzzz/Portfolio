"use client"
import { Suspense, useEffect, useState } from "react";
import { Canvas} from '@react-three/fiber';
import { ScrollControls, Sky, useScroll, Float, OrbitControls , Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader';
import { useFrame } from "@react-three/fiber";

import { useLoader } from '@react-three/fiber'



import { useRef , useLayoutEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger);

// export const FLOOR_HEIGHT = 2.3;
//  export const NB_FLOORS = 3;

const EarthCanvas = () => {

  

  const earth = useGLTF('./public/planet/scene.gltf');

  const ref = useRef();
  const tl = useRef();
  

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    

    
  }, []);


  return (
    <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
    <OrbitControls autoRotate="false">
      <ScrollControls pages={3}>
        
            <ambientLight intensity={0.5} /> 
            <primitive ref={ref} object={earth.scene} scale={3}  position={[0.5, -1, -1]}
             dispose={null} />
        
        </ScrollControls>
        </OrbitControls>
      
     </Canvas>   
    
  );
};

// useGLTF.preload("./public/planet/scene.gltf");

export default EarthCanvas;

// const Computers = ({isMobile}) => {
  
//   const computer = useGLTF('./desktop_pc/scene.gltf')

//   const container = useRef();
//   const box = useRef();

//   useGSAP(() => {
    
//     gsap.timeline({
//       scrollTrigger: {
//         scrub: 1,
//         trigger: container,
//         start: "top 60%",
//         end: "bottom 30%",
//         markers: true,
//       },
//     });
    


//   },
//   { scope: container }
// );

//   return (
//     <group
//       ref={container}
      
//     >
//     <mesh
      
//       ref={box}
//       position={[5,-80,-50] }
//       castShadow
//       receiveShadow
//     >
//       <hemisphereLight intensity={15} groundColor="white"/>
//       {/* <pointLight intensity={6}/> */}
//       <spotLight
//       position={ [ 0 , 10 , -3]}
//       angle={0} 
//       penumbra={1}
//       intensity={5}
//       castShadow
//       shadow-mapSize={1024}
//       />
//       <primitive 
        
//         object={computer.scene}
//         scale={ 1}
        
//         // position-x={5}
//         // position-y={-80}
//         // position={isMobile ? [0, 0, 0] : [0,0,0] }
//         // rotation={[0,-1,-1 ]}
//         // position-x={5}
//         // position-y={-80}
//         // position-z={-50}
//         rotation-y={0}
//         rotation-x={0}
//         opacity={false}
        

//       />
//     </mesh>
//     </group>
//   )
// }

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 500px)');

//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     }
//     mediaQuery.addEventListener('change', handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     }
//   }, [])

// return (
//     <Canvas
//     shadows
//     // frameloop="demand"
//     camera={{ 
//       fov: 35,
//       near: 0.1,
//       far: 200,
//       position: [0, -20, 90]
//     }}
//     // camera={{ positon: [20, -3 , -5], fov: 5 }}
//     gl={{preserveDrawingBuffer: true }}
    
//     >

//     <Float
//           speed={1.5}
//           rotationIntensity={1}
//           floatIntensity={1}
//           floatingRange={[-0.1, 0.1]}
//     >
//        <Computers isMobile={isMobile} />
//     </Float>
    
//     {/* <Suspense fallback={<CanvasLoader />} >
//       <OrbitControls
//       autoRotate="false"
//       enableZoom={false}
//       maxPolarAngle={Math.PI / 2}
//       minPolarAngle={Math.PI / 4}
      

//       />
//       <Computers isMobile={isMobile} />

//     </Suspense> */}

//     <Preload all />

//     </Canvas>
//   )
// }

// export default ComputersCanvas;