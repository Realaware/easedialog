declare class RGB {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    private numToHex;
    toHex(): string;
    getRgbString(): string;
    /**
     * plus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    plus(arg: RGB, a?: number): RGB;
    /**
     * minus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    minus(arg: RGB, a?: number): RGB;
    /**
     * return inverted rgb object.
     */
    invert(): this;
}
export default RGB;
