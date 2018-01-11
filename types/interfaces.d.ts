import { USBDevice } from "./device";
export declare enum USBRequestType {
    "standard" = 0,
    "class" = 1,
    "vendor" = 2,
}
export declare enum USBRecipient {
    "device" = 0,
    "interface" = 1,
    "endpoint" = 2,
    "other" = 3,
}
export declare enum USBTransferStatus {
    "ok" = 0,
    "stall" = 1,
    "babble" = 2,
}
export declare enum USBDirection {
    "in" = 0,
    "out" = 1,
}
export declare enum USBEndpointType {
    "bulk" = 0,
    "interrupt" = 1,
    "isochronous" = 2,
}
/**
 * USB Options interface
 */
export interface USBOptions {
    /**
     * A `device found` callback function to allow the user to select a device
     */
    devicesFound?: (devices: Array<USBDevice>, selectFn: (device: USBDevice) => void) => USBDevice;
}
export interface USBDeviceFilter {
    vendorId?: number;
    productId?: number;
    classCode?: number;
    subclassCode?: number;
    protocolCode?: number;
    serialnumber?: string;
}
export interface USBDeviceRequestOptions {
    filters: Array<USBDeviceFilter>;
    deviceFound?: (device: USBDevice, selectFn: any) => void;
}
export interface USBControlTransferParameters {
    requestType: USBRequestType;
    recipient: USBRecipient;
    request: number;
    value: number;
    index: number;
}
export interface USBInTransferResult {
    data?: DataView;
    status: USBTransferStatus;
}
export interface USBOutTransferResult {
    bytesWritten: number;
    status: USBTransferStatus;
}
export interface USBIsochronousInTransferPacket {
    data?: DataView;
    status: USBTransferStatus;
}
export interface USBIsochronousInTransferResult {
    data?: DataView;
    packets: Array<USBIsochronousInTransferPacket>;
}
export interface USBIsochronousOutTransferPacket {
    bytesWritten: number;
    status: USBTransferStatus;
}
export interface USBIsochronousOutTransferResult {
    packets: Array<USBIsochronousOutTransferPacket>;
}
export interface USBControlTransferParameters {
    requestType: USBRequestType;
    recipient: USBRecipient;
    request: number;
    value: number;
    index: number;
}
export interface USBInTransferResult {
    data?: DataView;
    status: USBTransferStatus;
}
export interface USBOutTransferResult {
    bytesWritten: number;
    status: USBTransferStatus;
}
export interface USBIsochronousInTransferPacket {
    data?: DataView;
    status: USBTransferStatus;
}
export interface USBIsochronousInTransferResult {
    data?: DataView;
    packets: Array<USBIsochronousInTransferPacket>;
}
export interface USBIsochronousOutTransferPacket {
    bytesWritten: number;
    status: USBTransferStatus;
}
export interface USBIsochronousOutTransferResult {
    packets: Array<USBIsochronousOutTransferPacket>;
}
export interface USBConfiguration {
    configurationValue: number;
    configurationName?: string;
    interfaces: Array<USBInterface>;
}
export interface USBInterface {
    interfaceNumber: number;
    alternate: USBAlternateInterface;
    alternates: Array<USBAlternateInterface>;
    claimed: boolean;
}
export interface USBAlternateInterface {
    alternateSetting: number;
    interfaceClass: number;
    interfaceSubclass: number;
    interfaceProtocol: number;
    interfaceName?: string;
    endpoints: Array<USBEndpoint>;
}
export interface USBEndpoint {
    endpointNumber: number;
    direction: USBDirection;
    type: USBEndpointType;
    packetSize: number;
}
