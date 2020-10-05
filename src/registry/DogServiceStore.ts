import { Dependents } from "../decorator/DependentsDecorator";
import { ServiceResponse } from "../model/ServiceResponse";
import { IServiceStore } from "./IServiceStore";

export class DogServiceStore implements IServiceStore {
    type: string;

    @Dependents('DogService')
    private results: Map<string, ServiceResponse>;

    constructor() {
        this.type = 'Dog';
        console.log('In DogServiceStore');
    }

    public setServiceResponse(serviceName: string, serviceResponse: ServiceResponse): void {
        this.results.set(serviceName, serviceResponse);
    }

    public getServiceResponses(): Map<string, ServiceResponse> {
        return this.results;
    }
}