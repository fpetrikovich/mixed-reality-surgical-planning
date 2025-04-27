import { memo } from "react";
import { ModelLabel } from "../types";

interface ModelLabelsProps {
    labels: ModelLabel[];
}

export const ModelLabels = memo(({labels}: ModelLabelsProps) => {
    return (
        <div className="bg-gray-800 text-white p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Model Labels</h2>
            {
                labels.length > 0 ? (
                    <ul className="space-y-2">
                        {labels.map((label, index) => (
                            <li key={index} className="flex justify-between">
                                <span className="font-semibold">{label.label}</span>
                                <span>{`(${label.coordinates.x.toFixed(2)}, ${label.coordinates.y.toFixed(2)}, ${label.coordinates.z.toFixed(2)})`}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400">No labels generated.</p>
                )
            }
        </div>
    );
});