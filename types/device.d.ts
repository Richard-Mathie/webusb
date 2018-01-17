import { USBDirection } from "./enums";
import { USBControlTransferParameters, USBInTransferResult, USBOutTransferResult, USBIsochronousInTransferResult, USBIsochronousOutTransferResult } from "./interfaces";
import { USBConfiguration } from "./configuration";
/**
 * USB Device class
 */
export declare class USBDevice {
    /**
     * Major USB protocol version supported by the device
     */
    readonly usbVersionMajor: number;
    /**
     * Minor USB protocol version supported by the device
     */
    readonly usbVersionMinor: number;
    /**
     * Sub minor USB protocol version supported by the device
     */
    readonly usbVersionSubminor: number;
    /**
     * Communication interface class of the device
     */
    readonly deviceClass: number;
    /**
     * Communication interface sub class of the device
     */
    readonly deviceSubclass: number;
    /**
     * Communication interface protocol of the device
     */
    readonly deviceProtocol: number;
    /**
     * Vendor Identifier of the device
     */
    readonly vendorId: number;
    /**
     * Product Identifier of the device
     */
    readonly productId: number;
    /**
     * Major version of the device
     */
    readonly deviceVersionMajor: number;
    /**
     * Minor version of the device
     */
    readonly deviceVersionMinor: number;
    /**
     * Sub minor version of the device
     */
    readonly deviceVersionSubminor: number;
    /**
     * Manufacturer name of the device
     */
    readonly manufacturerName: string;
    /**
     * Product name of the device
     */
    readonly productName: string;
    /**
     * Serial number of the device
     */
    readonly serialNumber: string;
    private _configurations;
    /**
     * List of configurations supported by the device
     */
    readonly configurations: Array<USBConfiguration>;
    /**
     * @hidden
     */
    _currentConfiguration: number;
    /**
     * The currently selected configuration
     */
    readonly configuration: USBConfiguration;
    /**
     * A flag indicating whether the device is open
     */
    readonly opened: boolean;
    /**
     * URL advertised by the device (not part of Web USB specification)
     */
    readonly url: string;
    /**
     * @hidden
     */
    readonly _handle: string;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBDevice>);
    /**
     * Opens the device
     */
    open(): Promise<void>;
    /**
     * Closes the device
     */
    close(): Promise<void>;
    /**
     * Select a configuration for the device
     * @param configurationValue The configuration value to select
     * @returns Promise containing any error
     */
    selectConfiguration(configurationValue: number): Promise<void>;
    /**
     * Claim an interface on the device
     * @param interfaceNumber The interface number to claim
     * @returns Promise containing any error
     */
    claimInterface(interfaceNumber: number): Promise<void>;
    /**
     * Release an interface on the device
     * @param interfaceNumber The interface number to release
     * @returns Promise containing any error
     */
    releaseInterface(interfaceNumber: number): Promise<void>;
    /**
     * Select an alternate interface on the device
     * @param interfaceNumber The interface number to change
     * @param alternateSetting The alternate setting to use
     * @returns Promise containing any error
     */
    selectAlternateInterface(interfaceNumber: number, alternateSetting: number): Promise<void>;
    controlTransferIn(setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;
    controlTransferOut(setup: USBControlTransferParameters, data?: BufferSource): Promise<USBOutTransferResult>;
    transferIn(endpointNumber: number, length: number): Promise<USBInTransferResult>;
    transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
    reset(): Promise<void>;
    /**
     * @hidden
     */
    clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;
    /**
     * @hidden
     */
    isochronousTransferIn(endpointNumber: number, packetLengths: Array<number>): Promise<USBIsochronousInTransferResult>;
    /**
     * @hidden
     */
    isochronousTransferOut(endpointNumber: number, data: BufferSource, packetLengths: Array<number>): Promise<USBIsochronousOutTransferResult>;
}
