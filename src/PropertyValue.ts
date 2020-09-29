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
    if (locale === "none" || locale === "@none") {
      locale = undefined;
    }
    this.locale = locale;
  }

  addValue(value: string | string[]): void {
    if (!Array.isArray(this.value)) {
      this.value = [this.value];
    }
    if (Array.isArray(value)) {
      this.value = this.value.concat(this.value, value)
    } else {
      this.value.push(value);
    }
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
      const parsed = rawVal
          .map(LocalizedValue.parseV2Value)
          .filter(v => v !== null) as LocalizedValue[];
      const byLocale = parsed.reduce((acc, lv) => {
        let loc = lv.locale;
        if (!loc) {
          // Cannot use undefined as an object key
          loc = 'none';
        }
        if (acc[loc]) {
          acc[loc].addValue(lv.value);
        } else {
          acc[loc] = lv;
        }
        return acc;
      }, {} as {[locale: string]: LocalizedValue})
      return new PropertyValue(Object.values(byLocale));
    } else if (typeof rawVal === "string") {
      return new PropertyValue([new LocalizedValue(rawVal)]);
    } else if (rawVal['@language']) {
      // Single IIIF v2 property value
      const parsed = LocalizedValue.parseV2Value(rawVal);
      return new PropertyValue(parsed !== null ? [parsed] : []);
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
          return new LocalizedValue(val, locale);
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
    // First, look for a precise match
    for (const userLocale of locales) {
      const matchingLocale = allLocales.find(l => l === userLocale);
      if (matchingLocale) {
        return matchingLocale;
      }
    }
    // Look for an inexact match
    for (const userLocale of locales) {
      const matchingLocale = allLocales.find(
        l => Utils.getInexactLocale(l) === Utils.getInexactLocale(userLocale)
      );
      if (matchingLocale) {
        return matchingLocale;
      }
    }

    return undefined;
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
   * Get a value in the most suitable locale.
   *
   * @param {string | string[] | undefined} locales Desired locale, can be a list of
   * locales sorted by descending priority.
   * @param {string | undefined} joinWith String to join multiple available values by,
   * if undefined only the first available value will be returned
   * @returns the first value in the most suitable locale or null if none could be found
   */
  getValue(locales?: string | string[], joinWith?: string): string | null {
    const vals = this.getValues(locales);
    if (vals.length === 0) {
      return null;
    }
    if (joinWith) {
      return vals.join(joinWith);
    }
    return vals[0];
  }

  /**
   * Get all values available in the most suitable locale.
   *
   * @param {string | string[]} userLocales Desired locale, can be a list of
   * locales sorted by descending priority.
   * @returns the values for the most suitable locale, empty if none could be found
   */
  getValues(userLocales?: string | string[]): string[] {
    if (!this.values.length) {
      return [];
    }

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
    const allHaveLang = !this.values.find(lv => lv.locale === undefined);
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
