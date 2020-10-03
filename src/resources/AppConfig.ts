import { IService } from "../service/IService";

export interface AppConfig {
    requestTypes: string[];
    requestHandlers: IService[];
}