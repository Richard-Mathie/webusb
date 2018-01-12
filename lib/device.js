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
const adapter_1 = require("./adapter");
/**
 * USB Device class
 */
class USBDevice {
    /**
     * USB Device constructor
     * @param init A partial class to initialise values
     */
    constructor(init) {
        this.manufacturerName = null;
        this.productName = null;
        this.serialNumber = null;
        this.url = null;
        /**
         * @hidden
         */
        this._handle = null;
        this.usbVersionMajor = init.usbVersionMajor;
        this.usbVersionMinor = init.usbVersionMinor;
        this.usbVersionSubminor = init.usbVersionSubminor;
        this.deviceClass = init.deviceClass;
        this.deviceSubclass = init.deviceSubclass;
        this.deviceProtocol = init.deviceProtocol;
        this.vendorId = init.vendorId;
        this.productId = init.productId;
        this.deviceVersionMajor = init.deviceVersionMajor;
        this.deviceVersionMinor = init.deviceVersionMinor;
        this.deviceVersionSubminor = init.deviceVersionSubminor;
        this.manufacturerName = init.manufacturerName;
        this.productName = init.productName;
        this.serialNumber = init.serialNumber;
        this.url = init.url;
        this._handle = init._handle;
    }
    get configuration() {
        return adapter_1.adapter.getConfiguration(this._handle);
    }
    get configurations() {
        return adapter_1.adapter.getConfigurations(this._handle);
    }
    get opened() {
        return adapter_1.adapter.getOpened(this._handle);
    }
    open() {
        return adapter_1.adapter.open(this._handle);
    }
    close() {
        return adapter_1.adapter.close(this._handle);
    }
    selectConfiguration(configurationValue) {
        return adapter_1.adapter.selectConfiguration(this._handle, configurationValue);
    }
    claimInterface(interfaceNumber) {
        return adapter_1.adapter.claimInterface(this._handle, interfaceNumber);
    }
    releaseInterface(interfaceNumber) {
        return adapter_1.adapter.releaseInterface(this._handle, interfaceNumber);
    }
    selectAlternateInterface(interfaceNumber, alternateSetting) {
        return adapter_1.adapter.selectAlternateInterface(this._handle, interfaceNumber, alternateSetting);
    }
    controlTransferIn(setup, length) {
        return adapter_1.adapter.controlTransferIn(this._handle, setup, length);
    }
    controlTransferOut(setup, data) {
        return adapter_1.adapter.controlTransferOut(this._handle, setup, data);
    }
    transferIn(endpointNumber, length) {
        return adapter_1.adapter.transferIn(this._handle, endpointNumber, length);
    }
    transferOut(endpointNumber, data) {
        return adapter_1.adapter.transferOut(this._handle, endpointNumber, data);
    }
    reset() {
        return adapter_1.adapter.reset(this._handle);
    }
    /**
     * @hidden
     */
    clearHalt(_direction, _endpointNumber) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    /**
     * @hidden
     */
    isochronousTransferIn(_endpointNumber, _packetLengths) {
        return new Promise((_resolve, reject) => {
            reject("isochronousTransferIn error: method not implemented");
        });
    }
    /**
     * @hidden
     */
    isochronousTransferOut(_endpointNumber, _data, _packetLengths) {
        return new Promise((_resolve, reject) => {
            reject("isochronousTransferOut error: method not implemented");
        });
    }
}
exports.USBDevice = USBDevice;

//# sourceMappingURL=device.js.map
