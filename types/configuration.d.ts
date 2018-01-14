import { USBInterface } from "./interface";
/**
 * USB Configuration class
 */
export declare class USBConfiguration {
    readonly configurationValue: number;
    readonly configurationName?: string;
    readonly interfaces: Array<USBInterface>;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBConfiguration>);
}
