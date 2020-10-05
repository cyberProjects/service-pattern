import { Response } from "express";

export class AppRequest {
    constructor(public requestId: string, public type: string, public res: Response) { }
}