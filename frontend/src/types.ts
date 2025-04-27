
export interface ModelDto {
    id: string;
    name: string;
    location: string;
    metadata?: DicomMetadataDto;
    annotations?: AnnotationDto[];
}
export interface ModelsDto{
    models: ModelDto[];
}
export interface DicomMetadataDto {
    patientName: string;
    studyDate: Date;
    modality: string;
    studyDescription: string;
}
export interface CoordinatesDto {
    x: number;
    y: number;
    z: number;
}
export interface AnnotationDto {
    label: string;
    description: string;
    coordinates: CoordinatesDto;
}
export interface ModelAnnotationsDto {
    annotations: AnnotationDto[];
}