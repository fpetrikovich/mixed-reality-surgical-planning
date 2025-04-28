import { memo, useCallback, useState } from "react";
import { ListModelsModal } from "./ListModelsModal";
import { ModelDto } from "../types";
import { CONFIGURATION } from "../config/constants";

interface LoadModelButtonProps {
  onModelSelected: (model: ModelDto) => void;
}

export const LoadModelButton = memo(
  ({ onModelSelected }: LoadModelButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [models, setModels] = useState<ModelDto[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = useCallback(() => {
      setIsLoading(true);
      setIsModalOpen(true);
      fetch(`${CONFIGURATION.API_URL}/api/models`)
        .then((res) => res.json())
        .then((data) => {
          const response = data as { models: ModelDto[] };
          console.log("Models fetched", response.models);
          setModels(response.models);
        })
        .catch((error) => console.error("Failed to fetch models", error))
        .finally(() => setIsLoading(false));
    }, []);

    const closeModal = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const handleModelClick = useCallback((model: ModelDto) => {
      onModelSelected(model); // Notify parent component with the selected model
      closeModal(); // Close the modal after selection
    }, []);

    return (
      <>
        <button
          onClick={openModal}
          className="absolute bottom-2 right-2 !border-transparent !text-white-500 hover:text-gray-400"
        >
          Load Model
        </button>

        {isModalOpen && (
          <ListModelsModal
            isLoading={isLoading}
            models={models}
            onClose={closeModal}
            onModelSelect={handleModelClick}
          />
        )}
      </>
    );
  }
);
