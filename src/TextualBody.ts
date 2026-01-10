import {
  IManifestoOptions,
  AnnotationBody,
  SpecificResource,
} from "./internal";

/**
An implementation of the TextualBody class (class in JSON-LD sense)
as it is described in Web Annotation Data Model Section 3.2.4
https://www.w3.org/TR/annotation-model/#embedded-textual-body
**/
export class TextualBody extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  /**
The simple string that is the data content of this resource
will return empty string as a default value
**/
  getValue(): string {
    return this.getProperty("value") || "";
  }

  /**
Returns a specific resource representing the TextualBody position if 
present, otherwise null.
**/
  getPosition(): SpecificResource | null {
    const rawPosition = this.getPropertyAsObject("position") ?? null;
    if (rawPosition == null) return null;

    if (rawPosition.type && rawPosition.type == "SpecificResource") {
      return new SpecificResource(rawPosition, this.options);
    } else {
      throw new Error("unknown position type specified");
    }
  }
  get Position(): SpecificResource | null {
    return this.getPosition();
  }
}
