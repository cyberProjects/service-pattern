import { ServiceResponse } from "../model/ServiceResponse";
import * as config from '../resource/config.json';
import { IServiceConfig } from "../resource/IServiceConfig";

const typedConfig = config;

export function Dependents(serviceName: string) {
    return function (target: Object, propertyKey: string) {
        console.log('Run: ' + serviceName);
        let value: Map<string, ServiceResponse> = new Map([]);
        let services: IServiceConfig[];
        services = typedConfig.requestHandlers;
        if (services) {
            let service = services.find((s) => s.name === serviceName);
            service.dependents.forEach((dependentName) => {
                value.set(serviceName, new ServiceResponse(serviceName, dependentName));
            });
        }

        const getter = () => {
            return value;
        };

        const setter = (newVal: Map<string, ServiceResponse>) => {
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });

    }
}

