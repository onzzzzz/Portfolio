import { Suspense, useEffect, useState } from "react";
import { Canvas} from '@react-three/fiber';
import { OrbitControls , Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="purple"/>
      <pointLight intensity={3}/>
      <spotLight
      position={ [ 0 , 10 , -3]}
      angle={0.32} 
      penumbra={1}
      intensity={5}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.5}
        position={isMobile ? [0, 0, 0] : [0,0,0] }
        // rotation={[0,-1,-1 ]}
        // position-y={0}
        rotation-y={-5}
        // rotation-x={0.5}s
        

      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas
    shadows
    frameloop="demand"
    camera={{ 
      fov: 25,
      near: 0.1,
      far: 200,
      position: [0, 3, 6]
    }}
    // camera={{ positon: [20, -3 , -5], fov: 5 }}
    gl={{preserveDrawingBuffer: true }}
    
    >
    
    <Suspense fallback={<CanvasLoader />} >
      <OrbitControls
      autoRotate="true"
      enableZoom={false}
      maxPolarAngle={Math.PI / 2 }
      minPolarAngle={Math.PI / 2}
      

      />

      <Computers isMobile={isMobile} />

    </Suspense>

    <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas;