import { USBConfiguration, USBDirection, USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBIsochronousInTransferResult, USBIsochronousOutTransferResult } from "./interfaces";
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
    readonly configuration?: USBConfiguration;
    readonly configurations: Array<USBConfiguration>;
    readonly opened: boolean;
    readonly url: string;
    /**
     * USB Device constructor
     * @param init A partial class to initialise values
     */
    constructor(init?: Partial<USBDevice>);
    open(): Promise<void>;
    close(): Promise<void>;
    selectConfiguration(_configurationValue: number): Promise<void>;
    claimInterface(_interfaceNumber: number): Promise<void>;
    releaseInterface(_interfaceNumber: number): Promise<void>;
    selectAlternateInterface(_interfaceNumber: number, _alternateSetting: number): Promise<void>;
    controlTransferIn(_setup: USBControlTransferParameters, _length: number): Promise<USBInTransferResult>;
    controlTransferOut(_setup: USBControlTransferParameters, _data?: BufferSource): Promise<USBOutTransferResult>;
    clearHalt(_direction: USBDirection, _endpointNumber: number): Promise<void>;
    transferIn(_endpointNumber: number, _length: number): Promise<USBInTransferResult>;
    transferOut(_endpointNumber: number, _data: BufferSource): Promise<USBOutTransferResult>;
    isochronousTransferIn(_endpointNumber: number, _packetLengths: Array<number>): Promise<USBIsochronousInTransferResult>;
    isochronousTransferOut(_endpointNumber: number, _data: BufferSource, _packetLengths: Array<number>): Promise<USBIsochronousOutTransferResult>;
    reset(): Promise<void>;
}
