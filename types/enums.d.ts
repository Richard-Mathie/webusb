export declare enum USBRequestType {
    standard = 0,
    class = 32,
    vendor = 64,
}
export declare enum USBRecipient {
    device = 0,
    interface = 1,
    endpoint = 2,
    other = 3,
}
export declare type USBTransferStatus = "ok" | "stall" | "babble";
export declare type USBDirection = "in" | "out";
export declare type USBEndpointType = "bulk" | "interrupt" | "isochronous";
