import { ModelInfo } from "../types";

interface ListModelsModalProps {
    isLoading: boolean;
    models: ModelInfo[];
    onClose: () => void;
    onModelSelect: (model: ModelInfo) => void; // Callback when model is selected  
}

export const ListModelsModal = ({isLoading, models, onModelSelect, onClose}: ListModelsModalProps) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Available Models</h2>

                {isLoading ? (
                    <p className="text-gray-500">Loading...</p>
                    ) : (
                    <ul className="text-gray-600 space-y-2">
                        {models.map((model) => (
                        <li
                            key={model.id}
                            className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                            onClick={() => onModelSelect(model)}
                        >
                            {model.name}
                        </li>
                        ))}
                    </ul>
                )}

                <button
                    onClick={onClose}
                    className="!bg-transparent !border-transparent absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>
            </div>
        </div>      
    );
}