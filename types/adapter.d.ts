/// <reference types="node" />
import { EventEmitter } from "events";
import { USBDevice } from "./device";
import { USBDirection } from "./enums";
import { USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBConfiguration, USBIsochronousInTransferResult, USBIsochronousOutTransferResult } from "./interfaces";
/**
 * @hidden
 */
export declare class USBAdapter extends EventEmitter {
    static EVENT_DEVICE_CONNECT: string;
    static EVENT_DEVICE_DISCONNECT: string;
    private devices;
    constructor();
    private loadDevices();
    private loadDevice(device);
    private getCapabilities(device);
    private getDeviceCapabilities(device, callback);
    private getBosDescriptor(device, callback);
    private getWebCapability(capabilities);
    private getWebUrl(device, capability);
    private devicetoUSBDevice(handle);
    private decodeVersion(version);
    private getStringDescriptor(device, index);
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
    private getDevice(handle);
    getUSBDevices(): Promise<Array<USBDevice>>;
    open(handle: string): Promise<void>;
    close(handle: string): Promise<void>;
    getOpened(handle: string): boolean;
    getConfiguration(handle: string): USBConfiguration;
    getConfigurations(handle: string): Array<USBConfiguration>;
    selectConfiguration(handle: string, id: number): Promise<void>;
    claimInterface(handle: string, address: number): Promise<void>;
    releaseInterface(handle: string, address: number): Promise<void>;
    selectAlternateInterface(handle: string, interfaceNumber: number, alternateSetting: number): Promise<void>;
    controlTransferIn(handle: string, setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;
    controlTransferOut(handle: string, setup: USBControlTransferParameters, data: ArrayBuffer | ArrayBufferView): Promise<USBOutTransferResult>;
    transferIn(handle: string, endpointNumber: number, length: number): Promise<USBInTransferResult>;
    transferOut(handle: string, endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
    clearHalt(_handle: string, _direction: USBDirection, _endpointNumber: number): Promise<void>;
    isochronousTransferIn(_handle: string, _endpointNumber: number, _packetLengths: Array<number>): Promise<USBIsochronousInTransferResult>;
    isochronousTransferOut(_handle: string, _endpointNumber: number, _data: BufferSource, _packetLengths: Array<number>): Promise<USBIsochronousOutTransferResult>;
    reset(handle: string): Promise<void>;
}
/**
 * @hidden
 */
export declare const adapter: USBAdapter;
