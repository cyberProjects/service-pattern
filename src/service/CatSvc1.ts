import { Response } from "express";
import { AppRequest } from "../model/AppRequest";
import { ServiceResponse } from "../model/ServiceResponse";
import { AppRegistry } from "../registry/AppRegistry";
import { IServiceStore } from "../registry/IServiceStore";
import { IAnimalService } from "./IAnimalService";

export class CatSvc1 implements IAnimalService {
    constructor(private appReq: AppRequest) {
        console.log('CatSvc1 created!');
    }

    public async process(): Promise<any> {
        let registry: AppRegistry = this.appReq.res.locals.registry;
        let serviceStore: IServiceStore = registry.getServiceStore(this.appReq.requestId);
        let serviceResponse = new ServiceResponse('CatService', 'CatSvc1');
        serviceResponse.success = true;
        serviceResponse.payload = ['payload'];
        serviceStore.setServiceResponse('CatSvc1', serviceResponse);
    }
}