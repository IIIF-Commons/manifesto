import { Language } from "./Language";
export declare class LanguageMap extends Array<Language> {
    static parse(language: any, defaultLocale: string): LanguageMap;
    static getValue(languageCollection: LanguageMap, locale?: string): string | null;
}
