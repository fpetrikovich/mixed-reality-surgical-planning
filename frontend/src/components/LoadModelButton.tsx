import { useState } from "react";
import { ListModelsModal } from "./ListModelsModal";
import { ModelInfo } from "../types";
// import { CONFIGURATION } from "../config/constants";


interface LoadModelButtonProps {
    onModelSelected: (model: ModelInfo) => void;
}

export const LoadModelButton = ({ onModelSelected }: LoadModelButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [models, setModels] = useState<ModelInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        setIsLoading(true);
        setIsModalOpen(true);
        // fetch(`${CONFIGURATION.API_URL}/models`) // <-- Replace this with your actual backend endpoint
        //     .then((res) => res.json())
        //     .then((data) => setModels(data))
        //     .catch((error) => console.error("Failed to fetch models", error))
        //     .finally(() => setIsLoading(false));
        setModels([
            { id: "1", name: "Model 1", location: "/Lantern.glb" },
            { id: "2", name: "Model 2", location: "/Lantern.glb" },
            { id: "3", name: "Model 3", location: "path/to/model3" },
        ]);
    
        setIsLoading(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModelClick = (model: ModelInfo) => {
        onModelSelected(model); // Notify parent component with the selected model
        closeModal(); // Close the modal after selection
    };

    return (
        <>
            <button
                onClick={openModal}
                className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-800"
            >
                Load Model
            </button>

            {isModalOpen && (
                <ListModelsModal isLoading={isLoading} models={models} onClose={closeModal} onModelSelect={handleModelClick} />
            )}
        </>
    );
};
