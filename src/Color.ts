//import { colorString } from "color-string"

const colorString = require("color-string");

/**
 * class structure with red, green, blue values in 0-255 range
 * Uses the {@link  https://www.npmjs.com/package.color-string | color-string }
 * library for conversion from and to string representations of color.
 **/
export class Color {
  /**
   * @param cssTerm - hex representtion of color as used in CSS. Ex "#FF0000" as red
   * @returns Color instance.
   **/
  static fromCSS(cssTerm: string): Color {
    var rv = colorString.get(cssTerm);
    if (rv.model !== "rgb")
      throw new Error("unsupported color string: " + cssTerm);
    return new Color([rv.value[0], rv.value[1], rv.value[2]]);
  }

  /**
   * @param rgbValue - Array of three 0-255 integers for r,g,b value. Ex: [255.0,0] for red
   **/
  constructor(rgbValue: number[]) {
    this.value = rgbValue;
  }

  /**
   * @returns Array of 3 integers in range 0-255
   **/
  public value: number[];

  /**
   * @return 0 to 255 value of red color component
   **/
  public get red(): number {
    return this.value[0];
  }

  /**
   * @return 0 to 255 value of green color component
   **/
  public get green(): number {
    return this.value[1];
  }

  /**
   * @return 0 to 255 value of blue color component
   **/
  public get blue(): number {
    return this.value[2];
  }

  /**
   * @returns  hex string (as for CSS ) representation of r,g,b components
   **/
  public get CSS(): string {
    return colorString.to.hex(this.value);
  }
}
