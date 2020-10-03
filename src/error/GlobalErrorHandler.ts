import { NextFunction, Request, Response } from "express";

export class GlobalErrorHandler {
    public static errorHandler(err: any, req: Request, res: Response, next: NextFunction): any {
        return res.status(500).json('{ "message": "Error handler works!" }');
    }
}