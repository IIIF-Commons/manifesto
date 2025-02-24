import { 
    IManifestoOptions, 
    AnnotationBody} from "./internal";

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
get Value(): string {return this.getProperty("value") || "" ;}
}