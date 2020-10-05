export class ServiceResponse {
    type: string;
    service: string;
    success: boolean | null;
    payload: any;

    constructor(type: string, service: string) {
        this.type = type;
        this.service = service;
        this.success = null;
        this.payload = null;
    }
}