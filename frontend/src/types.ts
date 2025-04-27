
export interface ModelDto {
    id: string;
    name: string;
    location: string;
    metadata?: DicomMetadataDto;
    annotations?: ModelAnnotationDto[];
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
export interface ModelAnnotationDto {
    label: string;
    description: string;
    coordinates: CoordinatesDto;
}
export interface ModelAnnotationsDto {
    annotations: ModelAnnotationDto[];
}