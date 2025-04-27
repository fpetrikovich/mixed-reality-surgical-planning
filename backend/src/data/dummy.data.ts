import { ModelDto } from "../dtos/models.dto";

export const MODEL_DATA: {[key: string]: ModelDto } = {
    "1": {
        id: "1",
        name: "Lantern",
        location: "/Lantern.glb",
        metadata: {
            patientName: "John Doe",
            studyDate: new Date("2023-10-01"),
            modality: "CT",
            studyDescription: "Sample CT Scan",
        },
        annotations: [
            {
                label: "Annotation1",
                description: "Sample annotation 1",
                coordinates: {
                    x: 1,
                    y: 2,
                    z: 3
                }
            },
            {
                label: "Annotation2",
                description: "Sample annotation 2",
                coordinates: {
                    x: 4,
                    y: 5,
                    z: 6
                }
            }
        ]
    },
    "2": {
        id: "2",
        name: "Lantern2",
        location: "/Lantern.glb",
        metadata: {
            patientName: "Jane Smith",
            studyDate: new Date("2025-01-02"),
            modality: "MRI",
            studyDescription: "Sample MRI Scan",
        },
    },
    "3":{
        id: "3",
        name: "Lantern3",
        location: "https://example.com/model3",
        metadata: {
            patientName: "Alice Johnson",
            studyDate: new Date("2024-10-03"),
            modality: "X-ray",
            studyDescription: "Sample X-ray Scan",
        },      
    }
};