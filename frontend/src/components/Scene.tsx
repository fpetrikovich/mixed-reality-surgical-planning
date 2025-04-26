import * as THREE from 'three';
import { PropsWithChildren, Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from './Model';

/**
 * Canvas: The Canvas component acts like a container for your 3D scene, just like a <canvas> element in HTML.
 * mesh: A 3D object that holds the geometry (shape) and material (appearance). Here, it’s used to create a cube.
 * boxGeometry: A built-in geometry to create a cube shape.
 * meshStandardMaterial: A material that supports basic lighting.
 * useRef: A hook to reference the mesh so we can rotate it using JavaScript.
 * useFrame: A hook from @react-three/fiber that runs on every animation frame, allowing us to rotate the cube continuously.
 * Interactivity: The cube changes its scale and color when clicked or hovered, adding a simple form of user interaction.
 */
const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Rotate the cube on every frame update
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export const Scene = ({ children }: PropsWithChildren) => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
      {/* <Suspense
        fallback={
          <RotatingCube />
        }
        >
          <Model modelPath='../assets/models/FlightHelmet.gltf' isCompressed={true} scale={0.1} position={position} />
        </Suspense> */}
    </Canvas>
  );
};