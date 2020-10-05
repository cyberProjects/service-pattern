import { AppRequest } from "../model/AppRequest";
import { IAnimalService } from "./IAnimalService";

export class DogSvc1 implements IAnimalService {
    constructor(private appReq: AppRequest) {
        console.log('DogSvc1 created!');
    }

    public async process(): Promise<any> {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('DogSvc1 done!')
                resolve();
            }, 1000);
        });
    }
}