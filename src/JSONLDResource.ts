module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;

        constructor(jsonld: any){
            this.__jsonld = jsonld;
            // store a reference to the parsed object in the jsonld for convenience.
            this.__jsonld.__parsed = this;
            this.context = this.getProperty('@context');
            this.id = this.getProperty('@id');
        }

        getProperty(name: string): any {
            return this.__jsonld[name];
        }
    }
}
