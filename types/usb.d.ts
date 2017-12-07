import { USBDevice } from "./device";
import { USBDeviceRequestOptions } from "./interfaces";
export declare function getDevices(): Promise<Array<USBDevice>>;
export declare function requestDevice(_options: USBDeviceRequestOptions): Promise<USBDevice>;
