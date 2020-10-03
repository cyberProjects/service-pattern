import express, { Request, Response, NextFunction } from 'express';
import { GlobalErrorHandler } from './error/GlobalErrorHandler';
import { V1Controller } from './controller/V1Controller';
import * as config from './resources/config.json';
import asyncHandler from 'express-async-handler';

globalThis.config = config;

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req: Request, res: Response, next: NextFunction) => {
    const v1Controller = new V1Controller();
    v1Controller.handleRequest(req, res, next).catch(next);
});

app.use(GlobalErrorHandler.errorHandler);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});