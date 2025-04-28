import { AnnotationDto, AnnotationsDto, ModelDto } from "../types";

export const fetchModelAnnotationsFromLocalStorage = (
  selectedModel: ModelDto
): AnnotationDto[] =>
  selectedModel
    ? (fetchFromLocalStorage<AnnotationsDto>(selectedModel.id, {
        annotations: [],
      })?.annotations ?? [])
    : [];

export const fetchFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved) as T;
  }
  return defaultValue;
};

export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
