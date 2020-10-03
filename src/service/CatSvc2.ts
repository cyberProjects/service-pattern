import { IAnimalService } from "./IAnimalService";

export class CatSvc2 implements IAnimalService {
    constructor(private requestId: string) {
        console.log('CatSvc2 created!');
    }

    public async process(): Promise<any> {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('CatSvc2 done!')
                resolve();
            }, 1000);
        });
    }
}