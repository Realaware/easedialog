declare class RGB {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    getRgbString(): string;
    /**
     * plus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    plus(arg: RGB): this;
    /**
     * minus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    minus(arg: RGB): this;
}
export default RGB;
