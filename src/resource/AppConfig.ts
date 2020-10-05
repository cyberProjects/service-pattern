import { IServiceConfig } from "./IServiceConfig";

export interface AppConfig {
    requestTypes: string[];
    requestHandlers: IServiceConfig[];
}