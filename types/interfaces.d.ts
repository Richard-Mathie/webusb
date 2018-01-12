import { USBRequestType, USBRecipient, USBTransferStatus, USBDirection, USBEndpointType } from "./enums";
import { USBDevice } from "./device";
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
