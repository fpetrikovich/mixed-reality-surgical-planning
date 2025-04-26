import {Router} from 'express';
import { saveModelAnnotations, getModels, getModelMetadata } from '../handlers/models.handler';

const router = Router();

router.get('/', getModels);
router.get('/:id/metadata', getModelMetadata);
router.post('/:id/annotations', saveModelAnnotations);

export default router;