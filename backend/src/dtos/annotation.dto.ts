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

export interface AnnotationsDto {
    annotations: AnnotationDto[];
}