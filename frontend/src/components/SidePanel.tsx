import { memo } from "react";

interface SidePanelProps {
    modelId?: string;
    modelMetadata?: {
        patientId: string;
    };
}

export const SidePanel = memo(({modelId, modelMetadata}: SidePanelProps) => {
    const hasData = modelId && modelMetadata;
    return (
        <div className="bg-gray-800 text-white p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Model Information</h2>
            {hasData ? (
                <ul className="space-y-2">
                    <li><span className="font-semibold">Model ID:</span> {modelId}</li>
                    <li><span className="font-semibold">Patient ID:</span> {modelMetadata.patientId}</li>
                </ul>
            ) : (
                <p className="text-gray-400">No model selected.</p>
            )}
        </div>
    );
});