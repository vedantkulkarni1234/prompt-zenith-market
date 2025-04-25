
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={0.6}
      floatIntensity={0.6}
    >
      <mesh ref={torusRef} rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[1.5, 0.5, 16, 32]} />
        <meshStandardMaterial 
          color="#9b87f5"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingGeometry />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
