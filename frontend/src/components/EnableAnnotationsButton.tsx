import { memo } from "react";

interface EnableAnnotationsButtonProps {
  enabled: boolean;
  onClick: (newValue: boolean) => void;
}

export const EnableAnnotationsButton = memo(
  ({ enabled, onClick }: EnableAnnotationsButtonProps) => {
    return (
      <button
        onClick={() => onClick(!enabled)}
        className="absolute top-2 right-2 !border-transparent !text-white-500 hover:text-gray-400"
      >
        {enabled ? "Disable Annotations" : "Enable Annotations"}
      </button>
    );
  }
);
