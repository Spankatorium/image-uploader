import { Router } from "express";
import { apiController } from "./api.controller";

const router = Router();

router.post("/upload", apiController.upload);

export default router;