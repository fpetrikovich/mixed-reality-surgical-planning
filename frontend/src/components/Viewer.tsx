import { useCallback, useEffect, useState } from 'react';
import { Scene } from './Scene';
import { ModelDetail } from './ModelDetail';
import { Instructions } from './Instructions';
import { ModelDto, AnnotationDto, DicomMetadataDto } from '../types';
import { LoadModelButton } from './LoadModelButton';
import { SceneContext } from './SceneContext';
import { ModelAnnotations } from './ModelLabels';
import { CONFIGURATION } from '../config/constants';
import { SceneAnnotations } from './SceneAnnotations';
import { fetchModelAnnotationsFromLocalStorage, saveToLocalStorage } from '../utils/localStorageUtils';

export const ViewerLayout = () => {

    const [selectedModel, setSelectedModel] = useState<ModelDto | undefined>(undefined);
    const [modelMetadata, setModelMetadata] = useState<DicomMetadataDto | undefined>(undefined);
    const [modelAnnotations, setModelAnnotations] = useState<AnnotationDto[]>([]);

    useEffect(() => {
        // Do not fetch model info if it is not selected
        if (!selectedModel) return;
        // Fetch models info from the backend
        fetch(`${CONFIGURATION.API_URL}/api/models/${selectedModel.id}`)
            .then((res) => res.json())
            .then((data) => {
                const model = data as ModelDto; 
                setModelMetadata(model.metadata);
                setModelAnnotations(fetchModelAnnotationsFromLocalStorage(model));
            })
            .catch((error) => console.error(`Failed to fetch model ${selectedModel.id}`, error));
    }, [selectedModel]);

    const onAnnotationCreation = useCallback((annotation: AnnotationDto) => {
        if (!selectedModel) return; // Should error
        setModelAnnotations((prevAnnotations) => {
            const updatedAnnotations = [...prevAnnotations, annotation];
            saveToLocalStorage(selectedModel.id, { annotations: updatedAnnotations });
            return updatedAnnotations;
        });
    }, [selectedModel, modelAnnotations]);

    return (
        <div className="grid grid-rows-[1fr_auto] h-screen divide-y divide-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] divide-x divide-gray-500 overflow-hidden">
                <div className="relative canvas">
                <Scene>
                    <SceneContext selectedModelLocation={selectedModel?.location} onAnnotationCreation={onAnnotationCreation} />
                    <SceneAnnotations annotations={modelAnnotations} />
                </Scene>
                <LoadModelButton onModelSelected={setSelectedModel} />
                </div>
                <div className="grid grid-rows divide-y divide-gray-500">
                    <ModelDetail modelId={selectedModel?.id} modelMetadata={modelMetadata} />
                    <ModelAnnotations annotations={modelAnnotations} />
                </div>
            </div>
            <Instructions />
        </div>
    ); 
};
