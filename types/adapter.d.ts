import { USBDevice } from "./device";
/**
 * @hidden
 */
export interface Adapter {
    findDevices: () => Promise<Array<Partial<USBDevice>>>;
}
/**
 * @hidden
 */
export declare class USBAdapter implements Adapter {
    private getWebCapability(device);
    private getWebUrl(device, capability);
    private getStringDescriptor(device, index);
    private decodeVersion(version);
    findDevices(): Promise<Array<Partial<USBDevice>>>;
}
/**
 * @hidden
 */
export declare const adapter: USBAdapter;
