import { Dependents } from "../decorator/DependentsDecorator";
import { ServiceResponse } from "../model/ServiceResponse";
import { IServiceStore } from "./IServiceStore";

export class CatServiceStore implements IServiceStore {
    type: string;

    @Dependents('CatService')
    private results: Map<string, ServiceResponse>;

    constructor() {
        this.type = 'Cat';
        console.log('In CatServiceStore');
    }

    public setServiceResponse(serviceName: string, serviceResponse: ServiceResponse): void {
        this.results.set(serviceName, serviceResponse);
    }

    public getServiceResponses(): Map<string, ServiceResponse> {
        return this.results;
    }
}