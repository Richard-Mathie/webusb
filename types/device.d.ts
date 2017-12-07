import { USBDirection, USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBIsochronousInTransferResult, USBIsochronousOutTransferResult } from "./interfaces";
export declare class USBDevice {
    usbVersionMajor: number;
    usbVersionMinor: number;
    usbVersionSubminor: number;
    deviceClass: number;
    deviceSubclass: number;
    deviceProtocol: number;
    vendorId: number;
    productId: number;
    deviceVersionMajor: number;
    deviceVersionMinor: number;
    deviceVersionSubminor: number;
    manufacturerName: string;
    productName: string;
    serialNumber: string;
    url: string;
    opened: boolean;
    /**
     * @hidden
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
