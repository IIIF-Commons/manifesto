import { PropertyValue } from "./internal";
export declare class LabelValuePair {
    label: PropertyValue | null;
    value: PropertyValue | null;
    defaultLocale: string;
    resource: any;
    constructor(defaultLocale: string);
    parse(resource: any): void;
    getLabel(locale?: string | string[]): string | null;
    setLabel(value: string): void;
    getValue(locale?: string | string[], joinWith?: string): string | null;
    getValues(locale?: string | string[]): Array<string | null>;
    setValue(value: string): void;
}
