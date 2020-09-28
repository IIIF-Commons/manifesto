import { Utils } from "./Utils";

/** Utility class to hold one or more values with their associated (optional) locale */
class LocalizedValue {
  value: string | string[];
  locale?: string;

  /** Parse a localized value from a IIIF v2 property value */
  static parseV2Value(rawVal: any): LocalizedValue | null {
    if (typeof rawVal === "string") {
      return new LocalizedValue(rawVal, undefined);
    } else if (rawVal["@value"]) {
      return new LocalizedValue(rawVal["@value"], rawVal["@language"]);
    }
    return null;
  }

  constructor(value: string | string[], locale?: string) {
    if (Array.isArray(value) && value.length === 1) {
      this.value = value[0];
    } else {
      this.value = value;
    }
    this.locale = locale;
  }
}

/***
 * Holds a collection of values and their (optional) languages and allows
 * language-based value retrieval as per the algorithm described in
 * https://iiif.io/api/presentation/2.1/#language-of-property-values
 */
export class PropertyValue {
  values: LocalizedValue[];

  static parse(rawVal: any): PropertyValue {
    if (!rawVal) {
      return new PropertyValue();
    }
    if (Array.isArray(rawVal)) {
      // Collection of IIIF v2 property values
      return new PropertyValue(
        rawVal
          .map(LocalizedValue.parseV2Value)
          .filter(v => v !== null) as LocalizedValue[]
      );
    } else if (typeof rawVal === "string") {
      return new PropertyValue([new LocalizedValue(rawVal)]);
    } else {
      // IIIF v3 property value
      return new PropertyValue(
        Object.keys(rawVal).map(locale => {
          const val = rawVal[locale];
          if (!Array.isArray(val)) {
            throw new Error(
              "A IIIF v3 localized property value must have an array as the value for a given language."
            );
          }
          return new LocalizedValue(
            val,
            locale === "none" ? undefined : locale
          );
        })
      );
    }
  }

  constructor(values?: LocalizedValue[]) {
    this.values = values || [];
  }

  /*** Try to find the available locale that best fit's the user's preferences. */
  private getSuitableLocale(locales: string[]): string | undefined {
    // If any of the values have a language associated with them, the client
    // must display all of the values associated with the language that best
    // matches the language preference.
    const allLocales = this.values
      .map(lv => lv.locale)
      .filter(l => l !== undefined) as string[];
    let matchingLocale;
    // First, look for a precise match
    for (const userLocale of locales) {
      matchingLocale = allLocales.find(l => l === userLocale);
    }
    if (!matchingLocale) {
      // Look for an inexact match
      for (const userLocale of locales) {
        matchingLocale = allLocales.find(
          l => Utils.getInexactLocale(l) === Utils.getInexactLocale(userLocale)
        );
      }
    }
    return matchingLocale;
  }

  /**
   * Set the value(s) for a given locale.
   *
   * If there's an existing locale that matches the given locale, it will be updated.
   *
   * @param locale Locale to set the value for
   * @param value value to set
   */
  setValue(value: string | string[], locale?: string) {
    let existing: LocalizedValue | undefined = undefined;
    if (!locale) {
      existing = this.values.find(lv => lv.locale === undefined);
    } else {
      const bestLocale = this.getSuitableLocale([locale]);
      if (bestLocale) {
        existing = this.values.find(lv => lv.locale === bestLocale);
      }
    }
    if (existing) {
      // Mutate existing localized value
      existing.value = value;
    } else {
      // Create a new localized value
      this.values.push(new LocalizedValue(value, locale));
    }
  }

  /**
   * Get the first of the values available in the most suitable locale.
   *
   * @param {string | string[]} locales Desired locale, can be a list of
   * locales sorted by descending priority.
   * @returns the first value in the most suitable locale or null if none could be found
   */
  getValue(locales?: string | string[]): string | null {
    const vals = this.getValues(locales);
    return vals.length > 0 ? vals[0] : null;
  }

  /**
   * Get all values available in the most suitable locale.
   *
   * @param {string | string[]} userLocales Desired locale, can be a list of
   * locales sorted by descending priority.
   * @returns the values for the most suitable locale, empty if none could be found
   */
  getValues(userLocales?: string | string[]): string[] {
    let locales: string[];
    if (!userLocales) {
      locales = [];
    } else if (!Array.isArray(userLocales)) {
      locales = [userLocales];
    } else {
      locales = userLocales as string[];
    }

    // If none of the values have a language associated with them, the client
    // must display all of the values.
    if (this.values.length === 1 && this.values[0].locale === undefined) {
      const val = this.values[0].value;
      return Array.isArray(val) ? val : [val];
    }

    // Try to determine the available locale that best fits the user's preferences
    const matchingLocale = this.getSuitableLocale(locales);
    if (matchingLocale) {
      const val = this.values.find(lv => lv.locale === matchingLocale)!.value;
      return Array.isArray(val) ? val : [val];
    }

    // If all of the values have a language associated with them, and none match
    // the language preference, the client must select a language and display
    // all of the values associated with that language.
    const allHaveLang =
      this.values.find(lv => lv.locale === undefined) !== undefined;
    if (allHaveLang) {
      const val = this.values[0].value;
      return Array.isArray(val) ? val : [val];
    }

    // If some of the values have a language associated with them, but none
    // match the language preference, the client must display all of the values
    // that do not have a language associated with them.
    const lv = this.values.find(lv => lv.locale === undefined);
    if (lv) {
      return Array.isArray(lv.value) ? lv.value : [lv.value];
    }

    return [];
  }
}
