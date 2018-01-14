import { USBEndpoint } from "./endpoint";
/**
 * USB Alternate Interface class
 */
export declare class USBAlternateInterface {
    readonly alternateSetting: number;
    readonly interfaceClass: number;
    readonly interfaceSubclass: number;
    readonly interfaceProtocol: number;
    readonly interfaceName?: string;
    readonly endpoints: Array<USBEndpoint>;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBAlternateInterface>);
}
