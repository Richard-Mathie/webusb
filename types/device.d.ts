import { USBDirection } from "./enums";
import { USBConfiguration, USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBIsochronousInTransferResult, USBIsochronousOutTransferResult } from "./interfaces";
/**
 * USB Device class
 */
export declare class USBDevice {
    readonly usbVersionMajor: number;
    readonly usbVersionMinor: number;
    readonly usbVersionSubminor: number;
    readonly deviceClass: number;
    readonly deviceSubclass: number;
    readonly deviceProtocol: number;
    readonly vendorId: number;
    readonly productId: number;
    readonly deviceVersionMajor: number;
    readonly deviceVersionMinor: number;
    readonly deviceVersionSubminor: number;
    readonly manufacturerName: string;
    readonly productName: string;
    readonly serialNumber: string;
    readonly configuration: USBConfiguration;
    readonly configurations: Array<USBConfiguration>;
    readonly opened: boolean;
    readonly url: string;
    /**
     * @hidden
     */
    readonly _handle: any;
    /**
     * USB Device constructor
     * @param init A partial class to initialise values
     */
    constructor(init?: Partial<USBDevice>);
    open(): Promise<void>;
    close(): Promise<void>;
    selectConfiguration(configurationValue: number): Promise<void>;
    claimInterface(interfaceNumber: number): Promise<void>;
    releaseInterface(interfaceNumber: number): Promise<void>;
    selectAlternateInterface(interfaceNumber: number, alternateSetting: number): Promise<void>;
    controlTransferIn(setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;
    controlTransferOut(setup: USBControlTransferParameters, data?: BufferSource): Promise<USBOutTransferResult>;
    transferIn(endpointNumber: number, length: number): Promise<USBInTransferResult>;
    transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
    reset(): Promise<void>;
    /**
     * @hidden
     */
    clearHalt(_direction: USBDirection, _endpointNumber: number): Promise<void>;
    /**
     * @hidden
     */
    isochronousTransferIn(_endpointNumber: number, _packetLengths: Array<number>): Promise<USBIsochronousInTransferResult>;
    /**
     * @hidden
     */
    isochronousTransferOut(_endpointNumber: number, _data: BufferSource, _packetLengths: Array<number>): Promise<USBIsochronousOutTransferResult>;
}
