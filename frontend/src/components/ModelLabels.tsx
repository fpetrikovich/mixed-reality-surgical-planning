import { memo } from "react";
import { AnnotationDto } from "../types";

interface ModelAnnotationsProps {
  annotations: AnnotationDto[];
}

export const ModelAnnotations = memo(
  ({ annotations }: ModelAnnotationsProps) => (
    <div className="bg-gray-800 text-white p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Model Labels</h2>
      {annotations.length > 0 ? (
        <ul className="space-y-2">
          {annotations.map((annotation, index) => (
            <li key={index} className="flex justify-between">
              <span className="font-semibold">{annotation.label}</span>
              <span>{`(${annotation.coordinates.x.toFixed(2)}, ${annotation.coordinates.y.toFixed(2)}, ${annotation.coordinates.z.toFixed(2)})`}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No labels generated.</p>
      )}
    </div>
  )
);
