import * as THREE from "three";
import { memo, useCallback, Suspense, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";
import { Html } from "@react-three/drei";

interface ModelProps {
  modelPath: string;
  isCompressed?: boolean;
  scale?: number;
}

const Fallback = () => {
  return (
    <Html center>
      <div style={{ color: "white" }}>Loading...</div>
    </Html>
  );
};

const RawModel = ({ modelPath, isCompressed, scale }: ModelProps) => {
  const loaderFunction = useCallback(
    (loader: GLTFLoader) => {
      if (isCompressed) {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(
          "https://www.gstatic.com/draco/v1/decoders/"
        );
        loader.setDRACOLoader(dracoLoader);
      }
    },
    [isCompressed]
  );

  const { scene } = useLoader(GLTFLoader, modelPath, loaderFunction);

  // Bounding box around the model to find its center and move it to the origin
  useEffect(() => {
    const boundingBox = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    const boxCenter = boundingBox.getCenter(center);
    scene.position.sub(boxCenter);
  }, [scene]);

  return <primitive object={scene} scale={scale ?? 1} />;
};

export const Model = memo((props: ModelProps) => (
  <Suspense fallback={<Fallback />}>
    <RawModel {...props} />
  </Suspense>
));
