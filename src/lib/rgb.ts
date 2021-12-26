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
  plus(arg: RGB) {
    this.r = clamp(this.r + arg.r, 0, 255);
    this.g = clamp(this.g + arg.g, 0, 255);
    this.b = clamp(this.b + arg.b, 0, 255);

    return this;
  }

  /**
   * minus two rgb object.
   *
   * **WARNING**
   *
   * this method will not calculate alpha.
   * @param arg
   */
  minus(arg: RGB) {
    this.r = clamp(this.r - arg.r, 0, 255);
    this.g = clamp(this.g - arg.g, 0, 255);
    this.b = clamp(this.b - arg.b, 0, 255);

    return this;
  }
}

export default RGB;
