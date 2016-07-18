module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;

        constructor(jsonld?: any){
            this.__jsonld = jsonld;
            this.context = this.getProperty('@context');
            this.id = this.getProperty('@id');
        }

        getProperty(name: string): any {
            if (this.__jsonld){
                return this.__jsonld[name];
            }
            return null;
        }
    }
}
