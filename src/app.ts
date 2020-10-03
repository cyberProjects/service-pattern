import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});