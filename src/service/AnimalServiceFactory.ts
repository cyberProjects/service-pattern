import { CatService } from "./CatService";
import { DogService } from "./DogService";
import { IAnimalService } from "./IAnimalService";

export class AnimalServiceFactory {
    private serviceMap =  new Map<string, IAnimalService>([
        ['Dog', this.getDogService()],
        ['Cat', this.getCatService()]
    ]);

    constructor(private requestId: string) { }

    public getService(type: string): IAnimalService {
        return this.serviceMap.get(type) as IAnimalService;
    }

    private getDogService(): IAnimalService {
        return new DogService(this.requestId);
    }

    private getCatService(): IAnimalService {
        return new CatService(this.requestId);
    }
}