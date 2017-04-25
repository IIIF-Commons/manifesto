namespace Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;

        constructor(jsonld?: any) {
            this.__jsonld = jsonld;
            this.context = this.getProperty('context');
            this.id = this.getProperty('id');
        }

        getProperty(name: string): any {
            
            let prop: any = null;
            
            if (this.__jsonld) {
                prop = this.__jsonld[name];

                if (!prop) {
                    // property may have a prepended '@'
                    prop = this.__jsonld['@' + name];
                }
            }
            
            return prop;
        }
    }
}
