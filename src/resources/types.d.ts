import { AppConfig } from "./AppConfig";

export {};

declare global {
    interface Global {
        config: AppConfig;
    }
}