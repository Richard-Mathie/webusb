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
export declare enum USBTransferStatus {
    "ok" = 0,
    "stall" = 1,
    "babble" = 2,
}
export declare type USBDirection = "in" | "out";
export declare enum USBEndpointType {
    "bulk" = 0,
    "interrupt" = 1,
    "isochronous" = 2,
}
