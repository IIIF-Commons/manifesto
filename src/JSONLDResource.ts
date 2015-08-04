module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        private _label: string;

        constructor(jsonld: any){
            this.__jsonld = jsonld;
            // store a reference to the parsed object in the jsonld for convenience.
            this.__jsonld.__parsed = this;
            this.context = this.getProperty('@context');
            this.id = this.getProperty('@id');
            this._label = this.getProperty('label');
        }

        getManifest(): IManifest {
            return this.getProperty('__manifest');
        }

        getLabel(): string {
            // todo: why test if it's a digit?
            //var regExp = /\d/;

            //if (regExp.test(this._label)) {
                return this.getManifest().getLocalisedValue(this._label);
            //}

            //return null;
        }

        getProperty(name: string): any {
            return this.__jsonld[name];
        }
    }
}
