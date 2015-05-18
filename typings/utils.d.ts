// string utils
interface String {
    format(template: string, ...args: any[]): string;
    startsWith(text: string): boolean;
    endsWith(text: string): boolean;
    ltrim(): string;
    rtrim(): string;
    fulltrim(): string;
    toFileName(): string;
    contains(str: string): boolean;
    utf8_to_b64(str: string): string;
    b64_to_utf8(str: string): string;
    toCssClass(): string;
}

// array utils
interface Array<T>{
    clone(): Array<T>;
    last(): any;
    contains(val: any): boolean;
    move(fromIndex: number, toIndex: number): void;
    indexOfTest(test: (element: any) => boolean, fromIndex?: number): number;
}