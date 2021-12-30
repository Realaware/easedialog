function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/* eslint-disable class-methods-use-this */
class RGB {
  r = 0;

  g = 0;

  b = 0;

  a = 1;

  constructor(r = 0, g = 0, b = 0, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  private numToHex(c: number) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  toHex() {
    return `#${this.numToHex(this.r)}${this.numToHex(this.g)}${this.numToHex(
      this.b,
    )}`;
  }

  getRgbString() {
    return this.a !== 1
      ? `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
      : `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * plus two rgb object.
   *
   * **WARNING**
   *
   * this method will not calculate alpha.
   * @param arg
   */
  plus(arg: RGB, a?: number) {
    const r = clamp(this.r + arg.r, 0, 255);
    const g = clamp(this.g + arg.g, 0, 255);
    const b = clamp(this.b + arg.b, 0, 255);

    return new RGB(r, g, b, a);
  }

  /**
   * minus two rgb object.
   *
   * **WARNING**
   *
   * this method will not calculate alpha.
   * @param arg
   */
  minus(arg: RGB, a?: number) {
    const r = clamp(this.r - arg.r, 0, 255);
    const g = clamp(this.g - arg.g, 0, 255);
    const b = clamp(this.b - arg.b, 0, 255);

    return new RGB(r, g, b, a);
  }

  /**
   * return inverted rgb object.
   */
  invert(a?: number) {
    const r = clamp(255 - this.r, 0, 255);
    const g = clamp(255 - this.g, 0, 255);
    const b = clamp(255 - this.b, 0, 255);

    return new RGB(r, g, b, a);
  }
}

export default RGB;
