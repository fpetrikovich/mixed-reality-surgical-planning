import { ModelDto } from "../dtos/models.dto";

export const MODEL_DATA: {[key: string]: ModelDto } = {
    "1": {
        id: "1",
        location: "https://example.com/model1",
        metadata: {
            patientName: "John Doe",
            studyDate: new Date("2023-10-01"),
            modality: "CT",
            studyDescription: "Sample CT Scan",
        },
    },
    "2": {
        id: "2",
        location: "https://example.com/model2",
        metadata: {
            patientName: "Jane Smith",
            studyDate: new Date("2025-01-02"),
            modality: "MRI",
            studyDescription: "Sample MRI Scan",
        },
    },
    "3":{
        id: "3",
        location: "https://example.com/model3",
        metadata: {
            patientName: "Alice Johnson",
            studyDate: new Date("2024-10-03"),
            modality: "X-ray",
            studyDescription: "Sample X-ray Scan",
        },      
    }
};