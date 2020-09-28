import { Language, LanguageMap, Utils } from "./internal";

export class LabelValuePair {
  public label: LanguageMap;
  public value: LanguageMap;
  public defaultLocale: string;
  public resource: any;

  constructor(defaultLocale: string) {
    this.defaultLocale = defaultLocale;
  }

  public parse(resource: any): void {
    this.resource = resource;
    this.label = LanguageMap.parse(this.resource.label, this.defaultLocale);
    this.value = LanguageMap.parse(this.resource.value, this.defaultLocale);
  }

  // shortcuts to get/set values based on default locale

  public getLabel(): string | null {
    if (this.label) {
      return LanguageMap.getValue(this.label, this.defaultLocale);
    }

    return null;
  }

  public setLabel(value: string): void {
    if (this.label && this.label.length) {
      var t: Language = this.label.filter(
        x =>
          x.locale === this.defaultLocale ||
          x.locale === Utils.getInexactLocale(this.defaultLocale)
      )[0];
      if (t) t.value = value;
    }
  }

  public getValue(): string | null {
    if (this.value) {
      return LanguageMap.getValue(this.value, this.defaultLocale);
    }

    return null;
  }

  public getValues(): Array<string | null> {
    if (this.value) {
      return LanguageMap.getValues(this.value, this.defaultLocale);
    }

    return [];
  }

  public setValue(value: string): void {
    if (this.value && this.value.length) {
      var t: Language = this.value.filter(
        x =>
          x.locale === this.defaultLocale ||
          x.locale === Utils.getInexactLocale(this.defaultLocale)
      )[0];
      if (t) t.value = value;
    }
  }
}
