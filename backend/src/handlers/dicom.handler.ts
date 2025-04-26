
import { Request, Response } from "express-serve-static-core";
import { DicomMetadataDto } from "../dtos/dicom.dto";

export const getSampleDicomMetadata = (_: Request, response: Response<DicomMetadataDto>) =>{
    const sampleMetadata: DicomMetadataDto = {
        patientName: "John Doe",
        studyDate: new Date("2023-10-01"),
        modality: "CT",
        studyDescription: "Sample CT Scan",
    };

    response.status(200).json(sampleMetadata);
}