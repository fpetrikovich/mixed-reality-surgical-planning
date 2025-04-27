import { useCallback, useMemo, useState } from 'react';
import { Html } from '@react-three/drei';
import { Scene } from './Scene';
import * as THREE from 'three';
import { ModelDetail } from './ModelDetail';
import { Instructions } from './Instructions';
import { ModelInfo, ModelLabel } from '../types';
import { ModelLabels } from './ModelLabels';
import { LoadModelButton } from './LoadModelButton';
import { Model } from './Model';

  
const ModelOrPlaceholder = ({ selectedModel }: {selectedModel?: string}) => {
    const modelPosition = useMemo(() => new THREE.Vector3(0, 0, 0),[]); 
    console.log("ModelOrPlaceholder", selectedModel);

    return selectedModel ? (
        <Model modelPath={selectedModel} isCompressed={false} scale={0.1} position={modelPosition} />
    ) : (
        <Html center>
            <div className="text-white">Select a model to begin...</div>
        </Html>
    );
  };

export const ViewerLayout = () => {
    const [selectedModelLocation, setSelectedModelLocation] = useState<string | undefined>(undefined);
    const [labels, setLabels] = useState<ModelLabel[]>([]);

    const handleModelSelect = useCallback((selectedModel: ModelInfo) => {
            console.log("Model selected:", selectedModel);
            setSelectedModelLocation(selectedModel.location);
            setLabels([
                {
                    id: '1',
                    label: 'Label 1',
                    coordinates: new THREE.Vector3(1, 2, 3),
                },
                {
                    id: '2',
                    label: 'Label 2',
                    coordinates: new THREE.Vector3(4, 5, 6),
                },
            ]);
    }, [setSelectedModelLocation, setLabels]);

    return (
        <div className="grid grid-rows-[1fr_auto] h-screen divide-y divide-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] divide-x divide-gray-500 overflow-hidden">
                <Scene>
                    <ModelOrPlaceholder selectedModel={selectedModelLocation} />
                </Scene>
                <div className="grid grid-rows divide-y divide-gray-500">
                    <ModelDetail modelId={selectedModelLocation} modelMetadata={{patientId: "fqjdqw;oidjqw"}} />
                    <ModelLabels labels={labels} />
                </div>
            </div>
            <Instructions />
            <LoadModelButton onModelSelected={handleModelSelect} />
        </div>
    ); 
};
