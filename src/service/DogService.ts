import { DogSvc1 } from "./DogSvc1";
import { DogSvc2 } from "./DogSvc2";
import { IAnimalService } from "./IAnimalService";

export class DogService implements IAnimalService {
    private dogSvc1: DogSvc1;
    private dogSvc2: DogSvc2;

    constructor(private requestId: string) {
        console.log('DogService created!');
        this.dogSvc1 = new DogSvc1(this.requestId);
        this.dogSvc2 = new DogSvc2(this.requestId);
    }

    public async process(): Promise<any> {
        let promises = [this.dogSvc1.process(), this.dogSvc2.process()];
        await Promise.all(promises);
        // return Promise.reject();
        return Promise.resolve("DogService.process() success!");
    }
}