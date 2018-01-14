import { USBDirection, USBEndpointType } from "./enums";
/**
 * USB Endpoint class
 */
export declare class USBEndpoint {
    readonly endpointNumber: number;
    readonly direction: USBDirection;
    readonly type: USBEndpointType;
    readonly packetSize: number;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBEndpoint>);
}
