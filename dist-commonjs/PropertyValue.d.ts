import Language from "./Language";
/** Utility class to hold one or more values with their associated (optional) locale */
export declare class LocalizedValue implements Language {
    _value: string | string[];
    _locale?: string;
    _defaultLocale: string;
    /** Parse a localized value from a IIIF v2 property value
     *
     * @param {string | string[] | object | object[]} rawVal value from IIIF resource
     * @param {string | undefined} defaultLocale deprecated: defaultLocale the default locale to use for this value
     */
    static parseV2Value(rawVal: any, defaultLocale?: string): LocalizedValue | null;
    constructor(value: string | string[], locale?: string, defaultLocale?: string);
    /*** @deprecated Use PropertyValue#getValue instead */
    get value(): string;
    /*** @deprecated Don't use, only used for backwards compatibility reasons */
    get locale(): string;
    addValue(value: string | string[]): void;
}
/***
 * Holds a collection of values and their (optional) languages and allows
 * language-based value retrieval as per the algorithm described in
 * https://iiif.io/api/presentation/2.1/#language-of-property-values
 */
export declare class PropertyValue extends Array<LocalizedValue> {
    _defaultLocale?: string;
    static parse(rawVal: any, defaultLocale?: string): PropertyValue;
    constructor(values?: LocalizedValue[], defaultLocale?: string);
    /*** Try to find the available locale that best fit's the user's preferences. */
    private getSuitableLocale;
    /**
     * Set the value(s) for a given locale.
     *
     * If there's an existing locale that matches the given locale, it will be updated.
     *
     * @param locale Locale to set the value for
     * @param value value to set
     */
    setValue(value: string | string[], locale?: string): void;
    /**
     * Get a value in the most suitable locale.
     *
     * @param {string | string[] | undefined} locales Desired locale, can be a list of
     * locales sorted by descending priority.
     * @param {string | undefined} joinWith String to join multiple available values by,
     * if undefined only the first available value will be returned
     * @returns the first value in the most suitable locale or null if none could be found
     */
    getValue(locales?: string | string[], joinWith?: string): string | null;
    /**
     * Get all values available in the most suitable locale.
     *
     * @param {string | string[]} userLocales Desired locale, can be a list of
     * locales sorted by descending priority.
     * @returns the values for the most suitable locale, empty if none could be found
     */
    getValues(userLocales?: string | string[]): string[];
}
