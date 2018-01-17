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
     * @hidden
     */
    constructor(init) {
        /**
         * Manufacturer name of the device
         */
        this.manufacturerName = null;
        /**
         * Product name of the device
         */
        this.productName = null;
        /**
         * Serial number of the device
         */
        this.serialNumber = null;
        this._configurations = [];
        /**
         * @hidden
         */
        this._currentConfiguration = null;
        /**
         * URL advertised by the device (not part of Web USB specification)
         */
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
        this._configurations = init.configurations;
        this.url = init.url;
        this._handle = init._handle;
        this._currentConfiguration = init._currentConfiguration;
    }
    /**
     * List of configurations supported by the device
     */
    get configurations() {
        return this._configurations;
    }
    /**
     * The currently selected configuration
     */
    get configuration() {
        return this.configurations.find(configuration => configuration.configurationValue === this._currentConfiguration);
    }
    /**
     * A flag indicating whether the device is open
     */
    get opened() {
        return adapter_1.adapter.getOpened(this._handle);
    }
    /**
     * Opens the device
     */
    open() {
        return new Promise((resolve, reject) => {
            if (adapter_1.adapter.getOpened(this._handle))
                return resolve();
            return adapter_1.adapter.open(this._handle)
                .catch(error => reject(error));
        });
    }
    /**
     * Closes the device
     */
    close() {
        return new Promise((resolve, reject) => {
            if (!adapter_1.adapter.getOpened(this._handle))
                return resolve();
            return adapter_1.adapter.close(this._handle)
                .catch(error => reject(error));
        });
    }
    /**
     * Select a configuration for the device
     * @param configurationValue The configuration value to select
     * @returns Promise containing any error
     */
    selectConfiguration(configurationValue) {
        return new Promise((resolve, reject) => {
            const config = this.configurations.find(configuration => configuration.configurationValue === configurationValue);
            if (!config)
                return reject("selectConfiguration error: configuration not found");
            if (!this.opened)
                return reject("selectConfiguration error: invalid state");
            adapter_1.adapter.selectConfiguration(this._handle, configurationValue)
                .then(() => {
                this._currentConfiguration = configurationValue;
                this.configuration.interfaces.forEach(iface => iface.reset());
                resolve();
            });
        });
    }
    /**
     * Claim an interface on the device
     * @param interfaceNumber The interface number to claim
     * @returns Promise containing any error
     */
    claimInterface(interfaceNumber) {
        return new Promise((resolve, reject) => {
            const iface = this.configuration.interfaces.find(usbInterface => usbInterface.interfaceNumber === interfaceNumber);
            if (!iface)
                return reject("claimInterface error: interface not found");
            if (!this.opened || iface.claimed)
                return reject("claimInterface error: invalid state");
            return iface.claimInterface()
                .then(() => resolve);
        });
    }
    /**
     * Release an interface on the device
     * @param interfaceNumber The interface number to release
     * @returns Promise containing any error
     */
    releaseInterface(interfaceNumber) {
        return new Promise((resolve, reject) => {
            const iface = this.configuration.interfaces.find(usbInterface => usbInterface.interfaceNumber === interfaceNumber);
            if (!iface)
                return reject("releaseInterface error: interface not found");
            if (!this.opened || !iface.claimed)
                return reject("releaseInterface error: invalid state");
            return iface.releaseInterface()
                .then(() => resolve);
        });
    }
    /**
     * Select an alternate interface on the device
     * @param interfaceNumber The interface number to change
     * @param alternateSetting The alternate setting to use
     * @returns Promise containing any error
     */
    selectAlternateInterface(interfaceNumber, alternateSetting) {
        return new Promise((resolve, reject) => {
            const iface = this.configuration.interfaces.find(usbInterface => usbInterface.interfaceNumber === interfaceNumber);
            if (!iface)
                return reject("selectAlternateInterface error: interface not found");
            if (!this.opened || !iface.claimed)
                return reject("selectAlternateInterface error: invalid state");
            return iface.selectAlternateInterface(alternateSetting)
                .then(() => resolve);
        });
    }
    // mention hacks
    controlTransferIn(setup, length) {
        return adapter_1.adapter.controlTransferIn(this._handle, setup, length);
    }
    // mention hacks
    controlTransferOut(setup, data) {
        return adapter_1.adapter.controlTransferOut(this._handle, setup, data);
    }
    // mention hacks
    transferIn(endpointNumber, length) {
        return adapter_1.adapter.transferIn(this._handle, endpointNumber, length);
    }
    // mention hacks
    transferOut(endpointNumber, data) {
        return adapter_1.adapter.transferOut(this._handle, endpointNumber, data);
    }
    reset() {
        return adapter_1.adapter.reset(this._handle);
    }
    /**
     * @hidden
     */
    clearHalt(direction, endpointNumber) {
        return adapter_1.adapter.clearHalt(this._handle, direction, endpointNumber);
    }
    /**
     * @hidden
     */
    isochronousTransferIn(endpointNumber, packetLengths) {
        return adapter_1.adapter.isochronousTransferIn(this._handle, endpointNumber, packetLengths);
    }
    /**
     * @hidden
     */
    isochronousTransferOut(endpointNumber, data, packetLengths) {
        return adapter_1.adapter.isochronousTransferOut(this._handle, endpointNumber, data, packetLengths);
    }
}
exports.USBDevice = USBDevice;

//# sourceMappingURL=device.js.map
