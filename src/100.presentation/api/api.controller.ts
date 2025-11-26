import { Request, Response } from "express";

export const apiController = {
    async upload(req: Request, res: Response) {

        res.json(1);
    }
}