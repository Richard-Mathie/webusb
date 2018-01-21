/**
 * Request type
 */
export declare enum USBRequestType {
    standard = 0,
    class = 32,
    vendor = 64,
}
/**
 * Recipient
 */
export declare enum USBRecipient {
    device = 0,
    interface = 1,
    endpoint = 2,
    other = 3,
}
/**
 * Transfer status
 */
export declare type USBTransferStatus = "ok" | "stall" | "babble";
/**
 * Endpoint direction
 */
export declare type USBDirection = "in" | "out";
/**
 * Endpoint type
 */
export declare type USBEndpointType = "bulk" | "interrupt" | "isochronous";
