# Node WebUSB
Node.js implementation of the WebUSB Specification

[![Circle CI](https://circleci.com/gh/thegecko/webusb.svg?style=shield)](https://circleci.com/gh/thegecko/webusb/)

## Prerequisites

[Node.js > v4.8.0](https://nodejs.org), which includes `npm`.

## Installation

```bash
$ npm install webusb
```

## Getting Started

See the examples in [examples](https://github.com/thegecko/webusb/tree/master/examples/) or view the API documentation at:

https://thegecko.github.io/webusb/

## Specification

The WebUSB specification can be found here:

https://wicg.github.io/webusb/

## Implementation Status

### USB

- [x] getDevices()
- [x] requestDevice()

### USBDevice

- [x] usbVersionMajor
- [x] usbVersionMinor
- [x] usbVersionSubminor
- [x] deviceClass
- [x] deviceSubclass
- [x] deviceProtocol
- [x] vendorId
- [x] productId
- [x] deviceVersionMajor
- [x] deviceVersionMinor
- [x] deviceVersionSubminor
- [x] manufacturerName
- [x] productName
- [x] serialNumber
- [x] configuration - endpoints don't appear on alternates
- [ ] configurations - endpoints don't appear on alternates
- [x] opened
- [x] open()
- [x] close()
- [x] selectConfiguration()
- [x] claimInterface()
- [x] releaseInterface()
- [x] selectAlternateInterface()
- [x] controlTransferIn()
- [x] controlTransferOut()
- [x] transferIn()
- [x] transferOut()
- [x] reset()
- [ ] clearHalt() - unsupported in node-usb
- [ ] isochronousTransferIn() - unsupported in node-usb
- [ ] isochronousTransferOut() - unsupported in node-usb

### Events

- [ ] connect
- [ ] disconnect

### Other

- [x] USBDevice.url
- [x] Device selector hook
- [ ] Examples
- [ ] API Documentation
