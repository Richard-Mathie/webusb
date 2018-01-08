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
        this.opened = false;
        this.url = null;
        Object.assign(this, init);
    }
    open() {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    close() {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    selectConfiguration(_configurationValue) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    claimInterface(_interfaceNumber) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    releaseInterface(_interfaceNumber) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    selectAlternateInterface(_interfaceNumber, _alternateSetting) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    controlTransferIn(_setup, _length) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    controlTransferOut(_setup, _data) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    clearHalt(_direction, _endpointNumber) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    transferIn(_endpointNumber, _length) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    transferOut(_endpointNumber, _data) {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
    isochronousTransferIn(_endpointNumber, _packetLengths) {
        return new Promise((_resolve, reject) => {
            reject("isochronousTransferIn error: method not implemented");
        });
    }
    isochronousTransferOut(_endpointNumber, _data, _packetLengths) {
        return new Promise((_resolve, reject) => {
            reject("isochronousTransferOut error: method not implemented");
        });
    }
    reset() {
        return new Promise((_resolve, reject) => {
            reject("error: method not implemented");
        });
    }
}
exports.USBDevice = USBDevice;

//# sourceMappingURL=device.js.map
