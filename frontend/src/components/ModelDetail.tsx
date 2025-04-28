import { memo } from "react";
import { DicomMetadataDto } from "../types";
import { format } from "date-fns";

interface ModelDetailProps {
  modelId?: string;
  modelMetadata?: DicomMetadataDto;
}

export const ModelDetail = memo(
  ({ modelId, modelMetadata }: ModelDetailProps) => {
    const hasData = modelId && modelMetadata;
    console.log(modelMetadata?.studyDate);
    return (
      <div className="bg-gray-800 text-white p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Model Metadata</h2>
        {hasData ? (
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Model ID:</span> {modelId}
            </li>
            <li>
              <span className="font-semibold">Patient ID:</span>{" "}
              {modelMetadata.patientName}
            </li>
            <li>
              <span className="font-semibold">Study Date:</span>{" "}
              {format(modelMetadata.studyDate, "MMMM do, yyyy H:mma")}
            </li>
            <li>
              <span className="font-semibold">Modality:</span>{" "}
              {modelMetadata.modality}
            </li>
            <li>
              <span className="font-semibold">Description:</span>{" "}
              {modelMetadata.studyDescription}
            </li>
          </ul>
        ) : (
          <p className="text-gray-400">No model selected.</p>
        )}
      </div>
    );
  }
);
