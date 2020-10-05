import { ServiceResponse } from "../model/ServiceResponse";

export interface IServiceStore {
    type: string;

    setServiceResponse(serviceName: string, serviceResponse: ServiceResponse): void;
    getServiceResponses(): Map<string, ServiceResponse>;
}