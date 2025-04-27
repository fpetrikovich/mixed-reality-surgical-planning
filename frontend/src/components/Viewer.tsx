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
                console.log("Fetched models data:", data);
                const model = data as ModelDto;
                setModelMetadata(model.metadata);
                setModelAnnotations(model.annotations ?? []);
            })
            .catch((error) => console.error(`Failed to fetch model ${selectedModel.id}`, error));
    }, [selectedModel]);

    const handleModelSelect = useCallback((selectedModel: ModelDto) => {
            console.log("Model selected:", selectedModel);
            setSelectedModel(selectedModel);
    }, [setSelectedModel]);

    const handleClickCanvas = useCallback((annotation: AnnotationDto) => {
        setModelAnnotations((prevAnnotations) => [...prevAnnotations, annotation]);
    }, [setModelAnnotations]);

    return (
        <div className="grid grid-rows-[1fr_auto] h-screen divide-y divide-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] divide-x divide-gray-500 overflow-hidden">
                <div className="relative canvas">
                <Scene>
                    <SceneContext selectedModelLocation={selectedModel?.location} onClickCanvas={handleClickCanvas} />
                    <SceneAnnotations annotations={modelAnnotations} />
                </Scene>
                <LoadModelButton onModelSelected={handleModelSelect} />
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
