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