import { useLoader } from '@react-three/fiber';
import { memo } from 'react';
import { Vector3 } from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';

interface ModelProps {
    modelPath: string;
    isCompressed?: boolean;
    scale?: number;
    position?: Vector3; // Make sure to memoise the position prop since objects are reference types
}

export const Model = memo(({modelPath, isCompressed, scale, position}: ModelProps) => {
  const loaderFunction = isCompressed 
  ? ((loader: GLTFLoader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }) 
  : undefined;
  
  // useLoader has an internal cache, so if the model is already loaded, it will not load it again
  const { scene } = useLoader(
    GLTFLoader,
    modelPath,
    loaderFunction
  )

  return <primitive 
    object={scene} 
    scale={scale ?? 1} 
    position={[position?.x ?? 0, position?.y ?? 0, position?.z ?? 0]}
  />;
});

