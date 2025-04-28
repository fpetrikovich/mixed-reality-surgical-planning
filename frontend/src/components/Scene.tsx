import { memo, PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";

export const Scene = memo(({ children }: PropsWithChildren) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
      <OrbitControls />
      <Stats />
    </Canvas>
  );
});
