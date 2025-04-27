import * as THREE from "three";
import { memo, useMemo } from "react";
import { Model } from "./Model";
import { Html } from "@react-three/drei";

export const SceneContext = memo(({ selectedModelLocation }: {selectedModelLocation?: string}) => {
    const modelPosition = useMemo(() => new THREE.Vector3(0, 0, 0),[]); 
    return selectedModelLocation ? (
        <Model modelPath={selectedModelLocation} isCompressed={false} scale={0.1} position={modelPosition} />
    ) : (
        <Html center>
            <div className="text-white">Select a model to begin...</div>
        </Html>
    );
  });