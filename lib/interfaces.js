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
var USBRequestType;
(function (USBRequestType) {
    USBRequestType[USBRequestType["standard"] = 0] = "standard";
    USBRequestType[USBRequestType["class"] = 1] = "class";
    USBRequestType[USBRequestType["vendor"] = 2] = "vendor";
})(USBRequestType = exports.USBRequestType || (exports.USBRequestType = {}));
var USBRecipient;
(function (USBRecipient) {
    USBRecipient[USBRecipient["device"] = 0] = "device";
    USBRecipient[USBRecipient["interface"] = 1] = "interface";
    USBRecipient[USBRecipient["endpoint"] = 2] = "endpoint";
    USBRecipient[USBRecipient["other"] = 3] = "other";
})(USBRecipient = exports.USBRecipient || (exports.USBRecipient = {}));
var USBTransferStatus;
(function (USBTransferStatus) {
    USBTransferStatus[USBTransferStatus["ok"] = 0] = "ok";
    USBTransferStatus[USBTransferStatus["stall"] = 1] = "stall";
    USBTransferStatus[USBTransferStatus["babble"] = 2] = "babble";
})(USBTransferStatus = exports.USBTransferStatus || (exports.USBTransferStatus = {}));
var USBDirection;
(function (USBDirection) {
    USBDirection[USBDirection["in"] = 0] = "in";
    USBDirection[USBDirection["out"] = 1] = "out";
})(USBDirection = exports.USBDirection || (exports.USBDirection = {}));
var USBEndpointType;
(function (USBEndpointType) {
    USBEndpointType[USBEndpointType["bulk"] = 0] = "bulk";
    USBEndpointType[USBEndpointType["interrupt"] = 1] = "interrupt";
    USBEndpointType[USBEndpointType["isochronous"] = 2] = "isochronous";
})(USBEndpointType = exports.USBEndpointType || (exports.USBEndpointType = {}));

//# sourceMappingURL=interfaces.js.map