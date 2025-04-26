import {Router} from 'express';
import { getSampleDicomMetadata } from '../handlers/dicom.handler';

const router = Router();

router.get('/metadata', getSampleDicomMetadata);

export default router;