import { NextFunction, Request, Response } from "express";
import { IAnimalService } from "../service/IAnimalService";
import { AnimalServiceFactory } from "../service/AnimalServiceFactory";
import { AppRequest } from "./model/AppRequest";

export class V1Controller {
    private serviceFactory!: AnimalServiceFactory;

    public async handleRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
        // throw new Error(); <--- gets caught by global handler

        // get request as custom object
        const appRequest: AppRequest = new AppRequest(req.body.requestId, req.body.type);

        // register request with a registry

        // get needed services based on request
        this.serviceFactory = new AnimalServiceFactory(req.body);
        let service: IAnimalService = this.serviceFactory.getService(appRequest.type);

        // set service in motion wait until complete
        let promiseResult = await service.process()
            .then((res) => { return res })
            .catch((err) => { throw new Error(err) });

        // signal responder with request id (responder pulls data from registry)
        if (promiseResult) console.log(promiseResult);

        res.status(200).json('Controller works');
    }
}