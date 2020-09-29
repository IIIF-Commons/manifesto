import { PropertyValue } from "./internal";

export class LabelValuePair {
  public label: PropertyValue | null;
  public value: PropertyValue | null;
  public defaultLocale: string;
  public resource: any;

  constructor(defaultLocale: string) {
    this.defaultLocale = defaultLocale;
  }

  public parse(resource: any): void {
    this.resource = resource;
    this.label = PropertyValue.parse(this.resource.label);
    this.value = PropertyValue.parse(this.resource.value);
  }

  // shortcuts to get/set values based on user or default locale

  public getLabel(locale?: string | string[]): string | null {
    if (this.label === null) {
      return null;
    }
    if (Array.isArray(locale) && !locale.length) {
      locale = undefined;
    }
    return this.label.getValue(locale || this.defaultLocale);
  }

  public setLabel(value: string): void {
    if (this.label === null) {
      this.label = new PropertyValue([]);
    }
    this.label.setValue(value, this.defaultLocale);
  }

  public getValue(locale?: string | string[], joinWith: string = "<br/>"): string | null {
    if (this.value === null) {
      return null;
    }
    if (Array.isArray(locale) && !locale.length) {
      locale = undefined;
    }
    return this.value.getValue(locale || this.defaultLocale, joinWith);
  }

  public getValues(locale?: string | string[]): Array<string | null> {
    if (this.value === null) {
      return [];
    }
    if (Array.isArray(locale) && !locale.length) {
      locale = undefined;
    }
    return this.value.getValues(locale || this.defaultLocale);
  }

  public setValue(value: string): void {
    if (this.value === null) {
      this.value = new PropertyValue([]);
    }
    this.value.setValue(value, this.defaultLocale);
  }
}
