import {Router} from 'express';
import { saveModelAnnotations, getModels, getModel } from '../controllers/models.controller';

const router = Router();

router.get('/', getModels);
router.get('/:id', getModel);
router.post('/:id/annotations', saveModelAnnotations);

export default router;