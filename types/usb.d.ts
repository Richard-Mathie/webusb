import { EventDispatcher } from "./dispatcher";
import { USBDevice } from "./device";
import { USBDeviceRequestOptions } from "./interfaces";
/**
 * USB class
 */
export declare class USB extends EventDispatcher {
    /**
     * Device Connected event
     * @event
     */
    static EVENT_DEVICE_CONNECT: string;
    /**
     * Device Disconnected event
     * @event
     */
    static EVENT_DEVICE_DISCONNECT: string;
    /**
     * USB constructor
     * @param init A partial class to initialise values
     */
    constructor();
    /**
     * Gets all Web USB devices connected to the system
     * @returns Promise containing an array of devices
     */
    getDevices(): Promise<Array<USBDevice>>;
    /**
     * Requests a sungle Web USB device
     * @returns Promise containing the selected device
     */
    requestDevice(_options: USBDeviceRequestOptions): Promise<USBDevice>;
}
