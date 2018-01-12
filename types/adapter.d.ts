import { Device } from "usb";
import { USBDevice } from "./device";
import { USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBConfiguration } from "./interfaces";
/**
 * @hidden
 */
export interface Adapter {
    findDevices: () => Promise<Array<Partial<USBDevice>>>;
    open: (handle: any) => Promise<void>;
    close: (handle: any) => Promise<void>;
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
    private bufferToDataView(buffer);
    private bufferSourceToBuffer(bufferSource);
    private arrayBufferToBuffer(arrayBuffer);
    private getEndpoint(device, endpointNumber);
    private getInEndpoint(device, endpointNumber);
    private getOutEndpoint(device, endpointNumber);
    private endpointToUSBEndpoint(endpoint);
    private interfaceToUSBAlternateInterface(iface);
    private interfacesToUSBInterface(interfaces);
    private configDescriptorToUSBConfiguration(descriptor);
    findDevices(): Promise<Array<Partial<USBDevice>>>;
    open(handle: Device): Promise<void>;
    close(handle: Device): Promise<void>;
    getOpened(handle: Device): boolean;
    getConfiguration(handle: Device): USBConfiguration;
    getConfigurations(handle: Device): Array<USBConfiguration>;
    selectConfiguration(handle: Device, id: number): Promise<void>;
    claimInterface(handle: Device, address: number): Promise<void>;
    releaseInterface(handle: Device, address: number): Promise<void>;
    selectAlternateInterface(handle: Device, interfaceNumber: number, alternateSetting: number): Promise<void>;
    controlTransferIn(handle: Device, setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;
    controlTransferOut(handle: Device, setup: USBControlTransferParameters, data: ArrayBuffer | ArrayBufferView): Promise<USBOutTransferResult>;
    transferIn(handle: Device, endpointNumber: number, length: number): Promise<USBInTransferResult>;
    transferOut(handle: Device, endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
    reset(handle: Device): Promise<void>;
}
/**
 * @hidden
 */
export declare const adapter: USBAdapter;
