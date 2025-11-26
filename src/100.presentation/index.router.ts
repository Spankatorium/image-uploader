import express, { Router } from "express";
import apiRouter from "./api/api.router"
import path from "path";

const router = Router();

// API
router.use("/api", apiRouter);

// HTML/static
router.use(
    "/", 
    express.static(
        path.join(
            __dirname, 
            "static")));

export default router;