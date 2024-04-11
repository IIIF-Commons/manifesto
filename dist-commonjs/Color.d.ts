/**
 * class structure with red, green, blue values in 0-255 range
 * Uses the {@link  https://www.npmjs.com/package.color-string | color-string }
 * library for conversion from and to string representations of color.
**/
export declare class Color {
    /**
    * @param cssTerm - hex representtion of color as used in CSS. Ex "#FF0000" as red
    * @returns Color instance.
    **/
    static fromCSS(cssTerm: string): Color;
    /**
    * @param rgbValue - Array of three 0-255 integers for r,g,b value. Ex: [255.0,0] for red
    **/
    constructor(rgbValue: number[]);
    /**
    * @returns Array of 3 integers in range 0-255
    **/
    value: number[];
    /**
    * @return 0 to 255 value of red color component
    **/
    get red(): number;
    /**
    * @return 0 to 255 value of green color component
    **/
    get green(): number;
    /**
    * @return 0 to 255 value of blue color component
    **/
    get blue(): number;
    /**
    * @returns  hex string (as for CSS ) representation of r,g,b components
    **/
    get CSS(): string;
}
