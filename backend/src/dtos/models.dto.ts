import { AnnotationDto } from "./annotation.dto";
import { DicomMetadataDto } from "./dicom.dto";

export interface ModelDto {
  id: string;
  name: string;
  location: string;
  isCompressed?: boolean;
  metadata?: DicomMetadataDto;
  annotations?: AnnotationDto[];
}

export interface ModelsDto {
  models: ModelDto[];
}
