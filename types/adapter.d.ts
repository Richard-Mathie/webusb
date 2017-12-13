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
    private getBosDescriptor(device, callback);
    private getDeviceCapabilities(device, callback);
    private getCapabilities(device);
    private getWebCapability(capabilities);
    private getWebUrl(device, capability);
    private getStringDescriptor(device, index);
    private decodeVersion(version);
    findDevices(): Promise<Array<Partial<USBDevice>>>;
}
/**
 * @hidden
 */
export declare const adapter: USBAdapter;
