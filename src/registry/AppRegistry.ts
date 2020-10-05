import { IServiceStore } from "./IServiceStore";
import { RegistryStoreFactory } from "./RegistryStoreFactory";

export class AppRegistry {
    private resultsRegistry = new Map<string, IServiceStore>([]);
    private storeFactory: RegistryStoreFactory;

    constructor() {
        this.storeFactory = new RegistryStoreFactory();
    }

    public registerRequest(requestId: string, type: string): boolean {
        if (this.resultsRegistry.has(requestId)) {
            throw new Error('Request already registered');
        } else {
            this.resultsRegistry.set(requestId, this.storeFactory.getStoreByType(type));
            return true;
        }
    }

    public deleteRequest(requestId: string): boolean {
        this.resultsRegistry.delete(requestId);
        if (this.resultsRegistry.has(requestId)) {
            throw new Error('Problem deleting entry in AppRegistry');
        } else {
            return true;
        }
    }

    public getServiceStore(requestId: string): IServiceStore {
        if (this.resultsRegistry.has(requestId)) {
            return this.resultsRegistry.get(requestId);
        } else {
            throw new Error('ServiceStore does not exist for requestId');
        }
    }
}