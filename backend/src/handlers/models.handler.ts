import { Request, Response } from "express-serve-static-core";
import { ModelAnnotationsDto } from "../dtos/annotation.dto";
import { IdParam } from "../dtos/params.dto";
import { MODEL_DATA } from "../data/dummy.data";
import { ModelDto } from "../dtos/models.dto";
import { DicomMetadataDto } from "../dtos/dicom.dto";

export const getModels = (_: Request, response: Response<{models: ModelDto[]}>) => {
    response.status(200).json({
        models: Object.values(MODEL_DATA).map((model) => ({
            id: model.id,
            location: model.location,
        })),
    });
}

export const getModelMetadata = (request: Request<IdParam>, response: Response<DicomMetadataDto>) => {
    const modelId = request.params.id;
    response.status(200).json(MODEL_DATA[modelId].metadata);
}

export const saveModelAnnotations = (request: Request<IdParam, {}, ModelAnnotationsDto>, response: Response) => {
    const { annotations } = request.body;
    const modelId = request.params.id;
    console.log(`Saving ${annotations.length} model annotations for model: ${modelId}`);
    response.status(201).json();
}
