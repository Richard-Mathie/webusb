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
class USBDevice {
    /**
     * @hidden
     */
    constructor(init) {
        this.manufacturerName = null;
        this.productName = null;
        this.serialNumber = null;
        this.url = null;
        this.opened = false;
        for (const key in init) {
            if (init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
    open() {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    close() {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    selectConfiguration(_configurationValue) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    claimInterface(_interfaceNumber) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    releaseInterface(_interfaceNumber) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    selectAlternateInterface(_interfaceNumber, _alternateSetting) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    controlTransferIn(_setup, _length) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    controlTransferOut(_setup, _data) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    clearHalt(_direction, _endpointNumber) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    transferIn(_endpointNumber, _length) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    transferOut(_endpointNumber, _data) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    isochronousTransferIn(_endpointNumber, _packetLengths) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    isochronousTransferOut(_endpointNumber, _data, _packetLengths) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
    reset() {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
}
exports.USBDevice = USBDevice;

//# sourceMappingURL=device.js.map
