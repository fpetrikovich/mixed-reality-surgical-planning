import { useMemo, useState } from 'react';
import { Html } from '@react-three/drei';
import { Scene } from './Scene';
import { Model } from './Model';
import * as THREE from 'three';
import { SidePanel } from './SidePanel';

  
const ModelOrPlaceholder = ({ selectedModel }: {selectedModel?: string}) => {
    const modelPosition = useMemo(() => new THREE.Vector3(0, 0, 0),[]); 
    console.log("ModelOrPlaceholder", selectedModel);

    if (selectedModel) {
      return (
        <Model modelPath={selectedModel} isCompressed={false} scale={0.1} position={modelPosition} />
      );
    }
    return (
      <Html center>
        <div className="text-white">Select a model to begin...</div>
      </Html>
    );
  };

export const ViewerLayout = () => {
    const [selectedModel, setSelectedModel] = useState(undefined);


    return (
        <div className="grid grid-rows-[1fr_auto] h-screen">
      
            {/* Top Section: Viewer + Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] overflow-hidden">
        
                {/* 3D Viewer */}
                <Scene>
                    <ModelOrPlaceholder selectedModel={selectedModel} />
                </Scene>
        
                {/* Sidebar */}
                <SidePanel modelId={selectedModel} modelMetadata={{patientId: "fqjdqw;oidjqw"}} />
        
            </div>
        
            {/* Instructions */}
            <div className="bg-gray-900 text-white p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">Instructions</h3>
                <p>
                Use your mouse to rotate the model.<br />
                Scroll to zoom in and out.<br />
                Click and drag to move the view.<br />
                Have fun exploring!
                </p>
            </div>
        
        </div>
    ); 
};
