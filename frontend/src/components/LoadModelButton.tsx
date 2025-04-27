import { useState } from "react";
import { ListModelsModal } from "./ListModelsModal";
import { ModelDto } from "../types";
import { CONFIGURATION } from "../config/constants";

interface LoadModelButtonProps {
    onModelSelected: (model: ModelDto) => void;
}

export const LoadModelButton = ({ onModelSelected }: LoadModelButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [models, setModels] = useState<ModelDto[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        setIsLoading(true);
        setIsModalOpen(true);
        fetch(`${CONFIGURATION.API_URL}/api/models`)
            .then((res) => res.json())
            .then((data) => {
                const response = data as {models: ModelDto[]}
                setModels(response.models)
            })
            .catch((error) => console.error("Failed to fetch models", error))
            .finally(() => setIsLoading(false));
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModelClick = (model: ModelDto) => {
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
