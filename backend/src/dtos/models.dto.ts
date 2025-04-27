import { ModelAnnotationDto } from "./annotation.dto";
import { DicomMetadataDto } from "./dicom.dto";

export interface ModelDto {
    id: string;
    name: string;
    location: string;
    metadata?: DicomMetadataDto,
    annotations?: ModelAnnotationDto[];
}

export interface ModelsDto{
    models: ModelDto[];
}