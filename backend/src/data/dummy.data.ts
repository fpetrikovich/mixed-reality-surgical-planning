import { ModelDto } from "../dtos/models.dto";

export const MODEL_DATA: { [key: string]: ModelDto } = {
  "1": {
    id: "1",
    name: "Lantern",
    location: "/Lantern.glb",
    isCompressed: false,
    metadata: {
      patientName: "John Doe",
      studyDate: new Date("2023-10-01"),
      modality: "CT",
      studyDescription: "Sample CT Scan",
    },
    annotations: [],
  },
  "2": {
    id: "2",
    name: "Brain",
    location: "/Brain.glb",
    isCompressed: false,
    metadata: {
      patientName: "Jane Smith",
      studyDate: new Date("2025-01-02"),
      modality: "MRI",
      studyDescription: "Sample MRI Scan",
    },
  },
  "3": {
    id: "3",
    name: "Baby Robot",
    location: "/BabyRobot.glb",
    isCompressed: false,
    metadata: {
      patientName: "Alice Johnson",
      studyDate: new Date("2024-10-03"),
      modality: "X-ray",
      studyDescription: "Sample X-ray Scan",
    },
  },
  "4": {
    id: "4",
    name: "Security X-Ray Scanner",
    location: "SecurityXRay.glb",
    isCompressed: false,
    metadata: {
      patientName: "Alice Johnson",
      studyDate: new Date("2024-10-03"),
      modality: "X-ray",
      studyDescription: "Sample X-ray Scan",
    },
  },
};
