import { Router } from "express";
import { getSampleDicomMetadata } from "../controllers/dicom.controller";

const router = Router();

router.get("/metadata", getSampleDicomMetadata);

export default router;
