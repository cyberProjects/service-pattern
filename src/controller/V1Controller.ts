import { NextFunction, Request, Response } from "express";
import { IAnimalService } from "../service/IAnimalService";
import { AnimalServiceFactory } from "../service/AnimalServiceFactory";
import { AppRequest } from "../model/AppRequest";
import { AppRegistry } from "../registry/AppRegistry";
import { IServiceStore } from "../registry/IServiceStore";

export class V1Controller {
    public async handleRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
        // throw new Error(); <--- gets caught by global handler

        // get request as custom object
        const appReq: AppRequest = new AppRequest(req.body.requestId, req.body.type, res);

        // register request with res.locals.registry object
        let registry: AppRegistry = res.locals.registry;
        registry.registerRequest(appReq.requestId, appReq.type);

        // get needed service based on request
        let serviceFactory = new AnimalServiceFactory(appReq);
        let service: IAnimalService = serviceFactory.getService(appReq.type);

        // set service in motion wait until complete
        let promiseResult = await service.process()
            .then((res) => { return res })
            .catch((err) => { throw new Error(err) });

        // signal responder with request id (responder pulls data from registry)
        if (promiseResult) console.log(promiseResult);
        let serviceStore: IServiceStore = registry.getServiceStore(appReq.requestId);
        console.log(serviceStore.getServiceResponses());

        res.status(200).json('Controller works');
    }
}