import { CatServiceStore } from "./CatServiceStore";
import { DogServiceStore } from "./DogServiceStore";
import { IServiceStore } from "./IServiceStore";

export class RegistryStoreFactory {
    private handlerMap = new Map([
        ['Dog', this.getDogServiceStore()],
        ['Cat', this.getCatServiceStore()]
    ]);

    public getStoreByType(type: string): any {
        try {
            return this.handlerMap.get(type);
        } catch(err) {
            console.error('Problem retrieving ServiceStore');
            throw new Error(err);
        }
    }

    private getDogServiceStore(): IServiceStore {
        return new DogServiceStore();
    }

    private getCatServiceStore(): IServiceStore {
        return new CatServiceStore();
    }
}