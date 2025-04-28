import { useState } from "react";

interface AnnotationModalProps {
    isOpen: boolean;
    onSubmit: (label: string, description: string) => void;
    onClose: () => void;
}

export const AnnotationModal = ({ isOpen, onSubmit, onClose }: AnnotationModalProps) => {
    const [label, setLabel] = useState("");
    const [description, setDescription] = useState("");

    if (!isOpen) return null;

    const submitAnnotation = () => {
        if (label.trim() === "") {
            alert("Label cannot be empty");
            return;
        }
        onSubmit(label, description);
        setLabel("");
        setDescription("");
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Add Annotation</h2>
                <input
                    className="w-full border p-2 mb-4 text-gray-700"
                    placeholder="Label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <textarea
                    className="w-full border p-2 mb-4 text-gray-700"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                    <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={submitAnnotation}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
