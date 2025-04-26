import { DicomMetadataDto } from "./dicom.dto";

export interface ModelDto {
    id: string;
    location: string;
    metadata?: DicomMetadataDto
}

export interface ModelsDto{
    models: ModelDto[];
}