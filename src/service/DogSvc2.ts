import { IAnimalService } from "./IAnimalService";

export class DogSvc2 implements IAnimalService {
    constructor(private requestId: string) {
        console.log('DogSvc2 created!');
    }

    public async process(): Promise<any> {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('DogSvc2 done!')
                resolve();
            }, 1000);
        });
    }
}