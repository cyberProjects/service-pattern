import { AppRequest } from "../model/AppRequest";
import { CatSvc1 } from "./CatSvc1";
import { CatSvc2 } from "./CatSvc2";
import { IAnimalService } from "./IAnimalService";

export class CatService implements IAnimalService {
    private catSvc1: CatSvc1;
    private catSvc2: CatSvc2;
    
    constructor(private appReq: AppRequest) {
        console.log('CatService created!');
        this.catSvc1 = new CatSvc1(this.appReq);
        this.catSvc2 = new CatSvc2(this.appReq);
    }

    public async process(): Promise<any> {
        let promises = [this.catSvc1.process(), this.catSvc2.process()];
        await Promise.all(promises);
        // return Promise.reject();
        return Promise.resolve("CatService.process() success!");
    }
}