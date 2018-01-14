import { USBAlternateInterface } from "./alternate";
/**
 * USB Interface class
 */
export declare class USBInterface {
    readonly interfaceNumber: number;
    readonly alternates: Array<USBAlternateInterface>;
    private _claimed;
    readonly claimed: boolean;
    private _currentAlternate;
    readonly alternate: USBAlternateInterface;
    /**
     * @hidden
     */
    readonly _handle: string;
    /**
     * @hidden
     */
    constructor(init?: Partial<USBInterface>);
    /**
     * @hidden
     */
    selectAlternateInterface(alternateSetting: number): Promise<void>;
    /**
     * @hidden
     */
    claimInterface(): Promise<void>;
    /**
     * @hidden
     */
    releaseInterface(): Promise<void>;
    /**
     * @hidden
     */
    reset(): void;
}
