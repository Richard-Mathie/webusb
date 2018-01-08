"use strict";
/*
* Node WebUSB
* Copyright (c) 2017 Rob Moran
*
* The MIT License (MIT)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = require("./dispatcher");
const device_1 = require("./device");
const adapter_1 = require("./adapter");
/**
 * USB class
 */
class USB extends dispatcher_1.EventDispatcher {
    /**
     * USB constructor
     * @param init A partial class to initialise values
     */
    constructor() {
        super();
    }
    /**
     * Gets all Web USB devices connected to the system
     * @returns Promise containing an array of devices
     */
    getDevices() {
        return new Promise((resolve, _reject) => {
            adapter_1.adapter.findDevices()
                .then(foundDevices => {
                resolve(foundDevices.map(device => new device_1.USBDevice(device)));
            });
        });
    }
    /**
     * Requests a sungle Web USB device
     * @returns Promise containing the selected device
     */
    requestDevice(_options) {
        return new Promise((resolve, _reject) => {
            adapter_1.adapter.findDevices()
                .then(foundDevices => {
                const devices = foundDevices.map(device => {
                    return new device_1.USBDevice(device);
                });
                resolve(devices[0]);
            });
        });
    }
}
/**
 * Device Connected event
 * @event
 */
USB.EVENT_DEVICE_CONNECT = "connect";
/**
 * Device Disconnected event
 * @event
 */
USB.EVENT_DEVICE_DISCONNECT = "disconnect";
exports.USB = USB;

//# sourceMappingURL=usb.js.map
