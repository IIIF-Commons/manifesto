import Language from "./Language";
/** @deprecated Use PropertyValue instead */
export declare class LanguageMap extends Array<Language> {
    /** @deprecated Use the `PropertyValue#getValue` instance method instead */
    static getValue(languageCollection: LanguageMap, locale?: string): string | null;
    /** @deprecated Use the `PropertyValue#getValues` instance method instead */
    static getValues(languageCollection: LanguageMap, locale?: string): Array<string | null>;
}
