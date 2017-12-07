import { USBDevice } from "./device";
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
    deviceFound: (device: USBDevice, selectFn: any) => void;
}
export interface USBDirection {
}
export interface USBControlTransferParameters {
}
export interface USBInTransferResult {
}
export interface USBOutTransferResult {
}
export interface USBIsochronousInTransferResult {
}
export interface USBIsochronousOutTransferResult {
}
export interface USBControlTransferParameters {
}
