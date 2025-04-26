import { memo, useCallback, Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Html } from '@react-three/drei';

interface ModelProps {
  modelPath: string;
  isCompressed?: boolean;
  scale?: number;
  position?: Vector3;
}

const Fallback = () => {
  return (
    <Html center>
      <div style={{ color: 'white' }}>Loading...</div>
    </Html>
  );
};


const RawModel = ({ modelPath, isCompressed, scale, position }: ModelProps) => {
  const loaderFunction = useCallback((loader: GLTFLoader) => {
    if (isCompressed) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  }, [isCompressed]);

  const { scene } = useLoader(GLTFLoader, modelPath, loaderFunction);

  return (
    <primitive 
      object={scene} 
      scale={scale ?? 1} 
      position={[
        position?.x ?? 0,
        position?.y ?? 0,
        position?.z ?? 0
      ]}
    />
  );
};

export const Model = memo((props: ModelProps) => {
  return (
    <Suspense fallback={<Fallback />}>
      <RawModel {...props} />
    </Suspense>
  );
});
